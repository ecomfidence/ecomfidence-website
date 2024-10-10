'use client'
import { useState } from 'react';

export default function ContactForm2() {
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
      {/* <form
        name="gform"
        id="gform"
        method="POST"
        action="https://docs.google.com/forms/d/17vDcOdqk_ZDoEz1pbrTqr6kuSDS__zSkctAoBYRqcQw/formResponse?"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <div>
          <label>First name:
            <input type="text" name="entry.1186786425" id="entry.1186786425" required />
          </label>
        </div>
        <div>
          <label>Last name:
            <input type="text" name="entry.84259249" id="entry.84259249" required />
          </label>
        </div>
        <div>
          <label>Message:
            <textarea name="message" required></textarea>
          </label>
        </div>
        <button type="submit">Send!</button>
      </form> */}

      <form 
        name="gform"
        id="gform"
        method="POST"
        action="https://docs.google.com/forms/d/17vDcOdqk_ZDoEz1pbrTqr6kuSDS__zSkctAoBYRqcQw/formResponse?"
        target="hidden_iframe"
        onSubmit={handleSubmit}>
            
            <div className="row g-xxl-8 g-xl-6 g-lg-4 g-4">
                <div className="col-lg-12">
                    <input type="text" placeholder="Name" name="entry.652785103" id="entry.652785103"/>
                </div>
                <div className="col-lg-6">
                    <input type="email" placeholder="Email" name="entry.1897396985" id="entry.1897396985"/>
                </div>
                <div className="col-lg-6">
                    <input type="phone" placeholder="Phone" name="entry.1030781012" id="entry.1030781012"/>
                </div>
                <div className="col-lg-6">
                    <input type="text" placeholder="Business / Company Name" name="entry.929313391" id="entry.929313391"/>
                </div>
                <div className="col-lg-6">
                    <input type="url" placeholder="Website" name="entry.2046882916" id="entry.2046882916"/>
                </div>
                {/* <div className="col-lg-12">
                    <select defaultValue={6} className="form-select" name="entry.1186786425" id="entry.1186786425">
                        <option value={1}>
                            Clothing
                        </option>
                        <option value={2}>
                            Shoes
                        </option>
                        <option value={3}>
                            Accessories
                        </option>
                        <option value={4}>
                            Beauty
                        </option>
                        <option value={5}>
                            Home &amp;
                        </option>
                        <option value={6}>
                            Other
                        </option>
                    </select>
                </div> */}
                {/* <div className="col-lg-12 form-check-lg">
                      <input type="checkbox" value="This is a Dropshipping Store" placeholder="This is a Dropshipping Store"  name="entry.123456789" id="entry.123456789" />
                </div> */}
                <div className="col-lg-12">
                    <textarea rows={5} placeholder="Message" name="entry.1450576437" id="entry.1450576437"/>
                </div>
                <div className="col-lg-5">
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </div>
            </div>
        </form>

      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
    </>
  );
}
