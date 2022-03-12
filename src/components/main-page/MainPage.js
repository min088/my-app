import styles from '../../assets/Main.css';
import React, {Component} from 'react';


class MainPage extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="content-left" className="offset-md-1 col-md-4">
                        <div class="content-left title">
                            <p>Minyoung Kim</p>
                        </div>
                        <div class="content-left desc">
                            <p>Front-End Developer</p>
                            <p>Frontend Developer with 1+ years of professional experiences 
                                in Web Designing and User Interface Development in New York, NY</p>
                        </div>
                    </div>

                    <div class="content-right" className="col-md-7">
                        <div class="content-right-nav">
                            <div class="content-right-nav-item">
                                <a href="/work" class="content-right-nav-item-link">Work</a>
                            </div>
                            <div class="content-right-nav-item">
                                <a href="/about" class="content-right-nav-item-link">About</a> 
                            </div>
                            <div class="content-right-nav-item">
                                <a href="/contact" class="content-right-nav-item-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default MainPage;
