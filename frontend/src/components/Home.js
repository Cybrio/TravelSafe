import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Document Verification System</h1>
      <p className="lead text-center">Verify your documents quickly and securely using our system.</p>
      <div className="text-center">
        <a href="/register" className="btn btn-primary mr-2">Register</a>
        <a href="/login" className="btn btn-secondary">Login</a>
      </div>
    </div>
  );
};

export default Home;