import React from "react";
import "./Student.css";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
export const Student = () => {
  return (
    <>
      <div className="student">
        <div className="sidebar">
          <Container>
            <Row className="gap-3">
              <Col className="bg-light border p-3" xs={12}>
                Welcome User
              </Col>
              <Col className="bg-light border p-3" xs={12}>
                Profile
              </Col>
              <Col className="bg-light border p-3" xs={12}>
                Password Reset
              </Col>
              <Col className="bg-light border p-3" xs={12}>
                Add Complaints
              </Col>
              <Col className="bg-light border p-3" xs={12}>
                Pending Complaints
              </Col>
              <Col className="bg-light border p-3" xs={12}>
                Solved Complaints
              </Col>
            </Row>
          </Container>
        </div>
        <div className="student-form">
          <Form>
            <h2 className="formheader">File The Complaint</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 mt-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Issue related to?"
              className="mb-3"
            >
              <Form.Select aria-label="Floating label select example">
                <option value="1">Faculty</option>
                <option value="2">Hostel</option>
                <option value="3">Mess</option>
                <option value="4">Medical</option>
                <option value="5">Management</option>
                <option value="6">Medical</option>
                <option value="7">Miscellaneous</option>
              </Form.Select>
            </FloatingLabel>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload Related</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Whats's Wrong?"
              className="mb-3 mt-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Button as="input" type="submit" value="Submit" />
          </Form>
        </div>
      </div>
    </>
  );
};
