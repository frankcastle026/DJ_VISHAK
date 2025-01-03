import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_wyve7uq";
    const templateId = "template_cl7gesj";
    const publicKey = "LCGtkaScQnp3z8YI9";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: phoneNumber,
      subject: subject,
      to_name: "Vishak",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
        setSubject("");
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 5000); // Hide the message after 3 seconds
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-500 text-black min-h-screen mt-5 text-lg xl:mt-16 flex justify-center items-center" id="Contact">
      <div
        
        className="max-w-2xl mx-auto p-8 shadow-lg text-center"
      >
        <h2 className="text-black text-3xl xl:text-5xl anton-regular mb-4">
          Let’s Create Unforgettable Vibes Together!
        </h2>
        <p className="text-black text-lg mb-8 uppercase">
          Got an event in mind? Let’s team up to deliver beats, energy, and
          memories that last a lifetime!
        </p>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg shadow-md">
            Mail Sent Successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="emailForm">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg border border-gray-700 bg-gray-800 text-white text-lg focus:outline-none focus:border-cyan-500 focus:bg-gray-900 shadow-md"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg border border-gray-700 bg-gray-800 text-white text-lg focus:outline-none focus:border-cyan-500 focus:bg-gray-900 shadow-md"
          />
          <input
            type="tel"
            placeholder="Your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg border border-gray-700 bg-gray-800 text-white text-lg focus:outline-none focus:border-cyan-500 focus:bg-gray-900 shadow-md"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg border border-gray-700 bg-gray-800 text-white text-lg focus:outline-none focus:border-cyan-500 focus:bg-gray-900 shadow-md"
          />
          <textarea
            placeholder="Your Message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg border border-gray-700 bg-gray-800 text-white text-lg focus:outline-none focus:border-cyan-500 focus:bg-gray-900 shadow-md"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-cyan-500 text-black text-lg font-semibold hover:bg-cyan-400 transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
