import React, {Component} from 'react';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="to-top">
                    <a href="#home">TOP</a>
                </div>
                <div className="icon-container">
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/minyoung-kim-822712137/" target="_blank">
                            <FaLinkedinIn size={25}/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/min088" target="_blank">
                            <BsGithub size={25}/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="mailto:mymykim511@gmail.com" target="_top">
                            <MdOutlineEmail size={27} />
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    Minyoung Kim<span> ©2022</span>
                </div>
            </div>
        );
    }
}
export default Footer;