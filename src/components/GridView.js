import React from "react";
import { Row, Col } from "react-bootstrap";

import Product from "./Product";

import styled from "styled-components";
import { useSelector } from "react-redux";

const GridView = () => {
  const { filteredItems: products } = useSelector((state) => state.products);

  return (
    <Wrapper>
      <Row className="grid-3">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products {
  }
`;

export default GridView;
