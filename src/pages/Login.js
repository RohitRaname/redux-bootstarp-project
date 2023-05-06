import React, { useState } from "react";
import {
  div,
  Col,
  Button,
  Badge,
  Spinner,
  Form,
  InputGroup,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Wrapper className="page-center page section section-center">
      <Form
        className="form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h3 className="mb-3 fw-semibold">Login</h3>

        <div className="mb-2">
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Email" />
            <Form.Control.Feedback type="invalid">
              Email is required
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="mb-2">
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              minLength={6}
            />
            <Form.Control.Feedback type="invalid">
              Password is required
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <Button type="submit" className="btn-block">
          Register
        </Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Register;
