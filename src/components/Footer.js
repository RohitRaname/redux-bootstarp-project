import React from "react";
import { Row } from "react-bootstrap";

import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="bg-dark p-3 text-center text-white">
      <div className="section-center">
        <span>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary">ComfySloth</span>{" "}
        </span>

        <div className="d-block d-md-none"></div>

        <span>All rights reserved </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer``;

export default Footer;
