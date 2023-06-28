import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: #ffffff;
  width: 80%;
  text-align: center;
  border-radius: 8px;
  padding: 30px;
  transition: all 0.3s ease-in-out;
  margin-left: 25px;

  &:hover {
    transform: translateY(-10px);
    background-color: #F4F0EC;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); */
  }
`;

const CardTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 600;
  border: hidden;
`;

const CardContent = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;

const ReadMoreLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const GridContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 16px;
 

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-top: 2px;
    text-align: center;
    color: #cda274;
    font-size: 15px;
  }
`;

const Work = (props) => {

  return (
    <GridContainer data-aos="fade-right">
      {props.cardsData.map((card) => (
        <CardWrapper key={card.id}>
          <CardTitle>{card.title}</CardTitle>
          <CardContent>{card.content}</CardContent>
          <ReadMoreLink href="/service-single">
            Read more <i className="arrow fa-solid fa-arrow-right-long"></i>
          </ReadMoreLink>
        </CardWrapper>
      ))}
    </GridContainer>
  );
};

export default Work;
