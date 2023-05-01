import React from "react";
import { article, Row } from "react-bootstrap";
import { FaCompass } from "react-icons/fa";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <Row lg={2} className="content gx-5 gy-2 f-ac">
          <div className="info">
            <h3 className="mb-4">Join out newsletter and get</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae itaque ullam facere, consequatur voluptatem laboriosam
              aperiam ea vero corporis at delectus quia quae esse!
            </p>
          </div>

          <form>
            <div className="form-group d-flex f-c">
              <input
                type="text"
                className="form-control rounded-0 rounded-start"
                id="formGroupExampleInput"
                placeholder="Enter email"
              />
              <button className="btn btn-primary rounded-0 rounded-end">
                Subscribe
              </button>
            </div>
          </form>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default NewsLetter;
