import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you! Get in touch with our team for any inquiries, collaborations, or support.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Our Office</h2>
                    <p><strong>PathFortune PVT LTD</strong></p>
                    <p>Office #24, TechPark Avenue</p>
                    <p>Pune, Maharashtra, India</p>
                    <p>Email: <a href="mailto:support@pathfortune.com">support@pathfortune.com</a></p>
                    <p>Phone: +91 98765 43210</p>
                    <p>Working Hours: Mon - Sat | 10:00 AM - 7:00 PM</p>
                </div>

                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Your Message" rows="6" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
