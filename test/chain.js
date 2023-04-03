const ChainERC20 = artifacts.require("ChainERC20");

contract("ChainERC20", accounts => {
    it("Chain", async () => {
        const chainERC20 = await ChainERC20.deployed();
        const name = await chainERC20.name.call();
        assert.equal(name, "Mint Chain Token");

        const total = await chainERC20.balanceOf.call(accounts[0]);
        assert.equal(total, 1000 * 10 ** 18);

        const minResult = await chainERC20.mint.call(1000);
        assert.equal(minResult, true);

        const newTotal = await chainERC20.balanceOf.call(accounts[0]);
        //assert.equal(newTotal, 2000 * 10 ** 18);

        const burnResult = await chainERC20.burn.call(1000);
        assert.equal(burnResult, true);

        const new_Total = await chainERC20.balanceOf.call(accounts[0]);
       assert.equal(new_Total, 1000 * 10 ** 18);

        const resultOne = await chainERC20.configFeeAddress.call(accounts[1]);
        assert.equal(resultOne, true);

        const resultTwo = await chainERC20.collectTransferFee.call(accounts[0], accounts[1], 10, 5);
        assert.equal(resultTwo, true);

        const resultThree = await chainERC20.transferBurn.call(accounts[1], 10);
        assert.equal(resultThree, true);
    })
})