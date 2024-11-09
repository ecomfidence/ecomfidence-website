import Link from "next/link"
import Menu from "../Menu"

export default function HeaderEcom({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar, isSearch, handleSearch }) {
    return (
        <>

            <header className={`header-section cmn-fixed hb-border py-lg-0 py-6 ${scroll ? "animated fadeInDown header-fixed" : ""}`}>
                <div className="container">
                    <div className="main-navbar">
                        <nav className="navbar-custom">
                            <div className="d-lg-flex flex-xl-nowrap flex-wrap align-items-center justify-content-lg-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link href="/" className="brand-logo">
                                        <img className="w-75" src="assets/img/logo/ecomfidence-logo.svg" alt="logo" />
                                    </Link>
                                    <button className={`navbar-toggle-btn d-block d-lg-none ${isMobileMenu ? "open" : ""}`} type="button" onClick={handleMobileMenu}>
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </button>
                                </div>
                                <div className="navbar-toggle-item" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                                    <Menu />
                                </div>
                                <div className="d-lg-flex d-grid justify-content-center ph-clickwrap align-items-center gap-xxl-7 gap-xl-6 gap-lg-5 gap-3">
                                    <Link href="https://wa.me/923326663723" className="d-flex align-items-center header-ph gap-2 d-none d-sm-block border-5 hover">
                                        <i className="fa-brands fa-whatsapp" style={{ color: 'white', fontSize: 24}}></i>
                                        <span className="stext p-2">
                                            +92-332-666-3723
                                        </span>
                                    </Link>
                                    <div className="remove-click remove-clickbg-adding d-center m-auto theme-clr" onClick={handleSidebar}>
                                        <i className="fa-regular fa-address-card" />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    )
}
