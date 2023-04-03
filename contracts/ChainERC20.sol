// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChainERC20 is ERC20 {
    uint256 private _totalSupply;
    address public owner;
    address public feeConfigAddress;
    mapping(address => uint256) private feeBalances;

    event Fee(address indexed from, address indexed to, uint256 amount);
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol){
        owner = msg.sender;
        _totalSupply = 1000 * 10 ** decimals();
        _mint(msg.sender, _totalSupply);
    }

    function totalSupply() public view override returns (uint256) {
        return _totalSupply;
    }

    function mint(uint256 amount) public returns (bool) {
        require(msg.sender == owner, "Only the owner can mint new tokens");
        _mint(msg.sender, amount * 10 ** decimals());
        return true;
    }

    function burn(uint256 amount) public returns (bool) {
        require(msg.sender == owner, "Only the owner can burn tokens");
        _burn(msg.sender, amount * 10 ** decimals());
        return true;
    }

    function configFeeAddress(address feeAddress) public returns (bool) {
        require(msg.sender == owner, "Only the owner can config fee");
        feeConfigAddress = feeAddress;
        return true;
    }

    function collectTransferFee(address from, address to, uint256 amount, uint256 fee) public returns (bool) {
        require(fee > 0 && fee <= 100, "Invalid fee ");
        require(amount <= balanceOf(from), "balance not in range");

        uint256 realFee = amount * fee / 100;
        uint256 transferAmount = amount - realFee;
        _transfer(from, to, transferAmount);
        feeBalances[feeConfigAddress] += fee;

        emit Fee(from, owner, fee);

        return true;
    }

    function transferBurn(address recipient, uint256 amount) public returns (bool) {
        uint256 burnAmount = amount * 10 / 100;
        uint256 trueAmount = amount - burnAmount;
        _burn(msg.sender, burnAmount);
        _transfer(msg.sender, recipient, trueAmount);
        return true;
    }


}
