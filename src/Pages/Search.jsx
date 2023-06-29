import React from "react";
import Toppage from "../Componotes/Toppage";
import styled from "styled-components";

const Search = () => {
  const dataa = {
    image: "./images/Timage (1).jpg",
    title: "Our Project",
    subtitle: "Home / Project",
  };
  return (
    <>
      <Wrapper>
        <Toppage {...dataa} />
        <div className="header">
          <div className="data_part">
            <div className="left_data">
              <div className="list">
                <ol className="first">
                  <li>Client</li>
                  <li>Category</li>
                  <li>Tags</li>
                  <li>Date</li>
                  <li>Link</li>
                </ol>
                <ol className="last">
                  <li>Your client name</li>
                  <li>Interiors</li>
                  <li>interior, Home</li>
                  <li>Date 23,02, 2022</li>
                  <li>Link example.com</li>
                </ol>
              </div>
            </div>
            <div className="right_data">
              <h1>Minimal Look Bedrooms</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin
                tellumassa, vbel maximus purus posuere in. Dojrices gravida
                dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut
                dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
              </p>
              <p>
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras
                amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
                pellentesque arcu. Donec a pellentesque Cras erat enim, gravida
                non ante vitae,elequis convallis elit, in viverra felis. Donec
                ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
                purus porttitor.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="search_container">
          <div className="search_bar">
            <form action="" className="search-box">
              <input type="text" placeholder="" />
              <button type="reset">fghj</button>
            </form>
          </div>
        </div> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .main_container {
    background-image: url(./images/search.png);
  }
  .data_container {
    display: none;
  }
  .data_part {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
    margin-top: 10rem;
  }
  .right_data {
    width: 40%;
  }
  .left_data {
    width: 30%;
  }
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    background-color: #f4f0ec;
    border-radius: 50px;
    margin: 5rem;
    padding: 5rem;
  }
  .last {
    color: #4d5053;
    margin-left: 2rem;
  }
  p {
    word-spacing: 1px;
  }
`;

export default Search;
