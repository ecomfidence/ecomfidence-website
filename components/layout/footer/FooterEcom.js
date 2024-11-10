import ContactForm3 from "@/components/elements/ContactForm3"
import Newsletter from "@/components/elements/NewsletterForm"
import SocialLinksEcom1 from "@/components/elements/SocialLinksEcom1"
import Link from "next/link"

export default function FooterEcom() {
    return (
        <>

            <footer className="footer-version-three bg1-clr pt-space">
                <div className="container">
                    <div className="footer-topversion-one pb-20">
                        <div className="footer-v3-titlewrap d-flex align-items-center gap-xxl-15 gap-xl-10 gap-md-8 gap-sm-5 gap-3 pb-xxl-15 pb-xl-10 pb-8">
                            <span className="footer-v3-title" data-aos="zoom-in-right" data-aos-duration={1800}>
                                Let's talk!
                            </span>
                            <Link href="/contact">
                                <img src="/assets/img/footer/let-arrow.png" alt="arrow" data-aos="zoom-in" data-aos-duration={2000} />
                            </Link>
                        </div>
                        <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-sm-between justify-content-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        About Us
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_43041" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                    Ecomfidence: Your trusted partner in building, managing, and optimizing Shopify stores for success.
                                    </p>
                                    {/* Social Icons */}
                                    <SocialLinksEcom1/>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Quick Links
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4304)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4304" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href="/about" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#services" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#process" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Our Process
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Services
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4305)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_4305" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <li>
                                            <Link href="https://api.whatsapp.com/send/?phone=923326663723&text=I%20want%20high%20converting%20Shopify%20Store" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Shopify Store Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://api.whatsapp.com/send/?phone=923326663723&text=I%20want%20to%20migrate%20my%20Shopify%20Store" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Shopify Store Migration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://api.whatsapp.com/send/?phone=923326663723&text=I%20want%20to%20optimize%20my%20Shopify%20Store" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Shopify Speed Optimization
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://api.whatsapp.com/send/?phone=923326663723&text=I%20want%20to%20customize%20my%20Shopify%20Theme" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                <span className="ani-icons">
                                                    <i className="fas fa-angle-double-right pra-clr" />
                                                </span>
                                                Shopify Theme Customization
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                        Newsletter
                                        <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_4306)" strokeWidth={2} />
                                            <defs>
                                                <linearGradient id="paint0_linear_6308_43061" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#E3FF04" />
                                                    <stop offset={1} stopColor="#E3FF04" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h5>
                                    <p className="pra-clr mb-xxl-7 mb-6" data-aos="zoom-in" data-aos-duration={1600}>
                                        Stay in the loop with exclusive offers, new themes, and all the latest news!
                                    </p>
                                    <Newsletter></Newsletter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-version-two bg2-clr py-xxl-10 py-xl-8 py-lg-7 py-6">
                    <div className="container">
                        <div className="text-sm-start text-center d-sm-flex gap-sm-0 gap-2 d-grid align-items-center justify-content-sm-between justify-content-center">
                            <p className="pra-clr">
                                © All Copyright {new Date().getFullYear()} by <Link href="/" className=" white-clr htheme">ecomfidence</Link>
                            </p>
                            <div className="d-flex gap-3">
                                <Link href="/terms-and-conditions" className="pra-clr htheme">
                                    Terms &amp; Conditions
                                </Link>
                                <Link href="/privacy-policy/" className="pra-clr htheme">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
