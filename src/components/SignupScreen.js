import React, { useState } from 'react'; 

const SignupScreen = () => {
    // State for input fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="signup-screen">
            <h2>Create your FootballHero Account</h2>
              {/* Add input fields and a "Sign Up" button */} 
        </div>
    );
};

export default SignupScreen; 
