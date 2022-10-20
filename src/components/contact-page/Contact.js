import React, {Component} from 'react';
import emailjs from 'emailjs-com';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: false
        };
        this.sendEmail = this.sendEmail.bind(this);
    }
    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_c2ptqgf', 'template_gep0eka', e.target, '4RN62lcbshspapAHf')
            .then((result) => {
                this.setState({ message: true });
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log(error.text);
            });
        
    }

    render() {
        return (
            <div className="contact-container" id="contact">
                <div className="contact-parent">
                    <div className="title-container">
                        <div className="main-title">
                            <span style={{color: '#fff'}}>Contact</span>
                        </div>
                        <div className="sub-title">
                            <span>Have a question or want to work together?</span>
                        </div>
                        <div className="title-seperator">
                            <div className="line"></div>
                            <div className="point">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={this.sendEmail}>
                        <input placeholder="Name" type="text" name="name" required/>
                        <input placeholder="Email" type="email" name="email" required/>
                        <textarea placeholder="Your Message" name="message" />
                        {!this.state.message ? (
                            <input class="button" type="submit" value="Send" />
                        ) : (
                            <input class="button" type="submit" style={{color:'#f44042', fontWeight:'600'}} value="Thanks! I'll reply ASAP :)" />
                        )}
                    </form>
                </div>
            </div>
        );
    }

}
export default Contact;
