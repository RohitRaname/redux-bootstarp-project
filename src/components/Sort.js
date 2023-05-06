import React, { useState } from "react";
import { Row, Dropdown, Button } from "react-bootstrap";
import { FaAcquisitionsIncorporated, FaFilter, FaList } from "react-icons/fa";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import {
  setSort,
  setGridView,
  setListView,
} from "../features/products/productsSlice";
import { toggleFilterSidebar } from "../features/user/userSlice";

const Sort = () => {
  const [sortText, setSortText] = useState("Price( Lowest )");

  const dispatch = useDispatch();
  const { gridView, items: products,} = useSelector((state) => state.products);

  const handleSort = (e) => {
    setSortText(e.target.textContent);
    dispatch(setSort(e.target.dataset.value));
  };

  return (
    <Wrapper className="mb-4">
      <p>
        <span>{products.length} results for</span>
        <span className="text-primary ms-1">"Rohit the Man</span>"{" "}
      </p>
      <div className="mobile-options d-flex d-md-none f-jsb">
        <Button size="sm" className="py-1" onClick={()=>dispatch(toggleFilterSidebar())}>
          <FaFilter />
          <span className="ms-2">Filter</span>
        </Button>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" size="sm" variant="">
            {sortText}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleSort} data-value="lowest-price">
              Price( Lowest )
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSort} data-value="highest-price">
              Price( Highest )
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSort} data-value="a-z">
              Name (a-z)
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSort} data-value="z-a">
              Name (z-a)
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="ms-auto d-flex f-as f-je">
        <Dropdown>
          <Dropdown.Toggle
            variant="white"
            id="dropdown-basic"
            className="border-dark d-none d-md-block"
          >
            {sortText}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleSort} data-value="lowest-price">
              Price( Lowest )
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSort} data-value="highest-price">
              Price( Highest )
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSort} data-value="a-z">
              Name (a-z)
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSort} data-value="z-a">
              Name (z-a)
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn-container .btn,
  .filter-btn {
    padding: 0.1rem 0.4rem;
    font-size: 0.9rem;

    &.active {
      background: var(--black);
      color: var(--white);
    }
  }

  hr {
    background: var(--clr-black);
  }
`;

export default Sort;
