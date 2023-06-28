import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sofia Sans Extra Condensed', sans-serif;
}
html {
    font-size: 62.5%;
    overflow-x: hidden;
}
body {
  overflow-x: hidden;
  
    scrollbar-width: thin;
}
h1{
    color: #292F36;
    font-size: 6rem;
    font-weight: 900;
}
h2{
    color: #292F36;
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
    letter-spacing: 3px;
}
h3{
    color: #292F36;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 3px;
    
}
p {
    color:#4D5053;
    
    font-size: 2rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight: 600;
   
}
a {
    text-decoration: none;
}
li {
    list-style: none;
}
/* .container {
    max-width: 120rem;
    margin: 0 auto;
} */
.grid {
    display: grid;
    gap: 9rem;
}
.grid-three-column { grid-template-columns: repeat(3, 1fr);
   
}
.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
}
.grid-four-column {
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
.arrow{
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-top: 2px;
    text-align: center;
    color: #CDA274;
    font-size: 15px;
  }
`;
