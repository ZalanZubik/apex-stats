import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <NavContainer>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leaderboards">Leaderboards</Link></li>
      </ul>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.8rem;
  background-color: rgba(19, 19, 19, 0.6);

  .nav-links {
    height: 100%;
    overflow: hidden;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 460px;
    margin: auto;
  }

  .nav-links a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.7rem 0.7rem;
    font-size: 1.1rem;
    color: var(--lighterGray);
    transition: border 450ms ease-out, color 450ms ease-out;
  }

  .nav-links a:hover {
    color: var(--text);
  }

`;