// backend/services/blockchainService.js
const Web3 = require('web3');
const { abi, networks } = require('../../build/contracts/DocumentVerification.json');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const networkId = Object.keys(networks)[0];
const contract = new web3.eth.Contract(abi, networks[networkId].address);

exports.recordDocument = async (document) => {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.uploadDocument(document.data).send({ from: accounts[0] });
};