import React from 'react';
import { FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import SearchBackground from '../images/SearchBackground.jpg';
import { useContext } from 'react';
import { StatContext } from '../context';

export default function Search() {
  const context = useContext(StatContext);
  const { setPlatform, setUsername, getStats, platform } = context;

  return (
    <SearchContainer>
      <h1>Apex Legends Stats Tracker &amp; Leaderboards</h1>
      <h3 className="subtitle">Track your stats in Apex Legends and standings in the leaderboards!</h3>
      <form className="search-form" onSubmit={getStats}>
        <h3>CHECK PLAYER RANK AND STATS</h3>
        <div className="inputs">
          <span className="input-icon" title="Windows" id="origin" onClick={setPlatform}><FaWindows style={{ color: platform === 'origin' ? 'var(--darkerRed)' : '', verticalAlign: "middle" }} /></span>
          <span className="input-icon" title="PlayStation 4" id="psn" onClick={setPlatform}><FaPlaystation style={{ color: platform === 'psn' ? 'var(--darkerRed)' : '', verticalAlign: "middle" }} /></span>
          <span className="input-icon" title="Xbox One" id="xbl" onClick={setPlatform}><FaXbox style={{ color: platform === 'xbl' ? 'var(--darkerRed)' : '', verticalAlign: "middle" }} /></span>
          <input className="input-text" placeholder='Apex username' onChange={setUsername} />
        </div>
        <button className="submit-button" type="submit"><FiSearch style={{ verticalAlign: "middle" }} /> SEARCH</button>
      </form>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  background: url(${SearchBackground}) top/cover no-repeat;
  width: 100%;
  height: 100%;
  min-height: 70vh;
  padding-top: 14rem;

  h1 {
    padding-bottom: 1rem;
    font-size: 2.2rem;
  }

  .subtitle {
    padding-bottom: 4rem;
  }
  
  .search-form {
    width: 85vw;
    max-width: 900px;
    margin: auto;
    height: 4.5rem;
    background-color: var(--lightRed);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .inputs {
    background-color: var(--inputsBackground);
    display: flex;
    align-items: center;
    height: 65%;
  }

  .input-icon {
    color: var(--gray);
    font-size: 1.2rem;
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

  .submit-button {
    background-color: rgba(255,255,255,0);
    border: none;
    outline: none;
    color: var(--text);
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.82rem 1.2rem;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: rgba(255,255,255,0.25);
  }

`;