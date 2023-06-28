import React from "react";
import styled from "styled-components";

const Testimonials = () => {
  const testimonialsData = [
    {
      image: "./images/Image (11).png",
      name: "Nattasha Mith",
      city: "Sydney",
      country: "USA",
      pera: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been",
    },
    {
      image: "./images/Image (9).png",
      name: "Raymond Galarioe",
      city: "Sydney",
      country: "Australia",
      pera: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
    },
    {
      image: "./images/Image (10).png",
      name: "Benny Roll",
      city: "Sydney",
      country: "New York",
      pera: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
  ];

  return (
    <>
      <Wrapper data-aos="fade-right">
        <div className="testimonial-heading" >
          What People Are Saying About Us
        </div>
        <div className="testimonial-cards">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="imgpart">
                <img src={testimonial.image} alt={`${testimonial.name}`} />
                <div className="info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-location">
                    {testimonial.city}, {testimonial.country}
                  </div>
                </div>
              </div>
              <div className="testimonial-text">{testimonial.pera}</div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 6rem 2rem;
  background-color: #f4f0ec;
  text-align: center;
  width: 70%;
  margin: auto;
  border-radius: 70px;
  overflow-x: hidden;
  @media (max-width: 380px) {
      width: 100%;
    }

  .testimonial-heading {
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
      width: 100%;
      font-size: 6rem;
    }
    @media (max-width: 480px) {
      font-size: 4rem;
    }
  }

  .testimonial-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .testimonial-card {
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin: 30px auto;
    max-width: 30rem;
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    transition: all 0.3s ease-in-out;
  }

  .testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  .testimonial-card img {
    width: 8rem;
    height: 8rem;
    margin: 1.69rem;
    margin-top: -1rem;
  }

  .testimonial-name {
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: 0.3px;
    margin-bottom: 0.5rem;
  }

  .testimonial-location {
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #4d5053;
  }

  .testimonial-text {
    font-size: 2.4rem;
    letter-spacing: 1px;
    color: #4d5053;
    font-weight: 600;
  }

  .imgpart {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;

export default Testimonials;
