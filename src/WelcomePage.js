import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <h1>Welcome to the Mental Health App</h1>
            <div className="button-container">
                <Link to="/login">
                    <button className="yellow-button">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="yellow-button">Signup</button>
                </Link>
            </div>
        </div>
    );
};

export default WelcomePage;





