import './contact.css'

function Contact() {
  return (
    <div className="contact">
        <div className="contactWrapper">
            <h1 className="contactTitle">CONTACT US</h1>
            <p className="contactDesc">Get in touch with us by simply filling the form below.</p>
            <form className="contactForm">
                <div className="contactFormItem">
                    <label className="contactFormLabel">Name</label>
                    <input type="text" className="contactFormInput" />
                </div>
                <div className="contactFormItem">
                    <label className="contactFormLabel">Email</label>
                    <input type="text" className="contactFormInput" />
                </div>
                <div className="contactFormItem">
                    <label className="contactFormLabel">Password</label>
                    <input type="text" className="contactFormInput" />
                </div>
                <div className="contactFormItem">
                    <label className="contactFormLabel">Message</label>
                    <textarea type="text" className="contactFormInput" />
                </div>
                <div className="contactFormItem">
                    <button className="contactFormButton">Send Us</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact