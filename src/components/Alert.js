import React, { useState } from "react";
import styled from "styled-components";
import { Alert } from "react-bootstrap";

const AlertToast = ({ alertType, alertText }) => {
  return (
    <Wrapper>
      <Alert show={true} variant={alertType}>
        <p className="mb-0 text-black fw-semibold">{alertText}</p>
      </Alert>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 6.4rem;
  left: 50%;
  transform: translate(-50%);

  .alert {
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
  }

  .alert::first-letter {
    text-transform: capitalize;
  }
`;

export default AlertToast;
