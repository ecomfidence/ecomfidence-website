

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}

export default function ProtfolioEcom() {
    return (
        <>

            <section className="protfolio-solution pt-space bg1-clr">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                Our Portfolio
                            </div>
                            <h2 className="stitle">
                                These Templates we use in our client's <span className="fw-400 theme-clr">Shopify</span> Sites.
                            </h2>
                        </div>
                        {/* <Link href="/team" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            view all teams
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link> */}
                    </div>
                    <div className="swiper protfolio-solutionwrap">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/1.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/2.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/3.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/4.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/5.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/6.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/7.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/8.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/9.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/10.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/11.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/12.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/13.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/portfolio/14.webp" alt="img" />
                                        <Link href="/service" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                        <Link href="/service" className="cont">
                                            <h4 className="white-clr">
                                                Template we use
                                                <span className="d-block">
                                                    for our Client
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </section>
        </>
    )
}
