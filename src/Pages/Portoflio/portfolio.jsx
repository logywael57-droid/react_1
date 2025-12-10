import Card from "../../Components/Card/Card"
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import './portfolio.css'
export default function Portfolio() {
    return (
        <section className="portfolio-section py-5 d-flex flex-column justify-content-center align-items-center gap-5 ">
            <div className="portfolioTitle">
                <h2 className='fs-1 fw-bold text-uppercase text-center'>portfolio component</h2>
                <div className="aboutTitle gap-2 d-flex justify-content-center align-items-center">
                    <div className="lineOne"></div>
                    <i className="fa fa-star" style={{ fontSize: '20px', color: '#2c3E50' }}></i>
                    <div className="lineTwo"></div>
                </div>
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card img={img1} title="Project One"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card img={img2} title="Project Two"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card img={img3} title="Project Three"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card img={img1} title="Project One"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card img={img2} title="Project Two"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <Card img={img3} title="Project Three"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
