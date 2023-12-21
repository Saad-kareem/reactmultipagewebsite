import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styled/Button";
import { useGlobalContext } from "../Context";

const HeroSection = () => {
          const {name ,image} = useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            I'm {name}. A Full stack Developer, I'am creating amazing
            websites using Mern Stack.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={image} />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 14rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1rem;
    margin-bottom: 3.4rem;
    max-width: 45rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
    margin-top: -450px;
    margin-left: 400px;
  }
  picture img {
    height: 300px;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
         .container{
          display : inline;
         }
         picture{
          display : none;
         }
    .grid {
      gap: 6.4rem;
    }
  }
`;

export default HeroSection;
