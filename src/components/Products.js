import React from "react";
import { Row, Col, Button, Badge, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

import styled from "styled-components";
import GridView from "./GridView";
import ListView from "./ListView";
import Sort from "./Sort";

const Products = () => {
  const { gridView, isLoading, filteredItems } = useSelector(
    (state) => state.products
  );

  if (isLoading)
    return (
      <section className="section text-center">
        <Spinner variant="primary"></Spinner>
      </section>
    );

  return (
    <Wrapper>
      <Sort />

      {filteredItems.length === 0 && (
        <section className="section text-center">
          <p className="fs-4">No items matched</p>
        </section>
      )}
      {gridView ? <GridView /> : <ListView />}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Products;
