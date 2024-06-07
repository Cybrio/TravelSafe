// migrations/2_deploy_contracts.js
const DocumentVerification = artifacts.require("DocumentVerification");

module.exports = function (deployer) {
  deployer.deploy(DocumentVerification);
};