import React from 'react'
import TextField from '@material-ui/core/TextField';
import style from '../Contact/style/style.module.css'
const ContactForm = () => {
    return (
        <React.Fragment>
            <div className={style.contactForm} >
                <form action="">
                    <div>
                        <div className={style.FirstLastName} >
                            <div id={style.firstName} className={style.formElement} >
                                {/* <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" id="firstname" /> */}
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            </div>

                            <div id={style.lastName} className={style.formElement}>
                                {/* <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" id="lastName" /> */}
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" />

                            </div>

                        </div>
                    </div>
                    <div className={style.formElement}>
                        {/* <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" /> */}
                        <TextField id="outlined-basic" label="email" variant="outlined" />

                    </div>
                    <div className={style.formElement}>
                        {/* <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" /> */}
                        <TextField disableUnderline id="outlined-basic" label="Subject" variant="outlined" />

                    </div>
                    <div className={style.formElement}>
                        {/* <label htmlFor="message">Message</label>
                        <textarea type="text" name="lastName" id="lastName" /> */}
                        <TextField disabledUnderline multiline rows={5} id="outlined-basic" label="Message" variant="outlined" />

                    </div>
                    <input className={style.submitButton} type="Submit" value="Send Message" />
                </form>
            </div>
        </React.Fragment>
    )
}
export default ContactForm;