// test/DocumentVerification.test.js
const DocumentVerification = artifacts.require("DocumentVerification");

contract('DocumentVerification', (accounts) => {
  it('should upload and retrieve documents', async () => {
    const instance = await DocumentVerification.deployed();
    await instance.uploadDocument('QmSomeIpfsHash', { from: accounts[0] });
    const docs = await instance.getDocuments(accounts[0]);
    assert.equal(docs.length, 1, 'Document was not uploaded');
    assert.equal(docs[0].ipfsHash, 'QmSomeIpfsHash', 'IPFS hash does not match');
  });
});