const OriginalTokenBridgeAbi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "OriginalTokenBridge",
    "sourceName": "contracts/OriginalTokenBridge.sol",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_endpoint",
                    "type": "address"
                },
                {
                    "internalType": "uint16",
                    "name": "_remoteChainId",
                    "type": "uint16"
                },
                {
                    "internalType": "address",
                    "name": "_weth",
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
                    "name": "token",
                    "type": "address"
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
            "name": "ReceiveToken",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "token",
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
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
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
            "name": "SendToken",
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
                    "name": "remoteChainId",
                    "type": "uint16"
                }
            ],
            "name": "SetRemoteChainId",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
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
            "name": "WithdrawFee",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "LDtoSDConversionRate",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "accruedFeeLD",
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
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountLD",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
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
                    "internalType": "uint256",
                    "name": "amountLD",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
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
            "name": "bridgeNative",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
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
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "sharedDecimals",
                    "type": "uint8"
                }
            ],
            "name": "registerToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "remoteChainId",
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
                    "name": "_remoteChainId",
                    "type": "uint16"
                }
            ],
            "name": "setRemoteChainId",
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
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "supportedTokens",
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
                }
            ],
            "name": "totalValueLockedSD",
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
            "name": "weth",
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
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountLD",
                    "type": "uint256"
                }
            ],
            "name": "withdrawFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    "bytecode": "0x60c06040523480156200001157600080fd5b5060405162003db538038062003db5833981016040819052620000349162000155565b8280806200004233620000e8565b6001600160a01b03908116608052600160055583169150620000be90505760405162461bcd60e51b815260206004820152602960248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c69642057455460448201526848206164647265737360b81b606482015260840160405180910390fd5b600a805461ffff191661ffff93909316929092179091556001600160a01b031660a05250620001a7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200015057600080fd5b919050565b6000806000606084860312156200016b57600080fd5b620001768462000138565b9250602084015161ffff811681146200018e57600080fd5b91506200019e6040850162000138565b90509250925092565b60805160a051613b866200022f6000396000818161038d015281816114660152818161151e01528181611548015281816115bf0152818161206401526120bb01526000818161060c015281816107bf01528181610a0e01528181610b7301528181610bf301528181610dc90152818161162301528181611aae0152612a5a0152613b866000f3fe6080604052600436106102285760003560e01c80638da5cb5b11610123578063d1deba1f116100ab578063eb8d72b71161006f578063eb8d72b71461072f578063ed629c5c1461074f578063f2fde38b14610769578063f5ecbdbc14610789578063fe359a0d146107a957600080fd5b8063d1deba1f14610681578063df2a5b3b14610694578063e823553e146106b4578063e9518196146106e1578063eab45d9c1461070f57600080fd5b8063a6c3d165116100f2578063a6c3d165146105da578063b353aaa7146105fa578063baf3292d1461062e578063c7e82ebd1461064e578063cbed8b9c1461066157600080fd5b80638da5cb5b1461055c578063950c8a741461057a5780639f38369a1461059a578063a2f27ae0146105ba57600080fd5b806342d65a8d116101b157806368c4ac261161017557806368c4ac261461049d57806368ea28b0146104cd578063715018a6146104e25780637533d788146104f75780638cfd8f5c1461052457600080fd5b806342d65a8d146103c757806346f6f9b5146103e75780635a4967e51461040e5780635b8c41e61461042e57806366ad5c8a1461047d57600080fd5b806320211678116101f857806320211678146102b65780632d09c4ed146102f057806338db1ebc1461032b5780633d8b38f61461034b5780633fc8cef31461037b57600080fd5b80621d35671461023457806307e0db17146102565780631095b6d71461027657806310ddb1371461029657600080fd5b3661022f57005b600080fd5b34801561024057600080fd5b5061025461024f366004612e0f565b6107bc565b005b34801561026257600080fd5b50610254610271366004612ea2565b6109ed565b34801561028257600080fd5b50610254610291366004612ed2565b610a76565b3480156102a257600080fd5b506102546102b1366004612ea2565b610b52565b3480156102c257600080fd5b506102d66102d1366004612f21565b610baa565b604080519283526020830191909152015b60405180910390f35b3480156102fc57600080fd5b5061031d61030b366004612f75565b60096020526000908152604090205481565b6040519081526020016102e7565b34801561033757600080fd5b50610254610346366004612ea2565b610c8b565b34801561035757600080fd5b5061036b610366366004612f92565b610cde565b60405190151581526020016102e7565b34801561038757600080fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102e7565b3480156103d357600080fd5b506102546103e2366004612f92565b610daa565b3480156103f357600080fd5b506103fc600081565b60405160ff90911681526020016102e7565b34801561041a57600080fd5b50610254610429366004612fbf565b610e30565b34801561043a57600080fd5b5061031d6104493660046130bb565b6004602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b34801561048957600080fd5b50610254610498366004612e0f565b611050565b3480156104a957600080fd5b5061036b6104b8366004612f75565b60076020526000908152604090205460ff1681565b3480156104d957600080fd5b506103fc600181565b3480156104ee57600080fd5b5061025461112c565b34801561050357600080fd5b50610517610512366004612ea2565b611136565b6040516102e79190613168565b34801561053057600080fd5b5061031d61053f36600461317b565b600260209081526000928352604080842090915290825290205481565b34801561056857600080fd5b506000546001600160a01b03166103af565b34801561058657600080fd5b506003546103af906001600160a01b031681565b3480156105a657600080fd5b506105176105b5366004612ea2565b6111d0565b3480156105c657600080fd5b5061031d6105d5366004612f75565b6112e6565b3480156105e657600080fd5b506102546105f5366004612f92565b611382565b34801561060657600080fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b34801561063a57600080fd5b50610254610649366004612f75565b6113fe565b61025461065c3660046131c6565b611454565b34801561066d57600080fd5b5061025461067c366004613230565b611604565b61025461068f366004612e0f565b611699565b3480156106a057600080fd5b506102546106af36600461329e565b6118af565b3480156106c057600080fd5b5061031d6106cf366004612f75565b60086020526000908152604090205481565b3480156106ed57600080fd5b50600a546106fc9061ffff1681565b60405161ffff90911681526020016102e7565b34801561071b57600080fd5b5061025461072a3660046132da565b611961565b34801561073b57600080fd5b5061025461074a366004612f92565b6119aa565b34801561075b57600080fd5b5060065461036b9060ff1681565b34801561077557600080fd5b50610254610784366004612f75565b611a04565b34801561079557600080fd5b506105176107a43660046132f7565b611a7d565b6102546107b7366004613344565b611b30565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316146108395760405162461bcd60e51b815260206004820152601e60248201527f4c7a4170703a20696e76616c696420656e64706f696e742063616c6c6572000060448201526064015b60405180910390fd5b61ffff861660009081526001602052604081208054610857906133c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610883906133c1565b80156108d05780601f106108a5576101008083540402835291602001916108d0565b820191906000526020600020905b8154815290600101906020018083116108b357829003601f168201915b505050505090508051868690501480156108eb575060008151115b801561091357508051602082012060405161090990889088906133f5565b6040518091039020145b61096e5760405162461bcd60e51b815260206004820152602660248201527f4c7a4170703a20696e76616c696420736f757263652073656e64696e6720636f6044820152651b9d1c9858dd60d21b6064820152608401610830565b6109e48787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611cb092505050565b50505050505050565b6109f5611d29565b6040516307e0db1760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307e0db17906024015b600060405180830381600087803b158015610a5b57600080fd5b505af1158015610a6f573d6000803e3d6000fd5b5050505050565b610a7e611d29565b6000610a89846112e6565b905080821115610af25760405162461bcd60e51b815260206004820152602e60248201527f4f726967696e616c546f6b656e4272696467653a206e6f7420656e6f7567682060448201526d1999595cc818dbdb1b1958dd195960921b6064820152608401610830565b610b066001600160a01b0385168484611d83565b604080516001600160a01b038581168252602082018590528616917ff15a0a3784dea9b4fe33bc98e2450745e262d310237b2868ea8ef56967ff3ecb910160405180910390a250505050565b610b5a611d29565b6040516310ddb13760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906310ddb13790602401610a41565b60408051600060208201819052308284018190526060830181905260808084018390528451808503909101815260a0840194859052600a5463040a7bb160e41b909552919384937f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316926340a7bb1092610c3e9261ffff909116919086908c908c908c9060a40161342e565b6040805180830381865afa158015610c5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7e9190613484565b9250925050935093915050565b610c93611d29565b600a805461ffff191661ffff83169081179091556040519081527fe8df78a276e2b718a366328e9120b436ea83832fbeede026392fed933e3ffa5b906020015b60405180910390a150565b61ffff831660009081526001602052604081208054829190610cff906133c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2b906133c1565b8015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b505050505090508383604051610d8f9291906133f5565b60405180910390208180519060200120149150509392505050565b610db2611d29565b6040516342d65a8d60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906342d65a8d90610e02908690869086906004016134a8565b600060405180830381600087803b158015610e1c57600080fd5b505af11580156109e4573d6000803e3d6000fd5b610e38611d29565b6001600160a01b038216610ea15760405162461bcd60e51b815260206004820152602a60248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c696420746f6b604482015269656e206164647265737360b01b6064820152608401610830565b6001600160a01b03821660009081526007602052604090205460ff1615610f205760405162461bcd60e51b815260206004820152602d60248201527f4f726967696e616c546f6b656e4272696467653a20746f6b656e20616c72656160448201526c191e481c9959da5cdd195c9959609a1b6064820152608401610830565b6000610f2b83611deb565b90508160ff168160ff161015610fc35760405162461bcd60e51b815260206004820152605160248201527f4f726967696e616c546f6b656e4272696467653a20736861726564206465636960448201527f6d616c73206d757374206265206c657373207468616e206f7220657175616c20606482015270746f206c6f63616c20646563696d616c7360781b608482015260a401610830565b6001600160a01b0383166000908152600760205260409020805460ff19166001179055610ff082826134dc565b610ffb90600a6135d9565b6001600160a01b03841660008181526008602090815260409182902093909355519081527ff7fe8023cb2e36bde1d59a88ac5763a8c11be6d25e6819f71bb7e23e5bf0dc1691015b60405180910390a1505050565b3330146110ae5760405162461bcd60e51b815260206004820152602660248201527f4e6f6e626c6f636b696e674c7a4170703a2063616c6c6572206d7573742062656044820152650204c7a4170760d41b6064820152608401610830565b6111248686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f890181900481028201810190925287815289935091508790879081908401838280828437600092019190915250611ef192505050565b505050505050565b611134611d29565b565b6001602052600090815260409020805461114f906133c1565b80601f016020809104026020016040519081016040528092919081815260200182805461117b906133c1565b80156111c85780601f1061119d576101008083540402835291602001916111c8565b820191906000526020600020905b8154815290600101906020018083116111ab57829003601f168201915b505050505081565b61ffff81166000908152600160205260408120805460609291906111f3906133c1565b80601f016020809104026020016040519081016040528092919081815260200182805461121f906133c1565b801561126c5780601f106112415761010080835404028352916020019161126c565b820191906000526020600020905b81548152906001019060200180831161124f57829003601f168201915b5050505050905080516000036112c45760405162461bcd60e51b815260206004820152601d60248201527f4c7a4170703a206e6f20747275737465642070617468207265636f72640000006044820152606401610830565b6112df6000601483516112d791906135e8565b83919061228b565b9392505050565b6001600160a01b03811660009081526009602052604081205461130a908390612398565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa15801561134e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137291906135fb565b61137c91906135e8565b92915050565b61138a611d29565b81813060405160200161139f93929190613614565b60408051601f1981840301815291815261ffff85166000908152600160205220906113ca9082613680565b507f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce838383604051611043939291906134a8565b611406611d29565b600380546001600160a01b0319166001600160a01b0383169081179091556040519081527f5db758e995a17ec1ad84bdef7e8c3293a0bd6179bcce400dff5d4c3d87db726b90602001610cd3565b61145c6123bb565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660009081526007602052604090205460ff166114b45760405162461bcd60e51b81526004016108309061373f565b833410156115175760405162461bcd60e51b815260206004820152602a60248201527f4f726967696e616c546f6b656e4272696467653a206e6f7420656e6f756768206044820152691d985b1d59481cd95b9d60b21b6064820152608401610830565b60006115437f000000000000000000000000000000000000000000000000000000000000000086612414565b5090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156115a157600080fd5b505af11580156115b5573d6000803e3d6000fd5b50505050506115f37f0000000000000000000000000000000000000000000000000000000000000000828684346115ec91906135e8565b878761244e565b506115fe6001600555565b50505050565b61160c611d29565b6040516332fb62e760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063cbed8b9c90611660908890889088908890889060040161378a565b600060405180830381600087803b15801561167a57600080fd5b505af115801561168e573d6000803e3d6000fd5b505050505050505050565b61ffff861660009081526004602052604080822090516116bc90889088906133f5565b90815260408051602092819003830190206001600160401b0387166000908152925290205490508061173c5760405162461bcd60e51b815260206004820152602360248201527f4e6f6e626c6f636b696e674c7a4170703a206e6f2073746f726564206d65737360448201526261676560e81b6064820152608401610830565b80838360405161174d9291906133f5565b6040518091039020146117ac5760405162461bcd60e51b815260206004820152602160248201527f4e6f6e626c6f636b696e674c7a4170703a20696e76616c6964207061796c6f616044820152601960fa1b6064820152608401610830565b61ffff871660009081526004602052604080822090516117cf90899089906133f5565b90815260408051602092819003830181206001600160401b038916600090815290845282902093909355601f88018290048202830182019052868252611867918991899089908190840183828082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611ef192505050565b7fc264d91f3adc5588250e1551f547752ca0cfa8f6b530d243b9f9f4cab10ea8e5878787878560405161189e9594939291906137b8565b60405180910390a150505050505050565b6118b7611d29565b600081116118ff5760405162461bcd60e51b81526020600482015260156024820152744c7a4170703a20696e76616c6964206d696e47617360581b6044820152606401610830565b61ffff83811660008181526002602090815260408083209487168084529482529182902085905581519283528201929092529081018290527f9d5c7c0b934da8fefa9c7760c98383778a12dfbfc0c3b3106518f43fb9508ac090606001611043565b611969611d29565b6006805460ff19168215159081179091556040519081527f1584ad594a70cbe1e6515592e1272a987d922b097ead875069cebe8b40c004a490602001610cd3565b6119b2611d29565b61ffff831660009081526001602052604090206119d08284836137f3565b507ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab838383604051611043939291906134a8565b611a0c611d29565b6001600160a01b038116611a715760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610830565b611a7a8161261c565b50565b604051633d7b2f6f60e21b815261ffff808616600483015284166024820152306044820152606481018290526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f5ecbdbc90608401600060405180830381865afa158015611afd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611b2591908101906138b2565b90505b949350505050565b611b386123bb565b6001600160a01b03851660009081526007602052604090205460ff16611b705760405162461bcd60e51b81526004016108309061373f565b6040516370a0823160e01b81523060048201526000906001600160a01b038716906370a0823190602401602060405180830381865afa158015611bb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdb91906135fb565b9050611bf26001600160a01b03871633308861266c565b6040516370a0823160e01b81523060048201526000906001600160a01b038816906370a0823190602401602060405180830381865afa158015611c39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c5d91906135fb565b9050600080611c7589611c7086866135e8565b612414565b90925090508015611c9457611c946001600160a01b038a163383611d83565b611ca2898389348a8a61244e565b50505050610a6f6001600555565b600080611d135a60966366ad5c8a60e01b89898989604051602401611cd89493929190613928565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152309291906126a4565b915091508161112457611124868686868561272e565b6000546001600160a01b031633146111345760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610830565b6040516001600160a01b038316602482015260448101829052611de690849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526127cb565b505050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b1790529051600091829182916001600160a01b03861691611e319190613966565b600060405180830381855afa9150503d8060008114611e6c576040519150601f19603f3d011682016040523d82523d6000602084013e611e71565b606091505b509150915081611edd5760405162461bcd60e51b815260206004820152603160248201527f4f726967696e616c546f6b656e4272696467653a206661696c656420746f2067604482015270657420746f6b656e20646563696d616c7360781b6064820152608401610830565b80806020019051810190611b289190613982565b600a5461ffff858116911614611f5e5760405162461bcd60e51b815260206004820152602c60248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c696420736f7560448201526b1c98d94818da185a5b881a5960a21b6064820152608401610830565b60008060008060008086806020019051810190611f7b919061399f565b955095509550955095509550600160ff168660ff1614611fee5760405162461bcd60e51b815260206004820152602860248201527f4f726967696e616c546f6b656e4272696467653a20756e6b6e6f776e207061636044820152676b6574207479706560c01b6064820152608401610830565b6001600160a01b03851660009081526007602052604090205460ff166120265760405162461bcd60e51b81526004016108309061373f565b6001600160a01b0385166000908152600960205260408120805484929061204e9084906135e8565b90915550600090506120608685612398565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b03161480156120a05750815b1561221e57604051632e1a7d4d60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d90602401600060405180830381600087803b15801561210757600080fd5b505af115801561211b573d6000803e3d6000fd5b505050506000856001600160a01b03168260405160006040518083038185875af1925050503d806000811461216c576040519150601f19603f3d011682016040523d82523d6000602084013e612171565b606091505b50509050806121ce5760405162461bcd60e51b815260206004820152602360248201527f4f726967696e616c546f6b656e4272696467653a206661696c656420746f2073604482015262195b9960ea1b6064820152608401610830565b60408051600081526001600160a01b03881660208201529081018390527f5e3da8fba24af91505c66214c9e629ba712ce2c1b8c318f14f7024fdcba544a89060600160405180910390a15061227e565b6122326001600160a01b0387168683611d83565b604080516001600160a01b038089168252871660208201529081018290527f5e3da8fba24af91505c66214c9e629ba712ce2c1b8c318f14f7024fdcba544a89060600160405180910390a15b5050505050505050505050565b60608161229981601f613a13565b10156122d85760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610830565b6122e28284613a13565b845110156123265760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610830565b606082158015612345576040519150600082526020820160405261238f565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561237e578051835260209283019201612366565b5050858452601f01601f1916604052505b50949350505050565b6001600160a01b0382166000908152600860205260408120546112df9083613a26565b60026005540361240d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610830565b6002600555565b6001600160a01b03821660009081526008602052604081205481906124399084613a53565b905061244581846135e8565b91509250929050565b6001600160a01b0384166124a45760405162461bcd60e51b815260206004820152601f60248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c696420746f006044820152606401610830565b600a546124b79061ffff1660008361289d565b60006124c38787612919565b9050600081116125215760405162461bcd60e51b815260206004820152602360248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c696420616d6f6044820152621d5b9d60ea1b6064820152608401610830565b6001600160a01b03871660009081526009602052604081208054839290612549908490613a13565b9091555050604080516000602082018190526001600160a01b03808b169383019390935291871660608201526080810183905260a00160408051601f19818403018152919052600a549091506125c29061ffff16826125ab6020880188612f75565b6125bb6040890160208a01612f75565b878a61293c565b604080516001600160a01b038a811682523360208301528816818301526060810189905290517f49b9b5358c9580b3e6c5ee10b8b260c1e64bede87cb8a212e9e20a0b7dc20e5a9181900360800190a15050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b03808516602483015283166044820152606481018290526115fe9085906323b872dd60e01b90608401611daf565b6000606060008060008661ffff166001600160401b038111156126c9576126c9612ff8565b6040519080825280601f01601f1916602001820160405280156126f3576020820181803683370190505b50905060008087516020890160008d8df191503d925086831115612715578692505b828152826000602083013e909890975095505050505050565b8180519060200120600460008761ffff1661ffff1681526020019081526020016000208560405161275f9190613966565b9081526040805191829003602090810183206001600160401b0388166000908152915220919091557fe183f33de2837795525b4792ca4cd60535bd77c53b7e7030060bfcf5734d6b0c906127bc9087908790879087908790613a67565b60405180910390a15050505050565b6000612820826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612ad69092919063ffffffff16565b805190915015611de6578080602001905181019061283e9190613ac5565b611de65760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610830565b60065460ff16156128b557611de68383836000612ae5565b805115611de65760405162461bcd60e51b815260206004820152602c60248201527f546f6b656e427269646765426173653a2061646170746572506172616d73206d60448201526b75737420626520656d70747960a01b6064820152608401610830565b6001600160a01b0382166000908152600860205260408120546112df9083613ae2565b61ffff86166000908152600160205260408120805461295a906133c1565b80601f0160208091040260200160405190810160405280929190818152602001828054612986906133c1565b80156129d35780601f106129a8576101008083540402835291602001916129d3565b820191906000526020600020905b8154815290600101906020018083116129b657829003601f168201915b505050505090508051600003612a445760405162461bcd60e51b815260206004820152603060248201527f4c7a4170703a2064657374696e6174696f6e20636861696e206973206e6f742060448201526f61207472757374656420736f7572636560801b6064820152608401610830565b60405162c5803160e81b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c5803100908490612a9b908b9086908c908c908c908c90600401613af6565b6000604051808303818588803b158015612ab457600080fd5b505af1158015612ac8573d6000803e3d6000fd5b505050505050505050505050565b6060611b288484600085612bc4565b6000612af083612c9f565b61ffff808716600090815260026020908152604080832093891683529290529081205491925090612b22908490613a13565b905060008111612b745760405162461bcd60e51b815260206004820152601a60248201527f4c7a4170703a206d696e4761734c696d6974206e6f74207365740000000000006044820152606401610830565b808210156111245760405162461bcd60e51b815260206004820152601b60248201527f4c7a4170703a20676173206c696d697420697320746f6f206c6f7700000000006044820152606401610830565b606082471015612c255760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610830565b600080866001600160a01b03168587604051612c419190613966565b60006040518083038185875af1925050503d8060008114612c7e576040519150601f19603f3d011682016040523d82523d6000602084013e612c83565b606091505b5091509150612c9487838387612cfb565b979650505050505050565b6000602282511015612cf35760405162461bcd60e51b815260206004820152601c60248201527f4c7a4170703a20696e76616c69642061646170746572506172616d73000000006044820152606401610830565b506022015190565b60608315612d6a578251600003612d63576001600160a01b0385163b612d635760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610830565b5081611b28565b611b288383815115612d7f5781518083602001fd5b8060405162461bcd60e51b81526004016108309190613168565b803561ffff81168114612dab57600080fd5b919050565b60008083601f840112612dc257600080fd5b5081356001600160401b03811115612dd957600080fd5b602083019150836020828501011115612df157600080fd5b9250929050565b80356001600160401b0381168114612dab57600080fd5b60008060008060008060808789031215612e2857600080fd5b612e3187612d99565b955060208701356001600160401b0380821115612e4d57600080fd5b612e598a838b01612db0565b9097509550859150612e6d60408a01612df8565b94506060890135915080821115612e8357600080fd5b50612e9089828a01612db0565b979a9699509497509295939492505050565b600060208284031215612eb457600080fd5b6112df82612d99565b6001600160a01b0381168114611a7a57600080fd5b600080600060608486031215612ee757600080fd5b8335612ef281612ebd565b92506020840135612f0281612ebd565b929592945050506040919091013590565b8015158114611a7a57600080fd5b600080600060408486031215612f3657600080fd5b8335612f4181612f13565b925060208401356001600160401b03811115612f5c57600080fd5b612f6886828701612db0565b9497909650939450505050565b600060208284031215612f8757600080fd5b81356112df81612ebd565b600080600060408486031215612fa757600080fd5b612f4184612d99565b60ff81168114611a7a57600080fd5b60008060408385031215612fd257600080fd5b8235612fdd81612ebd565b91506020830135612fed81612fb0565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561303657613036612ff8565b604052919050565b60006001600160401b0382111561305757613057612ff8565b50601f01601f191660200190565b600082601f83011261307657600080fd5b81356130896130848261303e565b61300e565b81815284602083860101111561309e57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156130d057600080fd5b6130d984612d99565b925060208401356001600160401b038111156130f457600080fd5b61310086828701613065565b92505061310f60408501612df8565b90509250925092565b60005b8381101561313357818101518382015260200161311b565b50506000910152565b60008151808452613154816020860160208601613118565b601f01601f19169290920160200192915050565b6020815260006112df602083018461313c565b6000806040838503121561318e57600080fd5b61319783612d99565b91506131a560208401612d99565b90509250929050565b6000604082840312156131c057600080fd5b50919050565b60008060008060a085870312156131dc57600080fd5b8435935060208501356131ee81612ebd565b92506131fd86604087016131ae565b915060808501356001600160401b0381111561321857600080fd5b61322487828801613065565b91505092959194509250565b60008060008060006080868803121561324857600080fd5b61325186612d99565b945061325f60208701612d99565b93506040860135925060608601356001600160401b0381111561328157600080fd5b61328d88828901612db0565b969995985093965092949392505050565b6000806000606084860312156132b357600080fd5b6132bc84612d99565b92506132ca60208501612d99565b9150604084013590509250925092565b6000602082840312156132ec57600080fd5b81356112df81612f13565b6000806000806080858703121561330d57600080fd5b61331685612d99565b935061332460208601612d99565b9250604085013561333481612ebd565b9396929550929360600135925050565b600080600080600060c0868803121561335c57600080fd5b853561336781612ebd565b945060208601359350604086013561337e81612ebd565b925061338d87606088016131ae565b915060a08601356001600160401b038111156133a857600080fd5b6133b488828901613065565b9150509295509295909350565b600181811c908216806133d557607f821691505b6020821081036131c057634e487b7160e01b600052602260045260246000fd5b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b61ffff871681526001600160a01b038616602082015260a06040820181905260009061345c9083018761313c565b85151560608401528281036080840152613477818587613405565b9998505050505050505050565b6000806040838503121561349757600080fd5b505080516020909101519092909150565b61ffff84168152604060208201526000611b25604083018486613405565b634e487b7160e01b600052601160045260246000fd5b60ff828116828216039081111561137c5761137c6134c6565b600181815b80851115613530578160001904821115613516576135166134c6565b8085161561352357918102915b93841c93908002906134fa565b509250929050565b6000826135475750600161137c565b816135545750600061137c565b816001811461356a576002811461357457613590565b600191505061137c565b60ff841115613585576135856134c6565b50506001821b61137c565b5060208310610133831016604e8410600b84101617156135b3575081810a61137c565b6135bd83836134f5565b80600019048211156135d1576135d16134c6565b029392505050565b60006112df60ff841683613538565b8181038181111561137c5761137c6134c6565b60006020828403121561360d57600080fd5b5051919050565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b601f821115611de657600081815260208120601f850160051c810160208610156136615750805b601f850160051c820191505b818110156111245782815560010161366d565b81516001600160401b0381111561369957613699612ff8565b6136ad816136a784546133c1565b8461363a565b602080601f8311600181146136e257600084156136ca5750858301515b600019600386901b1c1916600185901b178555611124565b600085815260208120601f198616915b82811015613711578886015182559484019460019091019084016136f2565b508582101561372f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602b908201527f4f726967696e616c546f6b656e4272696467653a20746f6b656e206973206e6f60408201526a1d081cdd5c1c1bdc9d195960aa1b606082015260800190565b600061ffff808816835280871660208401525084604083015260806060830152612c94608083018486613405565b61ffff861681526080602082015260006137d6608083018688613405565b6001600160401b0394909416604083015250606001529392505050565b6001600160401b0383111561380a5761380a612ff8565b61381e8361381883546133c1565b8361363a565b6000601f841160018114613852576000851561383a5750838201355b600019600387901b1c1916600186901b178355610a6f565b600083815260209020601f19861690835b828110156138835786850135825560209485019460019092019101613863565b50868210156138a05760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b6000602082840312156138c457600080fd5b81516001600160401b038111156138da57600080fd5b8201601f810184136138eb57600080fd5b80516138f96130848261303e565b81815285602083850101111561390e57600080fd5b61391f826020830160208601613118565b95945050505050565b61ffff85168152608060208201526000613945608083018661313c565b6001600160401b03851660408401528281036060840152612c94818561313c565b60008251613978818460208701613118565b9190910192915050565b60006020828403121561399457600080fd5b81516112df81612fb0565b60008060008060008060c087890312156139b857600080fd5b86516139c381612fb0565b60208801519096506139d481612ebd565b60408801519095506139e581612ebd565b80945050606087015192506080870151915060a0870151613a0581612f13565b809150509295509295509295565b8082018082111561137c5761137c6134c6565b808202811582820484141761137c5761137c6134c6565b634e487b7160e01b600052601260045260246000fd5b600082613a6257613a62613a3d565b500690565b61ffff8616815260a060208201526000613a8460a083018761313c565b6001600160401b03861660408401528281036060840152613aa5818661313c565b90508281036080840152613ab9818561313c565b98975050505050505050565b600060208284031215613ad757600080fd5b81516112df81612f13565b600082613af157613af1613a3d565b500490565b61ffff8716815260c060208201526000613b1360c083018861313c565b8281036040840152613b25818861313c565b6001600160a01b0387811660608601528616608085015283810360a08501529050613477818561313c56fea2646970667358221220da3fa5a8142d2fe87b478390fca8ffe7208b90debc2d10740b6aa67ab32068f964736f6c63430008110033",
    "deployedBytecode": "0x6080604052600436106102285760003560e01c80638da5cb5b11610123578063d1deba1f116100ab578063eb8d72b71161006f578063eb8d72b71461072f578063ed629c5c1461074f578063f2fde38b14610769578063f5ecbdbc14610789578063fe359a0d146107a957600080fd5b8063d1deba1f14610681578063df2a5b3b14610694578063e823553e146106b4578063e9518196146106e1578063eab45d9c1461070f57600080fd5b8063a6c3d165116100f2578063a6c3d165146105da578063b353aaa7146105fa578063baf3292d1461062e578063c7e82ebd1461064e578063cbed8b9c1461066157600080fd5b80638da5cb5b1461055c578063950c8a741461057a5780639f38369a1461059a578063a2f27ae0146105ba57600080fd5b806342d65a8d116101b157806368c4ac261161017557806368c4ac261461049d57806368ea28b0146104cd578063715018a6146104e25780637533d788146104f75780638cfd8f5c1461052457600080fd5b806342d65a8d146103c757806346f6f9b5146103e75780635a4967e51461040e5780635b8c41e61461042e57806366ad5c8a1461047d57600080fd5b806320211678116101f857806320211678146102b65780632d09c4ed146102f057806338db1ebc1461032b5780633d8b38f61461034b5780633fc8cef31461037b57600080fd5b80621d35671461023457806307e0db17146102565780631095b6d71461027657806310ddb1371461029657600080fd5b3661022f57005b600080fd5b34801561024057600080fd5b5061025461024f366004612e0f565b6107bc565b005b34801561026257600080fd5b50610254610271366004612ea2565b6109ed565b34801561028257600080fd5b50610254610291366004612ed2565b610a76565b3480156102a257600080fd5b506102546102b1366004612ea2565b610b52565b3480156102c257600080fd5b506102d66102d1366004612f21565b610baa565b604080519283526020830191909152015b60405180910390f35b3480156102fc57600080fd5b5061031d61030b366004612f75565b60096020526000908152604090205481565b6040519081526020016102e7565b34801561033757600080fd5b50610254610346366004612ea2565b610c8b565b34801561035757600080fd5b5061036b610366366004612f92565b610cde565b60405190151581526020016102e7565b34801561038757600080fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102e7565b3480156103d357600080fd5b506102546103e2366004612f92565b610daa565b3480156103f357600080fd5b506103fc600081565b60405160ff90911681526020016102e7565b34801561041a57600080fd5b50610254610429366004612fbf565b610e30565b34801561043a57600080fd5b5061031d6104493660046130bb565b6004602090815260009384526040808520845180860184018051928152908401958401959095209452929052825290205481565b34801561048957600080fd5b50610254610498366004612e0f565b611050565b3480156104a957600080fd5b5061036b6104b8366004612f75565b60076020526000908152604090205460ff1681565b3480156104d957600080fd5b506103fc600181565b3480156104ee57600080fd5b5061025461112c565b34801561050357600080fd5b50610517610512366004612ea2565b611136565b6040516102e79190613168565b34801561053057600080fd5b5061031d61053f36600461317b565b600260209081526000928352604080842090915290825290205481565b34801561056857600080fd5b506000546001600160a01b03166103af565b34801561058657600080fd5b506003546103af906001600160a01b031681565b3480156105a657600080fd5b506105176105b5366004612ea2565b6111d0565b3480156105c657600080fd5b5061031d6105d5366004612f75565b6112e6565b3480156105e657600080fd5b506102546105f5366004612f92565b611382565b34801561060657600080fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b34801561063a57600080fd5b50610254610649366004612f75565b6113fe565b61025461065c3660046131c6565b611454565b34801561066d57600080fd5b5061025461067c366004613230565b611604565b61025461068f366004612e0f565b611699565b3480156106a057600080fd5b506102546106af36600461329e565b6118af565b3480156106c057600080fd5b5061031d6106cf366004612f75565b60086020526000908152604090205481565b3480156106ed57600080fd5b50600a546106fc9061ffff1681565b60405161ffff90911681526020016102e7565b34801561071b57600080fd5b5061025461072a3660046132da565b611961565b34801561073b57600080fd5b5061025461074a366004612f92565b6119aa565b34801561075b57600080fd5b5060065461036b9060ff1681565b34801561077557600080fd5b50610254610784366004612f75565b611a04565b34801561079557600080fd5b506105176107a43660046132f7565b611a7d565b6102546107b7366004613344565b611b30565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316146108395760405162461bcd60e51b815260206004820152601e60248201527f4c7a4170703a20696e76616c696420656e64706f696e742063616c6c6572000060448201526064015b60405180910390fd5b61ffff861660009081526001602052604081208054610857906133c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610883906133c1565b80156108d05780601f106108a5576101008083540402835291602001916108d0565b820191906000526020600020905b8154815290600101906020018083116108b357829003601f168201915b505050505090508051868690501480156108eb575060008151115b801561091357508051602082012060405161090990889088906133f5565b6040518091039020145b61096e5760405162461bcd60e51b815260206004820152602660248201527f4c7a4170703a20696e76616c696420736f757263652073656e64696e6720636f6044820152651b9d1c9858dd60d21b6064820152608401610830565b6109e48787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611cb092505050565b50505050505050565b6109f5611d29565b6040516307e0db1760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307e0db17906024015b600060405180830381600087803b158015610a5b57600080fd5b505af1158015610a6f573d6000803e3d6000fd5b5050505050565b610a7e611d29565b6000610a89846112e6565b905080821115610af25760405162461bcd60e51b815260206004820152602e60248201527f4f726967696e616c546f6b656e4272696467653a206e6f7420656e6f7567682060448201526d1999595cc818dbdb1b1958dd195960921b6064820152608401610830565b610b066001600160a01b0385168484611d83565b604080516001600160a01b038581168252602082018590528616917ff15a0a3784dea9b4fe33bc98e2450745e262d310237b2868ea8ef56967ff3ecb910160405180910390a250505050565b610b5a611d29565b6040516310ddb13760e01b815261ffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906310ddb13790602401610a41565b60408051600060208201819052308284018190526060830181905260808084018390528451808503909101815260a0840194859052600a5463040a7bb160e41b909552919384937f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316926340a7bb1092610c3e9261ffff909116919086908c908c908c9060a40161342e565b6040805180830381865afa158015610c5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7e9190613484565b9250925050935093915050565b610c93611d29565b600a805461ffff191661ffff83169081179091556040519081527fe8df78a276e2b718a366328e9120b436ea83832fbeede026392fed933e3ffa5b906020015b60405180910390a150565b61ffff831660009081526001602052604081208054829190610cff906133c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2b906133c1565b8015610d785780601f10610d4d57610100808354040283529160200191610d78565b820191906000526020600020905b815481529060010190602001808311610d5b57829003601f168201915b505050505090508383604051610d8f9291906133f5565b60405180910390208180519060200120149150509392505050565b610db2611d29565b6040516342d65a8d60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906342d65a8d90610e02908690869086906004016134a8565b600060405180830381600087803b158015610e1c57600080fd5b505af11580156109e4573d6000803e3d6000fd5b610e38611d29565b6001600160a01b038216610ea15760405162461bcd60e51b815260206004820152602a60248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c696420746f6b604482015269656e206164647265737360b01b6064820152608401610830565b6001600160a01b03821660009081526007602052604090205460ff1615610f205760405162461bcd60e51b815260206004820152602d60248201527f4f726967696e616c546f6b656e4272696467653a20746f6b656e20616c72656160448201526c191e481c9959da5cdd195c9959609a1b6064820152608401610830565b6000610f2b83611deb565b90508160ff168160ff161015610fc35760405162461bcd60e51b815260206004820152605160248201527f4f726967696e616c546f6b656e4272696467653a20736861726564206465636960448201527f6d616c73206d757374206265206c657373207468616e206f7220657175616c20606482015270746f206c6f63616c20646563696d616c7360781b608482015260a401610830565b6001600160a01b0383166000908152600760205260409020805460ff19166001179055610ff082826134dc565b610ffb90600a6135d9565b6001600160a01b03841660008181526008602090815260409182902093909355519081527ff7fe8023cb2e36bde1d59a88ac5763a8c11be6d25e6819f71bb7e23e5bf0dc1691015b60405180910390a1505050565b3330146110ae5760405162461bcd60e51b815260206004820152602660248201527f4e6f6e626c6f636b696e674c7a4170703a2063616c6c6572206d7573742062656044820152650204c7a4170760d41b6064820152608401610830565b6111248686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f890181900481028201810190925287815289935091508790879081908401838280828437600092019190915250611ef192505050565b505050505050565b611134611d29565b565b6001602052600090815260409020805461114f906133c1565b80601f016020809104026020016040519081016040528092919081815260200182805461117b906133c1565b80156111c85780601f1061119d576101008083540402835291602001916111c8565b820191906000526020600020905b8154815290600101906020018083116111ab57829003601f168201915b505050505081565b61ffff81166000908152600160205260408120805460609291906111f3906133c1565b80601f016020809104026020016040519081016040528092919081815260200182805461121f906133c1565b801561126c5780601f106112415761010080835404028352916020019161126c565b820191906000526020600020905b81548152906001019060200180831161124f57829003601f168201915b5050505050905080516000036112c45760405162461bcd60e51b815260206004820152601d60248201527f4c7a4170703a206e6f20747275737465642070617468207265636f72640000006044820152606401610830565b6112df6000601483516112d791906135e8565b83919061228b565b9392505050565b6001600160a01b03811660009081526009602052604081205461130a908390612398565b6040516370a0823160e01b81523060048201526001600160a01b038416906370a0823190602401602060405180830381865afa15801561134e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137291906135fb565b61137c91906135e8565b92915050565b61138a611d29565b81813060405160200161139f93929190613614565b60408051601f1981840301815291815261ffff85166000908152600160205220906113ca9082613680565b507f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce838383604051611043939291906134a8565b611406611d29565b600380546001600160a01b0319166001600160a01b0383169081179091556040519081527f5db758e995a17ec1ad84bdef7e8c3293a0bd6179bcce400dff5d4c3d87db726b90602001610cd3565b61145c6123bb565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660009081526007602052604090205460ff166114b45760405162461bcd60e51b81526004016108309061373f565b833410156115175760405162461bcd60e51b815260206004820152602a60248201527f4f726967696e616c546f6b656e4272696467653a206e6f7420656e6f756768206044820152691d985b1d59481cd95b9d60b21b6064820152608401610830565b60006115437f000000000000000000000000000000000000000000000000000000000000000086612414565b5090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156115a157600080fd5b505af11580156115b5573d6000803e3d6000fd5b50505050506115f37f0000000000000000000000000000000000000000000000000000000000000000828684346115ec91906135e8565b878761244e565b506115fe6001600555565b50505050565b61160c611d29565b6040516332fb62e760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063cbed8b9c90611660908890889088908890889060040161378a565b600060405180830381600087803b15801561167a57600080fd5b505af115801561168e573d6000803e3d6000fd5b505050505050505050565b61ffff861660009081526004602052604080822090516116bc90889088906133f5565b90815260408051602092819003830190206001600160401b0387166000908152925290205490508061173c5760405162461bcd60e51b815260206004820152602360248201527f4e6f6e626c6f636b696e674c7a4170703a206e6f2073746f726564206d65737360448201526261676560e81b6064820152608401610830565b80838360405161174d9291906133f5565b6040518091039020146117ac5760405162461bcd60e51b815260206004820152602160248201527f4e6f6e626c6f636b696e674c7a4170703a20696e76616c6964207061796c6f616044820152601960fa1b6064820152608401610830565b61ffff871660009081526004602052604080822090516117cf90899089906133f5565b90815260408051602092819003830181206001600160401b038916600090815290845282902093909355601f88018290048202830182019052868252611867918991899089908190840183828082843760009201919091525050604080516020601f8a018190048102820181019092528881528a935091508890889081908401838280828437600092019190915250611ef192505050565b7fc264d91f3adc5588250e1551f547752ca0cfa8f6b530d243b9f9f4cab10ea8e5878787878560405161189e9594939291906137b8565b60405180910390a150505050505050565b6118b7611d29565b600081116118ff5760405162461bcd60e51b81526020600482015260156024820152744c7a4170703a20696e76616c6964206d696e47617360581b6044820152606401610830565b61ffff83811660008181526002602090815260408083209487168084529482529182902085905581519283528201929092529081018290527f9d5c7c0b934da8fefa9c7760c98383778a12dfbfc0c3b3106518f43fb9508ac090606001611043565b611969611d29565b6006805460ff19168215159081179091556040519081527f1584ad594a70cbe1e6515592e1272a987d922b097ead875069cebe8b40c004a490602001610cd3565b6119b2611d29565b61ffff831660009081526001602052604090206119d08284836137f3565b507ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab838383604051611043939291906134a8565b611a0c611d29565b6001600160a01b038116611a715760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610830565b611a7a8161261c565b50565b604051633d7b2f6f60e21b815261ffff808616600483015284166024820152306044820152606481018290526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f5ecbdbc90608401600060405180830381865afa158015611afd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611b2591908101906138b2565b90505b949350505050565b611b386123bb565b6001600160a01b03851660009081526007602052604090205460ff16611b705760405162461bcd60e51b81526004016108309061373f565b6040516370a0823160e01b81523060048201526000906001600160a01b038716906370a0823190602401602060405180830381865afa158015611bb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdb91906135fb565b9050611bf26001600160a01b03871633308861266c565b6040516370a0823160e01b81523060048201526000906001600160a01b038816906370a0823190602401602060405180830381865afa158015611c39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c5d91906135fb565b9050600080611c7589611c7086866135e8565b612414565b90925090508015611c9457611c946001600160a01b038a163383611d83565b611ca2898389348a8a61244e565b50505050610a6f6001600555565b600080611d135a60966366ad5c8a60e01b89898989604051602401611cd89493929190613928565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152309291906126a4565b915091508161112457611124868686868561272e565b6000546001600160a01b031633146111345760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610830565b6040516001600160a01b038316602482015260448101829052611de690849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526127cb565b505050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b1790529051600091829182916001600160a01b03861691611e319190613966565b600060405180830381855afa9150503d8060008114611e6c576040519150601f19603f3d011682016040523d82523d6000602084013e611e71565b606091505b509150915081611edd5760405162461bcd60e51b815260206004820152603160248201527f4f726967696e616c546f6b656e4272696467653a206661696c656420746f2067604482015270657420746f6b656e20646563696d616c7360781b6064820152608401610830565b80806020019051810190611b289190613982565b600a5461ffff858116911614611f5e5760405162461bcd60e51b815260206004820152602c60248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c696420736f7560448201526b1c98d94818da185a5b881a5960a21b6064820152608401610830565b60008060008060008086806020019051810190611f7b919061399f565b955095509550955095509550600160ff168660ff1614611fee5760405162461bcd60e51b815260206004820152602860248201527f4f726967696e616c546f6b656e4272696467653a20756e6b6e6f776e207061636044820152676b6574207479706560c01b6064820152608401610830565b6001600160a01b03851660009081526007602052604090205460ff166120265760405162461bcd60e51b81526004016108309061373f565b6001600160a01b0385166000908152600960205260408120805484929061204e9084906135e8565b90915550600090506120608685612398565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b03161480156120a05750815b1561221e57604051632e1a7d4d60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d90602401600060405180830381600087803b15801561210757600080fd5b505af115801561211b573d6000803e3d6000fd5b505050506000856001600160a01b03168260405160006040518083038185875af1925050503d806000811461216c576040519150601f19603f3d011682016040523d82523d6000602084013e612171565b606091505b50509050806121ce5760405162461bcd60e51b815260206004820152602360248201527f4f726967696e616c546f6b656e4272696467653a206661696c656420746f2073604482015262195b9960ea1b6064820152608401610830565b60408051600081526001600160a01b03881660208201529081018390527f5e3da8fba24af91505c66214c9e629ba712ce2c1b8c318f14f7024fdcba544a89060600160405180910390a15061227e565b6122326001600160a01b0387168683611d83565b604080516001600160a01b038089168252871660208201529081018290527f5e3da8fba24af91505c66214c9e629ba712ce2c1b8c318f14f7024fdcba544a89060600160405180910390a15b5050505050505050505050565b60608161229981601f613a13565b10156122d85760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610830565b6122e28284613a13565b845110156123265760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610830565b606082158015612345576040519150600082526020820160405261238f565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561237e578051835260209283019201612366565b5050858452601f01601f1916604052505b50949350505050565b6001600160a01b0382166000908152600860205260408120546112df9083613a26565b60026005540361240d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610830565b6002600555565b6001600160a01b03821660009081526008602052604081205481906124399084613a53565b905061244581846135e8565b91509250929050565b6001600160a01b0384166124a45760405162461bcd60e51b815260206004820152601f60248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c696420746f006044820152606401610830565b600a546124b79061ffff1660008361289d565b60006124c38787612919565b9050600081116125215760405162461bcd60e51b815260206004820152602360248201527f4f726967696e616c546f6b656e4272696467653a20696e76616c696420616d6f6044820152621d5b9d60ea1b6064820152608401610830565b6001600160a01b03871660009081526009602052604081208054839290612549908490613a13565b9091555050604080516000602082018190526001600160a01b03808b169383019390935291871660608201526080810183905260a00160408051601f19818403018152919052600a549091506125c29061ffff16826125ab6020880188612f75565b6125bb6040890160208a01612f75565b878a61293c565b604080516001600160a01b038a811682523360208301528816818301526060810189905290517f49b9b5358c9580b3e6c5ee10b8b260c1e64bede87cb8a212e9e20a0b7dc20e5a9181900360800190a15050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b03808516602483015283166044820152606481018290526115fe9085906323b872dd60e01b90608401611daf565b6000606060008060008661ffff166001600160401b038111156126c9576126c9612ff8565b6040519080825280601f01601f1916602001820160405280156126f3576020820181803683370190505b50905060008087516020890160008d8df191503d925086831115612715578692505b828152826000602083013e909890975095505050505050565b8180519060200120600460008761ffff1661ffff1681526020019081526020016000208560405161275f9190613966565b9081526040805191829003602090810183206001600160401b0388166000908152915220919091557fe183f33de2837795525b4792ca4cd60535bd77c53b7e7030060bfcf5734d6b0c906127bc9087908790879087908790613a67565b60405180910390a15050505050565b6000612820826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612ad69092919063ffffffff16565b805190915015611de6578080602001905181019061283e9190613ac5565b611de65760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610830565b60065460ff16156128b557611de68383836000612ae5565b805115611de65760405162461bcd60e51b815260206004820152602c60248201527f546f6b656e427269646765426173653a2061646170746572506172616d73206d60448201526b75737420626520656d70747960a01b6064820152608401610830565b6001600160a01b0382166000908152600860205260408120546112df9083613ae2565b61ffff86166000908152600160205260408120805461295a906133c1565b80601f0160208091040260200160405190810160405280929190818152602001828054612986906133c1565b80156129d35780601f106129a8576101008083540402835291602001916129d3565b820191906000526020600020905b8154815290600101906020018083116129b657829003601f168201915b505050505090508051600003612a445760405162461bcd60e51b815260206004820152603060248201527f4c7a4170703a2064657374696e6174696f6e20636861696e206973206e6f742060448201526f61207472757374656420736f7572636560801b6064820152608401610830565b60405162c5803160e81b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c5803100908490612a9b908b9086908c908c908c908c90600401613af6565b6000604051808303818588803b158015612ab457600080fd5b505af1158015612ac8573d6000803e3d6000fd5b505050505050505050505050565b6060611b288484600085612bc4565b6000612af083612c9f565b61ffff808716600090815260026020908152604080832093891683529290529081205491925090612b22908490613a13565b905060008111612b745760405162461bcd60e51b815260206004820152601a60248201527f4c7a4170703a206d696e4761734c696d6974206e6f74207365740000000000006044820152606401610830565b808210156111245760405162461bcd60e51b815260206004820152601b60248201527f4c7a4170703a20676173206c696d697420697320746f6f206c6f7700000000006044820152606401610830565b606082471015612c255760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610830565b600080866001600160a01b03168587604051612c419190613966565b60006040518083038185875af1925050503d8060008114612c7e576040519150601f19603f3d011682016040523d82523d6000602084013e612c83565b606091505b5091509150612c9487838387612cfb565b979650505050505050565b6000602282511015612cf35760405162461bcd60e51b815260206004820152601c60248201527f4c7a4170703a20696e76616c69642061646170746572506172616d73000000006044820152606401610830565b506022015190565b60608315612d6a578251600003612d63576001600160a01b0385163b612d635760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610830565b5081611b28565b611b288383815115612d7f5781518083602001fd5b8060405162461bcd60e51b81526004016108309190613168565b803561ffff81168114612dab57600080fd5b919050565b60008083601f840112612dc257600080fd5b5081356001600160401b03811115612dd957600080fd5b602083019150836020828501011115612df157600080fd5b9250929050565b80356001600160401b0381168114612dab57600080fd5b60008060008060008060808789031215612e2857600080fd5b612e3187612d99565b955060208701356001600160401b0380821115612e4d57600080fd5b612e598a838b01612db0565b9097509550859150612e6d60408a01612df8565b94506060890135915080821115612e8357600080fd5b50612e9089828a01612db0565b979a9699509497509295939492505050565b600060208284031215612eb457600080fd5b6112df82612d99565b6001600160a01b0381168114611a7a57600080fd5b600080600060608486031215612ee757600080fd5b8335612ef281612ebd565b92506020840135612f0281612ebd565b929592945050506040919091013590565b8015158114611a7a57600080fd5b600080600060408486031215612f3657600080fd5b8335612f4181612f13565b925060208401356001600160401b03811115612f5c57600080fd5b612f6886828701612db0565b9497909650939450505050565b600060208284031215612f8757600080fd5b81356112df81612ebd565b600080600060408486031215612fa757600080fd5b612f4184612d99565b60ff81168114611a7a57600080fd5b60008060408385031215612fd257600080fd5b8235612fdd81612ebd565b91506020830135612fed81612fb0565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561303657613036612ff8565b604052919050565b60006001600160401b0382111561305757613057612ff8565b50601f01601f191660200190565b600082601f83011261307657600080fd5b81356130896130848261303e565b61300e565b81815284602083860101111561309e57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156130d057600080fd5b6130d984612d99565b925060208401356001600160401b038111156130f457600080fd5b61310086828701613065565b92505061310f60408501612df8565b90509250925092565b60005b8381101561313357818101518382015260200161311b565b50506000910152565b60008151808452613154816020860160208601613118565b601f01601f19169290920160200192915050565b6020815260006112df602083018461313c565b6000806040838503121561318e57600080fd5b61319783612d99565b91506131a560208401612d99565b90509250929050565b6000604082840312156131c057600080fd5b50919050565b60008060008060a085870312156131dc57600080fd5b8435935060208501356131ee81612ebd565b92506131fd86604087016131ae565b915060808501356001600160401b0381111561321857600080fd5b61322487828801613065565b91505092959194509250565b60008060008060006080868803121561324857600080fd5b61325186612d99565b945061325f60208701612d99565b93506040860135925060608601356001600160401b0381111561328157600080fd5b61328d88828901612db0565b969995985093965092949392505050565b6000806000606084860312156132b357600080fd5b6132bc84612d99565b92506132ca60208501612d99565b9150604084013590509250925092565b6000602082840312156132ec57600080fd5b81356112df81612f13565b6000806000806080858703121561330d57600080fd5b61331685612d99565b935061332460208601612d99565b9250604085013561333481612ebd565b9396929550929360600135925050565b600080600080600060c0868803121561335c57600080fd5b853561336781612ebd565b945060208601359350604086013561337e81612ebd565b925061338d87606088016131ae565b915060a08601356001600160401b038111156133a857600080fd5b6133b488828901613065565b9150509295509295909350565b600181811c908216806133d557607f821691505b6020821081036131c057634e487b7160e01b600052602260045260246000fd5b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b61ffff871681526001600160a01b038616602082015260a06040820181905260009061345c9083018761313c565b85151560608401528281036080840152613477818587613405565b9998505050505050505050565b6000806040838503121561349757600080fd5b505080516020909101519092909150565b61ffff84168152604060208201526000611b25604083018486613405565b634e487b7160e01b600052601160045260246000fd5b60ff828116828216039081111561137c5761137c6134c6565b600181815b80851115613530578160001904821115613516576135166134c6565b8085161561352357918102915b93841c93908002906134fa565b509250929050565b6000826135475750600161137c565b816135545750600061137c565b816001811461356a576002811461357457613590565b600191505061137c565b60ff841115613585576135856134c6565b50506001821b61137c565b5060208310610133831016604e8410600b84101617156135b3575081810a61137c565b6135bd83836134f5565b80600019048211156135d1576135d16134c6565b029392505050565b60006112df60ff841683613538565b8181038181111561137c5761137c6134c6565b60006020828403121561360d57600080fd5b5051919050565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b601f821115611de657600081815260208120601f850160051c810160208610156136615750805b601f850160051c820191505b818110156111245782815560010161366d565b81516001600160401b0381111561369957613699612ff8565b6136ad816136a784546133c1565b8461363a565b602080601f8311600181146136e257600084156136ca5750858301515b600019600386901b1c1916600185901b178555611124565b600085815260208120601f198616915b82811015613711578886015182559484019460019091019084016136f2565b508582101561372f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602b908201527f4f726967696e616c546f6b656e4272696467653a20746f6b656e206973206e6f60408201526a1d081cdd5c1c1bdc9d195960aa1b606082015260800190565b600061ffff808816835280871660208401525084604083015260806060830152612c94608083018486613405565b61ffff861681526080602082015260006137d6608083018688613405565b6001600160401b0394909416604083015250606001529392505050565b6001600160401b0383111561380a5761380a612ff8565b61381e8361381883546133c1565b8361363a565b6000601f841160018114613852576000851561383a5750838201355b600019600387901b1c1916600186901b178355610a6f565b600083815260209020601f19861690835b828110156138835786850135825560209485019460019092019101613863565b50868210156138a05760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b6000602082840312156138c457600080fd5b81516001600160401b038111156138da57600080fd5b8201601f810184136138eb57600080fd5b80516138f96130848261303e565b81815285602083850101111561390e57600080fd5b61391f826020830160208601613118565b95945050505050565b61ffff85168152608060208201526000613945608083018661313c565b6001600160401b03851660408401528281036060840152612c94818561313c565b60008251613978818460208701613118565b9190910192915050565b60006020828403121561399457600080fd5b81516112df81612fb0565b60008060008060008060c087890312156139b857600080fd5b86516139c381612fb0565b60208801519096506139d481612ebd565b60408801519095506139e581612ebd565b80945050606087015192506080870151915060a0870151613a0581612f13565b809150509295509295509295565b8082018082111561137c5761137c6134c6565b808202811582820484141761137c5761137c6134c6565b634e487b7160e01b600052601260045260246000fd5b600082613a6257613a62613a3d565b500690565b61ffff8616815260a060208201526000613a8460a083018761313c565b6001600160401b03861660408401528281036060840152613aa5818661313c565b90508281036080840152613ab9818561313c565b98975050505050505050565b600060208284031215613ad757600080fd5b81516112df81612f13565b600082613af157613af1613a3d565b500490565b61ffff8716815260c060208201526000613b1360c083018861313c565b8281036040840152613b25818861313c565b6001600160a01b0387811660608601528616608085015283810360a08501529050613477818561313c56fea2646970667358221220da3fa5a8142d2fe87b478390fca8ffe7208b90debc2d10740b6aa67ab32068f964736f6c63430008110033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}


module.exports = { OriginalTokenBridgeAbi }