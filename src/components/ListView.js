import React from "react";
import { Row, Col, Button, } from "react-bootstrap";

import Product from "./Product";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils/helpers";
import { NavLink } from "react-router-dom";

const ListView = () => {
  const { filteredItems: products } = useSelector((state) => state.products);

  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <Row key={id} as="article" className="gx-5  mb-5">
            <Col className="col-12 col-lg-auto">
              <img
                src={image}
                style={{ height: "13rem", width: "18rem" }}
                alt={name}
                className="mb-2 mg-md-0"
              />
            </Col>
            <Col className="info">
              <h4>{name}</h4>
              <h5 className="text-primary mb-2">{formatPrice(price)}</h5>
              <p className="mb-2 lh-base">{description.slice(0, 200)}...</p>
              <NavLink to={`/product/${id}`}>
                <Button size="sm">Details</Button>
              </NavLink>
            </Col>
            ;
          </Row>
        );
      })} 
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ListView;
