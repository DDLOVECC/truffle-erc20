const chainERC20 = artifacts.require("ChainERC20");

module.exports = function (deployer) {
    deployer.deploy(chainERC20,"Mint Chain Token","MCT");
};
