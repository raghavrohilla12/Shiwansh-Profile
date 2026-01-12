import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have questions or want to discuss a project? We'd love to hear from you.
        </p>

        <div className="contact-wrapper">

          {/* LEFT SIDE – FORM */}
          <div className="contact-form">
            <h2>Send us a message</h2>

            <form>
              <label>Your Name *</label>
              <input type="text" placeholder="Enter your full name" required />

              <label>Email Address *</label>
              <input type="email" placeholder="Enter your email" required />
              <small>We accept Gmail, Yahoo, Outlook, etc.</small>

              <label>Mobile Number</label>
              <input type="text" placeholder="Enter your mobile number" />

              <label>Subject</label>
              <input type="text" placeholder="What's this about?" />

              <label>Message *</label>
              <textarea
                rows="5"
                placeholder="Let us know your requirement, and our team will connect with you."
                required
              ></textarea>

              <button className="send-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE – CONTACT DETAILS */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              Fill out the form or reach out to us directly through the contact details below.
            </p>
            <div className="info-box">
              <div className="info-head">
                <MapPin className="icon" />
                <h3>Our Office</h3>
              </div>

              <p>
                B-116, Modeltown, Sector 126,<br />
                Mohali-140308, India
              </p>
            </div>

            <div className="info-box">
              <div className="info-head">
                <Phone className="icon" />
                <h3>Phone</h3>
              </div>

              <p>+91 9534098040 (Office)</p>
              <p>(Mon–Fri, 9 AM–6 PM)</p>
            </div>

            <div className="info-box">
              <div className="info-head">
                <Mail className="icon" />
                <h3>Email</h3>
              </div>

              <p>hr@shiwansh.com</p>
            </div>

            <hr className="divider" />

            <div className="follow-us">
              <h3>Follow Us</h3>

              <div className="social-icons">
                <a href="https://wa.me/918059020807 " className="social-circle">
                  <i className="fab fa-whatsapp"></i>
                </a>

                <a href="https://www.instagram.com/shiwanshsolutions/" className="social-circle">
                  <i className="fab fa-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/company/shiwansh-solutions/" className="social-circle">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>


          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
