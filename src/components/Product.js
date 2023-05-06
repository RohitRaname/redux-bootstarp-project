import React from "react";
import styled from "styled-components";
import hero from "../assets/hero-bcg.jpeg";

import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <NavLink to={`/product/${id}`}>
        <div className="img-container">
          <img className="mb-3" src={image} alt={name} />
        </div>

        <div className="info ">
          <p className="fs-5 text-capitalize text-black">{name}</p>
          <div className="price">
            <span className="new-price fw-bold text-black">
              {formatPrice(price)}
            </span>{" "}
            <span className="discount text-success">(44% OFF)</span>
            <p className="prev-price text-decoration-line-through">$480</p>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: 1px solid var(--grey-100);
  border-radius: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  background: var(--white);
  color: var(--black);

  & > * {
    text-decoration: none;
  }

  position: relative;
  z-index: 10;
  transition: var(--transition);

  &:hover {
    /* filter: brightness(0.96); */
    /* border-color: var(--grey-200); */
    box-shadow: 0rem .2rem .3rem 0 rgba(0, 0, 0, 0.06);
  }

  img {
    height: 13rem;
    border-radius: 5px;
  }

  .img-container {
    position: relative;
    z-index: 10;
  }

  .new-price {
    font-size: large;
  }
  .prev-price {
    font-size: 0.9rem;
    color: var(--grey-400);
  }
`;

export default Product;
