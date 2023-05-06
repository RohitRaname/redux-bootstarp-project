import React from "react";
import { Row, Col, Button, Badge } from "react-bootstrap";
import mainImg from "../assets/hero-bcg-2.jpeg";

import styled from "styled-components";
import AddToCart from "./AddToCart";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { cart, totalQty, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0)
    return (
      <div className="section page text-center page mx-auto">
        <h4 className="mb-4">Cart is empty</h4>
        <NavLink to="/products" className="btn btn-primary">
          Fill it
        </NavLink>
      </div>
    );

  return (
    <Wrapper>
      {cart.map((cartItem) => (
        <CartItem {...cartItem} />
      ))}

      <div className="btn-container d-flex f-jsb mb-5">
        <NavLink to="/products" className="btn btn-primary">
          Continue shopping
        </NavLink>
        <Button variant="danger" onClick={() => dispatch(clearCart())}>
          Clear Shopping Cart
        </Button>
      </div>

      <div className="mx-auto mx-md-0 ms-md-auto" style={{ width: "25rem" }}>
        <div className="cartTotal border rounded p-3  mb-3">
          <h5 className="mb-3">
            Subtotal: <span className="">{formatPrice(totalPrice)}</span>
          </h5>
          <p className="mb-3">
            Shipping Fee <span className="">$0.00</span>
          </p>
          <hr className="mb-3" />
          <h4>
            Order Total: <span className="">{formatPrice(totalPrice)}</span>
          </h4>
        </div>
        <div className="text-center">
          <div className="d-grid">
            <Button>PROCEED TO CHECKOUT</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    max-height: 6.4rem;
    max-width: 6rem;
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

export default CartContainer;
