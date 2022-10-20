import React, {Component} from 'react';


class Work extends Component {

    render() {
        return (
            <div className="container" id="work">
                <div className="experience-parent">
                    <div className="title-container">
                        <div className="main-title">
                            <span>Some Things I’ve Built</span>
                        </div>
                        <div className="title-seperator">
                            <div className="line"></div>
                            <div className="point">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="aboutme-body">
                        <div className="text-container">
                            <span>
                            Hello! My name is Minyoung.
                            </span>
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
                    </div> */}
                </div>
            </div>
        );
    }

}
export default Work;
