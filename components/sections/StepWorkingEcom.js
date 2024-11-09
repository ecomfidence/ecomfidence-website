
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function StepWorking1() {
    return (
        <>

            <section id="process" className="working-sectionv04 pt-space pb-space position-relative bg2-clr">
                <div className="container">
                    <div className="row justify-content-between g-4 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="col-lg-7">
                            <div className="pricing-title">
                                <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3">
                                    Working steps
                                </div>
                                <h2 className="stitle mt-xxl-8 mt-xl-6 mt-5">
                                    Our Streamlined Success <span className="fw-400 theme-clr">Process</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="text-box position-relative">
                                <p>
                                At Ecomfidence, we've crafted a seamless workflow 
                                designed to deliver exceptional Shopify stores. 
                                From discovery to launch and beyond, our proven methodology 
                                ensures that every step is efficient, customized, 
                                and focused on your success.
                                </p>
                                <VideoPopup style={2} />
                            </div>
                        </div>
                    </div>
                    <div className="step-working-processwrap">
                        <div className="step-working-inner">
                            <div className="step-working-processitem d-grid gap-7">
                                <div className="d-grid gap-5 justify-content-end me-20">
                                    <div className="serial d-grid align-content-center justify-content-center radius100">
                                        <span className="d-block text-center">
                                            1st
                                        </span>
                                        <span>
                                            Step
                                        </span>
                                    </div>
                                    <div className="vline" />
                                </div>
                                <div className="process-btn">
                                    Collaborate &amp; Strategize
                                    <svg width={350} height={62} viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={349} height={61} rx="30.5" stroke="url(#paint0_linear_6485_42407)" strokeDasharray="6 6" />
                                        <defs>
                                            <linearGradient id="paint0_linear_6485_42407" x1="1.55534e-07" y1="40.5" x2="316.59" y2="38.8127" gradientUnits="userSpaceOnUse">
                                                <stop offset={2} stopColor="white" />
                                                <stop offset={1} stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="text-box position-relative p-5">
                                    <p>
                                    We start with a deep discussion to understand your goals, 
                                    needs, and ideas. Whether it's building a new store or migrating 
                                    an existing one, we ensure we're aligned on the strategy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="step-working-inner">
                            <div className="step-working-processitem d-grid gap-7">
                                <div className="d-grid gap-5 justify-content-end me-20">
                                    <div className="serial d-grid align-content-center justify-content-center radius100">
                                        <span className="d-block text-center">
                                            2nd
                                        </span>
                                        <span>
                                            Step
                                        </span>
                                    </div>
                                    <div className="vline" />
                                </div>
                                <div className="process-btn">
                                    Build &amp; Deliver
                                    <svg width={350} height={62} viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={349} height={61} rx="30.5" stroke="url(#paint0_linear_6485_42404)" strokeDasharray="6 6" />
                                        <defs>
                                            <linearGradient id="paint0_linear_6485_42404" x1="1.55534e-07" y1="40.5" x2="316.59" y2="38.8127" gradientUnits="userSpaceOnUse">
                                                <stop offset={2} stopColor="white" />
                                                <stop offset={1} stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="text-box position-relative p-5">
                                    <p>
                                    Our team designs, develops, and delivers your Shopify store, 
                                    ensuring it's ready to go. Once complete, we hand over the reins 
                                    for you to take charge of your new store.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="step-working-inner">
                            <div className="step-working-processitem d-grid gap-7">
                                <div className="d-grid gap-5 justify-content-end me-20">
                                    <div className="serial d-grid align-content-center justify-content-center radius100">
                                        <span className="d-block text-center">
                                            3rd
                                        </span>
                                        <span>
                                            Step
                                        </span>
                                    </div>
                                    <div className="vline" />
                                </div>
                                <div className="process-btn">
                                    Fine-Tune &amp; Refine
                                    <svg width={350} height={62} viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={349} height={61} rx="30.5" stroke="url(#paint0_linear_6485_42405)" strokeDasharray="6 6" />
                                        <defs>
                                            <linearGradient id="paint0_linear_6485_42405" x1="1.55534e-07" y1="40.5" x2="316.59" y2="38.8127" gradientUnits="userSpaceOnUse">
                                                <stop offset={2} stopColor="white" />
                                                <stop offset={1} stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="text-box position-relative p-5">
                                    <p>
                                    After launch, we remain available to make any necessary 
                                    changes or adjustments, ensuring your store is exactly how you want it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
