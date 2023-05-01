import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BreadCrumb = ({ page }) => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb">
            <NavLink to="/" className="breadcrumb-item active">
              Home
            </NavLink>

            <li className="breadcrumb-item ">{page}</li>
          </ol>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  
  .breadcrumb-item {
    font-size: 2rem;
    font-weight: 600;
    color: var(--clr-primary-1);

    &.active {
      color: var(--clr-primary-3);
    }
  }
`;

export default BreadCrumb;
