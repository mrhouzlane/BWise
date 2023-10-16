export interface TablelandNetworkConfig {
    // tableland testnet testnets
    sepolia: string;
    mumbai: string;
    "filecoin-calibration": string;
  }
  
  const homesteadAddr = "0x012969f7e3439a9B04025b5a049EB9BAD82A8C12";
  
  export const proxies: TablelandNetworkConfig = {
    sepolia: "0xc50C62498448ACc8dBdE43DA77f8D5D2E2c7597D",
    mumbai: "0x4b48841d4b32C4650E4ABc117A03FE8B51f38F68",
    "filecoin-calibration": "0x030BCf3D50cad04c2e57391B12740982A9308621",
  };
  
  const localTablelandURI = "http://localhost:8080/api/v1/tables/31337/";
  export const baseURIs: TablelandNetworkConfig = {
    // testnets
    sepolia: "https://testnets.tableland.network/api/v1/tables/11155111/",
    mumbai: "https://testnets.tableland.network/api/v1/tables/80001/",
    "filecoin-calibration":
      "https://testnets.tableland.network/api/v1/tables/314159/",
  };
  