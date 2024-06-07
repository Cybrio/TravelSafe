import React from 'react';

function Home() {
  return (
    <div>
      <h2>Travel Itinerary</h2>
      <div>
        <h3>New York, NY</h3>
        <img src="path/to/image1.jpg" alt="New York" />
      </div>
      <div>
        <h3>Los Angeles, CA</h3>
        <img src="path/to/image2.jpg" alt="Los Angeles" />
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/messages">Messages</a>
        <a href="/search">Search</a>
        <a href="/profile">Profile</a>
      </nav>
    </div>
  );
}

export default Home;