import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SadPathfinder from '../images/SadPathfinder.jpg';

export default function PlayerNotFound() {
  return (
    <NotFoundContainer>
      <div className="not-found-card">
        <h1>Player not found.</h1>
        <h1>I'm sorry, Friend.</h1>
        <Link to='/' className="return-button">Return</Link>
      </div>
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.div`
  height: 100vh;
  background: url(${SadPathfinder}) top/cover no-repeat;
  padding-top: 34vh;

  .not-found-card {
    background-color: rgba(0,0,0,0.6);
    display: inline-block;
    padding: 2rem 1.6rem;
    max-width: 85vw;
    width: 400px;
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
