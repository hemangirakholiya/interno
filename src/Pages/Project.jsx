import React from "react";
import Toppage from "../Componotes/Toppage";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";
import Projects from "../Componotes/Projects";
import Paginationbtn from "../Styles/Paginationbtn";

const Project = () => {
  const dataa = {
    image: "./images/Timage (1).jpg",
    title: "Our Project",
    subtitle: "Home / Project",
  };
  const pdata = {
    projectsData: [
      {
        id: 11,
        image: "./images/pImage.png",
        title: "Minimal Bedroom",
        type: "Decor / Artchitecture",
      },
      {
        id: 12,
        image: "./images/pImage (1).png",
        title: "Minimal Bedroom",
        type: "Decor / Artchitecture",
      },
      {
        id: 13,
        image: "./images/pImage (2).png",
        title: "Classic Minimal Bedroom",
        type: "Decor / Artchitecture",
      },
      {
        id: 14,
        image: "./images/pImage (3).png",
        title: "Modern Bedroom",
        type: "Decor / Artchitecture",
      },
      {
        id: 15,
        image: "./images/pImage (4).png",
        title: "Minimal Bedroom table",
        type: "Decor / Artchitecture",
      },
      {
        id: 16,
        image: "./images/pImage (5).png",
        title: "System Table",
        type: "Decor / Artchitecture",
      },
      {
        id: 17,
        image: "./images/pImage (6).png",
        title: "Modern Bedroom",
        type: "Decor / Artchitecture",
      },
      {
        id: 18,
        image: "./images/pImage (7).png",
        title: "Modern Bedroom",
        type: "Decor / Artchitecture",
      },
    ],
  };

  return (
    <Wrapper>
      <Toppage {...dataa} />
      <div className="pagination">
        <div className="buttons">
          <Button className="btn getstarted-btn">
            <NavLink to="/contact">Bathroom</NavLink>
          </Button>
          <Button className="btn getstarted-btn">
            <NavLink to="/contact">Bed Room</NavLink>
          </Button>
          <Button className="btn getstarted-btn">
            <NavLink to="/contact">Kitchan</NavLink>
          </Button>
          <Button className="btn getstarted-btn">
            <NavLink to="/contact">Living Area</NavLink>
          </Button>
        </div>
      </div>
      <div className="pro_cards">
        <Projects {...pdata} />
      </div>
      <Paginationbtn />
    </Wrapper>
  );
};

const Wrapper = styled.div`

  .main_container {
    background-image: url(/images/Timage-1.png);
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 5rem;
    cursor: pointer;
  }
  .buttons {
    box-sizing: border-box;
    border: 1px solid #cda274;
    border-radius: 18px;
    margin: 5rem;
  }
  .btn {
    margin: 0 3rem;
  }

  Button {
    text-decoration: none;
    max-width: auto;
    background-color: #fff;
    color: rgb(255 255 255);
    padding: 1.4rem 2.4rem;
    border: none;
    border-radius: 15px;
    text-align: center;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;

    &:hover,
    &:active {
      box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: scale(0.96);
      background-color: #cda274;
    }
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 2rem;
  }
  a:hover {
    color: #ffffff;
    background-color: #cda274;
    font-weight: 900;
  }
  

  .pro_cards {
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    overflow-x: hidden;
    @media (max-width: 980px) {
      padding: 5rem 0;
    }
    @media (max-width: 768px) {
      padding: 5rem 0;
    }
  }
  .card img {
    width: 100%;
    height: auto;
    margin: auto;
    transition: all 0.3s ease-in-out;
  }
  
  .card {
    margin-top: auto;
    max-width: 45rem;
    position: relative;
    display: flex;
    flex-direction: column;
    border: hidden;
    width: 50%;
    @media (max-width: 1088px) {
      margin-top: 0;
    }
  }
  
  
  
  .card:nth-child(2){
    margin-top: -23rem;
    @media (max-width: 1088px) {
      margin-top: 0;
    }
  }
  .card:nth-child(4){
    margin-top: -25rem;
    @media (max-width: 1088px) {
      margin-top: 0;
    }
  }
  .card:nth-child(6){
    margin-top: -25rem;
    @media (max-width: 1088px) {
      margin-top: 0;
    }
  }
  .card:nth-child(8){
    margin-top: -50rem;
    @media (max-width: 1088px) {
      margin-top: 0;
    }
  }
`;

export default Project;
