import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { Row, Col, Badge, Button } from "react-bootstrap";
import { FaCheck, FaShoppingBag, FaStar } from "react-icons/fa";

import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { addItemToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const SingleProductInfo = ({ product }) => {
  const {
    id,
    stock,
    price,
    colors,
    reviews,
    name,
    category,
    description,
    company,
    rating,
  } = product;

  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(colors[0]);

  const increase = () => {
    setQty((prev) => (prev === stock ? prev : prev + 1));
  };
  const decrease = () => setQty((prev) => (prev === 1 ? 1 : prev - 1));

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h3 className="mb-4">{name}</h3>

      <div className="stats d-flex gap-3 f-ac mb-4">
        <Badge className="f-c gap-2 rating">
          <FaStar /> {rating || 0}
        </Badge>
        <p className="fw-bold review mb-0">{reviews} reviews </p>
      </div>

      <div className="price-box d-flex gap-2">
        <span className="new-price h4 fw-bolder">{formatPrice(price)}</span>{" "}
        <p className="h6 prev-price text-decoration-line-through text-muted">
          $480
        </p>
        <span className="discount  fw-bold h5">(44% OFF)</span>
      </div>

      <p className="fw-bold text-success">{stock > 0 ? "In" : "Out"} Stock</p>

      <p>{description}</p>

      <p className="info mb-3">
        Category :{" "}
        <span className="fw-semibold text-capitalize">
          {category || "home"}
        </span>
      </p>
      <p className="info mb-4">
        Brand : <span className="fw-semibold text-capitalize">{company}</span>
      </p>

      <div className="mb-4">
        <hr />
      </div>

      {stock > 0 && (
        <>
          <h5 className="info colors mb-3">
            Colors:{" "}
            <span>
              {" "}
              <div className="d-flex gap-1">
                {colors.map((c) => (
                  <Button
                    className="f-c rounded-circle d-inline-flex position-relative border-0"
                    style={{ backgroundColor: c }}
                    onClick={() => setColor(c)}
                  >
                    {color === c && (
                      <FaCheck className="icon position-absolute top-50 start-50 translate-middle" />
                    )}
                  </Button>
                ))}
              </div>
            </span>
          </h5>

          <AddToCart increase={increase} decrease={decrease} qty={qty} />

          <div className="btn-container mt-3  ">
            <Button
              className="me-4 addToCart-btn mb-2 mb-sm-0"
              variant="primary"
              size="lg"
              onClick={() => {
                dispatch(addItemToCart({ ...product, qty: qty, color: color }));
              }}
            >
              <span className="text-nowrap">Add To Cart</span>
            </Button>
            <NavLink
              className="btn btn-outline btn-lg goToCart-btn"
              style={{ background: "var(--primary-100)" }}
              onClick={() => {
                dispatch(addItemToCart({ ...product, qty: qty, color: color }));
              }}
            >
              <FaShoppingBag className="icon" />
              <span className="">Go to Bag</span>
            </NavLink>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .stats {
    .rating {
      padding: 0.6rem 0.8rem;
      background: var(--secondary-500) !important;
      font-size: 0.8rem;
    }
    .review {
      font-size: 0.9rem;
      color: var(--grey-700);
    }
  }

  .price-box {
    .discount {
      color: var(--secondary-500);
    }
  }

  .info {
    display: grid;
    grid-template-columns: 9rem auto;
  }

  .info.colors button {
    height: 1.5rem;
    width: 1.5rem;

    .icon {
      font-size: 0.7rem;
      color: var(--clr-white);
    }
  }

  .addToCart-btn,
  .goToCart-btn {
    font-size: 1.07rem;
    padding: 0.9rem 4rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  @media screen and (max-width: 768px) {
    .btn-container {
      display: start;
      align-items: center;
    }
  }
  @media screen and (max-width: 500px) {
    .btn-container {
      flex-direction: column;
    }
    .btn-container > * {
      width: 100%;
    }
  }
`;

export default SingleProductInfo;
