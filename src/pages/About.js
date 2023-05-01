import React from "react";
import { Row } from "react-bootstrap";
import main from "../assets/hero-bcg-2.jpeg";
import { BreadCrumb } from "../components";

import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <BreadCrumb page="About" />

      <section className="section">
        <div className="section-center page">
          <Row lg={2} className="row-cols-1 g-5 ">
            <div>
              <img src={main} alt="table in a fucking house on a boat " />
            </div>

            <div className="info ">
              <div className="title mb-4 text-start d-inline-block">
                <h3>About</h3>
                <div className="underline"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                eaque debitis nobis perferendis sunt aperiam, sequi unde at,
                quasi explicabo hic repudiandae corporis facilis, consequatur
                molestiae temporibus ea! Eum, eaque!
              </p>
            </div>
          </Row>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .breadcrumb-item {
    font-size: 2rem;
    font-weight: 600;
    color: var(--clr-primary-1);

    .active {
      color: var(--clr-primary-8);
    }
  }

  p {
    line-height: 2;
  }
`;

export default About;
