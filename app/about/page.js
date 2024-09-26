'use client'
import Layout from "@/components/layout/Layout"
import AboutEcom from "@/components/sections/AboutEcom"
import AboutEcom3 from "@/components/sections/AboutEcom3"
import TeamEcom from "@/components/sections/TeamEcom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import AboutEcom2 from "@/components/sections/AboutEcom2"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
    },
}

const toltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
}
export default function About() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={5} breadcrumbTitle="About">
                <div>
                    <AboutEcom2 />
                    <AboutEcom />
                    <AboutEcom3 />
                    <TeamEcom />
                </div>
            </Layout>
        </>
    )
}