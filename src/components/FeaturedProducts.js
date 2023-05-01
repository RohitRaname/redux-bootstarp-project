import React from "react";
import { FaSearch } from "react-icons/fa";
import { Row, Button, Badge } from "react-bootstrap";
import hero from "../assets/hero-bcg.jpeg";
import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const FeaturedProducts = () => {
  const { items: products } = useSelector((state) => state.products);

  return (
    <Wrapper className="bg-light section">
      <div className="section-center">
        <div className="title">
          <h3>Featured Products</h3>
          <div className="underline"></div>
        </div>

        <Row md={2} lg={3} className="g-4 f-jc">
          {products.slice(0, 3).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </Row>

          <NavLink to="/products">
        <div className="d-flex ">
            <Button size="sm" className="mx-auto">
              See All Products
            </Button>
        </div>
          </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default FeaturedProducts;
