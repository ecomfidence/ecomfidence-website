import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function TermsAndConditions() {
  return (
    <>
      <Layout
        headerStyle={3}
        footerStyle={5}
        breadcrumbTitle="Terms & Conditions"
      >
        <section className="blog-details pt-space pb-space">
          <div className="container">
            <div className="row g-5">
              {/* Main Page */}
              <div className="col-12 col-lg-12">
                {/* Blog */}
                <div className="blog-post-details mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb w-100 mb-xxl-30 mb-xl-6 mb-5"
                      data-aos="zoom-in"
                      data-aos-duration={1400}
                    >
                      <img
                        src="/assets/img/importantPages/termsAndCondition.webp"
                        alt="img"
                        className="w-100"
                      />
                    </div>
                    <div className="post-content">
                      <div
                        className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-5 mb-xl-4 mb-lg-3 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1500}
                      >
                        <span>Terms and Conditions by: Ecomfidence</span>
                        <i className="fas fa-circle white" />
                        <span>Updated on: 10/10/2024</span>
                      </div>
                      <div className="mb-xxl-13 mb-xl-10 mb-lg-8 mb-7">
                        <h2
                          className="white mb-xxl-5 mb-3"
                          data-aos="fade-left"
                          data-aos-duration={1600}
                        >
                          1. Website Design and Development Terms
                        </h2>
                        <h3
                          className="white mb-xxl-5 mb-3"
                          data-aos="fade-left"
                          data-aos-duration={1550}
                        >
                          1.1 Design Specifications
                        </h3>
                        <ul
                          className="pra-clr mb-xxl-5 mb-3"
                          data-aos="fade-left"
                          data-aos-duration={1700}
                        >
                          <li className="d-flex align-items-center gap-2">
                            <i className="fas fa-chevron-right" /> Our standard
                            website development package includes a 5-page
                            design, unless otherwise specified during the
                            initial discussion.
                          </li>
                        </ul>

                        <h3
                          className="white mb-xxl-5 mb-3"
                          data-aos="fade-left"
                          data-aos-duration={1550}
                        >
                          1.2 Third-Party Service Providers
                        </h3>
                        <ul
                          className="pra-clr mb-xxl-5 mb-3"
                          data-aos="fade-left"
                          data-aos-duration={1700}
                        >
                          <li className="d-flex align-items-center gap-2">
                            <i className="fas fa-chevron-right" /> Ecomfidence
                            may collaborate with third-party service providers
                            or contractors during the website development
                            process. This may involve sharing your design brief
                            and website content to ensure a seamless development
                            experience.
                          </li>
                        </ul>

                        <h3
                          className="white mb-xxl-5 mb-3"
                          data-aos="fade-left"
                          data-aos-duration={1550}
                        >
                          1.3 Backup of Existing Website
                        </h3>
                        <ul
                          className="pra-clr mb-xxl-5 mb-3"
                          data-aos="fade-left"
                          data-aos-duration={1700}
                        >
                          <li className="d-flex align-items-center gap-2">
                            <i className="fas fa-chevron-right" /> It is the
                            client's responsibility to create a backup of their
                            existing website, including design, content files,
                            databases, and scripts. Ecomfidence can assist with
                            this process at our standard commercial rates.
                          </li>
                        </ul>


                        <h3
                          className="white mb-xxl-5 mb-3"
                          data-aos="fade-left"
                          data-aos-duration={1550}
                        >
                          1.4 Client's Responsibility Towards Content
                        </h3>
                        <ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
<li className="d-flex align-items-center gap-2">
<i className="fas fa-chevron-right" /> Ecomfidence is not responsible for the content provided by the client. Clients must ensure content complies with legal and ethical standards.
</li>
<li className="d-flex align-items-center gap-2">
<i className="fas fa-chevron-right" /> Content should be delivered within one month of the project start, or it may result in delays.
</li>
<li className="d-flex align-items-center gap-2">
<i className="fas fa-chevron-right" /> Clients must own digital copyrights for provided images.
</li>
</ul>

<h3 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
1.5 Client's Responsibility Towards Design
</h3>
<ul className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1700}>
<li className="d-flex align-items-center gap-2">
<i className="fas fa-chevron-right" /> Clients have 10 days to provide design feedback; otherwise, it will be considered final.
</li>
<li className="d-flex align-items-center gap-2">
<i className="fas fa-chevron-right" /> Changes after the initial feedback period will be billed at $80/hour.
</li>
<li className="d-flex align-items-center gap-2">
<i className="fas fa-chevron-right" /> Additional layouts are available for $150 each, payable upfront.
</li>
</ul>
                      
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        1.6 Template-Based Design Terms
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Template-based
                          designs are non-refundable and non-transferable.
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Templates are
                          for Ecomfidence-hosted domains in the 'Business
                          Hosting' category or higher.
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients can
                          only provide text and images for template designs.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        1.7 Changes and Revisions
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Minor errors
                          reported within 30 days of publication will be fixed
                          free of charge.
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Changes after
                          30 days will be billed at $80/hour, with 10 changes
                          allowed during the review at no extra cost.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        1.8 Payment Terms
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Static websites
                          require full payment in advance, with a $300
                          cancellation fee before production and 100% cost after
                          publication.
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> CMS and
                          eCommerce sites require 50% upfront, with the balance
                          due before production. Cancellation fees apply as
                          above.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        1.9 Merchant Facility for eCommerce Websites
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients are
                          responsible for obtaining a merchant facility for
                          eCommerce from a bank.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        1.10 Technical Compatibility
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients must
                          ensure their server meets Ecomfidence's requirements.
                          We are not liable for incompatibility.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        1.11 Training
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Post-launch
                          training is available at $80/hour for online sessions.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        1.12 Website Security
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence
                          guarantees secure code. Clients are responsible for
                          security after publication.
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients
                          providing third-party plugins are responsible for any
                          security issues they introduce.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        1.13 Project Hold
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients can
                          request a hold for up to 6 months with a $100 fee.
                          Longer holds may result in termination without
                          refunds.
                        </li>
                      </ul>
                      <h2
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2. Project Terms and Conditions
                      </h2>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.1 Understanding
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients should communicate unique requirements to manage expectations. Vague requirements may lead to issues and additional costs.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.2 Scope Creep
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> All
                          requirements must be defined, with changes incurring
                          additional costs.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.3 Managing Expectations
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients should
                          communicate challenges to ensure realistic
                          expectations.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.4 Unforeseen Circumstances
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence
                          will try to minimize delays from unforeseen events but
                          is not liable for them.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.5 Third-Party Components
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence is
                          not responsible for third-party product functionality.
                          Clients should maintain backups.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.6 Copyrights
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence
                          owns all copyrights unless purchased. Custom software
                          is included in project costs.
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence CMS
                          is proprietary and cannot be transferred without an
                          agreement.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.7 Domain and Hosting
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Domain and
                          hosting charges are extra unless stated. Ecomfidence
                          can provide hosting references.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.8 Hosting Solutions
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> For third-party
                          hosting, Ecomfidence must be involved in server
                          selection. Full access is required, and we are not
                          liable for hosting issues.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.9 Test Access
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence may
                          restrict access to test servers.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        2.10 Tech Support
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Technical
                          support is provided for 30 days post-launch, with
                          additional support at $80/hour.
                        </li>
                      </ul>
                      <h2
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        3. Ownership and Intellectual Property
                      </h2>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        3.1 Content
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence
                          owns all content unless stated, with the right to
                          modify without notice.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        3.2 Copyrights
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence
                          owns all copyrights unless purchased.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        3.3 Credits
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> New owners
                          inherit copyrights with the same restrictions in case
                          of business changes.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        3.4 Confidentiality and Approval Policy
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence
                          shares materials for approval, which are confidential.
                        </li>
                      </ul>
                      <h4
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        Client Obligations
                      </h4>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients must
                          not use or share confidential materials without
                          consent.
                        </li>
                      </ul>
                      <h4
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        Restrictions on Use
                      </h4>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients must
                          not share materials on social media or online.
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Materials
                          cannot be used in marketing or displayed publicly.
                        </li>
                      </ul>
                      <h4
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        Consequences of Breach
                      </h4>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence may
                          terminate the project and seek damages for
                          unauthorized use.
                        </li>
                      </ul>
                      <h2
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4. Disputes, Liability, and Indemnity
                      </h2>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.1 Dispute Resolution
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> In disputes,
                          clients must pay for work done and dispute management.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.2 Limitation of Liability
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence is
                          not liable for indirect or consequential losses.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.3 Force Majeure
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence is
                          not liable for breaches or disruptions due to
                          uncontrollable events.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.4 Notices
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Notices can be
                          sent via email, fax, or post, with specific delivery
                          terms.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.5 Severability
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Invalid clauses
                          do not affect the rest of the agreement.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.6 Assignment
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients cannot
                          assign the agreement without consent and transfer
                          fees.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.7 Change to Terms on Renewal
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Renewals are
                          subject to changing terms.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.8 Entirety of Agreement
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> This agreement
                          supersedes all prior agreements.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.9 Governing Law and Jurisdiction
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> The agreement
                          is governed by state laws, with disputes subject to
                          the courts of that state.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.10 Joint Liability
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Liability
                          applies to each and all partners in a client company.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        4.11 Consent to Communications
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients consent
                          to communications, with opt-out options for general
                          messages.
                        </li>
                      </ul>
                      <h2
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5. Payment and Refund Terms
                      </h2>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.1 Currency
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> All rates are
                          in USD, excluding taxes unless stated.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.2 Mode of Payment
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients choose
                          the payment method, but invoices must be processed as
                          scheduled.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.3 Standard Payment Mode for International Clients
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> International
                          wire transfers are accepted, with transaction costs
                          covered by the client.
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Online
                          marketplace payments are accepted, with platform fees
                          borne by the client.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.4 Milestone Payments
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Milestone
                          payments are due within 5 working days, before the
                          website launch.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.5 Project Schedule
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> The schedule
                          may change based on feedback during the project.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.6 Acceptance
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Payment
                          indicates acceptance of the quote and schedules.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.7 Refund Terms
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Refunds vary,
                          with a maximum of 75% before work starts, 50% after
                          commencement, and none after completion.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.8 Cancellation Requests
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Cancellations
                          must be made in writing via email.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.9 Minor Projects
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Minor projects
                          require full payment in advance, with changes
                          requested in writing within 2 days.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.10 Late Payments and Outstanding Invoices
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Non-payment may
                          lead to debt collection, with associated costs.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.11 Communication
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> All
                          communication is via email, and clients must keep
                          their email addresses updated.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.12 Payment for Third-Party Services
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Payments for
                          domain, hosting, and third-party services are
                          non-refundable and due in advance. Cancellations
                          require 30-day written notice.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        5.13 Hosting
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> For third-party
                          hosting, Ecomfidence will transfer the website after
                          full payment.
                        </li>
                      </ul>
                      <h2
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        6. Additional Terms
                      </h2>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        6.1 Communication and Documentation
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence
                          communicates and documents in English.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        6.2 Custom-Built Software
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence may
                          use custom software, included in project costs unless
                          specified.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        6.3 Proposal Validity
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Proposals are
                          valid for 15 days, and approvals after this should be
                          reconfirmed.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        6.4 Project Closure or Termination
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Ecomfidence
                          will request payment for work done before closing or
                          terminating projects.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        6.5 Refunds
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Refunds are not
                          provided unless mutually agreed.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        6.6 Payment Changes
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients should
                          communicate payment changes through a revised PO.
                        </li>
                      </ul>
                      <h2
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7. Image Use Policy
                      </h2>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.1 Purpose
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> This policy
                          ensures legal and compliant image use.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.2 Scope
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> The policy
                          applies to all Ecomfidence teams.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.3 Responsibilities
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Sales staff
                          should inform clients about the policy and image
                          sources.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.4 Image Source Requirements
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Clients must
                          confirm ownership or permissions for images in
                          writing.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.5 Best Practices
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Verify
                          copyright status and obtain permissions to avoid
                          issues.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.6 Client Communication
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Communicate the
                          policy and obtain client confirmation during project
                          start.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.7 Regular Audits
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Conduct audits
                          to ensure policy compliance.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.8 Compliance
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> Non-compliance
                          may result in disciplinary action, including
                          termination.
                        </li>
                      </ul>
                      <h3
                        className="white mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1550}
                      >
                        7.9 Review
                      </h3>
                      <ul
                        className="pra-clr mb-xxl-5 mb-3"
                        data-aos="fade-left"
                        data-aos-duration={1700}
                      >
                        <li className="d-flex align-items-center gap-2">
                          <i className="fas fa-chevron-right" /> The policy is
                          reviewed annually to stay updated.
                        </li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* tags */}
                <div
                  className="tag-share d-sm-flex d-grid align-items-center justify-content-sm-between justify-content-center mb-xxl-8 mb-xl-7 mb-5 gap-3"
                  data-aos="zoom-in"
                  data-aos-duration={1400}
                >
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
  );
}
