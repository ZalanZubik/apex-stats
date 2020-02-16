import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WashingPathfinder from '../images/WashingPathfinder.jpg';

export default function ErrorPage() {
  return (
    <ErrorContainer>
      <div className="error-card">
        <h1>You should not be here, Friend!</h1>
        <Link className="return-button" to="/">return</Link>
      </div>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  height: 100vh;
  background: url(${WashingPathfinder}) top/cover no-repeat;
  padding-top: 34vh;

  .error-card {
    background-color: rgba(0,0,0,0.4);
    display: inline-block;
    padding: 2rem 1.6rem;
    letter-spacing: 1px;
  }

  .return-button {
    background-color: none;
    border: 2px solid white;
    outline: none;
    color: var(--text);
    font-size: 1.1rem;
    padding: 0.6rem 1.1rem;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 1.6rem;
  }

  .return-button:hover {
    border: 2px solid var(--lightRed);
    color: var(--lightRed);
  }
`;