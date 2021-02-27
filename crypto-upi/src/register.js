import Portis from "@portis/web3";
import Web3 from "web3";
// import "https://cdn.jsdelivr.net/npm/@portis/web3@3.0.2/umd/index.js";
const portis = new Portis("211b48db-e8cc-4b68-82ad-bf781727ea9e", "kovan");
const web3 = new Web3(portis.provider);
// web3.eth.defaultAccount = accounts[0]

web3.eth
  .getAccounts()
  .then((accounts) => init(accounts))
  .catch((error) => console.log(error));

let contract;

async function init(accounts) {
  console.log(accounts[0]);
  console.log("Start");

  let abi = [
    {
      constant: false,
      inputs: [{ name: "mobNo", type: "uint256" }],
      name: "generateOTP",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "mobNo", type: "uint256" }],
      name: "getOTP",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "mobNo", type: "uint256" },
        { name: "name", type: "string" },
        { name: "otp", type: "uint256" }
      ],
      name: "register",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "mobNo", type: "uint256" }],
      name: "isRegistered",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "mobNo", type: "uint256" }],
      name: "getUserAddress",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "mobNo", type: "uint256" }],
      name: "getUserName",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "ttlUsers",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [{ indexed: false, name: "mobNo", type: "uint256" }],
      name: "OTPgenerated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "addr", type: "address" },
        { indexed: false, name: "mobNo", type: "uint256" }
      ],
      name: "userRegistered",
      type: "event"
    }
  ];

  contract = web3.eth.Contract(
    abi,
    "0xF41B5F201e71D9fB85FEBC168B14f078Fa28d49E"
  );

  let account = accounts[0];
  web3.eth.defaultAccount = account;
}

window.doSomething = async function () {
  // alert(document.getElementById("MobNo").value);
  var mobNo = document.getElementById("MobNo").value;
  // var name = document.getElementById("name").value;

  let tx = await contract.methods.generateOTP(parseInt(mobNo)).send();
  console.log(tx);

  document.getElementById("OTP").value = "122563";

  console.log(mobNo);
  // console.log(name);

  // alert("do something");
  // console.log("do something ");
};

window.registerUser = async function () {
  var mobNo = document.getElementById("moNo").value;
  var name = document.getElementById("name").value;
  var otp = document.getElementById("OTP").value;

  let tx = await contract.methods
    .register(parseInt(mobNo), name, parseInt(otp))
    .send();
  console.log(tx);
};
