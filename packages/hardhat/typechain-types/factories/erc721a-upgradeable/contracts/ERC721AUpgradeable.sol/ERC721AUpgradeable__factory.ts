/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC721AUpgradeable,
  ERC721AUpgradeableInterface,
} from "../../../../erc721a-upgradeable/contracts/ERC721AUpgradeable.sol/ERC721AUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611505806100206000396000f3fe6080604052600436106100dd5760003560e01c80636352211e1161007f578063a22cb46511610059578063a22cb4651461026f578063b88d4fde1461028f578063c87b56dd146102a2578063e985e9c5146102c257600080fd5b80636352211e1461021a57806370a082311461023a57806395d89b411461025a57600080fd5b8063095ea7b3116100bb578063095ea7b31461017e57806318160ddd1461019357806323b872dd146101f457806342842e0e1461020757600080fd5b806301ffc9a7146100e257806306fdde0314610117578063081812fc14610139575b600080fd5b3480156100ee57600080fd5b506101026100fd3660046110f3565b610337565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b5061012c61041c565b60405161010e919061117e565b34801561014557600080fd5b50610159610154366004611191565b6104d0565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b61019161018c3660046111ce565b610559565b005b34801561019f57600080fd5b507f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c41547f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4054035b60405190815260200161010e565b6101916102023660046111f8565b610569565b6101916102153660046111f8565b6108fb565b34801561022657600080fd5b50610159610235366004611191565b61091b565b34801561024657600080fd5b506101e6610255366004611234565b610926565b34801561026657600080fd5b5061012c6109c7565b34801561027b57600080fd5b5061019161028a36600461124f565b6109f8565b61019161029d3660046112ba565b610aae565b3480156102ae57600080fd5b5061012c6102bd366004611191565b610b1e565b3480156102ce57600080fd5b506101026102dd3660046113b4565b73ffffffffffffffffffffffffffffffffffffffff91821660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c476020908152604080832093909416825291909152205460ff1690565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614806103ca57507f80ac58cd000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b8061041657507f5b5e139f000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60607f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c40600201805461044d906113e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610479906113e7565b80156104c65780601f1061049b576101008083540402835291602001916104c6565b820191906000526020600020905b8154815290600101906020018083116104a957829003601f168201915b5050505050905090565b60006104db82610bc8565b610511576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c46602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b61056582826001610c47565b5050565b600061057482610da1565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105db576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c466020526040902080543380821473ffffffffffffffffffffffffffffffffffffffff8816909114176106b65773ffffffffffffffffffffffffffffffffffffffff861660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c476020908152604080832033845290915290205460ff166106b6576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516610703576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801561070e57600082555b73ffffffffffffffffffffffffffffffffffffffff86811660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c45602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019055918716808252919020805460010190554260a01b177c02000000000000000000000000000000000000000000000000000000001760008581527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4460205260408120919091557c020000000000000000000000000000000000000000000000000000000084169003610898576001840160008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4460205260408120549003610896577f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c405481146108965760008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c44602052604090208490555b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b61091683838360405180602001604052806000815250610aae565b505050565b600061041682610da1565b600073ffffffffffffffffffffffffffffffffffffffff8216610975576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff1660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c45602052604090205467ffffffffffffffff1690565b60607f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c40600301805461044d906113e7565b3360008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c476020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610ab9848484610569565b73ffffffffffffffffffffffffffffffffffffffff83163b15610b1857610ae284848484610ee7565b610b18576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6060610b2982610bc8565b610b5f576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610b7660408051602081019091526000815290565b90508051600003610b965760405180602001604052806000815250610bc1565b80610ba084611060565b604051602001610bb192919061143a565b6040516020818303038152906040525b9392505050565b60007f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c40548210801561041657505060009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4460205260409020547c0100000000000000000000000000000000000000000000000000000000161590565b6000610c528361091b565b90508115610d00573373ffffffffffffffffffffffffffffffffffffffff821614610d005773ffffffffffffffffffffffffffffffffffffffff811660009081527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c476020908152604080832033845290915290205460ff16610d00576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008381527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c46602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff88811691821790925591518693918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a450505050565b60008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c446020526040812054907c010000000000000000000000000000000000000000000000000000000082169003610eb55780600003610eb0577f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c40548210610e58576040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160008181527f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4460205260409020548015610e58575b919050565b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f150b7a0200000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290610f42903390899088908890600401611469565b6020604051808303816000875af1925050508015610f9b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610f98918101906114b2565b60015b611012573d808015610fc9576040519150601f19603f3d011682016040523d82523d6000602084013e610fce565b606091505b50805160000361100a576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050949350505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a90048061107a57508190037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909101908152919050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146110f057600080fd5b50565b60006020828403121561110557600080fd5b8135610bc1816110c2565b60005b8381101561112b578181015183820152602001611113565b50506000910152565b6000815180845261114c816020860160208601611110565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610bc16020830184611134565b6000602082840312156111a357600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610eb057600080fd5b600080604083850312156111e157600080fd5b6111ea836111aa565b946020939093013593505050565b60008060006060848603121561120d57600080fd5b611216846111aa565b9250611224602085016111aa565b9150604084013590509250925092565b60006020828403121561124657600080fd5b610bc1826111aa565b6000806040838503121561126257600080fd5b61126b836111aa565b91506020830135801515811461128057600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080600080608085870312156112d057600080fd5b6112d9856111aa565b93506112e7602086016111aa565b925060408501359150606085013567ffffffffffffffff8082111561130b57600080fd5b818701915087601f83011261131f57600080fd5b8135818111156113315761133161128b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156113775761137761128b565b816040528281528a602084870101111561139057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156113c757600080fd5b6113d0836111aa565b91506113de602084016111aa565b90509250929050565b600181811c908216806113fb57607f821691505b602082108103611434577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000835161144c818460208801611110565b835190830190611460818360208801611110565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526114a86080830184611134565b9695505050505050565b6000602082840312156114c457600080fd5b8151610bc1816110c256fea2646970667358221220c62d0d6c9ea164d6dc8373cfe7b9b7b2b44960882e119cbd8599cbd62a5609de64736f6c63430008130033";

type ERC721AUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721AUpgradeable__factory extends ContractFactory {
  constructor(...args: ERC721AUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721AUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721AUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721AUpgradeable {
    return super.attach(address) as ERC721AUpgradeable;
  }
  override connect(signer: Signer): ERC721AUpgradeable__factory {
    return super.connect(signer) as ERC721AUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AUpgradeableInterface {
    return new utils.Interface(_abi) as ERC721AUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721AUpgradeable;
  }
}
