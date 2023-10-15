// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";


contract ILGuardTable is ERC721Holder{
    // The table token ID, assigned upon `TablelandTables` minting a table
    uint256 private _tableId;
    // Table prefix for the table (custom value)
    string private constant _TABLE_PREFIX = "ILGUARD_TABLE";

    function create() public payable {
        // Define the schema for your table with the specified columns
        string memory schema = SQLHelpers.toCreateFromSchema(
            "POOL text,"    // String column for POOL
            "PLATFORM text," // String column for PLATFORM
            "Value integer," // Integer column for Value
            "Auto_rebalance bool", // Bool column for Auto-rebalance
            _TABLE_PREFIX
        );

        // Create the table using the specified schema
        _tableId = TablelandDeployments.get().create(
            address(this),
            schema
        );
    }

        function insert(
        string memory pool, 
        string memory platform, 
        uint256 value, 
        bool autoRebalance
    ) public payable {
        /* Under the hood, SQL helpers formulates:
        *
        *  INSERT INTO {prefix}_{chainId}_{tableId} (POOL,PLATFORM,Value,Auto_rebalance) VALUES(
        *    'pool',
        *    'platform',
        *    value,
        *    autoRebalance
        *  );
        */

        // Convert to Strings for SQL insertion 
        string memory data = string(abi.encodePacked(
            SQLHelpers.quote(pool), ",",
            SQLHelpers.quote(platform), ",",
            Strings.toString(value), ",", 
            SQLHelpers.quote(autoRebalance ? "true" : "false")  // Convert bool to string
        ));

        TablelandDeployments.get().mutate(
            address(this),
            _tableId,
            SQLHelpers.toInsert(
                _TABLE_PREFIX,
                _tableId,
                "POOL,PLATFORM,Value,Auto_rebalance",
                data
            )
        );
    }



}