export function checkBalance(balance) {
    if (balance >= 100) return "Ready to deploy!";
    else if (balance > 0) return "Low balance.";
    else return "Empty wallet!";
}

export function walletInfo(address, balance) {
    return `Wallet: ${address} | Balance: ${balance} tokens`;
}