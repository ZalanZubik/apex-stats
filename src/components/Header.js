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
    justify-content: center;
    align-items: center;
  }

  .nav-links a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.7rem 0.7rem;
    font-size: 1.1rem;
    color: var(--gray);
    margin: 0 3rem;
  }

  .nav-links a:hover {
    color: var(--text);
  }

`;