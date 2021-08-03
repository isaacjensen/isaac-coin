const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f9ee87743fc2aa7fe17e9487187641b7f03fc33e7ea9c33aeea2790d6bed299d');
const myWalletAddress = myKey.getPublic('hex');

let isaaccoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
isaaccoin.addTransaction(tx1);
// const tx2 = new Transaction(myWalletAddress, 'address1', 50);
// tx2.signTransaction(myKey);
// isaaccoin.addTransaction(tx2);

console.log('\n Starting the miner...');
isaaccoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of isaac is', isaaccoin.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid?', isaaccoin.isChainValid());