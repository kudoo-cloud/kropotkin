import {
  Avalanche,
  BinTools,
  Buffer,
  BN
} from "avalanche"

require('dotenv').config();

let bintools = BinTools.getInstance();


let myNetworkID = process.env.NETWORK_ID; //default is 3, we want to override that for our local network
let myBlockchainID = process.env.BLOCKCHAIN_ID; // The X-Chain blockchainID on this network
let ava = new Avalanche("localhost", 9650, "http", myNetworkID, myBlockchainID);
let xchain = ava.XChain(); //returns a reference to the X-Chain used by AvalancheJS