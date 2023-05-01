import React from "react";
import styled from "styled-components";
import { BreadCrumb, CartItem } from "../components";
import CartContainer from "../components/CartContainer";

const Cart = () => {
  return (
    <Wrapper>
      <BreadCrumb page="Cart" />
      <section className="section section-center page-100">
        <CartContainer />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Cart;
