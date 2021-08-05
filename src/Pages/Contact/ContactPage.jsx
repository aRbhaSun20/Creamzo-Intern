import React from 'react'
import ContactHeading from '../../Components/Contact/ContactHeading'
import ContactForm from '../../Components/Contact/ContactForm'
import style from '../../Components/Contact/style/style.module.css'
const ContactPage = () => {
    return (
        <React.Fragment>
            <div className={style.contactContainer} >
                <ContactHeading />
                <ContactForm />
            </div>
        </React.Fragment>
    )
}
export default ContactPage;