/*
 * Import : Npm
 */
import React from 'react';
import {
  Form, Button,
} from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';


/*
 * Import : local
 */
import './contact.scss';
/*
 * Component
 */
const Contact = () => (
  <>
    <div className="image">
      <img src="http://www.estiv-ales.fr/wp-content/uploads/2016/06/banniere-contact.jpg" width="100%" alt="banniere contact" />
    </div>
    <div className="contact">
      <div className="contact-form">
        <h1 className="contact-form-title">Nous contacter</h1>
        <p className="contact-form-desc">Envoyer un message</p>
        {/* Formulaire pour nous contacter */}
        <Form className="contact-form-form">
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Nom *" className="contact-form-input" required />
            <Form.Control type="text" placeholder="Prénom *" className="contact-form-input" required />
            <Form.Control type="email" placeholder="Adresse mail *" className="contact-form-input" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control as="textarea" placeholder="Message *" rows="8" className="contact-form-input-textarea" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="contact-form-button">
            Submit
          </Button>
        </Form>
      </div>

      {/* Information sur comment nous contacter */}
      <div className="contact-info">
        <h1 className="contact-info-title">Information</h1>
        <p className="contact-info-text-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit non quidem temporibus quae tenetur laudantium maiores laborum nostrum id, iure, repellendus quo, expedita accusamus ipsa.</p>
        <p className="contact-info-text">
          <FaMapMarkerAlt />
          <span className="contact-info-text-span">
        Entreprise, adresse, cp
          </span>
        </p>
        <p className="contact-info-text">
          <FaPhone />
          <span className="contact-info-text-span">
        (+33) 07 01 02 03 04
          </span>
        </p>
        <p className="contact-info-text">
          <FaEnvelope />
          <span className="contact-info-text-span">
        marmotte@gmail.com
          </span>
        </p>
      </div>
    </div>
  </>
);


/*
 * Export
 */
export default Contact;
