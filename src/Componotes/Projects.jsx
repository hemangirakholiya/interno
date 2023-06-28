import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Projects = (props) => {
  // const projectsData = [
  //   {
  //     id: 1,
  //     image: "./images/Image (2).png",
  //     title: "Modern Kitchan",
  //     type: "Decor / Artchitecture",
  //   },
  //   {
  //     id: 2,
  //     image: "./images/Image (3).png",
  //     title: "Modern Kitchan",
  //     type: "Decor / Artchitecture",
  //   },
  //   {
  //     id: 3,
  //     image: "./images/Image (4).png",
  //     title: "Modern Kitchan",
  //     type: "Decor / Artchitecture",
  //   },
  //   {
  //     id: 4,
  //     image: "./images/Image (5).png",
  //     title: "Modern Kitchan",
  //     type: "Decor / Artchitecture",
  //   },
  // ];

  return (
    <Wrapper data-aos="fade-right">
      <div className="projects-container">
        <div className="taxt-part">
          <h1 className="projects-heading">{props.heading}</h1>
          <p className="projects-pera">{props.pera}</p>
          <div className="projects-cards">
            {props.projectsData.map((project) => (
              <div key={project.id} className="card">
                <div className="single_card">
                  <div className="singleimg">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="singletext">
                    <div className="title_pera">{project.pera}</div>
                    <div className="perat">{project.peratwo}</div>
                    <div className="perath">{project.perathree}</div>
                    <div className="bottom grid grid-two-column">
                      <div className="text_part">
                        <h3>{project.title}</h3>
                        <p>{project.type}</p>
                        <div className="date">{project.date}</div>
                      </div>

                      <NavLink to="/project" className="arrow_part">
                        <i className="sarrow fa-solid fa-chevron-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 5rem;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 70px;
  overflow-x: hidden;
  @media (max-width: 980px) {
    padding: 5rem 0;
  }
  @media (max-width: 768px) {
    padding: 5rem 0;
  }

  .projects-heading {
    font-size: 7rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    color: #292f36;
    font-weight: 900;
    @media (max-width: 480px) {
      text-align: center;
    } 
  }

  .projects-pera {
    font-size: 3rem;
    margin: 1rem auto;
    width: 45%;
    color: #4d5053;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      width: 90%;
    }
  }

  .projects-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .card {
    margin: 1.5rem;
    max-width: 45rem;
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    border: hidden;
     width: 50%;
  }

  .card img:hover {
    transform: translateY(-10px);
  }
  .taxt-part {
    text-align: start;
  }
  .card img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    transition: all 0.3s ease-in-out;
  }

  .card h3 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
    color: #292f36;
  }

  .card p {
    font-size: 2rem;
    font-weight: 600;
    margin-top: -1rem;
    color: #4d5053;
  }

  .sarrow {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #292f36;
    background-color: #f4f0ec;
    border-radius: 100%;
    height: 50px;
    width: 50px;
  }

  .arrow_part {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    @media (max-width: 480px) {
      margin-top: -7rem;
      margin-bottom: -2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .arrow_part:hover {
    transform: translatex(20px);
    background: none;
  }
  .bottom {
    display: flex;
    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
`;

export default Projects;


// http://192.168.29.198:3000   