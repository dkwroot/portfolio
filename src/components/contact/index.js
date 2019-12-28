import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import aboutData from "./data.js";

import "./style.css";

const Contact = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("https://dkwroot-portfolio.glitch.me", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: document.getElementById("user-email").value,
        message: document.getElementById("user-message").value
      })
    });

    if (response.ok) {
      setShow(true);
    }
  };

  return (
    <div
      id="CONTACT"
      className="section-75 bg-dark"
      style={{ overflow: "hidden" }}
    >
      <div className="contact__container">
        <div className="contact__about mx-4">
          <h4 className="text-center w-100">About Me</h4>
          <p>{aboutData[0]}</p>
          <p>{aboutData[1]}</p>
          <p>{aboutData[2]}</p>
        </div>

        <Form className="contact__form-container" onSubmit={handleSubmit}>
          <h3>CONTACT</h3>
          <Form.Text className="my-3">
            I'm currently available for employment opportunities. Please, feel
            free to contact me.
          </Form.Text>
          <Form.Group controlid="formEmail">
            <Form.Label>Contact Email Address</Form.Label>
            <Form.Control
              id="user-email"
              type="email"
              placeholder="Your contact email"
              required
            />
          </Form.Group>

          <Form.Group controlid="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control id="user-message" as="textarea" rows="5" required />
          </Form.Group>

          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>

        <img
          className="w-100"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          src="https://raw.githubusercontent.com/dkwroot/icons/master/proj_icons/portfolio/moonlanding.svg?sanitize=true"
          alt="moonlanding"
        />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your interest. I will contact you as soon as possible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
