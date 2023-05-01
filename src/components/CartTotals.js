import React from "react";
import { Row,Col,Button,Badge } from "react-bootstrap";

import styled from "styled-components";

const CartTotals
 = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <Row md={2} className="row-cols-1 "></Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default CartTotals
;
