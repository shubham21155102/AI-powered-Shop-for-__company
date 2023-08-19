"use client";
import React, { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    fetch("http://127.0.0.1:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setEmail("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null; // Return null to hide the modal when isModalOpen is false
  }

  return (
    <div className="modal" data-modal>
      <div className="modal-close-overlay" data-modal-overlay></div>
      <div className="modal-content">
        <button className="modal-close-btn" data-modal-close onClick={closeModal}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="newsletter-img">
          <img
            src="https://raw.githubusercontent.com/codewithsadee/anon-ecommerce-website/master/assets/images/newsletter.png"
            alt="subscribe newsletter"
            width="400"
            height="400"
          />
        </div>
        <div className="newsletter">
          <form onSubmit={handleSubmit}>
            <div className="newsletter-header">
              <h3 className="newsletter-title">Subscribe Newsletter.</h3>
              <p className="newsletter-desc">
                Subscribe to <b>AiShop</b> to get the latest products and discount updates.
              </p>
            </div>
            <input
              type="email"
              name="email"
              className="email-field"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-newsletter">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
