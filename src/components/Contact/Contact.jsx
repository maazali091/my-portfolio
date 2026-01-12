import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

function Contact() {



    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "2275ab09-3b70-493a-8ddb-480926fe6da4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");

        if(data.success){
            alert(data.message)
        }
        event.target.reset();
    };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avalaible to take on new projects, so feel free to send
                    me a message about anything that you want to work on. You can contact anytime.
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>maazali.dev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+92370 4192651</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Charsadda, Pakistan</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" required placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" required name="email" placeholder='Enter you email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  required rows='8' placeholder='Enter your message'></textarea>
                <button className='contact-submit' type='submit'>Submit Now</button>

            </form>
        </div>
    </div>
  )
}

export default Contact




// jab chahe jo bhi user contact form submit kre aor wo apko as email send ho jae to 
// first visit web3 forms visit and click on create your access key then enter your
// email id and then click on get access key now open your gmail id now check you will 
// have recieve the mail from web3forms they will send the access key copy it then go back 
// to web3forms then click on react logo copy the code of create react form and paste it on 
// your cobtact section before return and then copy that access key you got in mail copy it 
// and paste it in your access key and then add onSubmit={} property on form provide onSubmit function thats it