import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {

    return (
        <div className="profile-container" id="home">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I'M <span className="highlighted-text">Minyoung</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Frontend Developer", 1000,
                                        "React.js", 1000,
                                        "HTML/CSS/JS", 1000,
                                        "Node.js", 1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Frontend Developer with 1+ years of professional experiences
                                in Web Designing and User Interface Development in New York, NY.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <a href="mailto:mymykim511@gmail.com" target="_top">
                            <button className="btn primary-btn">
                                Hire Me!
                            </button>
                        </a>
                        
                        <a href="Minyoung_Kim_Resume.pdf" download="Minyoung_Kim_Resume.pdf">
                            <button className="btn highlighted-btn">
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-bg">
                </div>             
            </div> 

            <div class="custom-shape-divider-bottom-1664918166">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        
    );
}
