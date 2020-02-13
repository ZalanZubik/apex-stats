import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { StatContext } from '../context';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';

export default function PlayerPage() {
  const { platform, username } = useParams();
  const context = useContext(StatContext);
  let { getStats, stats } = context;

  useEffect(() => {
    getStats(platform, username);
  }, []);

  if (!stats) {
    return (
      <NotFoundContainer>
        <h1>Player not found!</h1>
        <Link to="/" className="return-button">Return</Link>
      </NotFoundContainer>
    )
  }

  return (
    <PlayerContainer>
      <div className="container">
        <h1 className="username">
          <img src={stats.platformInfo.avatarUrl} alt="Avatar" className="platform-avatar" />
          {stats.platformInfo.platformUserId}
        </h1>
        <div className="grid">
          <div>
            <img src={stats.segments[1].metadata.imageUrl} alt="Legend" />
          </div>
          <div>
            <ul>
              <li>
                <h4>Selected Legend</h4>
                <p>{stats.metadata.activeLegendName}</p>
              </li>
              <li>
                <h4>Season 3 Wins</h4>
                <p>{stats.segments[0].stats.season3Wins.displayValue}</p>
              </li>
              <li>
                <h4>Apex Level</h4>
                <p>{stats.segments[0].stats.level.displayValue}</p>
              </li>
              <li>
                <h4>Lifetime Kills</h4>
                <p>{stats.segments[0].stats.kills.displayValue}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PlayerContainer>
  )
}

const PlayerContainer = styled.div`
  padding-top: 15vh;

  .container {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    max-width: 700px;
    margin: 1rem auto;
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }

  h1.username {
    font-size: 2rem;
    background: rgba(0, 0, 0, 0.6);
    padding: 0.3rem 0.5rem;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
  }

  .platform-avatar {
    width: 40px;
    margin-right: 0.7rem;
  }

  img {
    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  li {
    background: rgba(0, 0, 0, 0.6);
    padding: 1rem;
    margin-bottom: 0.7rem;
    border-radius: 10px;
    list-style-type: none;
  }

  li p {
    font-size: 2rem;
  }

  li:first-child p {
    font-size: 1.5rem;
  }
`;

const NotFoundContainer = styled.div`
  height: 100%;

  h1 {
    padding-top: 30vh;
    padding-bottom: 2rem;
  }

  .return-button {
    background-color: rgba(0,255,255,1);
    border: none;
    outline: none;
    color: var(--text);
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.82rem 1.2rem;
    cursor: pointer;
    text-decoration: none;
  }

  .return-button:hover {
    background-color: rgba(255,255,255,0.25);
  }

`;
