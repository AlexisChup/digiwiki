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

  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div>
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Form>
            <Form.Group className="">
              <Form.Label className="small">Choisissez un topic</Form.Label>
              <Form.Select
                size="sm"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              >
                {optionsSelect.map((opt, index) => (
                  <option key={index}>{opt}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label className="small">Message</Form.Label>
              <Form.Control
                size="sm"
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
              className="mt-2 btn-submit-href"
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
