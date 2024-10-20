"use client"; 
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"
import ContactForm2 from '@/components/elements/ContactForm2'
import React from 'react'
import ReactPlayer from 'react-player'
import VideoPlayer from '@/components/elements/VideoPlayer';


export default function GetFreeShopifyStore() {

    return (
        <>
            <section className="contact-section pt-space pb-space">
                <div className="container">
                <div className="about-content-v3">
                        <div className="pricing-title">

                            <h2 className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4 text-center">
                                <span style={{color:"red", fontStyle:"normal", fontWeight:"bold"}}>Congrats!</span> Follow The Steps Below To Get 
                                YOUR E-Com Store BUILT FOR YOU <span style={{color:"red", fontStyle:"normal", fontWeight:"bold"}}>100% FREE!</span>
                            </h2>
                            
                            
                            {/* <Link href="/about" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                                Explore More
                                <span className="rot60 d-inline-block">
                                    <i className="fas fa-arrow-up theme-clr" />
                                </span>
                            </Link> */}
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row g-xxl-7 g-4">
                        <h3 className="mb-xxl-8 mb-xl-7 mb-xl-5 mb-4 text-center">
                            STEP 1: Create Your Free Account & Our A.I. Will Build Your Store Now!
                        </h3>
                        <div className="col-lg-6">
                            <div className="w-100" style={{paddingRight:0}}>
                                {/* <img src="/assets/img/testimonial/testimonialv2.png" alt="img" className="w-100" /> */}
                                {/* <span className="arrow-element">
                                    <img src="/assets/img/element/arrow-cmn.png" alt="img" />
                                </span> */}
                                {/* <VideoPopup style={4}/> */}
                                {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
                                <VideoPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />

                            </div>
                            <p className="bg-danger white-clr mb-xxl-10 mb-xl-8 mb-6 p-3">
                                Bring to the table win-win survival strategies to ensure proactive domination. At
                                the end of the day, going forward, a
                                new normal that has evolved from generation on the runway heading towards a
                                streamlined cloud.
                            </p>
                            <hr></hr>
                            <div className="global-counting mt-10 mb-xxl-10 mb-xl-8 mb-6 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                <div className="counting-item">
                                    <h6>
                                        <CounterUp count={12} time={3} />
                                        <span>+</span>
                                    </h6>
                                    <span className="pra-clr">
                                        years of experience
                                    </span>
                                </div>
                                <div className="counting-item">
                                    <h6>
                                        <CounterUp count={25} time={3} />
                                        <span>K+</span>
                                    </h6>
                                    <span className="pra-clr">
                                        completed projects
                                    </span>
                                </div>
                                <div className="counting-item">
                                    <h6>
                                        <CounterUp count={120} time={3} />
                                        <span>+</span>
                                    </h6>
                                    <span className="pra-clr">
                                        Team members
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-content bg1-clr">
                                {/* <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-7 mb-xl-6 mb-5">
                                    ABOUT COMPANY
                                </div> */}
                                <h3 className="white mb-xxl-15 mb-xl-10 mb-lg-7 mb-5">
                                    Leave A Message
                                </h3>
                                {/* <form action="#">
                                    <div className="row g-xxl-8 g-xl-6 g-lg-4 g-4">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <select className="form-select">
                                                <option value={1}>
                                                    I want Free Store
                                                </option>
                                                <option value={1}>
                                                    I want Custom Store
                                                </option>
                                                <option value={1}>
                                                    Other
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea name="messages" rows={5} placeholder="Message" />
                                        </div>
                                        <div className="col-lg-5">
                                            <button type="submit" className="submit-btn">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form> */}
                                <ContactForm2/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}