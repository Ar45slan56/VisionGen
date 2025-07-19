"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          industry: "",
          service: "",
          message: "",
        });
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>
      {submitted ? (
        <p className={styles.success}>Thank you! We’ll be in touch soon.</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          >
            <option value="">Select Industry</option>
            <option value="Tech">Technology</option>
            <option value="Health">Healthcare</option>
            <option value="Edu">Education</option>
            <option value="Finance">Finance</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="AI">AI Solutions</option>
            <option value="Chatbot">AI Chatbots</option>
            <option value="CRM">CRM Development</option>
            <option value="Web">Web Development</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
