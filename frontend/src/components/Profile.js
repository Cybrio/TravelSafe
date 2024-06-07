import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/user/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUsername(data.username);
            setWalletAddress(data.walletAddress);
        };
        fetchProfile();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        const response = await fetch('/api/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ username, walletAddress })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Profile updated successfully');
        } else {
            alert(data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Wallet Address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
            />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default Profile;