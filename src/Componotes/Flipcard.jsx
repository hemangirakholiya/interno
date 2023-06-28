import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Flipcard = (props) => {
  // const [data, setData] = useState([]);
  // const params = useParams();
  // console.log("params:::::", params);

  // const getData = async () => {
  //   const res = await axios.get(
  //     `http://localhost:8000/professional/list?page=1&limit=4`
     
  //   );
  //   console.log("res:::", res.data);
  //   setData(res.data);
  // };

  // // `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Section data-aos="fade-right">
      <div className="fcard_container">
        <div className="content">
          <div className="main_heading">{props.heading}</div>
          <div className="flip_cards">
            {props.flipsData.map((card) => {
                return (
                  <div key={card.id} className="flip_card">
                    <div className="flip_card_inner">
                      <div className="flip_card_front">
                        <img src={card.image} alt="" />
                      </div>
                      <div className="flip_card_back">
                        <h3>{card.name}</h3>
                        <p>{card.work}</p>
                        <div className="icons">
                          <i className="fa-brands fa-facebook-f"></i>
                          <i className="fa-brands fa-twitter"></i>
                          <i className="fa-brands fa-linkedin-in"></i>
                          <i className="fa-brands fa-instagram"></i>
                        </div>
                        <p>{card.number}</p>
                        <p>{card.email}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  .main_heading {
    font-size: 7rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    letter-spacing: 2px;
    color: #292f36;
    font-weight: 900;
    @media (max-width: 780px) {
      font-size: 4rem;
    }
    @media (max-width: 480px) {
      font-size: 4rem;
      width: 100%;
    }
  }

  .fcard_container {
    background-color: #f4f0ec;
    padding: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    overflow-x: hidden;
  }
  .flip_cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1168px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 780px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .flip_card {
    width: 250px;
    height: 400px;
    margin: 0 2rem;
    perspective: 1000px;
    transition: transform 1s;
    @media (max-width: 580px) {
      width: 200px;
    }
    @media (max-width: 480px) {
    }
  }
  .flip_card_inner {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  .flip_card:hover .flip_card_inner {
    transform: rotateY(180deg);
  }
  .flip_card_front,
  .flip_card_back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .flip_card_front {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flip_card_front img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10%;
  }
  .flip_card_back {
    transform: rotateY(180deg);
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    padding: 1rem;
    color: #333;
  }
  .flip_card_back h3 {
    font-family: "DM Serif Display";
    color: #292f36;
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0;
  }
  .flip_card_back p {
    font-size: 2rem;
    text-align: justify;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0;
  }
  .icons {
    display: flex;
    gap: 2rem;
    margin: 3rem;
  }
  i {
    font-size: 2rem;
    color: #292f36;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translatey(-5px);
    }
  }
`;

export default Flipcard;
