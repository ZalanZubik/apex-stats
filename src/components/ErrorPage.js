import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WashingPathfinder from '../images/WashingPathfinder.jpg';
import WashingPathfinderLow from '../images/WashingPathfinder_lowres.jpg';

export default function ErrorPage() {
  return (
    <ErrorContainer>
      <div className='error-card'>
        <h1>You should not be here, Friend!</h1>
        <Link className='return-button' to='/'>
          home
        </Link>
      </div>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  height: 100vh;
  background: url(${WashingPathfinder}) top/cover no-repeat, url(${WashingPathfinderLow}) top/cover no-repeat;
  padding-top: 33vh;

  .error-card {
    background-color: rgba(0, 0, 0, 0.4);
    display: inline-block;
    padding: 2rem 1.6rem;
    letter-spacing: 1px;
    width: 80vw;
    max-width: 525px;
  }

  h1 {
    font-size: 1.9rem;
  }

  @media screen and (max-width: 991px) {
    h1 {
      font-size: 1.7rem;
    }
  }

  @media screen and (max-width: 767px) {
    .error-card {
      padding: 2rem 1.1rem;
    }
    h1 {
      font-size: 1.45rem;
    }
  }

  @media screen and (max-width: 479px) {
    .error-card h1 {
      font-size: 1.4rem;
    }
  }
`;
