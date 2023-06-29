import React from "react";
import Toppage from "../Componotes/Toppage";
import styled from "styled-components";
import Aboutus from "../Componotes/Aboutus";

import Form from "../Componotes/Form";
import Flipcard from "../Componotes/Flipcard";

const Navpages = () => {
  const data = {
    image: "./images/Photo.png",
    title: "About Us",
    subtitle: "Home / About Us",
  };

  const carddata = {
    image: "./images/cardimg1.png",
    heading: "What We Do",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    btn: "Our Concept",
  };
  const cardsdata = {
    image: "./images/cardimg2.png",
    heading: "The End Result",
    pera: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.",
    btn: "Our Portfolio",
  };
  const formdata = {
    heading: "Creative project? Let's have a productive talk.",
  };

  const flipCardsData = {
    heading: "What the People Thinks About Us",
    flipsData: [
      {
        id: 1,
        image: "./images/fimage1.png",
        name: "Charlotte Levi",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 2,
        image: "./images/fimage2.png",
        name: "Nattasha Julie",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 3,
        image: "./images/fimage3.png",
        name: "Nora Owen",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 4,
        image: "./images/fimage4.png",
        name: "John Smith",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
    ],
  };

  return (
    <>
      <div>
        <Toppage {...data} />
      </div>
      <Wrapper>
        <div className="main_container">
          <div className="databox">
            <div className="text-part">
              <h1 className="quotation">“</h1>
              <div className="pera">
                <i>
                  I like an interior that defies labeling. I don't really want
                  someone to walk into a room and know that I did it
                </i>
              </div>
              <div className="author">-BUNNY WILLIAMS</div>
            </div>
          </div>
        </div>
        <div className="about_cards">
          <Aboutus {...carddata} />
        </div>
      </Wrapper>

      <Section>
        <Aboutus {...cardsdata} />
      </Section>

      <Flipcard  {...flipCardsData}/>
      
      <Sectiont>
        <Form {...formdata} />
      </Sectiont>
    </>
  );
};
const Wrapper = styled.div`
  .databox {
    padding: 10rem 0rem;
    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    overflow-x: hidden;
  }
  .text-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    border: 35px solid #f4f0ec;
    border-top: hidden;
    border-bottom: hidden;
    border-radius: 50%;
    padding: 5rem 12rem;
    width: 50%;
    transition: border-width 0.5s ease-in-out;

    @media (max-width: 980px) {
      width: 100%;
      padding: 5rem 2rem;
    }
  }
  .text-part:hover {
    border-width: 50px;
    animation: pulsate-border 2s 1;
  }
  .quotation {
    font-family: "DM Serif Display";
    color: #292f36;
    font-weight: 900;
    font-size: 8rem;
    margin-bottom: -2rem;
  }
  .pera {
    color: #292f36;
    font-size: 3.5rem;
    font-weight: 900;
    text-align: center;
    letter-spacing: 1px;
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  .author {
    color: #4d5053;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 1.5px;
    margin-top: 1rem;
  }
  @keyframes pulsate-border {
    0% {
      border-width: 25px;
    }
    50% {
      border-width: 50px;
    }
    100% {
      border-width: 25px;
    }
  }
  .contact {
    display: none;
  }
`;

const Section = styled.div`
  .contact {
    display: none;
  }
  .container {
    flex-direction: row-reverse;
    margin-left: 10rem;
    @media (max-width: 980px) {
      display: flex;
      flex-direction: column-reverse;
      margin: 1rem auto;
    }
  }
`;
const Sectiont = styled.div`
  .second {
    display: none;
  }
  .info {
    display: none;
  }
`;

export default Navpages;
