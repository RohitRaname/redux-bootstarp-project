import React from "react";
import { Row,Col,Button,Badge,Spinner,Form, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <Row md={2} className="row-cols-1 "></Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Footer;
