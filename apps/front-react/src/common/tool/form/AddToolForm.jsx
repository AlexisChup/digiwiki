import React, { useState } from "react";
import "./AddToolForm.css";
import Form from "react-bootstrap/Form";

export default function AddToolForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label className="my-0 small">Nom</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="GeniusTool"
          value={props.formAddTool.name}
          onChange={(e) => props.handleFormAddTool("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Url</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="genius-tool"
          value={props.formAddTool.url}
          onChange={(e) => props.handleFormAddTool("url", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">
          Petit description inférieur à 80 charactères
        </Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="Cet outil est vraiment génial !"
          value={props.formAddTool.shortDescription}
          onChange={(e) =>
            props.handleFormAddTool("shortDescription", e.target.value)
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Description</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          as="textarea"
          type="text"
          placeholder="Cet outil est vraiment génial !"
          value={props.formAddTool.description}
          onChange={(e) =>
            props.handleFormAddTool("description", e.target.value)
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">
          Lien d'affiliation ou du site
        </Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="https://genius-tool.com"
          value={props.formAddTool.affiliateRef}
          onChange={(e) =>
            props.handleFormAddTool("affiliateRef", e.target.value)
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Code Promo</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="GT022"
          value={props.formAddTool.codePromo}
          onChange={(e) => props.handleFormAddTool("codePromo", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="my-0 small">Url du logo de l'outil</Form.Label>
        <Form.Control
          size="sm"
          className="mb-2"
          type="text"
          placeholder="https://genius-tool/logo.png"
          value={props.formAddTool.imgUrl}
          onChange={(e) => props.handleFormAddTool("imgUrl", e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
