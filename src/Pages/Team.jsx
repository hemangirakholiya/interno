import React from "react";
import styled from "styled-components";
import Flipcard from "../Componotes/Flipcard";
import Toppage from "../Componotes/Toppage";

const Team = () => {
  const data = {
    image: "./images/tphoto.jpg",
    title: "Our Professional",
    subtitle: "Home / Team",
  };

  const flipCardsData = {
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
      {
        id: 5,
        image: "./images/fimage5.png",
        name: "Sofia Carter ",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 6,
        image: "./images/fimage6.png",
        name: "Avery Jackson ",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 7,
        image: "./images/fimage7.png",
        name: "Luna James ",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
      {
        id: 8,
        image: "./images/fimage8.png",
        name: "Gianna Mateo",
        work: "Design, Australia",
        number: "+1 (378) 400-1234",
        email: "julie@email.com",
      },
    ],
  };
  return (
    <>
      <Wrapper>
        <Toppage {...data} />
      </Wrapper>
      <Section>
        <Flipcard {...flipCardsData} />
      </Section>
    </>
  );
};
const Wrapper = styled.div`
  .main_container {
    background-image: url(./images/teaming.png);
  }
`;
const Section = styled.div`
  .fcard_container {
    background-color: #ffffff;
  }
  .main_heading {
    display: none;
  }
  .flip_card {
    margin-bottom: 6rem;
  }
  .flip_cards {
    margin-bottom: -10rem;
  }
`;

export default Team;
