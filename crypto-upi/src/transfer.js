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
let token;

async function init(accounts) {
  console.log(accounts[0]);
  console.log("Start");
  console.log("0");

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
  console.log("0.5");

  contract = web3.eth.Contract(
    abi,
    "0xF41B5F201e71D9fB85FEBC168B14f078Fa28d49E"
  );

  console.log("1");

  let abiToken = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "tokens", type: "uint256" }
      ],
      name: "approve",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokens", type: "uint256" }
      ],
      name: "transferFrom",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "_totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "tokenOwner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "acceptOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
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
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { name: "a", type: "uint256" },
        { name: "b", type: "uint256" }
      ],
      name: "safeSub",
      outputs: [{ name: "c", type: "uint256" }],
      payable: false,
      stateMutability: "pure",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "to", type: "address" },
        { name: "tokens", type: "uint256" }
      ],
      name: "transfer",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { name: "a", type: "uint256" },
        { name: "b", type: "uint256" }
      ],
      name: "safeDiv",
      outputs: [{ name: "c", type: "uint256" }],
      payable: false,
      stateMutability: "pure",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "tokens", type: "uint256" },
        { name: "data", type: "bytes" }
      ],
      name: "approveAndCall",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { name: "a", type: "uint256" },
        { name: "b", type: "uint256" }
      ],
      name: "safeMul",
      outputs: [{ name: "c", type: "uint256" }],
      payable: false,
      stateMutability: "pure",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "newOwner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "tokenAddress", type: "address" },
        { name: "tokens", type: "uint256" }
      ],
      name: "transferAnyERC20Token",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { name: "tokenOwner", type: "address" },
        { name: "spender", type: "address" }
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { name: "a", type: "uint256" },
        { name: "b", type: "uint256" }
      ],
      name: "safeAdd",
      outputs: [{ name: "c", type: "uint256" }],
      payable: false,
      stateMutability: "pure",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ name: "_newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "_from", type: "address" },
        { indexed: true, name: "_to", type: "address" }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "tokens", type: "uint256" }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "tokenOwner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "tokens", type: "uint256" }
      ],
      name: "Approval",
      type: "event"
    }
  ];

  console.log("2");

  token = web3.eth.Contract(
    abiToken,
    "0xfba0B43D12b13FFD9A2148C06403Edb3299d974A"
  );
  console.log("End : init");

  let account = accounts[0];

  let bal = await token.methods.balanceOf(account).call();
  console.log(bal);
  document.getElementById("balance").value = bal.balance;

  web3.eth.defaultAccount = account;
}

window.transferToken = async function () {
  var mobNo = document.getElementById("moNo").value;
  var amt = document.getElementById("amount").value;
  let toAddress = await contract.methods.getUserAddress(parseInt(mobNo)).call();
  console.log(toAddress);
  document.getElementById("disc").innerHTML = toAddress;
  let tx = await token.methods.transfer(toAddress, parseInt(amt)).send();
  console.log(tx);
};
