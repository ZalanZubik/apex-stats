import React from 'react';
import styled from 'styled-components';
import LeaderboardPlayer from './LeaderboardPlayer';

export default function Leaderboard({ leaderboardStats, searchPlatform, searchLegend }) {
  if (leaderboardStats) {
    const leaderboardPlayer = leaderboardStats.items.map(player => <LeaderboardPlayer key={player.id} player={player} />)

    return (
      <LeaderboardContainer>
        <h2>{searchPlatform === 'all' ? 'All Platforms' : searchPlatform === 'origin' ? 'Origin' : searchPlatform === 'psn' ? 'PlayStation' : 'Xbox'} <strong>{leaderboardStats.metadata.name ? leaderboardStats.metadata.name : ''}</strong> Leaderboard</h2>
        <h2><strong>{searchLegend !== 'all' ? searchLegend : ''}</strong></h2>
        <div className="leaderboard-header">
          <p className="rank">Rank</p>
          <p className="player">Player</p>
          <p className="country">Country</p>
          <p className="type">{leaderboardStats.metadata ? leaderboardStats.metadata.name : ''}</p>
          <p className="matches">Matches</p>
        </div>
        {leaderboardPlayer}
      </LeaderboardContainer>
    )
  } else return <></>;
}

const LeaderboardContainer = styled.div`
  width: 95%;
  max-width: 1140px;
  margin: auto;
  overflow: auto;
  background: var(--darkBackground);

  h2 {
    padding-top: 0.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: normal;
  }

  .leaderboard-header {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 2fr 2fr;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .player {
    text-align: left;
    padding-left: 2rem;
  }

  .country {
    padding-left: 3rem;
  }

  .type, .matches {
    text-align: right;
  }

  .matches {
    margin-right: 2.5rem;
  }
`;
