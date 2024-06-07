import React, { useState } from 'react';

function DocumentUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/documents/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: formData
    });

    if (response.ok) {
      alert('File uploaded successfully');
    } else {
      alert('Failed to upload file');
    }
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Document</button>
    </div>
  );
}

export default DocumentUpload;