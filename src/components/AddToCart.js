import React from "react";
import { Row, Button } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const AddToCart = ({ increase, decrease, qty }) => {
  return (
    <Wrapper>
      <div className="d-flex f-ab gap-3 mb-2">
        <FaMinus className="pointer" onClick={decrease} />
        <h4>{qty}</h4>
        <FaPlus className="pointer" onClick={increase} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AddToCart;
