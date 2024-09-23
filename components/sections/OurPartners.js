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
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 3,
        },
    },
}
export default function Footer4() {
    return (
        <>
<div className="container position-relative">
<div className="footer-client mt-20">
  <h5 className="trusted white">We Partners </h5>
  <div className="swiper trusted-inner">
    <Swiper {...swiperOptions} className="swiper-wrapper">
      <SwiperSlide>
        <Link href="#">
          <img src="/assets/img/partners/Canva.svg" alt="Canva" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <img src="/assets/img/partners/Klaviyo.svg" alt="img" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <img src="/assets/img/partners/Shopify.svg" alt="img" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <img src="/assets/img/partners/ShopifyPlus.svg" alt="img" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <img src="/assets/img/partners/Kreative Bugs.svg" alt="img" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <img src="/assets/img/partners/Loox.svg" alt="img" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <img src="/assets/img/partners/Pushowl.svg" alt="img" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <img src="/assets/img/partners/Recharge.svg" alt="img" />
        </Link>
      </SwiperSlide>
    </Swiper>
  </div>
</div>
</div>
</>

    )
}