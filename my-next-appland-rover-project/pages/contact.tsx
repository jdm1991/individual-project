import React from 'react';
import "../app/globals.css";
import "../pages/contact.css";
import Layout from "./layout";

export default function Contact() {
  return (
    <Layout>
      <div className="contact-us-page">
        <div className="contact-us-textbox">
          <div className="contact-us-title">
            <h3>Get In Touch With Adventure</h3>
          </div>
          <div className="contact-us-text">
            <p>
              At [Dealership Name], your journey towards adventure begins with
              a single step—or a single message. Whether you're looking to
              explore the rugged capabilities of the Land Rover Defender or
              simply want to find out more about our exclusive offers, we're
              here to guide you every step of the way.
            </p>
            <h4>Why reach out to us?</h4>
            <p>
              Because every question, every detail matters when you're
              choosing not just a vehicle, but a companion for your
              adventures. From personalized consultations to test drives that
              thrill, our team is dedicated to providing an experience as
              premium as the vehicles we pride ourselves on.
            </p>
            <h4>Have a Question?</h4>
            <p>
              Curious about customization options, financing solutions, or the
              Defender's latest features? We're all ears—and expertise. Fill
              out the contact form, drop us an email, or give us a call.
              Better yet, if you're in the neighborhood, why not stop by?
              There's nothing we love more than talking Land Rover Defender
              and helping dreams hit the road.
            </p>
            <h4> Connect With Us Today</h4>
            <p>
              Let's make your Land Rover Defender aspirations a reality. Get in
              touch now and let the adventure begin!
            </p>
          </div>
        </div>
        <div className="contact-container">
          <div className="intouch-title">
            <h1>Simply fill out the form and one of our friendly team members will be in touch.</h1>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-container">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required maxLength="1000"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
