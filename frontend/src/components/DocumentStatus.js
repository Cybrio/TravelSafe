import React, { useState, useEffect } from 'react';

function DocumentStatus() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await fetch('/api/documents', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setDocuments(data);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <h2>Uploaded Documents</h2>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>{doc.name} - {doc.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentStatus;