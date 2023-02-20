import React from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Forms() {
  return (
    <div className="container">
      <Form>
        <Col xs={4} className="Col">
          <Form.Control type="email" placeholder="Email" />
        </Col>
        <Col xs={4} className="Col">
          <Form.Control placeholder="Name" />
        </Col>

        <Col xs="auto" className="buttons">
          <Button type="submit" className="btn">
            Submit
          </Button>
        </Col>
      </Form>
    </div>
  );
}
export default Forms;
