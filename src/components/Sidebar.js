import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <aside className="sidebar">
            <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/VDRo2IU0ne/6r7qas1s_expires_30_days.png"
                alt="Logo"
                className="sidebarlogo-img"
            />

            <div className="sidebar-section">
                <p className="sidebar-label">Interview</p>
                <button onClick={() => navigate('/dashboard')} className="sidebar-link">Dashboard</button>
                <button onClick={() => navigate('/live-interview')} className="sidebar-link">Live Interview</button>
                <button onClick={() => navigate('/resume-center')} className="sidebar-link">Resume Center</button>
            </div>

            <div className="sidebar-section">
                <p className="sidebar-label">Tools</p>
                <button onClick={() => navigate('/recruiters')} className="sidebar-link">Speak with Recruiters</button>
                <button onClick={() => navigate('/settings')} className="sidebar-link">Settings</button>
            </div>

            <div className="admin-box" onClick={() => navigate('/admin')}>
                <span>Jacob Serrano</span>
                <FiChevronRight className="admin-arrow" />
            </div>
        </aside>
    );
};

export default Sidebar;
