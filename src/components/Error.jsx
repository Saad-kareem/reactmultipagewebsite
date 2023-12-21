import React from 'react'
import error from './Images/error.svg';
import styled from 'styled-components';
import { Button } from "../Styled/Button";
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      <img className='ErrorImg'  src={error} alt='Error'/>
      <NavLink to='/'>
      <Button className='butn'> Go Back</Button>
      </NavLink>
    </Wrapper>
  )
};
 const Wrapper = styled.section`
    padding : 9rem 0;
    display: flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
      
      .ErrorImg{
        margin-top : -50px;
        width : 500px;
        height : 400px;
      }
      .butn{
        font-size : 1.8rem;
      }
 `;

export default Error