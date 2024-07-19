const WrappedAssetBridgeAbi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "WrappedTokenBridge",
    "sourceName": "contracts/WrappedTokenBridge.sol",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_endpoint",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_payload",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_reason",
                    "type": "bytes"
                }
            ],
            "name": "MessageFailed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "localToken",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "remoteChainId",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "remoteToken",
                    "type": "address"
                }
            ],
            "name": "RegisterToken",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "_payloadHash",
                    "type": "bytes32"
                }
            ],
            "name": "RetryMessageSuccess",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_dstChainId",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_type",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_minDstGas",
                    "type": "uint256"
                }
            ],
            "name": "SetMinDstGas",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "precrime",
                    "type": "address"
                }
            ],
            "name": "SetPrecrime",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_remoteChainId",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_path",
                    "type": "bytes"
                }
            ],
            "name": "SetTrustedRemote",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "_remoteChainId",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "_remoteAddress",
                    "type": "bytes"
                }
            ],
            "name": "SetTrustedRemoteAddress",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "useCustomAdapterParams",
                    "type": "bool"
                }
            ],
            "name": "SetUseCustomAdapterParams",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "withdrawalFeeBps",
                    "type": "uint16"
                }
            ],
            "name": "SetWithdrawalFeeBps",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "localToken",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "remoteToken",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "remoteChainId",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "UnwrapToken",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "localToken",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "remoteToken",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint16",
                    "name": "remoteChainId",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "WrapToken",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "PT_MINT",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "PT_UNLOCK",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "TOTAL_BPS",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "localToken",
                    "type": "address"
                },
                {
                    "internalType": "uint16",
                    "name": "remoteChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "unwrapWeth",
                    "type": "bool"
                },
                {
                    "components": [
                        {
                            "internalType": "address payable",
                            "name": "refundAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "zroPaymentAddress",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct LzLib.CallParams",
                    "name": "callParams",
                    "type": "tuple"
                },
                {
                    "internalType": "bytes",
                    "name": "adapterParams",
                    "type": "bytes"
                }
            ],
            "name": "bridge",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "remoteChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bool",
                    "name": "useZro",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "adapterParams",
                    "type": "bytes"
                }
            ],
            "name": "estimateBridgeFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "nativeFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "zroFee",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                },
                {
                    "internalType": "uint64",
                    "name": "",
                    "type": "uint64"
                }
            ],
            "name": "failedMessages",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                }
            ],
            "name": "forceResumeReceive",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_version",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_chainId",
                    "type": "uint16"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_configType",
                    "type": "uint256"
                }
            ],
            "name": "getConfig",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_remoteChainId",
                    "type": "uint16"
                }
            ],
            "name": "getTrustedRemoteAddress",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                }
            ],
            "name": "isTrustedRemote",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "name": "localToRemote",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lzEndpoint",
            "outputs": [
                {
                    "internalType": "contract ILayerZeroEndpoint",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                },
                {
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                },
                {
                    "internalType": "bytes",
                    "name": "_payload",
                    "type": "bytes"
                }
            ],
            "name": "lzReceive",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "name": "minDstGasLookup",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                },
                {
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                },
                {
                    "internalType": "bytes",
                    "name": "_payload",
                    "type": "bytes"
                }
            ],
            "name": "nonblockingLzReceive",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "precrime",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "localToken",
                    "type": "address"
                },
                {
                    "internalType": "uint16",
                    "name": "remoteChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "address",
                    "name": "remoteToken",
                    "type": "address"
                }
            ],
            "name": "registerToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "name": "remoteToLocal",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_srcAddress",
                    "type": "bytes"
                },
                {
                    "internalType": "uint64",
                    "name": "_nonce",
                    "type": "uint64"
                },
                {
                    "internalType": "bytes",
                    "name": "_payload",
                    "type": "bytes"
                }
            ],
            "name": "retryMessage",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_version",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_chainId",
                    "type": "uint16"
                },
                {
                    "internalType": "uint256",
                    "name": "_configType",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_config",
                    "type": "bytes"
                }
            ],
            "name": "setConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_dstChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_packetType",
                    "type": "uint16"
                },
                {
                    "internalType": "uint256",
                    "name": "_minGas",
                    "type": "uint256"
                }
            ],
            "name": "setMinDstGas",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_precrime",
                    "type": "address"
                }
            ],
            "name": "setPrecrime",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_version",
                    "type": "uint16"
                }
            ],
            "name": "setReceiveVersion",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_version",
                    "type": "uint16"
                }
            ],
            "name": "setSendVersion",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_srcChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_path",
                    "type": "bytes"
                }
            ],
            "name": "setTrustedRemote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_remoteChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "bytes",
                    "name": "_remoteAddress",
                    "type": "bytes"
                }
            ],
            "name": "setTrustedRemoteAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_useCustomAdapterParams",
                    "type": "bool"
                }
            ],
            "name": "setUseCustomAdapterParams",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "_withdrawalFeeBps",
                    "type": "uint16"
                }
            ],
            "name": "setWithdrawalFeeBps",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "totalValueLocked",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "name": "trustedRemoteLookup",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "useCustomAdapterParams",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawalFeeBps",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": "0x60a06040523480156200001157600080fd5b5060405162003274380380620032748339810160408190526200003491620000ac565b80808062000042336200005c565b6001600160a01b03166080525050600160055550620000de565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000bf57600080fd5b81516001600160a01b0381168114620000d757600080fd5b9392505050565b60805161314262000132600039600081816105cf01528181610757015281816109a601528181610a2f01528181610b51015281816111450152818161162201528181611b6d015261206c01526131426000f3fe6080604052600436106102035760003560e01c8063950c8a7411610118578063d1deba1f116100a0578063eab45d9c1161006f578063eab45d9c146106ba578063eb8d72b7146106da578063ed629c5c146106fa578063f2fde38b14610714578063f5ecbdbc1461073457600080fd5b8063d1deba1f14610651578063d3cd52bc14610664578063df2a5b3b1461067a578063e6e7dd001461069a57600080fd5b8063a6c3d165116100e7578063a6c3d1651461059d578063b353aaa7146105bd578063b7cb1f7f146105f1578063baf3292d14610611578063cbed8b9c1461063157600080fd5b8063950c8a74146104e45780639a973587146105045780639b51251e1461053c5780639f38369a1461057d57600080fd5b80635b8c41e61161019b5780637533d7881161016a5780637533d78814610419578063879762e2146104465780638cfd8f5c146104595780638da5cb5b1461049157806394723256146104af57600080fd5b80635b8c41e61461037257806366ad5c8a146103cf57806368ea28b0146103ef578063715018a61461040457600080fd5b806310ddb137116101d757806310ddb137146102db5780633d8b38f6146102fb57806342d65a8d1461032b57806346f6f9b51461034b57600080fd5b80621d35671461020857806304336bb31461022a57806307e0db1714610262578063083f61fe14610282575b600080fd5b34801561021457600080fd5b5061022861022336600461251d565b610754565b005b34801561023657600080fd5b5060065461024a90610100900461ffff1681565b60405161ffff90911681526020015b60405180910390f35b34801561026e57600080fd5b5061022861027d3660046125b0565b610985565b34801561028e57600080fd5b506102c361029d3660046125e0565b60076020908152600092835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b039091168152602001610259565b3480156102e757600080fd5b506102286102f63660046125b0565b610a0e565b34801561030757600080fd5b5061031b610316366004612615565b610a66565b6040519015158152602001610259565b34801561033757600080fd5b50610228610346366004612615565b610b32565b34801561035757600080fd5b50610360600081565b60405160ff9091168152602001610259565b34801561037e57600080fd5b506103c161038d36600461272a565b6004602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b604051908152602001610259565b3480156103db57600080fd5b506102286103ea36600461251d565b610bb8565b3480156103fb57600080fd5b50610360600181565b34801561041057600080fd5b50610228610c94565b34801561042557600080fd5b506104396104343660046125b0565b610c9e565b60405161025991906127d7565b6102286104543660046127fa565b610d38565b34801561046557600080fd5b506103c16104743660046128a4565b600260209081526000928352604080842090915290825290205481565b34801561049d57600080fd5b506000546001600160a01b03166102c3565b3480156104bb57600080fd5b506104cf6104ca3660046128c0565b6110f0565b60408051928352602083019190915201610259565b3480156104f057600080fd5b506003546102c3906001600160a01b031681565b34801561051057600080fd5b506103c161051f366004612920565b600960209081526000928352604080842090915290825290205481565b34801561054857600080fd5b506102c36105573660046125e0565b60086020908152600092835260408084209091529082529020546001600160a01b031681565b34801561058957600080fd5b506104396105983660046125b0565b6111d9565b3480156105a957600080fd5b506102286105b8366004612615565b6112ef565b3480156105c957600080fd5b506102c37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105fd57600080fd5b5061022861060c366004612957565b611378565b34801561061d57600080fd5b5061022861062c3660046129a0565b6115a6565b34801561063d57600080fd5b5061022861064c3660046129bd565b611603565b61022861065f36600461251d565b611698565b34801561067057600080fd5b5061024a61271081565b34801561068657600080fd5b50610228610695366004612a2b565b6118ae565b3480156106a657600080fd5b506102286106b53660046125b0565b611960565b3480156106c657600080fd5b506102286106d5366004612a67565b611a20565b3480156106e657600080fd5b506102286106f5366004612615565b611a69565b34801561070657600080fd5b5060065461031b9060ff1681565b34801561072057600080fd5b5061022861072f3660046129a0565b611ac3565b34801561074057600080fd5b5061043961074f366004612a82565b611b3c565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316146107d15760405162461bcd60e51b815260206004820152601e60248201527f4c7a4170703a20696e76616c696420656e64706f696e742063616c6c6572000060448201526064015b60405180910390fd5b61ffff8616600090815260016020526040812080546107ef90612acf565b80601f016020809104026020016040519081016040528092919081815260200182805461081b90612acf565b80156108685780601f1061083d57610100808354040283529160200191610868565b820191906000526020600020905b81548152906001019060200180831161084b57829003601f168201915b50505050509050805186869050148015610883575060008151115b80156108ab5750805160208201206040516108a19088908890612b09565b6040518091039020145b6109065760405162461bcd60e51b815260206004820152602660248201527f4c7a4170703a20696e76616c696420736f757263652073656e64696e6720636f6044820152651b9d1c9858dd60d21b60648201526084016107c8565b61097c8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611bed92505050565b50505050505050565b61098d611c66565b6040516307e0db1760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307e0db17906024015b600060405180830381600087803b1580156109f357600080fd5b505af1158015610a07573d6000803e3d6000fd5b5050505050565b610a16611c66565b6040516310ddb13760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906310ddb137906024016109d9565b61ffff831660009081526001602052604081208054829190610a8790612acf565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab390612acf565b8015610b005780601f10610ad557610100808354040283529160200191610b00565b820191906000526020600020905b815481529060010190602001808311610ae357829003601f168201915b505050505090508383604051610b17929190612b09565b60405180910390208180519060200120149150509392505050565b610b3a611c66565b6040516342d65a8d60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906342d65a8d90610b8a90869086908690600401612b42565b600060405180830381600087803b158015610ba457600080fd5b505af115801561097c573d6000803e3d6000fd5b333014610c165760405162461bcd60e51b815260206004820152602660248201527f4e6f6e626c6f636b696e674c7a4170703a2063616c6c6572206d7573742062656044820152650204c7a4170760d41b60648201526084016107c8565b610c8c8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f890181900481028201810190925287815289935091508790879081908401838280828437600092019190915250611cc092505050565b505050505050565b610c9c611c66565b565b60016020526000908152604090208054610cb790612acf565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce390612acf565b8015610d305780601f10610d0557610100808354040283529160200191610d30565b820191906000526020600020905b815481529060010190602001808311610d1357829003601f168201915b505050505081565b610d40611e74565b6001600160a01b038716610da05760405162461bcd60e51b815260206004820152602160248201527f57726170706564546f6b656e4272696467653a20696e76616c696420746f6b656044820152603760f91b60648201526084016107c8565b6001600160a01b038416610df65760405162461bcd60e51b815260206004820152601e60248201527f57726170706564546f6b656e4272696467653a20696e76616c696420746f000060448201526064016107c8565b60008511610e515760405162461bcd60e51b815260206004820152602260248201527f57726170706564546f6b656e4272696467653a20696e76616c696420616d6f756044820152611b9d60f21b60648201526084016107c8565b610e5d86600183611ecd565b6001600160a01b03808816600090815260076020908152604080832061ffff8b1684529091529020541680610ea45760405162461bcd60e51b81526004016107c890612b60565b61ffff871660009081526009602090815260408083206001600160a01b0385168452909152902054861115610f415760405162461bcd60e51b815260206004820152603d60248201527f57726170706564546f6b656e4272696467653a20696e73756666696369656e7460448201527f206c6971756964697479206f6e207468652064657374696e6174696f6e00000060648201526084016107c8565b61ffff871660009081526009602090815260408083206001600160a01b038516845290915281208054889290610f78908490612bc0565b9091555050604051632770a7eb60e21b8152336004820152602481018790526001600160a01b03891690639dc29fac90604401600060405180830381600087803b158015610fc557600080fd5b505af1158015610fd9573d6000803e3d6000fd5b5050600654889250610100900461ffff16159050611028576006546000906127109061100e90610100900461ffff168a612bd9565b6110189190612bf0565b90506110248183612bc0565b9150505b60408051600160208201526001600160a01b038085169282019290925290871660608201526080810182905260a0810188905285151560c082015260009060e00160408051601f1981840301815291905290506110a4898261108d60208901896129a0565b61109d60408a0160208b016129a0565b8834611f4e565b7f3b661011d9e0ff8f0dc432bac4ed79eabf70cf52596ed9de985810ef36689e9e8a848b8a8c6040516110db959493929190612c12565b60405180910390a150505061097c6001600555565b6040805160016020820152308183018190526060820181905260006080830181905260a0830181905260c08084018290528451808503909101815260e084019485905263040a7bb160e41b90945292839290917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316916340a7bb109161118b918b919086908c908c908c9060e401612c49565b6040805180830381865afa1580156111a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111cb9190612c9f565b925092505094509492505050565b61ffff81166000908152600160205260408120805460609291906111fc90612acf565b80601f016020809104026020016040519081016040528092919081815260200182805461122890612acf565b80156112755780601f1061124a57610100808354040283529160200191611275565b820191906000526020600020905b81548152906001019060200180831161125857829003601f168201915b5050505050905080516000036112cd5760405162461bcd60e51b815260206004820152601d60248201527f4c7a4170703a206e6f20747275737465642070617468207265636f726400000060448201526064016107c8565b6112e86000601483516112e09190612bc0565b8391906120e8565b9392505050565b6112f7611c66565b81813060405160200161130c93929190612cc3565b60408051601f1981840301815291815261ffff85166000908152600160205220906113379082612d2f565b507f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce83838360405161136b93929190612b42565b60405180910390a1505050565b611380611c66565b6001600160a01b0383166113e65760405162461bcd60e51b815260206004820152602760248201527f57726170706564546f6b656e4272696467653a20696e76616c6964206c6f636160448201526636103a37b5b2b760c91b60648201526084016107c8565b6001600160a01b03811661144d5760405162461bcd60e51b815260206004820152602860248201527f57726170706564546f6b656e4272696467653a20696e76616c69642072656d6f6044820152673a32903a37b5b2b760c11b60648201526084016107c8565b6001600160a01b03838116600090815260076020908152604080832061ffff87168452909152902054161580156114ab57506001600160a01b03818116600090815260086020908152604080832061ffff8716845290915290205416155b61150c5760405162461bcd60e51b815260206004820152602c60248201527f57726170706564546f6b656e4272696467653a20746f6b656e20616c7265616460448201526b1e481c9959da5cdd195c995960a21b60648201526084016107c8565b6001600160a01b03838116600081815260076020908152604080832061ffff881680855290835281842080546001600160a01b031990811697891697881790915586855260088452828520828652845293829020805490941685179093558051938452908301919091528101919091527f45e419139d22e1853a154f058e7b60373892104bf13079aa3a156a73f84f637d9060600161136b565b6115ae611c66565b600380546001600160a01b0319166001600160a01b0383169081179091556040519081527f5db758e995a17ec1ad84bdef7e8c3293a0bd6179bcce400dff5d4c3d87db726b906020015b60405180910390a150565b61160b611c66565b6040516332fb62e760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063cbed8b9c9061165f9088908890889088908890600401612dee565b600060405180830381600087803b15801561167957600080fd5b505af115801561168d573d6000803e3d6000fd5b505050505050505050565b61ffff861660009081526004602052604080822090516116bb9088908890612b09565b90815260408051602092819003830190206001600160401b0387166000908152925290205490508061173b5760405162461bcd60e51b815260206004820152602360248201527f4e6f6e626c6f636b696e674c7a4170703a206e6f2073746f726564206d65737360448201526261676560e81b60648201526084016107c8565b80838360405161174c929190612b09565b6040518091039020146117ab5760405162461bcd60e51b815260206004820152602160248201527f4e6f6e626c6f636b696e674c7a4170703a20696e76616c6964207061796c6f616044820152601960fa1b60648201526084016107c8565b61ffff871660009081526004602052604080822090516117ce9089908990612b09565b90815260408051602092819003830181206001600160401b038916600090815290845282902093909355601f88018290048202830182019052868252611866918991899089908190840183828082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611cc092505050565b7fc264d91f3adc5588250e1551f547752ca0cfa8f6b530d243b9f9f4cab10ea8e5878787878560405161189d959493929190612e27565b60405180910390a150505050505050565b6118b6611c66565b600081116118fe5760405162461bcd60e51b81526020600482015260156024820152744c7a4170703a20696e76616c6964206d696e47617360581b60448201526064016107c8565b61ffff83811660008181526002602090815260408083209487168084529482529182902085905581519283528201929092529081018290527f9d5c7c0b934da8fefa9c7760c98383778a12dfbfc0c3b3106518f43fb9508ac09060600161136b565b611968611c66565b61271061ffff8216106119d45760405162461bcd60e51b815260206004820152602e60248201527f57726170706564546f6b656e4272696467653a20696e76616c6964207769746860448201526d64726177616c206665652062707360901b60648201526084016107c8565b6006805462ffff00191661010061ffff8416908102919091179091556040519081527f6d0c3abfe7f8a420e34f51060ff6519e1b0f47249f7043e76abc83f61b9f99f7906020016115f8565b611a28611c66565b6006805460ff19168215159081179091556040519081527f1584ad594a70cbe1e6515592e1272a987d922b097ead875069cebe8b40c004a4906020016115f8565b611a71611c66565b61ffff83166000908152600160205260409020611a8f828483612e62565b507ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab83838360405161136b93929190612b42565b611acb611c66565b6001600160a01b038116611b305760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107c8565b611b39816121f5565b50565b604051633d7b2f6f60e21b815261ffff808616600483015284166024820152306044820152606481018290526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f5ecbdbc90608401600060405180830381865afa158015611bbc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611be49190810190612f21565b95945050505050565b600080611c505a60966366ad5c8a60e01b89898989604051602401611c159493929190612f8e565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915230929190612245565b9150915081610c8c57610c8c86868686856122cf565b6000546001600160a01b03163314610c9c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107c8565b60008060008084806020019051810190611cda9190612fcc565b9296509094509250905060ff841615611d455760405162461bcd60e51b815260206004820152602760248201527f57726170706564546f6b656e4272696467653a20756e6b6e6f776e207061636b6044820152666574207479706560c81b60648201526084016107c8565b6001600160a01b03808416600090815260086020908152604080832061ffff8d1684529091529020541680611d8c5760405162461bcd60e51b81526004016107c890612b60565b61ffff891660009081526009602090815260408083206001600160a01b038816845290915281208054849290611dc3908490613025565b90915550506040516340c10f1960e01b81526001600160a01b038481166004830152602482018490528216906340c10f1990604401600060405180830381600087803b158015611e1257600080fd5b505af1158015611e26573d6000803e3d6000fd5b505050507ff865724e934515a839f76ebdd6a53df378816b384e8c10270332411676c48dd581858b8686604051611e61959493929190612c12565b60405180910390a1505050505050505050565b600260055403611ec65760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016107c8565b6002600555565b60065460ff1615611eea57611ee5838383600061236c565b505050565b805115611ee55760405162461bcd60e51b815260206004820152602c60248201527f546f6b656e427269646765426173653a2061646170746572506172616d73206d60448201526b75737420626520656d70747960a01b60648201526084016107c8565b61ffff861660009081526001602052604081208054611f6c90612acf565b80601f0160208091040260200160405190810160405280929190818152602001828054611f9890612acf565b8015611fe55780601f10611fba57610100808354040283529160200191611fe5565b820191906000526020600020905b815481529060010190602001808311611fc857829003601f168201915b5050505050905080516000036120565760405162461bcd60e51b815260206004820152603060248201527f4c7a4170703a2064657374696e6174696f6e20636861696e206973206e6f742060448201526f61207472757374656420736f7572636560801b60648201526084016107c8565b60405162c5803160e81b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c58031009084906120ad908b9086908c908c908c908c90600401613038565b6000604051808303818588803b1580156120c657600080fd5b505af11580156120da573d6000803e3d6000fd5b505050505050505050505050565b6060816120f681601f613025565b10156121355760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b60448201526064016107c8565b61213f8284613025565b845110156121835760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b60448201526064016107c8565b6060821580156121a257604051915060008252602082016040526121ec565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156121db5780518352602092830192016121c3565b5050858452601f01601f1916604052505b50949350505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000606060008060008661ffff166001600160401b0381111561226a5761226a612667565b6040519080825280601f01601f191660200182016040528015612294576020820181803683370190505b50905060008087516020890160008d8df191503d9250868311156122b6578692505b828152826000602083013e909890975095505050505050565b8180519060200120600460008761ffff1661ffff168152602001908152602001600020856040516123009190613092565b9081526040805191829003602090810183206001600160401b0388166000908152915220919091557fe183f33de2837795525b4792ca4cd60535bd77c53b7e7030060bfcf5734d6b0c9061235d90879087908790879087906130ae565b60405180910390a15050505050565b60006123778361244b565b61ffff8087166000908152600260209081526040808320938916835292905290812054919250906123a9908490613025565b9050600081116123fb5760405162461bcd60e51b815260206004820152601a60248201527f4c7a4170703a206d696e4761734c696d6974206e6f742073657400000000000060448201526064016107c8565b80821015610c8c5760405162461bcd60e51b815260206004820152601b60248201527f4c7a4170703a20676173206c696d697420697320746f6f206c6f77000000000060448201526064016107c8565b600060228251101561249f5760405162461bcd60e51b815260206004820152601c60248201527f4c7a4170703a20696e76616c69642061646170746572506172616d730000000060448201526064016107c8565b506022015190565b803561ffff811681146124b957600080fd5b919050565b60008083601f8401126124d057600080fd5b5081356001600160401b038111156124e757600080fd5b6020830191508360208285010111156124ff57600080fd5b9250929050565b80356001600160401b03811681146124b957600080fd5b6000806000806000806080878903121561253657600080fd5b61253f876124a7565b955060208701356001600160401b038082111561255b57600080fd5b6125678a838b016124be565b909750955085915061257b60408a01612506565b9450606089013591508082111561259157600080fd5b5061259e89828a016124be565b979a9699509497509295939492505050565b6000602082840312156125c257600080fd5b6112e8826124a7565b6001600160a01b0381168114611b3957600080fd5b600080604083850312156125f357600080fd5b82356125fe816125cb565b915061260c602084016124a7565b90509250929050565b60008060006040848603121561262a57600080fd5b612633846124a7565b925060208401356001600160401b0381111561264e57600080fd5b61265a868287016124be565b9497909650939450505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156126a5576126a5612667565b604052919050565b60006001600160401b038211156126c6576126c6612667565b50601f01601f191660200190565b600082601f8301126126e557600080fd5b81356126f86126f3826126ad565b61267d565b81815284602083860101111561270d57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006060848603121561273f57600080fd5b612748846124a7565b925060208401356001600160401b0381111561276357600080fd5b61276f868287016126d4565b92505061277e60408501612506565b90509250925092565b60005b838110156127a257818101518382015260200161278a565b50506000910152565b600081518084526127c3816020860160208601612787565b601f01601f19169290920160200192915050565b6020815260006112e860208301846127ab565b803580151581146124b957600080fd5b600080600080600080600087890361010081121561281757600080fd5b8835612822816125cb565b975061283060208a016124a7565b9650604089013595506060890135612847816125cb565b945061285560808a016127ea565b93506040609f198201121561286957600080fd5b5060a08801915060e08801356001600160401b0381111561288957600080fd5b6128958a828b016126d4565b91505092959891949750929550565b600080604083850312156128b757600080fd5b6125fe836124a7565b600080600080606085870312156128d657600080fd5b6128df856124a7565b93506128ed602086016127ea565b925060408501356001600160401b0381111561290857600080fd5b612914878288016124be565b95989497509550505050565b6000806040838503121561293357600080fd5b61293c836124a7565b9150602083013561294c816125cb565b809150509250929050565b60008060006060848603121561296c57600080fd5b8335612977816125cb565b9250612985602085016124a7565b91506040840135612995816125cb565b809150509250925092565b6000602082840312156129b257600080fd5b81356112e8816125cb565b6000806000806000608086880312156129d557600080fd5b6129de866124a7565b94506129ec602087016124a7565b93506040860135925060608601356001600160401b03811115612a0e57600080fd5b612a1a888289016124be565b969995985093965092949392505050565b600080600060608486031215612a4057600080fd5b612a49846124a7565b9250612a57602085016124a7565b9150604084013590509250925092565b600060208284031215612a7957600080fd5b6112e8826127ea565b60008060008060808587031215612a9857600080fd5b612aa1856124a7565b9350612aaf602086016124a7565b92506040850135612abf816125cb565b9396929550929360600135925050565b600181811c90821680612ae357607f821691505b602082108103612b0357634e487b7160e01b600052602260045260246000fd5b50919050565b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b61ffff84168152604060208201526000611be4604083018486612b19565b6020808252602a908201527f57726170706564546f6b656e4272696467653a20746f6b656e206973206e6f74604082015269081cdd5c1c1bdc9d195960b21b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b81810381811115612bd357612bd3612baa565b92915050565b8082028115828204841417612bd357612bd3612baa565b600082612c0d57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b039586168152938516602085015261ffff9290921660408401529092166060820152608081019190915260a00190565b61ffff871681526001600160a01b038616602082015260a060408201819052600090612c77908301876127ab565b85151560608401528281036080840152612c92818587612b19565b9998505050505050505050565b60008060408385031215612cb257600080fd5b505080516020909101519092909150565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b601f821115611ee557600081815260208120601f850160051c81016020861015612d105750805b601f850160051c820191505b81811015610c8c57828155600101612d1c565b81516001600160401b03811115612d4857612d48612667565b612d5c81612d568454612acf565b84612ce9565b602080601f831160018114612d915760008415612d795750858301515b600019600386901b1c1916600185901b178555610c8c565b600085815260208120601f198616915b82811015612dc057888601518255948401946001909101908401612da1565b5085821015612dde5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600061ffff808816835280871660208401525084604083015260806060830152612e1c608083018486612b19565b979650505050505050565b61ffff86168152608060208201526000612e45608083018688612b19565b6001600160401b0394909416604083015250606001529392505050565b6001600160401b03831115612e7957612e79612667565b612e8d83612e878354612acf565b83612ce9565b6000601f841160018114612ec15760008515612ea95750838201355b600019600387901b1c1916600186901b178355610a07565b600083815260209020601f19861690835b82811015612ef25786850135825560209485019460019092019101612ed2565b5086821015612f0f5760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b600060208284031215612f3357600080fd5b81516001600160401b03811115612f4957600080fd5b8201601f81018413612f5a57600080fd5b8051612f686126f3826126ad565b818152856020838501011115612f7d57600080fd5b611be4826020830160208601612787565b61ffff85168152608060208201526000612fab60808301866127ab565b6001600160401b03851660408401528281036060840152612e1c81856127ab565b60008060008060808587031215612fe257600080fd5b845160ff81168114612ff357600080fd5b6020860151909450613004816125cb565b6040860151909350613015816125cb565b6060959095015193969295505050565b80820180821115612bd357612bd3612baa565b61ffff8716815260c06020820152600061305560c08301886127ab565b828103604084015261306781886127ab565b6001600160a01b0387811660608601528616608085015283810360a08501529050612c9281856127ab565b600082516130a4818460208701612787565b9190910192915050565b61ffff8616815260a0602082015260006130cb60a08301876127ab565b6001600160401b038616604084015282810360608401526130ec81866127ab565b9050828103608084015261310081856127ab565b9897505050505050505056fea2646970667358221220f306bed76e230975e2653e437a577dbce09721cf2f78f88c5c3cef61699f6c5f64736f6c63430008110033",
    "deployedBytecode": "0x6080604052600436106102035760003560e01c8063950c8a7411610118578063d1deba1f116100a0578063eab45d9c1161006f578063eab45d9c146106ba578063eb8d72b7146106da578063ed629c5c146106fa578063f2fde38b14610714578063f5ecbdbc1461073457600080fd5b8063d1deba1f14610651578063d3cd52bc14610664578063df2a5b3b1461067a578063e6e7dd001461069a57600080fd5b8063a6c3d165116100e7578063a6c3d1651461059d578063b353aaa7146105bd578063b7cb1f7f146105f1578063baf3292d14610611578063cbed8b9c1461063157600080fd5b8063950c8a74146104e45780639a973587146105045780639b51251e1461053c5780639f38369a1461057d57600080fd5b80635b8c41e61161019b5780637533d7881161016a5780637533d78814610419578063879762e2146104465780638cfd8f5c146104595780638da5cb5b1461049157806394723256146104af57600080fd5b80635b8c41e61461037257806366ad5c8a146103cf57806368ea28b0146103ef578063715018a61461040457600080fd5b806310ddb137116101d757806310ddb137146102db5780633d8b38f6146102fb57806342d65a8d1461032b57806346f6f9b51461034b57600080fd5b80621d35671461020857806304336bb31461022a57806307e0db1714610262578063083f61fe14610282575b600080fd5b34801561021457600080fd5b5061022861022336600461251d565b610754565b005b34801561023657600080fd5b5060065461024a90610100900461ffff1681565b60405161ffff90911681526020015b60405180910390f35b34801561026e57600080fd5b5061022861027d3660046125b0565b610985565b34801561028e57600080fd5b506102c361029d3660046125e0565b60076020908152600092835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b039091168152602001610259565b3480156102e757600080fd5b506102286102f63660046125b0565b610a0e565b34801561030757600080fd5b5061031b610316366004612615565b610a66565b6040519015158152602001610259565b34801561033757600080fd5b50610228610346366004612615565b610b32565b34801561035757600080fd5b50610360600081565b60405160ff9091168152602001610259565b34801561037e57600080fd5b506103c161038d36600461272a565b6004602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b604051908152602001610259565b3480156103db57600080fd5b506102286103ea36600461251d565b610bb8565b3480156103fb57600080fd5b50610360600181565b34801561041057600080fd5b50610228610c94565b34801561042557600080fd5b506104396104343660046125b0565b610c9e565b60405161025991906127d7565b6102286104543660046127fa565b610d38565b34801561046557600080fd5b506103c16104743660046128a4565b600260209081526000928352604080842090915290825290205481565b34801561049d57600080fd5b506000546001600160a01b03166102c3565b3480156104bb57600080fd5b506104cf6104ca3660046128c0565b6110f0565b60408051928352602083019190915201610259565b3480156104f057600080fd5b506003546102c3906001600160a01b031681565b34801561051057600080fd5b506103c161051f366004612920565b600960209081526000928352604080842090915290825290205481565b34801561054857600080fd5b506102c36105573660046125e0565b60086020908152600092835260408084209091529082529020546001600160a01b031681565b34801561058957600080fd5b506104396105983660046125b0565b6111d9565b3480156105a957600080fd5b506102286105b8366004612615565b6112ef565b3480156105c957600080fd5b506102c37f000000000000000000000000000000000000000000000000000000000000000081565b3480156105fd57600080fd5b5061022861060c366004612957565b611378565b34801561061d57600080fd5b5061022861062c3660046129a0565b6115a6565b34801561063d57600080fd5b5061022861064c3660046129bd565b611603565b61022861065f36600461251d565b611698565b34801561067057600080fd5b5061024a61271081565b34801561068657600080fd5b50610228610695366004612a2b565b6118ae565b3480156106a657600080fd5b506102286106b53660046125b0565b611960565b3480156106c657600080fd5b506102286106d5366004612a67565b611a20565b3480156106e657600080fd5b506102286106f5366004612615565b611a69565b34801561070657600080fd5b5060065461031b9060ff1681565b34801561072057600080fd5b5061022861072f3660046129a0565b611ac3565b34801561074057600080fd5b5061043961074f366004612a82565b611b3c565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316146107d15760405162461bcd60e51b815260206004820152601e60248201527f4c7a4170703a20696e76616c696420656e64706f696e742063616c6c6572000060448201526064015b60405180910390fd5b61ffff8616600090815260016020526040812080546107ef90612acf565b80601f016020809104026020016040519081016040528092919081815260200182805461081b90612acf565b80156108685780601f1061083d57610100808354040283529160200191610868565b820191906000526020600020905b81548152906001019060200180831161084b57829003601f168201915b50505050509050805186869050148015610883575060008151115b80156108ab5750805160208201206040516108a19088908890612b09565b6040518091039020145b6109065760405162461bcd60e51b815260206004820152602660248201527f4c7a4170703a20696e76616c696420736f757263652073656e64696e6720636f6044820152651b9d1c9858dd60d21b60648201526084016107c8565b61097c8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611bed92505050565b50505050505050565b61098d611c66565b6040516307e0db1760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307e0db17906024015b600060405180830381600087803b1580156109f357600080fd5b505af1158015610a07573d6000803e3d6000fd5b5050505050565b610a16611c66565b6040516310ddb13760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906310ddb137906024016109d9565b61ffff831660009081526001602052604081208054829190610a8790612acf565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab390612acf565b8015610b005780601f10610ad557610100808354040283529160200191610b00565b820191906000526020600020905b815481529060010190602001808311610ae357829003601f168201915b505050505090508383604051610b17929190612b09565b60405180910390208180519060200120149150509392505050565b610b3a611c66565b6040516342d65a8d60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906342d65a8d90610b8a90869086908690600401612b42565b600060405180830381600087803b158015610ba457600080fd5b505af115801561097c573d6000803e3d6000fd5b333014610c165760405162461bcd60e51b815260206004820152602660248201527f4e6f6e626c6f636b696e674c7a4170703a2063616c6c6572206d7573742062656044820152650204c7a4170760d41b60648201526084016107c8565b610c8c8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f890181900481028201810190925287815289935091508790879081908401838280828437600092019190915250611cc092505050565b505050505050565b610c9c611c66565b565b60016020526000908152604090208054610cb790612acf565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce390612acf565b8015610d305780601f10610d0557610100808354040283529160200191610d30565b820191906000526020600020905b815481529060010190602001808311610d1357829003601f168201915b505050505081565b610d40611e74565b6001600160a01b038716610da05760405162461bcd60e51b815260206004820152602160248201527f57726170706564546f6b656e4272696467653a20696e76616c696420746f6b656044820152603760f91b60648201526084016107c8565b6001600160a01b038416610df65760405162461bcd60e51b815260206004820152601e60248201527f57726170706564546f6b656e4272696467653a20696e76616c696420746f000060448201526064016107c8565b60008511610e515760405162461bcd60e51b815260206004820152602260248201527f57726170706564546f6b656e4272696467653a20696e76616c696420616d6f756044820152611b9d60f21b60648201526084016107c8565b610e5d86600183611ecd565b6001600160a01b03808816600090815260076020908152604080832061ffff8b1684529091529020541680610ea45760405162461bcd60e51b81526004016107c890612b60565b61ffff871660009081526009602090815260408083206001600160a01b0385168452909152902054861115610f415760405162461bcd60e51b815260206004820152603d60248201527f57726170706564546f6b656e4272696467653a20696e73756666696369656e7460448201527f206c6971756964697479206f6e207468652064657374696e6174696f6e00000060648201526084016107c8565b61ffff871660009081526009602090815260408083206001600160a01b038516845290915281208054889290610f78908490612bc0565b9091555050604051632770a7eb60e21b8152336004820152602481018790526001600160a01b03891690639dc29fac90604401600060405180830381600087803b158015610fc557600080fd5b505af1158015610fd9573d6000803e3d6000fd5b5050600654889250610100900461ffff16159050611028576006546000906127109061100e90610100900461ffff168a612bd9565b6110189190612bf0565b90506110248183612bc0565b9150505b60408051600160208201526001600160a01b038085169282019290925290871660608201526080810182905260a0810188905285151560c082015260009060e00160408051601f1981840301815291905290506110a4898261108d60208901896129a0565b61109d60408a0160208b016129a0565b8834611f4e565b7f3b661011d9e0ff8f0dc432bac4ed79eabf70cf52596ed9de985810ef36689e9e8a848b8a8c6040516110db959493929190612c12565b60405180910390a150505061097c6001600555565b6040805160016020820152308183018190526060820181905260006080830181905260a0830181905260c08084018290528451808503909101815260e084019485905263040a7bb160e41b90945292839290917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316916340a7bb109161118b918b919086908c908c908c9060e401612c49565b6040805180830381865afa1580156111a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111cb9190612c9f565b925092505094509492505050565b61ffff81166000908152600160205260408120805460609291906111fc90612acf565b80601f016020809104026020016040519081016040528092919081815260200182805461122890612acf565b80156112755780601f1061124a57610100808354040283529160200191611275565b820191906000526020600020905b81548152906001019060200180831161125857829003601f168201915b5050505050905080516000036112cd5760405162461bcd60e51b815260206004820152601d60248201527f4c7a4170703a206e6f20747275737465642070617468207265636f726400000060448201526064016107c8565b6112e86000601483516112e09190612bc0565b8391906120e8565b9392505050565b6112f7611c66565b81813060405160200161130c93929190612cc3565b60408051601f1981840301815291815261ffff85166000908152600160205220906113379082612d2f565b507f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce83838360405161136b93929190612b42565b60405180910390a1505050565b611380611c66565b6001600160a01b0383166113e65760405162461bcd60e51b815260206004820152602760248201527f57726170706564546f6b656e4272696467653a20696e76616c6964206c6f636160448201526636103a37b5b2b760c91b60648201526084016107c8565b6001600160a01b03811661144d5760405162461bcd60e51b815260206004820152602860248201527f57726170706564546f6b656e4272696467653a20696e76616c69642072656d6f6044820152673a32903a37b5b2b760c11b60648201526084016107c8565b6001600160a01b03838116600090815260076020908152604080832061ffff87168452909152902054161580156114ab57506001600160a01b03818116600090815260086020908152604080832061ffff8716845290915290205416155b61150c5760405162461bcd60e51b815260206004820152602c60248201527f57726170706564546f6b656e4272696467653a20746f6b656e20616c7265616460448201526b1e481c9959da5cdd195c995960a21b60648201526084016107c8565b6001600160a01b03838116600081815260076020908152604080832061ffff881680855290835281842080546001600160a01b031990811697891697881790915586855260088452828520828652845293829020805490941685179093558051938452908301919091528101919091527f45e419139d22e1853a154f058e7b60373892104bf13079aa3a156a73f84f637d9060600161136b565b6115ae611c66565b600380546001600160a01b0319166001600160a01b0383169081179091556040519081527f5db758e995a17ec1ad84bdef7e8c3293a0bd6179bcce400dff5d4c3d87db726b906020015b60405180910390a150565b61160b611c66565b6040516332fb62e760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063cbed8b9c9061165f9088908890889088908890600401612dee565b600060405180830381600087803b15801561167957600080fd5b505af115801561168d573d6000803e3d6000fd5b505050505050505050565b61ffff861660009081526004602052604080822090516116bb9088908890612b09565b90815260408051602092819003830190206001600160401b0387166000908152925290205490508061173b5760405162461bcd60e51b815260206004820152602360248201527f4e6f6e626c6f636b696e674c7a4170703a206e6f2073746f726564206d65737360448201526261676560e81b60648201526084016107c8565b80838360405161174c929190612b09565b6040518091039020146117ab5760405162461bcd60e51b815260206004820152602160248201527f4e6f6e626c6f636b696e674c7a4170703a20696e76616c6964207061796c6f616044820152601960fa1b60648201526084016107c8565b61ffff871660009081526004602052604080822090516117ce9089908990612b09565b90815260408051602092819003830181206001600160401b038916600090815290845282902093909355601f88018290048202830182019052868252611866918991899089908190840183828082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611cc092505050565b7fc264d91f3adc5588250e1551f547752ca0cfa8f6b530d243b9f9f4cab10ea8e5878787878560405161189d959493929190612e27565b60405180910390a150505050505050565b6118b6611c66565b600081116118fe5760405162461bcd60e51b81526020600482015260156024820152744c7a4170703a20696e76616c6964206d696e47617360581b60448201526064016107c8565b61ffff83811660008181526002602090815260408083209487168084529482529182902085905581519283528201929092529081018290527f9d5c7c0b934da8fefa9c7760c98383778a12dfbfc0c3b3106518f43fb9508ac09060600161136b565b611968611c66565b61271061ffff8216106119d45760405162461bcd60e51b815260206004820152602e60248201527f57726170706564546f6b656e4272696467653a20696e76616c6964207769746860448201526d64726177616c206665652062707360901b60648201526084016107c8565b6006805462ffff00191661010061ffff8416908102919091179091556040519081527f6d0c3abfe7f8a420e34f51060ff6519e1b0f47249f7043e76abc83f61b9f99f7906020016115f8565b611a28611c66565b6006805460ff19168215159081179091556040519081527f1584ad594a70cbe1e6515592e1272a987d922b097ead875069cebe8b40c004a4906020016115f8565b611a71611c66565b61ffff83166000908152600160205260409020611a8f828483612e62565b507ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab83838360405161136b93929190612b42565b611acb611c66565b6001600160a01b038116611b305760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107c8565b611b39816121f5565b50565b604051633d7b2f6f60e21b815261ffff808616600483015284166024820152306044820152606481018290526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f5ecbdbc90608401600060405180830381865afa158015611bbc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611be49190810190612f21565b95945050505050565b600080611c505a60966366ad5c8a60e01b89898989604051602401611c159493929190612f8e565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915230929190612245565b9150915081610c8c57610c8c86868686856122cf565b6000546001600160a01b03163314610c9c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107c8565b60008060008084806020019051810190611cda9190612fcc565b9296509094509250905060ff841615611d455760405162461bcd60e51b815260206004820152602760248201527f57726170706564546f6b656e4272696467653a20756e6b6e6f776e207061636b6044820152666574207479706560c81b60648201526084016107c8565b6001600160a01b03808416600090815260086020908152604080832061ffff8d1684529091529020541680611d8c5760405162461bcd60e51b81526004016107c890612b60565b61ffff891660009081526009602090815260408083206001600160a01b038816845290915281208054849290611dc3908490613025565b90915550506040516340c10f1960e01b81526001600160a01b038481166004830152602482018490528216906340c10f1990604401600060405180830381600087803b158015611e1257600080fd5b505af1158015611e26573d6000803e3d6000fd5b505050507ff865724e934515a839f76ebdd6a53df378816b384e8c10270332411676c48dd581858b8686604051611e61959493929190612c12565b60405180910390a1505050505050505050565b600260055403611ec65760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016107c8565b6002600555565b60065460ff1615611eea57611ee5838383600061236c565b505050565b805115611ee55760405162461bcd60e51b815260206004820152602c60248201527f546f6b656e427269646765426173653a2061646170746572506172616d73206d60448201526b75737420626520656d70747960a01b60648201526084016107c8565b61ffff861660009081526001602052604081208054611f6c90612acf565b80601f0160208091040260200160405190810160405280929190818152602001828054611f9890612acf565b8015611fe55780601f10611fba57610100808354040283529160200191611fe5565b820191906000526020600020905b815481529060010190602001808311611fc857829003601f168201915b5050505050905080516000036120565760405162461bcd60e51b815260206004820152603060248201527f4c7a4170703a2064657374696e6174696f6e20636861696e206973206e6f742060448201526f61207472757374656420736f7572636560801b60648201526084016107c8565b60405162c5803160e81b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c58031009084906120ad908b9086908c908c908c908c90600401613038565b6000604051808303818588803b1580156120c657600080fd5b505af11580156120da573d6000803e3d6000fd5b505050505050505050505050565b6060816120f681601f613025565b10156121355760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b60448201526064016107c8565b61213f8284613025565b845110156121835760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b60448201526064016107c8565b6060821580156121a257604051915060008252602082016040526121ec565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156121db5780518352602092830192016121c3565b5050858452601f01601f1916604052505b50949350505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000606060008060008661ffff166001600160401b0381111561226a5761226a612667565b6040519080825280601f01601f191660200182016040528015612294576020820181803683370190505b50905060008087516020890160008d8df191503d9250868311156122b6578692505b828152826000602083013e909890975095505050505050565b8180519060200120600460008761ffff1661ffff168152602001908152602001600020856040516123009190613092565b9081526040805191829003602090810183206001600160401b0388166000908152915220919091557fe183f33de2837795525b4792ca4cd60535bd77c53b7e7030060bfcf5734d6b0c9061235d90879087908790879087906130ae565b60405180910390a15050505050565b60006123778361244b565b61ffff8087166000908152600260209081526040808320938916835292905290812054919250906123a9908490613025565b9050600081116123fb5760405162461bcd60e51b815260206004820152601a60248201527f4c7a4170703a206d696e4761734c696d6974206e6f742073657400000000000060448201526064016107c8565b80821015610c8c5760405162461bcd60e51b815260206004820152601b60248201527f4c7a4170703a20676173206c696d697420697320746f6f206c6f77000000000060448201526064016107c8565b600060228251101561249f5760405162461bcd60e51b815260206004820152601c60248201527f4c7a4170703a20696e76616c69642061646170746572506172616d730000000060448201526064016107c8565b506022015190565b803561ffff811681146124b957600080fd5b919050565b60008083601f8401126124d057600080fd5b5081356001600160401b038111156124e757600080fd5b6020830191508360208285010111156124ff57600080fd5b9250929050565b80356001600160401b03811681146124b957600080fd5b6000806000806000806080878903121561253657600080fd5b61253f876124a7565b955060208701356001600160401b038082111561255b57600080fd5b6125678a838b016124be565b909750955085915061257b60408a01612506565b9450606089013591508082111561259157600080fd5b5061259e89828a016124be565b979a9699509497509295939492505050565b6000602082840312156125c257600080fd5b6112e8826124a7565b6001600160a01b0381168114611b3957600080fd5b600080604083850312156125f357600080fd5b82356125fe816125cb565b915061260c602084016124a7565b90509250929050565b60008060006040848603121561262a57600080fd5b612633846124a7565b925060208401356001600160401b0381111561264e57600080fd5b61265a868287016124be565b9497909650939450505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156126a5576126a5612667565b604052919050565b60006001600160401b038211156126c6576126c6612667565b50601f01601f191660200190565b600082601f8301126126e557600080fd5b81356126f86126f3826126ad565b61267d565b81815284602083860101111561270d57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006060848603121561273f57600080fd5b612748846124a7565b925060208401356001600160401b0381111561276357600080fd5b61276f868287016126d4565b92505061277e60408501612506565b90509250925092565b60005b838110156127a257818101518382015260200161278a565b50506000910152565b600081518084526127c3816020860160208601612787565b601f01601f19169290920160200192915050565b6020815260006112e860208301846127ab565b803580151581146124b957600080fd5b600080600080600080600087890361010081121561281757600080fd5b8835612822816125cb565b975061283060208a016124a7565b9650604089013595506060890135612847816125cb565b945061285560808a016127ea565b93506040609f198201121561286957600080fd5b5060a08801915060e08801356001600160401b0381111561288957600080fd5b6128958a828b016126d4565b91505092959891949750929550565b600080604083850312156128b757600080fd5b6125fe836124a7565b600080600080606085870312156128d657600080fd5b6128df856124a7565b93506128ed602086016127ea565b925060408501356001600160401b0381111561290857600080fd5b612914878288016124be565b95989497509550505050565b6000806040838503121561293357600080fd5b61293c836124a7565b9150602083013561294c816125cb565b809150509250929050565b60008060006060848603121561296c57600080fd5b8335612977816125cb565b9250612985602085016124a7565b91506040840135612995816125cb565b809150509250925092565b6000602082840312156129b257600080fd5b81356112e8816125cb565b6000806000806000608086880312156129d557600080fd5b6129de866124a7565b94506129ec602087016124a7565b93506040860135925060608601356001600160401b03811115612a0e57600080fd5b612a1a888289016124be565b969995985093965092949392505050565b600080600060608486031215612a4057600080fd5b612a49846124a7565b9250612a57602085016124a7565b9150604084013590509250925092565b600060208284031215612a7957600080fd5b6112e8826127ea565b60008060008060808587031215612a9857600080fd5b612aa1856124a7565b9350612aaf602086016124a7565b92506040850135612abf816125cb565b9396929550929360600135925050565b600181811c90821680612ae357607f821691505b602082108103612b0357634e487b7160e01b600052602260045260246000fd5b50919050565b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b61ffff84168152604060208201526000611be4604083018486612b19565b6020808252602a908201527f57726170706564546f6b656e4272696467653a20746f6b656e206973206e6f74604082015269081cdd5c1c1bdc9d195960b21b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b81810381811115612bd357612bd3612baa565b92915050565b8082028115828204841417612bd357612bd3612baa565b600082612c0d57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b039586168152938516602085015261ffff9290921660408401529092166060820152608081019190915260a00190565b61ffff871681526001600160a01b038616602082015260a060408201819052600090612c77908301876127ab565b85151560608401528281036080840152612c92818587612b19565b9998505050505050505050565b60008060408385031215612cb257600080fd5b505080516020909101519092909150565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b601f821115611ee557600081815260208120601f850160051c81016020861015612d105750805b601f850160051c820191505b81811015610c8c57828155600101612d1c565b81516001600160401b03811115612d4857612d48612667565b612d5c81612d568454612acf565b84612ce9565b602080601f831160018114612d915760008415612d795750858301515b600019600386901b1c1916600185901b178555610c8c565b600085815260208120601f198616915b82811015612dc057888601518255948401946001909101908401612da1565b5085821015612dde5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600061ffff808816835280871660208401525084604083015260806060830152612e1c608083018486612b19565b979650505050505050565b61ffff86168152608060208201526000612e45608083018688612b19565b6001600160401b0394909416604083015250606001529392505050565b6001600160401b03831115612e7957612e79612667565b612e8d83612e878354612acf565b83612ce9565b6000601f841160018114612ec15760008515612ea95750838201355b600019600387901b1c1916600186901b178355610a07565b600083815260209020601f19861690835b82811015612ef25786850135825560209485019460019092019101612ed2565b5086821015612f0f5760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b600060208284031215612f3357600080fd5b81516001600160401b03811115612f4957600080fd5b8201601f81018413612f5a57600080fd5b8051612f686126f3826126ad565b818152856020838501011115612f7d57600080fd5b611be4826020830160208601612787565b61ffff85168152608060208201526000612fab60808301866127ab565b6001600160401b03851660408401528281036060840152612e1c81856127ab565b60008060008060808587031215612fe257600080fd5b845160ff81168114612ff357600080fd5b6020860151909450613004816125cb565b6040860151909350613015816125cb565b6060959095015193969295505050565b80820180821115612bd357612bd3612baa565b61ffff8716815260c06020820152600061305560c08301886127ab565b828103604084015261306781886127ab565b6001600160a01b0387811660608601528616608085015283810360a08501529050612c9281856127ab565b600082516130a4818460208701612787565b9190910192915050565b61ffff8616815260a0602082015260006130cb60a08301876127ab565b6001600160401b038616604084015282810360608401526130ec81866127ab565b9050828103608084015261310081856127ab565b9897505050505050505056fea2646970667358221220f306bed76e230975e2653e437a577dbce09721cf2f78f88c5c3cef61699f6c5f64736f6c63430008110033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}

module.exports = { WrappedAssetBridgeAbi }