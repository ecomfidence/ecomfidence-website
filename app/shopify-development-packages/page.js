import Layout from "@/components/layout/Layout"
import ShopifyPackagesSection from "@/components/sections/ShopifyPackagesSection"

export default function ShopifyDevelopmentPackages() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={5} breadcrumbTitle="Shopify Development Packages">
                <ShopifyPackagesSection />
            </Layout>
        </>
    )
}