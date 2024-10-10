'use client'
import { useState } from 'react';

export default function ContactForm3() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Show message after form submission
    form.querySelectorAll('*').forEach((element) => {
      element.style.display = 'none';
    });
    form.insertAdjacentHTML('afterbegin', '<p>Thank You! Your message is recieved, We will contact you as soon as possible</p>');

    // Submit the form data to Google Forms
    fetch(form.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    }).then(() => {
      setSubmitted(true);
    }).catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <form 
        name="gform"
        id="gform"
        method="POST"
        action="https://docs.google.com/forms/d/1zmWQUinJpL7nyQW4QjoBab_3VngXL8UcEJhrPiMERCU/formResponse?"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="common-form">
          <div className="row g-xxl-8 g-xl-7 g-6">
              <div className="col-xl-12" data-aos="zoom-in-right" data-aos-duration={1400}>
                  <div className="gorm-grp">
                      <label className="fw-medium white mb-xxl-5 mb-xl-4 mb-3" htmlFor="name">Your
                          Name*</label>
                      <input name="entry.1552253478" id="entry.1552253478" type="text" placeholder="Your Name" />
                  </div>
              </div>
              <div className="col-xl-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                  <div className="gorm-grp">
                      <label className="fw-medium white mb-xxl-5 mb-xl-4 mb-3" htmlFor="emails">Your
                          Email*</label>
                      <input name="entry.614671081" id="entry.614671081" type="text" placeholder="Your Email" />
                  </div>
              </div>
              <div className="col-xl-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                  <div className="gorm-grp">
                      <label className="fw-medium white mb-xxl-5 mb-xl-4 mb-3" htmlFor="phone">Your
                          Phone*</label>
                      <input name="entry.1560692270" id="entry.1560692270" type="tel" placeholder="Your Phone" />
                  </div>
              </div>
              <div className="col-xl-12" data-aos="zoom-in-right" data-aos-duration={1400}>
                  <div className="gorm-grp">
                      <label htmlFor="mess" className="fw-medium white mb-xxl-5 mb-xl-4 mb-3">Your
                          Message*</label>
                      <textarea name="entry.1079635113" id="entry.1079635113" rows={5} placeholder="Write Message" />
                  </div>
              </div>
              <div className="col-xl-12" data-aos="zoom-in-right" data-aos-duration={1400}>
                  <div className="gorm-grp">
                      <button type="submit" className="getin-touch d-flex align-items-center justify-content-center gap-3 white-clr p-xxl-4 p-xl-3 p-lg-2 p-2 w-100 text-semibold">
                          <span className="icons">
                              <i className="fas fa-arrow-up theme-clr" />
                          </span>
                          Get In Touch
                      </button>
                  </div>
              </div>
          </div>
      </form>

      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
    </>
  );
}
