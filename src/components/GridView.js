import React from "react";
import { Row, Col } from "react-bootstrap";

import Product from "./Product";

import styled from "styled-components";
import { useSelector } from "react-redux";

const GridView = () => {
  const { filteredItems: products } = useSelector((state) => state.products);

  return (
    <Wrapper>
      <Row lg={2} xl={3} className="g-3">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default GridView;
