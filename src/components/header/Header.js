import React, {Component} from 'react';
import styles from '../../assets/Header.css';
import Sticky from 'react-stickynode';


class Header extends Component {

    render() {
        return (
            <div className="sticky-header">
                <Sticky id="menu-sticky" top={0} innerZ="999" activeClass="is-sticky">
                    <div className="header-parent">
                        {/* <div className="header-logo">
                            Minyoung
                        </div> */}
                        <div className="header-buttons">
                            <div className="header-button">
                                <a href="#home">Home</a>
                            </div>
                            <div className="header-button">
                                <a href="#about" style={{color:'#f44042'}}>About Me</a>
                            </div>
                            <div className="header-button">
                                <a href="#experience">Experience</a>
                            </div>
                            <div className="header-button">
                                <a href="#work">Work</a>
                            </div>
                            <div className="header-button">
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </Sticky>
            </div>

            // <div class="nav-left">
            //     <div class="nav-left-item">
            //         <a href="/" class="nav-left-link" target="_self">
            //             Home
            //         </a>
            //     </div>
            //     <div class="nav-left-item">
            //         <a href="https://www.linkedin.com/in/minyoung-kim-822712137/" class="nav-left-link" target="_blank">
            //             LINKEDIN
            //         </a>
            //     </div>
            //     <div class="nav-left-item">
            //         <a href="mailto:mymykim511@gmail.com" class="nav-left-link" target="_top">
            //             CONTACT
            //         </a>
            //     </div>
            //     <div class="nav-left-item">
            //         <a href="https://github.com/min088" class="nav-left-link" target="_blank">
            //             GITHUB
            //         </a>
            //     </div>
            //     <div class="nav-line">
            //     </div>
            //     <div class="nav-copyright">
            //         Copyright © 2022
            //     </div>
            // </div>

            
            
        );
    }

}
export default Header;
