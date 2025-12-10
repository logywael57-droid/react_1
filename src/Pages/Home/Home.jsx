import './Home.css'
export default function Home() {
    return (
        <>
            <section className="">
                <div className="container d-flex flex-column justify-content-center align-items-center ">
                    <div className="imgBox">
                        <img src="./zhihu.svg" className="w-25" alt="Home Image" />
                    </div>
                    <div className="homeTitle">
                        <h2 className='mt-4 fs-2 fw-bold text-uppercase'>start Framework</h2>
                    </div>
                    <div className="aboutTitle gap-2 d-flex justify-content-center align-items-center">
                        <div className="lineOne"></div>
                        <i className="fa fa-star" style={{ fontSize: '20px', color: 'white' }}></i>
                        <div className="lineTwo"></div>
                    </div>
                    <span className='fs-6'>Graphic Artist - Web Designer - Illustrator</span>
                </div>
            </section>
        </>
    )
}
