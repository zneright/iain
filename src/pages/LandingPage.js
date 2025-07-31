// src/screens/LandingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import ModalLogin from '../components/ModalLogin';
import ModalSignUp from '../components/ModalSignUp';

const LandingPage = () => {
    const navigate = useNavigate();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    return (
        <div className="landing-container">
            <header className="header">
                <div className="logo-section">
                    <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VDRo2IU0ne/6r7qas1s_expires_30_days.png"
                        alt="Logo"
                        className="logo-img"
                    />
                    <span className="logo-text">IAIN</span>
                </div>
                <nav className="nav-links">
                    <span className="nav-item" onClick={() => navigate('/app')}>Ai Application</span>
                    <span className="nav-item" onClick={() => navigate('/resources')}>Resources</span>
                    <span className="nav-item" onClick={() => navigate('/about')}>About Us</span>
                </nav>
                <div className="auth-buttons">
                    <span className="sign-in" onClick={() => setShowLoginModal(true)}>Sign in</span>
                    <button onClick={() => setShowSignUpModal(true)} className="sign-up-button">
                        Sign up
                    </button>
                </div>
            </header>

            <section className="hero">
                <h1 className="hero-title">
                    IAIN: Your Smartest AI Assistant <br /> for Interview Success
                </h1>
                <p className="hero-subtext">
                    Practice confidently with AI-powered mock interviews tailored for your career goals.
                </p>
                <button className="cta-button" onClick={() => navigate('/app')}>Get Started</button>
            </section>

            {showLoginModal && (
                <ModalLogin
                    onClose={() => setShowLoginModal(false)}
                    onSignUpClick={() => {
                        setShowLoginModal(false);
                        setShowSignUpModal(true);
                    }}
                />
            )}

            {showSignUpModal && (
                <ModalSignUp onClose={() => setShowSignUpModal(false)} />
            )}
        </div>
    );
};

export default LandingPage;
