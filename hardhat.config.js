require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.RINKEBY_KEY],
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: "XV17D3XWJJAFIA5WPA6MIZG6JTSH1P1PZM",
    },
  },
};
