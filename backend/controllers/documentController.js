const Document = require('../models/Document');
const blockchainService = require('../services/blockchainService');

exports.uploadDocument = async (req, res) => {
  const { documentData } = req.body;
  // Belge doğrulama işlemleri
  const isValid = await validateDocument(documentData);
  if (!isValid) {
    return res.status(400).send('Invalid document');
  }
  const document = new Document({ data: documentData, userId: req.userId });
  await document.save();
  // Blockchain'e kaydet
  await blockchainService.recordDocument(document);
  res.status(201).send('Document uploaded and verified');
};

exports.getDocuments = async (req, res) => {
  const documents = await Document.find({ userId: req.userId });
  res.json(documents);
};