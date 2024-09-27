import Layout from "@/components/layout/Layout"
import AboutEcom from "@/components/sections/AboutEcom"
import AboutEcom3 from "@/components/sections/AboutEcom3"
import TeamEcom from "@/components/sections/TeamEcom"
import AboutEcom2 from "@/components/sections/AboutEcom2"

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