// import Portis from "@portis/web3";
// import Web3 from "web3";

// const portis = new Portis("211b48db-e8cc-4b68-82ad-bf781727ea9e", "kovan");
// const web3 = new Web3(portis.provider);
// // web3.eth.defaultAccount = accounts[0]
// web3.eth
//   .getAccounts()
//   .then((accounts) => init(accounts))
//   .catch((error) => console.log(error));

// let abi = [{"constant":false,"inputs":[{"name":"mobNo","type":"uint256"}],"name":"generateOTP","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"mobNo","type":"uint256"}],"name":"getOTP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mobNo","type":"uint256"},{"name":"name","type":"string"},{"name":"otp","type":"uint256"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"mobNo","type":"uint256"}],"name":"isRegistered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"mobNo","type":"uint256"}],"name":"getUserAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"mobNo","type":"uint256"}],"name":"getUserName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ttlUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mobNo","type":"uint256"}],"name":"OTPgenerated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"mobNo","type":"uint256"}],"name":"userRegistered","type":"event"}];

// let contract = web3.eth.Contract(
//   abi,
//   "0xF41B5F201e71D9fB85FEBC168B14f078Fa28d49E"
// );

// async function init(accounts) {
//   console.log("Start");
//   let account = accounts[0];
//   web3.eth.defaultAccount = account;
// let tx = await contract.methods.generateOTP(7434847667).send();
// console.log(tx);
// let tx2 = await contract.methods.register(7434847667,"RAM",122563).send();
// console.log(tx2);
// const toAddress = account; // Address of the recipient
// const amount = 0.0002; // Willing to send 2 ethers
// const amountToSend = web3.toWei(amount, "ether"); // Convert to wei value
// var send = await web3.eth
//   .sendTransaction({
//     from: account,
//     to: toAddress,
//     value: amountToSend
//   })
//   .send();
// console.log(send);
// }
