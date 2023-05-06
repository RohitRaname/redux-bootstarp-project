import React, { useEffect } from "react";
import {
  FilterProduct,
  Sort,
  BreadCrumb,
  Products,
  Gallery,
  SingleProductInfo,
} from "../components";
import styled from "styled-components";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productsSlice";
import { getProduct } from "../features/singleProduct/singleProductSlice";

const SingleProduct = () => {
  const { product, isLoading } = useSelector((state) => state.product);

  console.log(product);

  const { id } = useParams();
  console.log("id", id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  if (isLoading)
    return (
      <section className="section text-center page-100">
        <Spinner variant="primary"></Spinner>
      </section>
    );
  if (!product)
    return (
      <section className="section text-center page-100">
        <p className="fs-4">Product Not Found</p>
      </section>
    );

  const { images } = product;

  return (
    <Wrapper className="">
      <BreadCrumb page="Products" subPage="Modern Poster" />
      <section className="section  pt-0  section-center page">
        <Row className="g-5">
          <Col sm={12} lg={5}>
            <Gallery images={images} />
          </Col>
          <Col sm={12} lg={7}>
            <SingleProductInfo product={product} />
          </Col>
        </Row>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default SingleProduct;
