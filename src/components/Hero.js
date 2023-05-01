import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import img from "../assets/hero-bcg-2.jpeg";
import main from "../assets/hero-bcg.jpeg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper className="section-center section d-grid align-items-center ">
      <Row className="hero g-5">
        <div className="content col-md-5 align-items-center">
          <h1 className="fw-bold mb-4">
            Design Your <br /> Comfort Zone{" "}
          </h1>
          <p className="fs-6 mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <NavLink to="/products">
            <Button>SHOP NOW</Button>
          </NavLink>
        </div>

        <div className="img-container  col-7 d-none d-md-block">
          <img src={main} className="main-img img" alt="" />
          <img src={img} className="img-2 img " alt="" />
        </div>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 80vh;

  .hero {
    align-items: center;
  }

  .img-container {
    position: relative;
    height: 30rem;
  }

  img {
    position: absolute;
    left: 0;
  }

  .main-img {
    position: absolute;

    top: 0;
    height: 25rem;
    width: 100%;
  }

  .img-2 {
    position: absolute;

    height: 10rem;
    bottom: 0;
    width: 15rem;
  }
`;

export default Hero;
