import React from 'react';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />

            <main className="dashboard-main">
                <h1 className="dashboard-title">Dashboard</h1>

                <section className="job-interview-card">
                    <div className="job-interview-header">
                        <div>
                            <h2>Job Interview</h2>
                            <h3>Job Offers</h3>
                        </div>
                        <button className="insert-resume-btn">Insert Resume</button>
                    </div>
                    <ul className="job-offer-list">
                        <li>
                            <img src="https://via.placeholder.com/30" alt="icon" />
                            <div>
                                <div className="job-title">Sales Validators</div>
                                <div className="company-name">ENZalda Inc.</div>
                            </div>
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/30" alt="icon" />
                            <div>
                                <div className="job-title">Live Seller</div>
                                <div className="company-name">ENZalda Inc.</div>
                            </div>
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/30" alt="icon" />
                            <div>
                                <div className="job-title">Customer Support</div>
                                <div className="company-name">ENZalda Inc.</div>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="interview-sections">
                    <div className="interview-history-card">
                        <h3>Interview History</h3>
                        <img src="https://via.placeholder.com/250x180" alt="Interview Graphic" />
                    </div>

                    <div className="upcoming-interviews-card">
                        <h3>Upcoming Interviews</h3>
                        <ul>
                            <li>
                                <img className="avatar" src="https://via.placeholder.com/30" alt="avatar" />
                                <div className="interview-info">
                                    <span>Ming Ming Job</span>
                                    <span className="interview-time">08/08/08 · 8:00 am</span>
                                </div>
                            </li>
                            <li>
                                <img className="avatar" src="https://via.placeholder.com/30" alt="avatar" />
                                <div className="interview-info">
                                    <span>chuchu job</span>
                                    <span className="interview-time">07/07/07 · 7:00 am</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="ai-performance">
                    <h3>AI Interview Performance</h3>
                    <div className="performance-metrics">
                        <div>
                            <span>Interview Score</span>
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div>
                            <span>Profile Completeness</span>
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div>
                            <span>Resume Score</span>
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
