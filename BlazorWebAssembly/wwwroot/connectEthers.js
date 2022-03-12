
import {ethers} from "./ethers-5.1.esm.min.js";
const provider = new ethers.providers.Web3Provider(window.ethereum)

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();
var address = await signer.getAddress();

function test2() {
    document.getElementById('hello').innerHTML = "Goodbye";            
    }
