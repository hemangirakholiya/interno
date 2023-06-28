import React from "react";
import Aboutus from "../Componotes/Aboutus";
import styled from "styled-components";

const Error = () => {
  const carddata = {
    image: "./images/Error.png",
    heading: "404",
    pera: "We are sorry, but the page you requested was not found",
    btn: "Back To Home",
  };

  return (
    <Wrapper>
      <Aboutus {...carddata} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: -3rem 0rem;
  .contact {
    display: none;
  }
  .btn {
    display: none;
  }
  .btnn {
    display: flex;
  }
  .section-hero-image {
    width: 50%;
    @media (max-width: 750px) {
      width: 100%;
    }
  }
  .hero-heading {
    font-size: 20rem;
    font-family: DM Serif Display;
    font-weight: 900;
    color: #cda274;
    @media (max-width: 750px) {
     font-size: 10rem;
    }
  }
  .hero-pera {
    font-size: 3rem;
    font-weight: 900;
    word-spacing: 4px;
    margin-bottom: 4rem;
  }
`;

export default Error;
