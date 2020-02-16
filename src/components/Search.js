import React from 'react';
import { FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import SearchBackground from '../images/SearchBackground.jpg';
import { useContext } from 'react';
import { StatContext } from '../context';
import { useHistory } from 'react-router-dom';

export default function Search() {
  const context = useContext(StatContext);
  const { setPlatform, setUsername, platform, username, resetStats } = context;
  const history = useHistory();

  function redirectPage(e) {
    resetStats();
    e.preventDefault();
    history.push(`/profile/${platform}/${username}`);
  }

  return (
    <SearchContainer>
      <div className="search-card">
        <h1>Hi Friend! It's me, Statfinder.</h1>
        <h2 className="subtitle">Track your stats in Apex Legends and standings in the leaderboards!</h2>
        <form className="search-form" onSubmit={redirectPage}>
          <div className="inputs">
            <FaWindows className="input-icon" title="Windows" onClick={() => setPlatform("origin")} style={{ color: platform === 'origin' ? 'var(--lightRed)' : '', verticalAlign: "middle" }} />
            <FaPlaystation className="input-icon" title="PlayStation 4" onClick={() => setPlatform("psn")} style={{ color: platform === 'psn' ? 'var(--lightRed)' : '', verticalAlign: "middle" }} />
            <FaXbox className="input-icon" title="Xbox One" onClick={() => setPlatform("xbl")} style={{ color: platform === 'xbl' ? 'var(--lightRed)' : '', verticalAlign: "middle" }} />
            <input type="text" className="input-text" placeholder='Apex username' onChange={setUsername} required />
          </div>
          <button className="search-button" type="submit"><FiSearch style={{ verticalAlign: "middle" }} />{' '}SEARCH</button>
        </form>
      </div>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  background: url(${SearchBackground}) top/cover no-repeat;
  width: 100%;
  height: 100vh;
  padding-top: 34vh;

  .search-card {
    background-color: rgba(0,0,0,0.45);
    display: inline-block;
    padding: 2rem 2rem;
    width: 85vw;
    max-width: 755px;
  }

  h1 {
    padding-bottom: 1rem;
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  .subtitle {
    padding-bottom: 2rem;
  }
  
  .search-form {
    width: 85vw;
    max-width: 640px;
    padding: 0 1rem;
    margin: auto;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  .inputs {
    background-color: var(--inputsBackground);
    display: flex;
    align-items: center;
    height: 100%;
  }

  .input-icon {
    color: var(--gray);
    font-size: 2rem;
    padding: 0.2rem;
    margin: 0 0.4rem;
    cursor: pointer;
  }

  .input-icon:hover {
    color: var(--grayHover);
  }

  .input-text {
    padding-left: 2rem;
    border: none;
    font-size: 1.3rem;
    outline: none;
  }

  .input-text::placeholder {
    color: var(--gray);
    font-size: 1.1rem;
  }

  .search-button {
    background-color: rgba(255,255,255,0);
    border: 2px solid white;
    outline: none;
    color: var(--text);
    font-size: 1.1rem;
    padding: 0.73rem 1.1rem;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    letter-spacing: 1px;
  }

  .search-button:hover {
    border: 2px solid var(--lightRed);
    color: var(--lightRed);
  }
`;
