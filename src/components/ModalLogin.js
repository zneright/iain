import React, { useState } from 'react';
import './ModalLogin.css';
import { useNavigate } from 'react-router-dom';
import ModalSignUp from './ModalSignUp';

const LoginModal = ({ onClose }) => {
    const navigate = useNavigate();
    const [showSignUp, setShowSignUp] = useState(false);

    const handleLogin = () => {
        navigate('/dashboard');
        onClose();
    };

    const handleShowSignUp = () => {
        setShowSignUp(true);
    };

    const handleCloseSignUp = () => {
        setShowSignUp(false);
    };

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Log in</h2>
                        <button className="close-button" onClick={onClose}>×</button>
                    </div>

                    <p className="modal-subtext">
                        New to IAIN?{' '}
                        <span className="modal-signup" onClick={handleShowSignUp}>
                            Sign up
                        </span>
                    </p>

                    <input type="email" placeholder="Email" className="modal-input" />
                    <input type="password" placeholder="Password" className="modal-input" />
                    <span className="modal-forgot">Forgot Password?</span>

                    <button className="modal-login-button" onClick={handleLogin}>
                        Log In
                    </button>

                    <div className="modal-divider">
                        <hr />
                        <span>or</span>
                        <hr />
                    </div>

                    <div className="google-login">
                        <img src="sa fire base na to e" alt="Google" />
                    </div>
                </div>
            </div>

            {showSignUp && <ModalSignUp onClose={handleCloseSignUp} />}
        </>
    );
};

export default LoginModal;
