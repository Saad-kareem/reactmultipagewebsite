import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  
  *{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    font-family: 'Work Sans', sans-serif;
  }
  html{
    font-size : 62.5%;
    overflow-x: hidden;
      }
      body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
      body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
    h1{
        color : ${({ theme }) => theme.colors.heading};
        font-size : 6rem;
        font-weight: 900;

    }
    h2{
        color : ${({ theme }) => theme.colors.heading};
        font-size : 4.4rem;
        font-weight: 300;
        white-space: normal;
        text-align : center;

    }
    h3{
        font-size: 1.8rem;
        fon-weight : 400;
    }
    p{
        color : ${({ theme }) => theme.colors.text};
        opacity : .7;
        font-size : 1.65rem;
        font-weight: 400;
        margin-top : 1rem;
        line-height : 1.5;
    }
    a{
        text-decoration : none;
    }
    li{
        list-style : none;
    }
    .container {
  max-width: 120rem;
  margin: 0 auto;
}
  .gridfotr {
    display : flex;
     gap : 6rem;
  }

    .grid{
     display : grid;
     gap : 7rem;

    }
    .grid-two-column{
      grid-template-column : repeat(2,1fr);
    }
    .grid-three-column{
      grid-template-column : repeat(3,1fr);
    }
    .grid-four-column{
      grid-template-column : 1fr 1.2fr .5fr .8fr;
    }
    .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }
   
    input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    width: 12rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 1.5rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
    } 
  `;