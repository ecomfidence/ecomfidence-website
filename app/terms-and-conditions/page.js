
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function TermsAndConditions() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={5} breadcrumbTitle="Terms & Conditions">
                <section className="blog-details pt-space pb-space">
                    <div className="container">
                        <div className="row g-5">
                            {/* Main Page */}
                            <div className="col-12 col-lg-12">
                                {/* Blog */}
                                <div className="blog-post-details mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb w-100 mb-xxl-30 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1400}>
                                            <img src="/assets/img/importantPages/termsAndCondition.webp" alt="img" className="w-100" />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-5 mb-xl-4 mb-lg-3 mb-3" data-aos="fade-left" data-aos-duration={1500}>
                                                <span>
                                                    Terms and Conditions by: Ecomfidence
                                                </span>
                                                <i className="fas fa-circle white" />
                                                <span>
                                                    Updated on: 10/10/2024
                                                </span>
                                            </div>
                            
                                            <div className="mb-xxl-13 mb-xl-10 mb-lg-8 mb-7">
                                                <h2 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1600}>
                                                    1. Website Design and Development Terms</h2>
                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.1 Design Specifications
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Our standard website development package includes a 5-page design, unless otherwise specified during the initial discussion.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.2 Third-Party Service Providers
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence may collaborate with third-party service providers or contractors during the website development process. This may involve sharing your design brief and website content to ensure a seamless development experience.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.3 Backup of Existing Website
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> It is the client's responsibility to create a backup of their existing website, including design, content files, databases, and scripts. Ecomfidence can assist with this process at our standard commercial rates.
                                                    </li>
                                                    </ul>

                                                    {/* ... (continue with the rest of the terms and conditions) ... */}

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.4 Client's Responsibility Towards Content
                                                    </h3>
                                                    {/* ... and so on for each section and subsection */}
                                                    </div>
                                                    ```

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.6 Template-Based Design Terms
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Template-based designs are non-refundable and non-transferable.
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Templates are for Ecomfidence-hosted domains in the 'Business Hosting' category or higher.
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients can only provide text and images for template designs.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.7 Changes and Revisions
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Minor errors reported within 30 days of publication will be fixed free of charge.
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Changes after 30 days will be billed at $80/hour, with 10 changes allowed during the review at no extra cost.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.8 Payment Terms
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Static websites require full payment in advance, with a $300 cancellation fee before production and 100% cost after publication.
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> CMS and eCommerce sites require 50% upfront, with the balance due before production. Cancellation fees apply as above.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.9 Merchant Facility for eCommerce Websites
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients are responsible for obtaining a merchant facility for eCommerce from a bank.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.10 Technical Compatibility
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients must ensure their server meets Ecomfidence's requirements. We are not liable for incompatibility.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.11 Training
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Post-launch training is available at $80/hour for online sessions.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.12 Website Security
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence guarantees secure code. Clients are responsible for security after publication.
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients providing third-party plugins are responsible for any security issues they introduce.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    1.13 Project Hold
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients can request a hold for up to 6 months with a $100 fee. Longer holds may result in termination without refunds.
                                                    </li>
                                                    </ul>

                                                    <h2 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2. Project Terms and Conditions
                                                    </h2>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.1 Understanding
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients should communicate unique requirements to ensure project success.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.2 Scope Creep
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> All requirements must be defined, with changes incurring additional costs.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.3 Managing Expectations
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients should communicate challenges to ensure realistic expectations.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.4 Unforeseen Circumstances
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence will try to minimize delays from unforeseen events but is not liable for them.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.5 Third-Party Components
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence is not responsible for third-party product functionality. Clients should maintain backups.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.6 Copyrights
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence owns all copyrights unless purchased. Custom software is included in project costs.
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence CMS is proprietary and cannot be transferred without an agreement.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.7 Domain and Hosting
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Domain and hosting charges are extra unless stated. Ecomfidence can provide hosting references.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.8 Hosting Solutions
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> For third-party hosting, Ecomfidence must be involved in server selection. Full access is required, and we are not liable for hosting issues.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.9 Test Access
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence may restrict access to test servers.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    2.10 Tech Support
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Technical support is provided for 30 days post-launch, with additional support at $80/hour.
                                                    </li>
                                                    </ul>

                                                    <h2 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    3. Ownership and Intellectual Property
                                                    </h2>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    3.1 Content
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence owns all content unless stated, with the right to modify without notice.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    3.2 Copyrights
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence owns all copyrights unless purchased.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    3.3 Credits
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> New owners inherit copyrights with the same restrictions in case of business changes.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    3.4 Confidentiality and Approval Policy
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence shares materials for approval, which are confidential.
                                                    </li>
                                                    </ul>

                                                    <h4 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    Client Obligations
                                                    </h4>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients must not use or share confidential materials without consent.
                                                    </li>
                                                    </ul>

                                                    <h4 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    Restrictions on Use
                                                    </h4>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients must not share materials on social media or online.
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Materials cannot be used in marketing or displayed publicly.
                                                    </li>
                                                    </ul>

                                                    <h4 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    Consequences of Breach
                                                    </h4>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence may terminate the project and seek damages for unauthorized use.
                                                    </li>
                                                    </ul>

                                                    <h2 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4. Disputes, Liability, and Indemnity
                                                    </h2>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.1 Dispute Resolution
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> In disputes, clients must pay for work done and dispute management.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.2 Limitation of Liability
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence is not liable for indirect or consequential losses.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.3 Force Majeure
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence is not liable for breaches or disruptions due to uncontrollable events.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.4 Notices
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Notices can be sent via email, fax, or post, with specific delivery terms.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.5 Severability
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Invalid clauses do not affect the rest of the agreement.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.6 Assignment
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients cannot assign the agreement without consent and transfer fees.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.7 Change to Terms on Renewal
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Renewals are subject to changing terms.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.8 Entirety of Agreement
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> This agreement supersedes all prior agreements.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.9 Governing Law and Jurisdiction
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> The agreement is governed by state laws, with disputes subject to the courts of that state.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.10 Joint Liability
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Liability applies to each and all partners in a client company.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    4.11 Consent to Communications
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients consent to communications, with opt-out options for general messages.
                                                    </li>
                                                    </ul>

                                                    <h2 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5. Payment and Refund Terms
                                                    </h2>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.1 Currency
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> All rates are in USD, excluding taxes unless stated.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.2 Mode of Payment
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients choose the payment method, but invoices must be processed as scheduled.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.3 Standard Payment Mode for International Clients
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> International wire transfers are accepted, with transaction costs covered by the client.
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Online marketplace payments are accepted, with platform fees borne by the client.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.4 Milestone Payments
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Milestone payments are due within 5 working days, before the website launch.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.5 Project Schedule
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> The schedule may change based on feedback during the project.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.6 Acceptance
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Payment indicates acceptance of the quote and schedules.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.7 Refund Terms
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Refunds vary, with a maximum of 75% before work starts, 50% after commencement, and none after completion.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.8 Cancellation Requests
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Cancellations must be made in writing via email.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.9 Minor Projects
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Minor projects require full payment in advance, with changes requested in writing within 2 days.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.10 Late Payments and Outstanding Invoices
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Non-payment may lead to debt collection, with associated costs.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.11 Communication
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> All communication is via email, and clients must keep their email addresses updated.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.12 Payment for Third-Party Services
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Payments for domain, hosting, and third-party services are non-refundable and due in advance. Cancellations require 30-day written notice.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    5.13 Hosting
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> For third-party hosting, Ecomfidence will transfer the website after full payment.
                                                    </li>
                                                    </ul>

                                                    <h2 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    6. Additional Terms
                                                    </h2>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    6.1 Communication and Documentation
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence communicates and documents in English.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    6.2 Custom-Built Software
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence may use custom software, included in project costs unless specified.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    6.3 Proposal Validity
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Proposals are valid for 15 days, and approvals after this should be reconfirmed.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    6.4 Project Closure or Termination
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Ecomfidence will request payment for work done before closing or terminating projects.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    6.5 Refunds
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Refunds are not provided unless mutually agreed.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    6.6 Payment Changes
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients should communicate payment changes through a revised PO.
                                                    </li>
                                                    </ul>

                                                    <h2 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7. Image Use Policy
                                                    </h2>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.1 Purpose
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> This policy ensures legal and compliant image use.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.2 Scope
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> The policy applies to all Ecomfidence teams.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.3 Responsibilities
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Sales staff should inform clients about the policy and image sources.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.4 Image Source Requirements
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Clients must confirm ownership or permissions for images in writing.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.5 Best Practices
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Verify copyright status and obtain permissions to avoid issues.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.6 Client Communication
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Communicate the policy and obtain client confirmation during project start.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.7 Regular Audits
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Conduct audits to ensure policy compliance.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.8 Compliance
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> Non-compliance may result in disciplinary action, including termination.
                                                    </li>
                                                    </ul>

                                                    <h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    7.9 Review
                                                    </h3>
                                                    <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                    <i className="fas fa-chevron-right" /> The policy is reviewed annually to stay updated.
                                                    </li>
                                                    </ul>



                                            <div className="mb-xxl-13 mb-xl-10 mb-lg-8 mb-7">
                                                <h2 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1600}>
                                                    California Consumer Privacy Act (CCPA)</h2>
                                                <p className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    For California residents, we comply with the CCPA. You have the right to:
                                                </p>
                                                <ol className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
                                                    <li className="d-flex align-items-center gap-2">
                                                        <i className="fas fa-chevron-right" /> Request Disclosure: request disclosure of personal data collected, sold, or shared
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                        <i className="fas fa-chevron-right" /> Request Deletion: request deletion of personal data
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2">
                                                        <i className="fas fa-chevron-right" /> Opt-Out: opt-out of the sale of personal data
                                                    </li>
                                                </ol>
                                                <p className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    To exercise your CCPA rights, please contact us at contact@ecomfidence.com.
                                                </p>
                                                <p className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    By using our website or services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* tags */}
                                <div className="tag-share d-sm-flex d-grid align-items-center justify-content-sm-between justify-content-center mb-xxl-8 mb-xl-7 mb-5 gap-3" data-aos="zoom-in" data-aos-duration={1400}>
                                    <div className="tag d-flex justify-content-sm-start justify-content-center align-items-center gap-xxl-4 gap-3">
                                        Tags:
                                        <ul className="taglist d-flex align-items-center gap-xxl-3 gap-xl-2 gap-1">
                                            <li>
                                                <Link href="#" className="tag-clr">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="tag-clr">
                                                    Poicy Page
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="tag-clr">
                                                    Important Information
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="d-flex align-items-center justify-content-sm-start justify-content-center gap-xxl-4 gap-3">
                                        Share:
                                        <ul className="common-social d-flex align-items-center gap-2">
                                            <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                <Link href="/#" className="d-center">
                                                    <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.8" clipPath="url(#clip0_6308_2802)">
                                                            <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6308_2802">
                                                                <rect width={10} height={16} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                <Link href="/#" className="d-center">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z" fill="white" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                <Link href="/#" className="d-center">
                                                    <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            {/* Sidebar */}
                            {/* <div className="col-12 col-lg-4">
                                <div className="blog-right-bar mt-lg-0 mt-4">
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>Search</h6>
                                        </div>
                                        <div className="search-widget" data-aos="zoom-in" data-aos-duration={1400}>
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>Cagegories</h6>
                                        </div>
                                        <div className="category" data-aos="fade-down" data-aos-duration={1600}>
                                            <ul className="d-grid gap-xxl-3 gap-3">
                                                <li>
                                                    <Link href="/blog-details">
                                                        Business <span>(2)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-details">
                                                        Job Market <span>(4)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-details">
                                                        Marketing <span>(3)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-details">
                                                        News <span>(5)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-details">
                                                        Social Media <span>(7)</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-details">
                                                        Trends <span>(8)</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>Recent Posts</h6>
                                        </div>
                                        <div className="recent-postwrap">
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1200}>
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/blog/details-small1.png" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        12/01/2024
                                                    </span>
                                                    <Link href="/news-details">
                                                        Guide dog shortage: The blind peo
                                                        ple who train their own guide
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1400}>
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/blog/details-small2.png" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        12/01/2024
                                                    </span>
                                                    <Link href="/news-details">
                                                        Guide dog shortage: The blind peo
                                                        ple who train their own guide
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1600}>
                                                <div className="recent-thumb">
                                                    <img src="/assets/img/blog/details-small3.png" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        12/01/2024
                                                    </span>
                                                    <Link href="/news-details">
                                                        Guide dog shortage: The blind peo
                                                        ple who train their own guide
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>Tag</h6>
                                        </div>
                                        <div className="tagwrap d-flex flex-wrap gap-xl-6 gap-lg-4 gap-md-3 gap-2">
                                            <Link href="/blog-details">nature</Link>
                                            <Link href="/blog-details">health</Link>
                                            <Link href="/blog-details">galaxy</Link>
                                            <Link href="/blog-details">creative</Link>
                                            <Link href="/blog-details">art</Link>
                                            <Link href="/blog-details">business</Link>
                                            <Link href="/blog-details">space</Link>
                                            <Link href="/blog-details">biology</Link>
                                            <Link href="/blog-details">environemnt</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}