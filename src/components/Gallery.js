import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

import styled from "styled-components";

const Gallery = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0].url);

  return (
    <Wrapper>
      <Row className="gx-5 gy-1 gallery">
        <div className="col col-sm-1 side-images">
          {images?.length > 0 &&
            images.map((img) => (
              <img
                src={img.url}
                className={`img side-img  mb-2 ${img.url === main && "active"}`}
                alt=""
                onClick={() => setMain(img.url)}
              />
            ))}
        </div>
        <Col className="col-12 col-sm-11 mb-3">
          <img src={main} className="img main-img" alt="" />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .img {
    border-radius: 2px;
  }

  .main-img {
    max-height: 27rem;

    border-radius: 3px;
  }

  .side-img {
    height: 3rem;
    width: 3rem;
    cursor: pointer;

    &.active {
      border: 2px solid var(--primary-900);
    }
  }

  @media screen and (max-width: 640px) {
    .gallery {
      flex-direction: column;
      flex-direction: column-reverse;

      .main-img {
        height: 24rem;
      }

      .side-images {
        display: flex;
        gap: 1rem;

        img {
        }
      }
    }
  }
`;

export default Gallery;
