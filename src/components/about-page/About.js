import React, {Component} from 'react';
import styles from '../../assets/Main.css';

class About extends Component {

    render() {
        return (
            <div className="container" id="about">
                <div className="aboutme-parent">
                    <div className="title-container">
                        <div className="main-title">
                            <span>About Me</span>
                        </div>
                        <div className="title-seperator">
                            <div className="line"></div>
                            <div className="point">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutme-body">
                        <div className="text-container">
                            <p>Hello! My name is Minyoung.👋 <br/>
                                It’s been over 1 year, I am working as web developer. </p>
                            <p>I studied e-commerce at Ansan University in South Korea. 
                                After graduating, I worked as a general manager at a jewelry online store called Vintage Hollywood. 
                                I moved to the United States and I studied computer science at Georgia tech. 
                                While I was in college, I was working part-time for an e-commerce company, called Ginzaman. </p>
                            <p>Currently, I am working as a frontend developer at MTY Group, a real-estate company for Korean, Korean-Americans and Chinese.</p>
                            <p>Here are a few technologies :</p>
                            <ul className="skills-list">
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Node.js</li>
                                <li>UI Design</li>
                            </ul>
                        </div>
                        <div className="image-container">
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default About;
