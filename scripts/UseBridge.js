const CHAIN_IDS = require("../constants/chainIds.json")
const { OriginalTokenBridgeAbi } = require("./OriginalTokenBridge")
const { WrappedAssetBridgeAbi } = require("./WrappedAssetBridgeAbi")

/*
    ethereum-mainnet: 0x1f8E735f424B7A49A885571A2fA104E8C13C26c7
    arbitrum-mainnet: 0x1f8E735f424B7A49A885571A2fA104E8C13C26c7
    bsc-mainnet: 0x1f8E735f424B7A49A885571A2fA104E8C13C26c7
    avalanche-mainnet: 0x1f8E735f424B7A49A885571A2fA104E8C13C26c7
    optimism-mainnet: 0x1f8E735f424B7A49A885571A2fA104E8C13C26c7
    base-mainnet: 0x1f8E735f424B7A49A885571A2fA104E8C13C26c7

    WrappedTokenBridge: 0x1f8E735f424B7A49A885571A2fA104E8C13C26c7

    // NATIVE
    WETH: 0xfc24f770F94edBca6D6f885E12d4317320BcB401 x o
    WBNB: 0xaA40A1cc1561c584B675cbD12F1423A32E2a0d8C
    WAVAX: 0xe820995cD39B6E09EAa7e4e16337184b4A61B644 x o

    // ERC20 UNISWAP get some for each chain
    USDC: 0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9
    USDT: 0x2C03058C8AFC06713be23e58D2febC8337dbfE6A
    SHIB: 0xBBD1F50A212357067318a84179892684e1Ac5181
    WBTC: 0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F


    Token bridge setup
    ETH: USDC, USDT, SHIB, WBTC, WETH
    BASE: USDC, WETH
    OP: USDC, USDT, WETH
    BNB: USDC, USDT, WBNB
    AVAX: USDC, USDT, WAVAX
    ARB: USDC, USDT, WBTC, WETH
*/

taskArgs = {
    originalNetwork: "avalanche",
    amount: "0.000001",
    decimals: "18",
    token: "0xe820995cD39B6E09EAa7e4e16337184b4A61B644"
}

const adapterParams = ethers.utils.solidityPack(
    ['uint16', 'uint256'],
    // [1, 2000000] // arb
    [1, 200000] // everything else
)

let tx

async function unwrap() {

    const signers = await ethers.getSigners()
    const owner = signers[0]
    const originalNetwork = taskArgs.originalNetwork
    const originalTokenChainId = CHAIN_IDS[originalNetwork]

    const amount = ethers.utils.parseUnits(taskArgs.amount, taskArgs.decimals)
    const token = taskArgs.token

    const bridge = new ethers.Contract("0x1f8E735f424B7A49A885571A2fA104E8C13C26c7", WrappedAssetBridgeAbi.abi, owner)

    const nativeFee = (await bridge.estimateBridgeFee(originalTokenChainId, false, adapterParams)).nativeFee
    console.log({ nativeFee })

    const increasedNativeFee = nativeFee.mul(5).div(4) // 20% increase

    const callParams = {
        refundAddress: owner.address,
        zroPaymentAddress: ethers.constants.AddressZero
    }
    const tx = await bridge.bridge(
        token,
        originalTokenChainId,
        amount,
        owner.address,
        true,
        callParams,
        adapterParams,
        { value: increasedNativeFee, gasLimit: 3000000 }
    )

    await tx.wait()
    console.log(`Bridged ${tx.hash}`)
}

async function nativeToWrapped() {
    const signers = await ethers.getSigners()
    const owner = signers[0]
    const amount = ethers.utils.parseEther(taskArgs.amount)
    const bridge = new ethers.Contract("0x1f8E735f424B7A49A885571A2fA104E8C13C26c7", OriginalTokenBridgeAbi.abi, owner)
    const nativeFee = (await bridge.estimateBridgeFee(false, adapterParams)).nativeFee
    const increasedNativeFee = nativeFee.mul(5).div(4) // 20% increase
    const callParams = {
        refundAddress: owner.address,
        zroPaymentAddress: ethers.constants.AddressZero
    }
    const gasEstimate = (await bridge.estimateGas.bridgeNative(amount, owner.address, callParams, adapterParams, { value: amount.add(increasedNativeFee) })).toNumber()
    tx = await bridge.bridgeNative(amount, owner.address, callParams, adapterParams, { value: amount.add(increasedNativeFee) })
    await tx.wait()
    console.log(`Bridged ${tx.hash}`)
}

async function bridgeERC0() {
    const signers = await ethers.getSigners()
    const owner = signers[0]
    const amount = ethers.utils.parseUnits(taskArgs.amount, taskArgs.decimals)
    const token = await hre.ethers.getContractAt(["function approve(address,uint256) public returns (bool)"], taskArgs.token);
    const bridge = new ethers.Contract("0x1f8E735f424B7A49A885571A2fA104E8C13C26c7", OriginalTokenBridgeAbi.abi, owner)

    const gasPrice = await ethers.provider.getGasPrice()
    const increasedGasPrice = gasPrice.mul(5).div(4)
    tx = await token.approve(bridge.address, amount, { gasPrice: increasedGasPrice, gasLimit: 300000 })
    await tx.wait()

    const nativeFee = (await bridge.estimateBridgeFee(false, adapterParams)).nativeFee
    const increasedNativeFee = nativeFee.mul(5).div(4) // 20% increase
    const callParams = {
        refundAddress: owner.address,
        zroPaymentAddress: ethers.constants.AddressZero
    }

    tx = await bridge.bridge(
        token.address, amount, owner.address, callParams,
        adapterParams
        , { value: increasedNativeFee, gasPrice: increasedGasPrice, gasLimit: 300000 }
    )
    await tx.wait()
    console.log(`Bridged ${tx.hash}`)
}

// bridgeERC0()
// OP: USDT worked

// AvalancheChain USDC: Call Exception
// AvalancheChain USDT: Call Exception
// Ethereum USDC: Call Exception
// BASE: USDC Failed at ultralightnode level
// OP: USDC failed at ultralight node level
// BNB: USDC Call Exception
// BNB: USDT Call Exception
// ARB: USDT Call Exception
// ARB: USDC Call Exception
// ARB: WBTC Call Exception

unwrap()
// optimism worked
// base worked
// arb worked
// avax call exception
// eth call exception
// bsc call exception

// nativeToWrapped()
// Avax works
// Ethereum works
// arb works
// op works
// bnb works
// base works