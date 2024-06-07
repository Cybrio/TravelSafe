// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;

contract DocumentVerification {
    struct Document {
        string ipfsHash;
        uint256 timestamp;
    }

    mapping(address => Document[]) private documents;

    event DocumentUploaded(address indexed user, string ipfsHash, uint256 timestamp);

    function uploadDocument(string memory ipfsHash) public {
        Document memory newDoc = Document(ipfsHash, block.timestamp);
        documents[msg.sender].push(newDoc);
        emit DocumentUploaded(msg.sender, ipfsHash, block.timestamp);
    }

    function getDocuments(address user) public view returns (Document[] memory) {
        return documents[user];
    }
}