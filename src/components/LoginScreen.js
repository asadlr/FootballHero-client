import React, { useState } from 'react'; // Add useState 

const LoginScreen = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState(''); 

    return (
        <div className="login-screen">
            <h2>Welcome back to FootballHero!</h2>
            <p>Please enter your username or email and password:</p>

            <form> {/* We'll add submit handling later */}
                <input 
                    type="text" 
                    placeholder="Username or Email" 
                    value={usernameOrEmail} 
                    onChange={(e) => setUsernameOrEmail(e.target.value)} 
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <div className="buttons"> 
                        <button type="button" onClick={() => console.log('Log In Clicked')}>Log In</button>
                        <button type="button" onClick={() => console.log('Forgot Password Clicked')}>Forgot Password</button>
                        {/* Add Social Login button later */}
                    </div>
            </form>
        </div>
    );
};

export default LoginScreen;
