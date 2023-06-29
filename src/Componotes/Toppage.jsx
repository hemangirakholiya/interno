import React from "react";
import styled from "styled-components";

const Toppage = (props) => {
  return (
    <Wrapper data-aos="zoom-in-up">
      <div className="main_container">
        <div className="data_container">
          <div className="text_part">
            <div className="title">{props.title}</div>
            <div className="sub_title">{props.subtitle}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main_container {
    background-image: url(./images/Photo.png);
    overflow-x: hidden;
    background-repeat: no-repeat;
    height: 50vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2); */
  }
  .data_container {
    background-color: #ffffff;
    height: 20vh;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px 40px 0 0;
    @media (max-width: 768px) {
      width: 50%;
    }
    @media (max-width: 345px) {
      width: 70%;
    }
  }

  .title {
    color: #292f36;
    font-size: 5.5rem;
    font-weight: 900;
    text-align: center;
    @media (max-width: 580px) {
      font-size: 4rem;
    }
  }
  .sub_title {
    color: #292f36;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
  }
`;

export default Toppage;
