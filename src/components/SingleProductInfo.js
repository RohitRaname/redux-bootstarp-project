import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { Row, Col, Badge, Button } from "react-bootstrap";
import { FaCheck, FaStar } from "react-icons/fa";

import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { addItemToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const SingleProductInfo = ({ product }) => {
  const { id, stock, price, colors, reviews, name, description, company } =
    product;

  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(colors[0]);

  const increase = () => {
    setQty((prev) => (prev === stock ? prev : prev + 1));
  };
  const decrease = () => setQty((prev) => (prev === 1 ? 1 : prev - 1));

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h3>{name}</h3>

      <div className="stars d-flex gap-3">
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p>({reviews} customer reviews )</p>
      </div>

      <h4 className="text-primary">{formatPrice(price)}</h4>
      <p>{description}</p>

      <h5 className="info mb-3">
        Available:{" "}
        <span className="fw-semibold">{stock > 0 && "Available"}</span>
      </h5>
      <h5 className="info mb-3">
        SKU: <span className="fw-semibold">{id}</span>
      </h5>
      <h5 className="info mb-4">
        Brand: <span className="fw-semibold">{company}</span>
      </h5>

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

          <Button
            size="sm"
            onClick={() => {
              dispatch(addItemToCart({ ...product, qty: qty, color: color }));
            }}
          >
            ADD TO CART
          </Button>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
`;

export default SingleProductInfo;
