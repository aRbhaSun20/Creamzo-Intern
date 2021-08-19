import React from 'react'
import style from '../Contact/style/style.module.css'
const ContactForm = () => {
    return (
        <React.Fragment>
            <div className={style.contactForm} >
                <form action="">
                    <div>
                        <div className={style.FirstLastName} >
                            <div id={style.firstName} className={style.formElement} >
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" id="firstname" />
                            </div>
                            <div id={style.lastName} className={style.formElement}>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" id="lastName" />
                            </div>
                        </div>
                    </div>
                    <div className={style.formElement}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={style.formElement}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" />
                    </div>
                    <div className={style.formElement}>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="lastName" id="lastName" />
                    </div>
                    <input className={style.submitButton} type="Submit" value="Send Message" />
                </form>
            </div>
        </React.Fragment>
    )
}
export default ContactForm;