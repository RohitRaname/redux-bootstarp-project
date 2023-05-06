import React, { useState } from "react";
import { Row, Col, Button, Badge } from "react-bootstrap";
import mainImg from "../assets/hero-bcg-2.jpeg";

import styled from "styled-components";
import AddToCart from "./AddToCart";
import { FaTrash } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";
import { useDispatch } from "react-redux";

import {
  removeItemFromCart,
  toggleCartItemQty,
} from "../features/cart/cartSlice";

const CartItem = ({ id, name, price, color, qty, stock, images }) => {
  const dispatch = useDispatch();

  const increase = () =>
    dispatch(toggleCartItemQty({ type: "increase", id: id, qty: qty + 1 }));
  const decrease = () =>
    dispatch(toggleCartItemQty({ type: "decrease", id: id, qty: qty - 1 }));

  return (
    <Wrapper className="radius-rounded">
      <Row className="mb-5 f-ac p-3">
        <Col className="d-flex gap-3 col col-lg-3 f-ac f-js">
          <img src={images[0]?.url} className="img" alt="" />
          <div className="info">
            <h5 className="text-nowrap mb-0">{name}</h5>
            <p className="d-flex f-ac gap-2 mb-0">
              <span>Color:</span>
              <div
                className="color rounded"
                style={{ backgroundColor: color }}
              ></div>{" "}
            </p>
            <p className="text-primary mb-0 d-lg-none ">{formatPrice(price)}</p>
          </div>
        </Col>
        <Col className="text-primary d-none d-lg-block">
          {formatPrice(price)}
        </Col>
        <Col className="col">
          <AddToCart qty={qty} increase={increase} decrease={decrease} />
        </Col>
        <Col className="d-none d-lg-block">{formatPrice(price * qty)}</Col>
        <Col className="col-auto">
          <Badge
            className="bg-danger p-2"
            onClick={() => dispatch(removeItemFromCart(id))}
          >
            <FaTrash />
          </Badge>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
    0px 3px 10px rgba(0, 0, 0, 0.09);
  border-radius: 7px;

  img {
    height: 5rem;
    width: 6rem;
  }

  .color {
    display: inline-block;
    height: .8rem;
    width: .8rem;
  }

  .cartTotal {
    h5,
    p {
      display: grid;
      grid-template-columns: 10rem auto;
    }
  }

  .col {
    justify-content: start;
  }
`;

export default CartItem;
