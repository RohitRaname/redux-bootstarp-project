import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Row, Button, Badge } from "react-bootstrap";
import hero from "../assets/hero-bcg.jpeg";
import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const FeaturedProducts = () => {
  const { items: products } = useSelector((state) => state.products);

  return (
    <Wrapper className="bg-light section-sm">
      <div className="section-center">
        <div className="title">
          <h3>Featured Products</h3>
          <div className="underline"></div>
        </div>

        <div className="products-row gap-3 mb-5">
          {products.slice(0, 5).map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>

        <div className="text-end">
          <NavLink
            as="button"
            className="btn btn-sm btn-primary ms-auto"
            to="/products"
          >
            See All {"  "} <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 998px) {
    .products-row {
      grid-template-columns: repeat(4, 1fr);
    }
    article:nth-child(4) {
      display: none;
    }
  }
  @media screen and (max-width: 798px) {
    .products-row {
      grid-template-columns: repeat(3, 1fr);
    }
    article:nth-child(3) {
      display: none;
    }
  }
  @media screen and (max-width: 640px) {
    .products-row {
      grid-template-columns: repeat(2, 1fr);
    }

    article:nth-child(3) {
      display: block;
    }
  }
  @media screen and (max-width: 500px) {
    .products-row {
      grid-template-columns: 1fr;
    }
  }
`;

export default FeaturedProducts;
