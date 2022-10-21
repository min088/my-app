import React, {Component} from 'react';
import { MdOutlineWorkOutline } from 'react-icons/md'


class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            selected: e,
        })
    }

    render() {
        return (
            
            <div className="container" id="experience">
                <div className="experience-parent">
                    <div className="title-container">
                        <div className="main-title">
                            <span>Where I’ve Worked</span>
                        </div>
                        <div className="title-seperator">
                            <div className="line"></div>
                            <div className="point">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-body">
                        <div className="experience-tabs">
                            <ul>
                                <li className={this.state.selected === 1 ? 'active' : null } 
                                    onClick={() => this.handleClick(1)}>Koriny</li>
                                <li className={this.state.selected === 2 ? 'active' : null } 
                                    onClick={() => this.handleClick(2)}>Ginza M</li>
                                <li className={this.state.selected === 3 ? 'active' : null } 
                                    onClick={() => this.handleClick(3)}>VH Design Co.</li>
                            </ul>
                        </div>
                        <div className="experience-details">
                            <div className={this.state.selected === 1 ? 'detail active' : 'detail' }>
                                <div className="title"> 
                                    Frontend Developer 
                                    <span> @ </span> 
                                    <a href="https://koriny.com/" target="_blank">
                                        Koriny
                                    </a>
                                </div>
                                <p className="range">Full-time, Aug 2021 - Present</p>
                                <div className="description">
                                    <ul>
                                        <li>Maintained, developed, and designed the website with HTML5, CSS3, JavaScript, React.js.</li>
                                        <li>Web Design and analyzing and fixing UI bugs.</li>
                                        <li>Experience with REST/JSON APIs.</li>
                                        <li>All pages were renewed in cooperation with UI/UX designer.</li>
                                        <li>Working with backend engineers, we connected a new database by REBNY.</li>
                                        <li>Create a multilingual site that can be switched to Korean, English, and Chinese.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={this.state.selected === 2 ? 'detail active' : 'detail' }>
                                <div className="title"> 
                                    Web developer/Website manager <span> @ Ginza M</span>
                                </div>
                                <p className="range">Part-time, Oct 2017 - Apr 2018</p>
                                <div className="description">
                                    <ul>
                                        <li>Make Online Shop and Management using Shopify.</li>
                                        <li>Editing and Uploading of Image</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={this.state.selected === 3 ? 'detail active' : 'detail' }>
                                <div className="title"> 
                                    General Manager 
                                    <span> @ </span> 
                                    <a href="https://vintagehollywood.co.kr/" target="_blank">
                                        VH Design Co.
                                    </a>
                                </div>
                                <p className="range">Full-time, Mar 2010 - Jul 2011</p>
                                <div className="description">
                                    <ul>
                                        <li>Homepage and Product Management</li>
                                        <li>Created and Designed Documents</li>
                                        <li>Customer Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Experience;
