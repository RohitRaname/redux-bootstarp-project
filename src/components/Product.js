import React from "react";
import styled from "styled-components";
import hero from "../assets/hero-bcg.jpeg";

import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img className="mb-3" src={image} alt={name} />

        <NavLink to={`/product/${id}`}>
          <div className="search bg-primary text-white pos-center">
            <FaSearch className="icon" />
          </div>
        </NavLink>
      </div>

      <div className="info  d-flex f-jsb">
        <p className="fs-6 text-capitalize">{name}</p>
        <p className="text-primary">{formatPrice(price)}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  img {
    height: 13rem;
    border-radius: 5px;
  }

  .search {
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);

    opacity: 0;
    pointer-events: none;

    .icon {
      font-size: 0.8rem;
    }
  }

  .img-container {
    position: relative;
    z-index: 10;

    img,
    .search {
      transition: var(--transition);
    }
    &:hover img {
      filter: brightness(0.6);
    }

    &:hover .search {
      pointer-events: auto;
      opacity: 1;
    }
  }
`;

export default Product;
