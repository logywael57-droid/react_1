import './About.css'

export default function About() {
    return (
        <section className="about-section">
            <div className="about-card ">
                <h1 className='text-center fs-2 fw-bold text-uppercase text-white'>about component </h1>
                <div className="aboutTitle gap-2 d-flex justify-content-center align-items-center">
                    <div className="lineOne"></div>
                    <i className="fa fa-star" style={{ fontSize: '20px', color: 'white' }}></i>
                    <div className="lineTwo"></div>
                </div>
                <div className='aboutContent '>
                    <div className="container">
                        <div className="row text-white fs-6 fw-normal">
                            <div className="col-md-6 col-lg-6">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
