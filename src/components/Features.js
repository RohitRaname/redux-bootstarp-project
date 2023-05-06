import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCompass } from "react-icons/fa";
import styled from "styled-components";

import { services } from "../utils/constants";

const Features = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <Row lg={2} className="info mb-5">
          <h3>
            Custom Furniture <br className="" />
            Build Only For You
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quis
            omnis rem molestias provident dolores laborum et, explicabo corporis
            dolorum quasi ullam.
          </p>
        </Row>

        <div className="features grid-3">
          {services.map(({ id, icon, title, text }) => (
            <Col key={id} md={6} lg={4} className="feature  p-5 text-center">
              <span className="icon-box f-c  d-inline-flex mb-3">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Col>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-100);
  color: var(--primary-900);

  .features {
  }

  .feature {
    background: var(--primary-200);
    border-radius: 3px;

    .icon-box {
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      /* background: var(--primary-100); */

      font-size: 2.7rem;
    }
  }
`;

export default Features;
