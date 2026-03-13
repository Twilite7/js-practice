import { checkBalance, walletInfo } from "./wallet.js";

console.log(walletInfo("0xef2d443n", 200));
console.log(checkBalance(200));
console.log(checkBalance(50));
console.log(checkBalance(0));

async function getBalance(address) {
	try {
		if (!address) throw new Error ("No wallet address provided!");
		console.log(`Fetching balance for ${address} ...`);
		console.log("Balance: 9999 CUSD");
	} catch (error) {
		console.log("Error:", error.message);
	}
}

getBalance("0xrjfr9ef23d");
getBalance("");