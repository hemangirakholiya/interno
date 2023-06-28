import React from "react";
import styled from "styled-components";

const Client = () => {
  return (
    <Wrapper data-aos="fade-left">
      <div className="client-logo" >
        <picture>
          <img src="./images/01.svg" alt="1logo" className="logo" />
          <img src="./images/02.svg" alt="2logo" className="logo" />
          <img src="./images/03.svg" alt="3logo" className="logo" />
          <img src="./images/04.svg" alt="4logo" className="logo" />
          <img src="./images/05.svg" alt="5logo" className="logo" />
        </picture>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12rem;
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 80%;
  overflow-x: hidden;

  .logo {
    margin: 3rem 3rem;
    transition: all 0.3s ease-in-out;
  }
  .logo:hover{
    transform: translateY(-10px);
  }
`;

export default Client;
