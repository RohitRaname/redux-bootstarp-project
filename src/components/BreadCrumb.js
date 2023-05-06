import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BreadCrumb = ({ page }) => {
  return (
    <Wrapper className="py-3">
      <div className="section-center">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb mb-0">
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
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary-900);
    text-decoration: none;
    &.active {
      color: var(--black);
    }
  }
`;

export default BreadCrumb;
