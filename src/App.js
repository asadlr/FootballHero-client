import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen'; 
import SignupScreen from './components/SignupScreen'; 

function App() {
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [showSignupScreen, setShowSignupScreen] = useState(false);
  const setShowSignupScreenFunc = () => {
    setShowSignupScreen(true); // Modify state to display SignupScreen
}; 
  return (
    <div className="App">
      {showLoginScreen ?  
          <LoginScreen /> : 
      showSignupScreen ? 
          <SignupScreen /> : 
          <WelcomeScreen 
            onClickLogin={() => setShowLoginScreen(true)}
            onClickSignup={setShowSignupScreenFunc} 
          /> 
      }
    </div>
  );
}

export default App;
