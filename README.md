# How to use for Etherlink bridge

Fill in values in `.env`

Adjust `taskArgs` in `./scripts/UseBridge.js`

`npx hardhat run scripts/UseBridge.js --network NETWORK_NAME`


NETWORK_NAME = avalanche, etherlink, ethereum, optimism, base, bsc

For etherlink uncomment one of the following
- `unwrap()`
- `bridgeERC20()`

For other chains uncomment one of the following
- `nativeToWrapped()`
- `bridgeERC20()`