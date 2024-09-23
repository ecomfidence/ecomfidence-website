import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import CaseStudy1 from "@/components/sections/CaseStudy1"
import HeroEcom1 from "@/components/sections/HeroEcom1"
import ProductEcom from "@/components/sections/ProductEcom"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import TextSLider1 from "@/components/sections/TextSLider1"
import TextSLider2 from "@/components/sections/TextSLider2"
import TextSLider3 from "@/components/sections/TextSLider3"
import TextSLiderEcom from "@/components/sections/TextSLiderEcom"
import Watch1 from "@/components/sections/Watch1"
import OurPartners from "@/components/sections/OurPartners"
export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={1}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <HeroEcom1 />
                    <TextSLiderEcom />
                    <ProductEcom />
                    <OurPartners />
                    <Service1 />
                    <TextSLider1 />
                    <CaseStudy1 />
                    <Watch1 />
                    <Team1 />
                    <TextSLider2 />
                    <Testimonial1 />
                    <Blog1 />
                    <TextSLider3 />
                </div>
            </Layout>
        </>
    )
}