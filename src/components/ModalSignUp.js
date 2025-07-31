import React from 'react';
import './ModalSignUp.css';

const ModalSignUp = ({ onClose }) => {
    const handleSignUp = () => {
        alert('Pressed!');
        onClose();
    };

    const handleTermsClick = () => {
        alert('Open Terms and Conditions');
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <div className="modal-header">
                    <span className="modal-title">Sign up</span>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>

                <span className="modal-subtext">
                    Already have an account?{' '}
                    <span className="link" onClick={onClose}>Login</span>
                </span>

                <div className="modal-field">
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div className="modal-field">
                    <label>Name</label>
                    <input type="text" />
                </div>

                <div className="modal-field">
                    <label>Phone Number</label>
                    <input type="tel" />
                </div>

                <div className="modal-field dual">
                    <div>
                        <label>Age</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="modal-field">
                    <label>Password</label>
                    <input type="password" />
                </div>

                <div className="modal-agree">
                    <input type="checkbox" id="agree" />
                    <label htmlFor="agree">
                        I agree to the{' '}
                        <span className="terms-link" onClick={handleTermsClick}>
                            Terms and Conditions
                        </span>
                    </label>
                </div>

                <div className="modal-action">
                    <button onClick={handleSignUp}>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default ModalSignUp;
