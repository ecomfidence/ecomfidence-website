

export default function AboutEcom3() {
    return (
        <>

            <section className="pt-space pb-space section-bg">
                <div className="container">
                    <div className="row g-6 justify-content-between">
                        <div className="col-lg-6 pe-lg-14">
                            <div className="d-flex gap-xxl-7 gap-xl-5 gap-4 position-relative z-index-1">
                                <div className="about-small-thumb w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                    <img src="/assets/img/about/about-s1.png" alt="img" className="w-100" />
                                </div>
                                <div className="about-small-thumb w-100 mt-xxl-10 mt-xl-7 mt-lg-5 mt-3" data-aos="zoom-in" data-aos-duration={1800}>
                                    <img src="/assets/img/about/about-s2.png" alt="img" className="w-100" />
                                </div>
                                {/*- About Arrow */}
                                <img src="/assets/img/element/arrow-right-storke.png" alt="img" className="about-tumb-arrow" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-samll-content">
                                <div className="pricing-title">
                                    <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1400}>
                                        Unmatched Expertise
                                    </div>
                                    <h2 className="stitle d-flex align-items-center mb-xxl-8 mb-xl-7 mb-lg-6 mb-5 gap-xxl-7 gap-xl-5 gap-3" data-aos="zoom-in-left" data-aos-duration={1700}>
                                        <img src="/assets/img/element/arrow-right-storke.png" alt="img" data-aos="zoom-in-up" data-aos-duration={2000} />
                                        Shopify Specialists
                                    </h2>
                                    <p className="white-clr mb-xxl-8 mb-xl-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1400}>
                                        From store design to app development, we are Shopify experts with a wide range of skills. 
                                        Whether it's custom themes, migrations, or optimizing for conversions, we've got you covered.


                                    </p>
                                    <div className="result-progress-wrap" data-aos="zoom-in-up" data-aos-duration={1800}>
                                        <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                <span className="conssub">
                                                    E-Commerce
                                                </span>
                                                <span className="cons">99%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                <span className="conssub">
                                                    Shopify
                                                </span>
                                                <span className="cons">96%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
