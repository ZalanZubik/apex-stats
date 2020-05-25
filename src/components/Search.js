import React from 'react';
import { FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import SearchBackground from '../images/SearchBackground.jpg';
import SearchBackgroundLow from '../images/SearchBackground_lowres.jpg';
import SearchBackgroundSmall from '../images/SearchBackgroundSmall.jpg';
import SearchBackgroundSmallLow from '../images/SearchBackgroundSmall_lowres.jpg';
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
      <div className='search-card'>
        <h1 className='title'>Hi Friend! It's me, Statfinder.</h1>
        <h2 className='subtitle'>Track your stats in Apex Legends and standings in the leaderboards!</h2>
        <form className='search-form' onSubmit={redirectPage}>
          <div className='inputs'>
            <FaWindows
              className='input-icon'
              title='Origin (PC)'
              onClick={() => setPlatform('origin')}
              style={{ color: platform === 'origin' ? 'var(--lightRed)' : '', verticalAlign: 'middle' }}
            />
            <FaPlaystation
              className='input-icon'
              title='PlayStation 4'
              onClick={() => setPlatform('psn')}
              style={{ color: platform === 'psn' ? 'var(--lightRed)' : '', verticalAlign: 'middle' }}
            />
            <FaXbox
              className='input-icon'
              title='Xbox One'
              onClick={() => setPlatform('xbl')}
              style={{ color: platform === 'xbl' ? 'var(--lightRed)' : '', verticalAlign: 'middle' }}
            />
            <input
              type='text'
              className='input-text'
              placeholder='Apex username'
              onChange={setUsername}
              required
            />
          </div>
          <button className='search-button' type='submit'>
            <FiSearch style={{ verticalAlign: 'middle' }} /> SEARCH
          </button>
        </form>
      </div>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  background: url(${SearchBackground}) top/cover no-repeat, url(${SearchBackgroundLow}) top/cover no-repeat;
  width: 100%;
  height: 100vh;
  padding-top: 34vh;

  .search-card {
    background-color: rgba(26, 26, 26, 0.5);
    margin: auto;
    padding: 2rem;
    width: 85vw;
    max-width: 755px;
  }

  .title {
    padding-bottom: 1rem;
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  .subtitle {
    padding-bottom: 2rem;
  }

  .search-form {
    margin: 0 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .inputs {
    background-color: var(--inputsBackground);
    display: flex;
    align-items: center;
    height: 3rem;
  }

  .input-icon {
    color: var(--gray);
    font-size: 2rem;
    padding: 0.2rem;
    margin: 0 0.4rem;
    cursor: pointer;
    transition: color 350ms ease-out;
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
    background-color: rgba(255, 255, 255, 0);
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
    transition: border 450ms ease-out, color 450ms ease-out;
  }

  .search-button:hover {
    border: 2px solid var(--lightRed);
    color: var(--lightRed);
  }

  @media screen and (max-width: 991px) {
    background: url(${SearchBackgroundSmall}) center/cover no-repeat,
      url(${SearchBackgroundSmallLow}) center/cover no-repeat;
  }

  @media screen and (max-width: 767px) {
    .search-card {
      padding: 1.5rem 1rem;
    }

    .title {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 1.4rem;
      padding-bottom: 2rem;
    }

    .search-form {
      flex-direction: column;
    }

    .input-text {
      width: 200px;
      padding-left: 1rem;
    }

    .search-button {
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 479px) {
    .search-card {
      width: 90vw;
    }

    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }

    .input-icon {
      font-size: 1.7rem;
      padding: 0.1rem;
      margin: 0 0.4rem;
    }

    .input-text {
      width: 160px;
      padding-left: 0.2rem;
    }
  }

  @media screen and (max-width: 340px) {
    .search-card {
      width: 95vw;
    }
    .input-text {
      width: 140px;
    }
  }
`;
