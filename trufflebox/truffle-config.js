const path = require('path')
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "vapp/src/contracts"),
  networks: {
    development: {
      host: "10.200.10.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
