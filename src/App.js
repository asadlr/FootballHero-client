import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
    <Router>
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
    </Router>
  );
}

export default App;
