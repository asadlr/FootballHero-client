import React from 'react'; 
import './WelcomeScreen.scss'; 

const WelcomeScreen = ({ onClickLogin, onClickSignup }) => { // Receive both props
    return (
        <div className="welcome-screen"> 
            {/* ... Your WelcomeScreen content ...  */}

            <div className="buttons">
                <button onClick={onClickLogin}>Log In</button> 
                <button onClick={onClickSignup}>Sign Up</button> 
            </div>
        </div>
    );
};

export default WelcomeScreen; 
