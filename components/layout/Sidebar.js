import Link from 'next/link'
import SocialLinksEcom1 from '../elements/SocialLinksEcom1'
export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>

            <div className={`subside-barmenu ${isSidebar ? "active" : ""}`}>
                <div className="remove-click d-flex justify-content-center align-items-center" onClick={handleSidebar}>
                    <i className="fas fa-times" />
                </div>
                <div className="sub-contact-wrapper d-grid">
                    <Link href="/" className="side-logo">
                        <img src="/assets/img/logo/ecomfidence-logo.svg" className="w-75" alt="img" />
                    </Link>
                    <p>
                        Ecomfidence is Your trusted partner in building, managing, and optimizing Shopify stores for success.
                    </p>
                    <div className="sub-contact-left d-grid">
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Address
                                </span>
                                <span className="textp flink-items">
                                    Pakistan
                                </span>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Email
                                </span>
                                <Link href="/javascript:void(0)" className="textp flink-items">
                                    contact@ecomfidence.com
                                </Link>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    WhatsApp
                                </span>
                                <Link href="/jasacript:void(0)" className="textp flink-items">
                                    +996 1425 7471 0.2
                                </Link>
                            </div>
                        </div>
                    </div>
                    <SocialLinksEcom1 />
                    <Link href="/contact" className="d-flex cmn-btn cmn-border justify-content-center fw-500 align-items-center gap-2 py-xl-3 py-2 px-2 rounded">
                        <span className="icons">
                            <i className="fas fa-arrow-up white" />
                        </span>
                        <span className="get-text">
                            Let's Talk
                        </span>
                    </Link>
                </div>
            </div>

        </>
    )
}
