
import './Contact.css'

function Contact() {
    return (
        <>
            <section className="contact-section">
                <div className="contact-card container p-4">
                    <h1 className="contact-title text-center">conatct section</h1>

                    <div className="contactTitle gap-1 d-flex justify-content-center align-items-center mb-4">
                        <div className="lineOne" />
                        <i className="fa-solid fa-star text-muted" aria-hidden="true"></i>
                        <div className="lineTwo" />
                    </div>

                    <form className="contact-form mx-auto" style={{ maxWidth: 520 }}>
                        <div className="mb-3">
                            <input name="userName" type="text" className="form-control form-control-borderless" placeholder="Your name" />
                        </div>

                        <div className="mb-3">
                            <input name="userAge" type="number" className="form-control form-control-borderless" placeholder="Your age" />
                        </div>

                        <div className="mb-3">
                            <input name="userEmail" type="email" className="form-control form-control-borderless" placeholder="Your email" />
                        </div>

                        <div className="mb-4">
                            <input name="userPassword" type="password" className="form-control form-control-borderless" placeholder="Password" />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact

