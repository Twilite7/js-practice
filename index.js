import { checkBalance, walletInfo } from "./wallet.js";

console.log(walletInfo("0xef2d443n", 200));
console.log(checkBalance(200));
console.log(checkBalance(50));
console.log(checkBalance(0));