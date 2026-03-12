// ZENO - JS Practice
// Variables
const goal = "deploy a smart contract";

// Functions
function walletInfo(address, balance) {
	return `Wallet: ${address} | Balance: ${balance} tokens`;
}

// Conditionals
function checkBalance(balance) {
	if (balance >= 100) return "Ready to deploy!";
	else if (balance > 0) return "Low balance.";
	else return "Empty wallet";
}

// Arrays & Objects
const wallets = [
	{address: "0xdkn3jri43", balance: 200},
	{address: "0x34jg8g9gr", balance: 0}
];
wallets.foreach((wallet) => {
	console.log(checkBalance(wallet.balance));
});

// Async/Await
async function deploy() {
	console.log("Deploying ...");
	console.log("Contract deployed!");
}

deploy();
