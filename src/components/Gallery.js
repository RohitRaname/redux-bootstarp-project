import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

import styled from "styled-components";

const Gallery = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0].url);

  return (
    <Wrapper>
      <Row>
        <Col className="col-12 mb-3">
          <img src={main} className="img main-img" alt="" />
        </Col>

        {images?.length > 0 &&
          images.map((img) => (
            <Col>
              <img
                src={img.url}
                className={`img side-img ${img.url === main && "active"}`}
                alt=""
                onClick={() => setMain(img.url)}
              />
            </Col>
          ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-img {
    height: 27rem;
  }

  .side-img {
    height: 5rem;

    &.active {
      border:1.5px solid var(--clr-primary-1);
    }
  }
`;

export default Gallery;
