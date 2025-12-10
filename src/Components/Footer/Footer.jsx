import './Footer.css'
import './media.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row p-5">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="location text-center">
                                <h2 className='fs-3'>LOCATION</h2>
                                <p>2215 John Daniel Drive</p>
                                <span>Clark, MO 65243</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="around text-center mb-4">
                                <h2 className='fs-3'>AROUND THE WEB</h2>
                                <div style={{ display: "flex", gap: "20px", fontSize: "30px", justifyContent: "center" , marginTop: "20px" }}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <FontAwesomeIcon icon={faGlobe} />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="aboutFreelancer text-center">
                                <h2 className='fs-3'>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="endFooter d-flex justify-content-center align-items-center">
                <p>Copyright © Your Website 2021</p>
            </div>
        </>
    )
}

export default Footer
