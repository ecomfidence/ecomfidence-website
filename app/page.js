import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import HeroEcom1 from "@/components/sections/HeroEcom1"
import ProductEcom from "@/components/sections/ProductEcom"
import ServiceEcom from "@/components/sections/ServiceEcom"
import TextSLider3 from "@/components/sections/TextSLider3"
import TextSLiderEcom from "@/components/sections/TextSLiderEcom"
import OurPartners from "@/components/sections/OurPartners"
import StepWorkingEcom from "@/components/sections/StepWorkingEcom"
import ProtfolioEcom from "@/components/sections/ProtfolioEcom"
import TeamEcom from "@/components/sections/TeamEcom"
import Testimonial4 from "@/components/sections/Testimonial4"
import TeamEcom1 from "@/components/sections/TeamEcom1"
export default function Home() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={5}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <HeroEcom1 />
                    <TextSLiderEcom />
                    <ProductEcom />
                    <OurPartners />
                    <ServiceEcom />
                    <StepWorkingEcom />
                    <ProtfolioEcom />
                    <TeamEcom1 />
                </div>
            </Layout>
        </>
    )
}