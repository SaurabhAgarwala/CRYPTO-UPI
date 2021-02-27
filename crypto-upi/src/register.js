import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis("211b48db-e8cc-4b68-82ad-bf781727ea9e", "kovan");
const web3 = new Web3(portis.provider);
// web3.eth.defaultAccount = accounts[0]
web3.eth
  .getAccounts()
  .then((accounts) => init(accounts))
  .catch((error) => console.log(error));

async function init(accounts) {
  console.log(accounts[0]);
  console.log("Start");
  let account = accounts[0];
  web3.eth.defaultAccount = account;
  // let tx = await contract.methods.generateOTP(7434847667).send();
  // console.log(tx);
}

async function generateOTP() {
  console.log("Start : OTP");
}
