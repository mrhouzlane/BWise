/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TablelandDeployments,
  TablelandDeploymentsInterface,
} from "../../../../contracts/TableLand/utils/TablelandDeployments";

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
] as const;

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208a161a0cbfb5c04fb97024696c56844117e86d89797b3b717670c86f9bb22b9d64736f6c63430008140033";

type TablelandDeploymentsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TablelandDeploymentsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TablelandDeployments__factory extends ContractFactory {
  constructor(...args: TablelandDeploymentsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TablelandDeployments> {
    return super.deploy(overrides || {}) as Promise<TablelandDeployments>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TablelandDeployments {
    return super.attach(address) as TablelandDeployments;
  }
  override connect(signer: Signer): TablelandDeployments__factory {
    return super.connect(signer) as TablelandDeployments__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TablelandDeploymentsInterface {
    return new utils.Interface(_abi) as TablelandDeploymentsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TablelandDeployments {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TablelandDeployments;
  }
}
