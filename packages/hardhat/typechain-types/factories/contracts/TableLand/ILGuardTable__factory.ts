/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ILGuardTable,
  ILGuardTableInterface,
} from "../../../contracts/TableLand/ILGuardTable";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256",
      },
    ],
    name: "ChainNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "create",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "insert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610882806100206000396000f3fe6080604052600436106100345760003560e01c8063150b7a021461003957806325f7b1de146100b2578063efc81a8c146100c2575b600080fd5b34801561004557600080fd5b5061007d6100543660046105ad565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b3480156100be57600080fd5b505b005b6100c0600061011e60405180606001604052806039815260200161083d603991396040518060400160405280600d81526020017f494c47554152445f5441424c45000000000000000000000000000000000000008152506101ab565b90506101286101e1565b73ffffffffffffffffffffffffffffffffffffffff1663a15ab08d30836040518363ffffffff1660e01b81526004016101629291906106cb565b6020604051808303816000875af1158015610181573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a59190610739565b60005550565b6060816101b7466103b4565b846040516020016101ca93929190610752565b604051602081830303815290604052905092915050565b600046600103610204575073012969f7e3439a9b04025b5a049eb9bad82a8c1290565b46600a03610225575073fad44bf5b843de943a09d4f3e84949a11d3aa3e690565b4661a4b1036102475750739abd75e8640871a5a20d3b4ee6330a04c962affd90565b4661a4ba036102695750731a22854c5b1642760a827f20137a67930ae108d290565b4660890361028a5750735c4e6a9e5c1e1bf445a062006faf19ea6c49afea90565b4661013a036102ac57507359ef8bf2d6c102b4c42aef9189e1a9f0abfd652d90565b4662aa36a7036102cf575073c50c62498448acc8dbde43da77f8d5d2e2c7597d90565b466101a4036102f1575073c72e8a7be04f2469f8c2db3f1bdf69a7d516abba90565b4662066eed03610314575073033f69e8d119205089ab15d340f5b797732f646b90565b4662013881036103375750734b48841d4b32c4650e4abc117a03fe8b51f38f6890565b466204cb2f0361035a575073030bcf3d50cad04c2e57391b12740982a930862190565b46617a690361037c575073e7f1725e7734ce288f8367e1bb143e90bb3f051290565b6040517f264e42cf00000000000000000000000000000000000000000000000000000000815246600482015260240160405180910390fd5b606060006103c183610472565b600101905060008167ffffffffffffffff8111156103e1576103e161057e565b6040519080825280601f01601f19166020018201604052801561040b576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461041557509392505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106104bb577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106104e7576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061050557662386f26fc10000830492506010015b6305f5e100831061051d576305f5e100830492506008015b612710831061053157612710830492506004015b60648310610543576064830492506002015b600a831061054f576001015b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461057957600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080600080608085870312156105c357600080fd5b6105cc85610555565b93506105da60208601610555565b925060408501359150606085013567ffffffffffffffff808211156105fe57600080fd5b818701915087601f83011261061257600080fd5b8135818111156106245761062461057e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561066a5761066a61057e565b816040528281528a602084870101111561068357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60005b838110156106c25781810151838201526020016106aa565b50506000910152565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526107068160608501602087016106a7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b60006020828403121561074b57600080fd5b5051919050565b7f435245415445205441424c45200000000000000000000000000000000000000081526000845161078a81600d8501602089016106a7565b7f5f00000000000000000000000000000000000000000000000000000000000000600d9184019182015284516107c781600e8401602089016106a7565b7f2800000000000000000000000000000000000000000000000000000000000000600e9290910191820152835161080581600f8401602088016106a7565b7f2900000000000000000000000000000000000000000000000000000000000000600f92909101918201526010019594505050505056fe504f4f4c20746578742c504c4154464f524d20746578742c56616c756520696e74656765722c4175746f5f726562616c616e636520626f6f6ca164736f6c6343000813000a";

type ILGuardTableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ILGuardTableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ILGuardTable__factory extends ContractFactory {
  constructor(...args: ILGuardTableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ILGuardTable> {
    return super.deploy(overrides || {}) as Promise<ILGuardTable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ILGuardTable {
    return super.attach(address) as ILGuardTable;
  }
  override connect(signer: Signer): ILGuardTable__factory {
    return super.connect(signer) as ILGuardTable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ILGuardTableInterface {
    return new utils.Interface(_abi) as ILGuardTableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILGuardTable {
    return new Contract(address, _abi, signerOrProvider) as ILGuardTable;
  }
}