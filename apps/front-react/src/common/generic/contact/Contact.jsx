import React, { useState } from "react";
import "./Contact.css";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  const optionsSelect = [
    "Recommander un outil",
    "Suggestion diverse",
    "Demande",
    "Aide",
    "Autre",
  ];

  const [topic, setTopic] = useState(optionsSelect[0]);
  const [message, setMessage] = useState("");

  const placeHolderInput =
    "Bonjour ! \nJe connais un outil génial pour mieux gérer ses finances, voici le lien :\nhttps://mon-outil-genial.com.\n\nBonne journée ! :)";

  const isFormValid = () => {
    let isFormValid = true;

    isFormValid &= message.length > 0;

    return isFormValid;
  };

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-responsive  mt-3 mb-2">
          <h1 className="fw-bold">Contact</h1>
          <Form>
            <Form.Group className="mt-3 mb-2 raleway">
              <Form.Label className="medium mb-2 raleway">
                Choisissez un topic
              </Form.Label>
              <Form.Select
                size="md"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              >
                {optionsSelect.map((opt, index) => (
                  <option key={index}>{opt}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formMessage" className="raleway mb-2">
              <Form.Label className="medium mb-2 raleway">Message</Form.Label>
              <Form.Control
                size="md"
                as="textarea"
                rows="5"
                placeholder={placeHolderInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              size="md"
              className="mt-2 btn-submit-href"
              disabled={!isFormValid()}
            >
              <a
                href={
                  "mailto:digiwiki.contact@gmail.com?subject=" +
                  topic +
                  "&body=" +
                  message
                }
              >
                Envoyer
              </a>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
