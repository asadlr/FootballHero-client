import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LoginScreen = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usernameOrEmail, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/home'); // Use navigate to redirect
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-screen">
            {/* Your form and inputs here */}
            {error && <p className="error-message">{error}</p>}
            {/* Include this error message in your form */}
        </div>
    );
};

export default LoginScreen;
