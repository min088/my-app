import React, {Component} from 'react';
import styles from '../../assets/Header.css';


class Header extends Component {

    render() {
        return (
            <div class="nav-left">
                <div class="nav-left-item">
                    <a href="/" class="nav-left-link" target="_self">
                        Home
                    </a>
                </div>
                <div class="nav-left-item">
                    <a href="https://www.linkedin.com/in/minyoung-kim-822712137/" class="nav-left-link" target="_blank">
                        LINKEDIN
                    </a>
                </div>
                <div class="nav-left-item">
                    <a href="mailto:minyoung.kim88@gmail.com" class="nav-left-link" target="_top">
                        CONTACT
                    </a>
                </div>
                <div class="nav-left-item">
                    <a href="https://github.com/min088" class="nav-left-link" target="_blank">
                        GITHUB
                    </a>
                </div>
                <div class="nav-line">
                </div>
                <div class="nav-copyright">
                    Copyright © 2022
                </div>
            </div>

            
            
        );
    }

}
export default Header;
