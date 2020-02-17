import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WashingPathfinder from '../images/WashingPathfinder.jpg';

export default function ErrorPage() {
  return (
    <ErrorContainer>
      <div className="error-card">
        <h1>You should not be here, Friend!</h1>
        <Link className="return-button" to="/">home</Link>
      </div>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  height: 100vh;
  background: url(${WashingPathfinder}) top/cover no-repeat;
  padding-top: 37vh;

  .error-card {
    background-color: rgba(0,0,0,0.4);
    display: inline-block;
    padding: 2rem 1.6rem;
    letter-spacing: 1px;
  }
`;