export default function Preloader() {
    return (
        <>
            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="e" className="letters-loading">
                            e
                        </span>
                        <span data-text-preloader="c" className="letters-loading">
                            c
                        </span>
                        <span data-text-preloader="o" className="letters-loading">
                            o
                        </span>
                        <span data-text-preloader="m" className="letters-loading">
                            m
                        </span>
                        <span data-text-preloader="f" className="letters-loading">
                            f
                        </span>
                        <span data-text-preloader="i" className="letters-loading">
                            i
                        </span>
                        <span data-text-preloader="d" className="letters-loading">
                            d
                        </span>
                        <span data-text-preloader="e" className="letters-loading">
                            e
                        </span>
                        <span data-text-preloader="n" className="letters-loading">
                            n
                        </span>
                        <span data-text-preloader="c" className="letters-loading">
                            c
                        </span>
                        <span data-text-preloader="e" className="letters-loading">
                            e
                        </span>
                        
                    </div>
                    <p className="text-center">E-Commerce with Confidence</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
