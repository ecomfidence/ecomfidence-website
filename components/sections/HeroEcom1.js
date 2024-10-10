
import Link from "next/link"

export default function HeroEcom1() {
    return (
        <>

            <section className="hero-section-version2 position-relative">
                <div className="container">
                    <div className="row g-5 align-items-center justify-content-between">
                        <div className="hero-v1-content col-lg-8 col-md-7">
                            <div className="hero-v2-content">
                                <h1 className="white-clr mb-xxl-14 mb-xl-9 mb-lg-7 mb-6" data-aos="zoom-in" data-aos-duration={1500}>
                                    Your <span className="designers" data-text="Shopify" data-aos="zoom-in" data-aos-duration={2000}>Shopify</span>
                                    <span className="d-block">
                                        Development Experts
                                    </span>
                                </h1>
                                <div className="d-flex align-items-center gap-xxl-4 gap-3 mb-xxl-14 mb-xl-9 mb-lg-8 mb-6" data-aos="zoom-in-up" data-aos-duration={1600}>
                                    <div className="customer-review-active">
                                        {/* <Link href="/#">
                                            <img src="/assets/img/team/avatar 1.webp" alt="img" />
                                        </Link> */}
                                        {/* <Link href="/#">
                                            <img src="/assets/img/team/avatar 2.webp" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar 3.webp" alt="img" />
                                        </Link> */}
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar 5.webp" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar 6.webp" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar 7.webp" alt="img" />
                                        </Link>
                                        {/* <Link href="/#">
                                            <img src="/assets/img/team/avatar 8.webp" alt="img" />
                                        </Link> */}
                                        {/* <Link href="/#">
                                            <img src="/assets/img/team/avatar 9.webp" alt="img" />
                                        </Link> */}
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar 10.webp" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar 11.webp" alt="img" />
                                        </Link>
                                        {/* <Link href="/#">
                                            <img src="/assets/img/team/avatar 12.webp" alt="img" />
                                        </Link> */}
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar 13.webp" alt="img" />
                                        </Link>
                                        <Link href="/#">
                                            <img src="/assets/img/team/avatar 4.webp" alt="img" />
                                        </Link>
                                    </div>
                                    <span className="customer-active">
                                       + Trusted by Thriving Shopify Store Owners
                                    </span>
                                </div>
                                <div className="d-flex flex-lg-nowrap flex-wrap align-items-center gap-xxl-7 gap-xl-5 gap-4" data-aos="zoom-in-up" data-aos-duration={1700}>
                                    <img src="/assets/img/banner/hero-ringle-1.webp" alt="img" />
                                    <div className="ringle-content">
                                        <p className="white-clr mb-xxl-5 mb-xl-4 mb-3">
                                        From Start to Scale, We Build, Manage, and Optimize Your Shopify Store for Growth.
                                        </p>
                                        <Link href="/contact" className="explore-more d-inline-flex align-items-center gap-1">
                                            Let's Get Started - Book a Free Consultation Today
                                            <span className="rot60">
                                                <i className="fas fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <div className="hero-v2-thumb" data-aos="zoom-in" data-aos-duration={1500}>
                                <img src="/assets/img/banner/hero-v2-thumb.webp" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Element */}
                <img src="/assets/img/element/cmn-dost.png" alt="img" className="hero-v2-element" data-aos="fade-up" data-aos-duration={1500} />
                <img src="/assets/img/element/arrow-cmn.png" alt="img" className="hero-v2-arrow" data-aos="fade-up" data-aos-duration={1500} />
                {/* Element */}
                {/* Social */}
                <div className="spilit-socail d-flex align-items-center gap-xxl-16 gap-xl-10 gap-5">
                    <Link href="https://www.facebook.com/EcomfidenceAgency/">
                        FaceBook
                    </Link>
                    {/* <Link href="/#">
                        Twitter
                    </Link> */}
                    <Link href="https://www.instagram.com/ecomfidence/">
                        Instagram
                    </Link>
                </div>
                {/* Social */}
            </section>
        </>
    )
}
