import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styled/Button";
import { FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className=" gridfotr  grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink to="/">
              <Button className="btnftr"> Get Started </Button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer>
        <div className="container fotr1 gridfotr grid-four-column">
          <div className="footer-about">
            <h3>Saad Karim</h3>
            <p>I'm saad karim and i'am mern stack developer</p>
          </div>

          <div className="footer-subscribe">
            <h3>Follow to get important updates </h3>
            <form action="#" className="footer-inputs">
              <input
                className="ftrInput1"
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input className="btnftr1" type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <NavLink to="https://github.com/Saad-kareem">
                  <FaGithub className="icons" />
                </NavLink>
              </div>
              <div>
                <NavLink to="https://www.linkedin.com/in/saad-karim-88b410260/">
                  <FaLinkedinIn className="icons" />
                </NavLink>
              </div>
              <div>
                <a href="tel:+03414196575">
                  <FaPhone className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3> Call Us</h3>
            <h3>+923414196575</h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container fotrhr gridfotr grid-two-column">
            <p className="ftryear">
              @{new Date().getFullYear()} SaaKarim. All Rights Reserved
            </p>

            <div className="fotrPrivacy">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
   transform: translateY(50%);

    .gridfotr div:last-child {
      justify-content: end;
      align-self: center;
    }
    .btnftr {
      margin-left: 300px;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      width: 200px;
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-inputs{
     display: flex;
    flex-direction: column;
    gap: 1rem;
    }
    .ftrInput1{
      margin-top: -.5rem;
      height : 4rem;
     width : 200px;
    }
    .btnftr1{
      font-size : 1.4rem;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
    .fotr1{
       margin-left: 160px;
    }
    .fotrhr{
       justify-content : center;
    }
    .ftryear{
      width : 40rem;
      margin-left : -10rem;
    }
    .fotrPrivacy{
      margin-left : 5rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .btnftr {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }



`;

export default Footer;
