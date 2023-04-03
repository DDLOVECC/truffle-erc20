require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require('@truffle/hdwallet-provider');
const privKey = process.env.privKey;
const infuraId = process.env.infuraId;
const apiKey = process.env.apiKey;
module.exports = {


  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    sepolia: {
      provider: function () {
        return new HDWalletProvider(privKey, "https://eth-sepolia.g.alchemy.com/v2/" + infuraId);
      },
      gas: 10000000,
      gasPrice: 1500000000,
      network_id: 11155111
    }

  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },
  plugins: ['truffle-plugin-verify'],
   api_keys: {
        etherscan: apiKey,
    },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.18",      // Fetch exact version from solc-bin (default: truffle's version)
      //docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "london"
      }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
