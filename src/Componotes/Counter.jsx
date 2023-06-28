import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

// const settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };

const CounterContainerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 15rem;
  background-color: #f4f0ec;
  width: 100%;
  margin: 0 auto;
  height: 40vh;
  overflow-x: hidden;
`;

const CounterItemWrapper = styled.div`
  text-align: center;
  border: none;
  transition: all 0.3s ease-in-out;

  h3 {
    font-size: 3rem;
    font-weight: 900;
    margin-top: -23px;
    margin-bottom: 0.5rem;
    color: #4d5053;
  }

  p {
    font-size: 12rem;
    font-weight: 900;
    margin-bottom: 0;
    color: #cda274;
    transition: all 0.3s ease-in-out;
  }
  p:hover {
    transform: translatey(-5px);
  }
`;

const CounterItemWrapperWithBorder = styled(CounterItemWrapper)`
  position: relative;
  padding-left: 50px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 28rem;
    transform: translatey(-50%);
    width: 1.5px;
    height: 90%;
    background-color: #cda274;
    @media (max-width: 780px) {
      display: none;
    }
  }
`;

function Counter() {
  const [yearsOfExperience, setYearsOfExperience] = useState(12);
  const [successProjects, setSuccessProjects] = useState(85);
  const [activeProjects, setActiveProjects] = useState(15);
  const [happyCustomers, setHappyCustomers] = useState(95);

  return (
    <CounterContainerWrapper data-aos="fade-left">
      <CounterItemWrapperWithBorder>
        <p>{yearsOfExperience}</p>
        <h3>Years of Experience</h3>
      </CounterItemWrapperWithBorder>

      <CounterItemWrapperWithBorder>
        <p>{successProjects}</p>
        <h3>Success Projects</h3>
      </CounterItemWrapperWithBorder>

      <CounterItemWrapperWithBorder>
        <p>{activeProjects}</p>
        <h3>Active Projects</h3>
      </CounterItemWrapperWithBorder>

      <CounterItemWrapper>
        <p>{happyCustomers}</p>
        <h3>Happy Customers</h3>
      </CounterItemWrapper>
    </CounterContainerWrapper>
  );
}

export default Counter;
