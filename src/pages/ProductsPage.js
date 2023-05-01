import React, { useEffect } from "react";
import {
  FilterProduct,
  Sort,
  BreadCrumb,
  GridView,
  ListView,
} from "../components";
import styled from "styled-components";
import { Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  clearFiltersAndSort,
  filterProducts,
  sortProducts,
} from "../features/products/productsSlice";
import Products from "../components/Products";

const ProductsPage = () => {
  const { isLoading, gridView, sort, filters } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFiltersAndSort());
  }, []);

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortProducts());
  }, [sort, filters]);

  return (
    <main>
      <BreadCrumb page="Products" />
      <Wrapper className="page section-center section">
        <Row className="g-4">
          <Col sm={12} md={3}>
            <FilterProduct />
          </Col>

          <Col sm={12} md={9}>
            <Products />
          </Col>
        </Row>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main``;

export default ProductsPage;
