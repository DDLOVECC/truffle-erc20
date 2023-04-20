# truffle-erc20
## 部署本地截图
![image](https://github.com/DDLOVECC/truffle-erc20/blob/master/1.png)
![image](https://github.com/DDLOVECC/truffle-erc20/blob/master/2.png)

##本地Test截图
![image](https://github.com/DDLOVECC/truffle-erc20/blob/master/3.png)

### 20230420-sepolia测试网部署信息
```sh
    E:\TruffleContractWorkplace\Truffle-ERC20>truffle migrate --network sepolia
    
    Compiling your contracts...
    ===========================
    > Compiling .\contracts\ChainERC20.sol
    > Compiling .\contracts\ChainERC20.sol
    > Artifacts written to E:\TruffleContractWorkplace\Truffle-ERC20\build\contracts
    > Compiled successfully using:
       - solc: 0.8.18+commit.87f61d96.Emscripten.clang
    
    
    Migrations dry-run (simulation)
    ===============================
    > Network name:    'sepolia-fork'
    > Network id:      11155111
    > Block gas limit: 30000000 (0x1c9c380)
    
    
    1_deploy_chain.js
    =================
    
       Replacing 'ChainERC20'
       ----------------------
       > block number:        3325185
       > block timestamp:     1681980857
       > account:             0x046Daf2De2958316A64Deae5450a01B4F3464086
       > balance:             23.097220939213078076
       > gas used:            2163532 (0x21034c)
       > gas price:           1.5 gwei
       > value sent:          0 ETH
       > total cost:          0.003245298 ETH
    
       -------------------------------------
       > Total cost:         0.003245298 ETH
    
    Summary
    =======
    > Total deployments:   1
    > Final cost:          0.003245298 ETH
    
    
    
    
    Starting migrations...
    ======================
    > Network name:    'sepolia'
    > Network id:      11155111
    > Block gas limit: 30000000 (0x1c9c380)
    
    
    1_deploy_chain.js
    =================
    
       Replacing 'ChainERC20'
       ----------------------
       > transaction hash:    0xe56e15cc106f7464d0b0efa7749cb1edaabc5829da3910312883ef8c82edcd6f
       > Blocks: 1            Seconds: 11
       > contract address:    0xDF8ad2dAB1809B3C4D0BC25b84e2bB557Fcd2920
       > block number:        3325193
       > block timestamp:     1681980876
       > account:             0x046Daf2De2958316A64Deae5450a01B4F3464086
       > balance:             23.097219817213078076
       > gas used:            2164280 (0x210638)
       > gas price:           1.5 gwei
       > value sent:          0 ETH
       > total cost:          0.00324642 ETH
    
       > Saving artifacts
       -------------------------------------
       > Total cost:          0.00324642 ETH
    
    Summary
    =======
    > Total deployments:   1
    > Final cost:          0.00324642 ETH
    

```
