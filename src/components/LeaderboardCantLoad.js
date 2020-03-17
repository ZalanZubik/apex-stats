import React from 'react';
import styled from 'styled-components';

export default function LeaderboardCantLoad() {
  return (
    <CantLoad>
      <div className="cant-load">The database is under heavy load and was unable to return this leaderboard. Check back soon, sorry!</div>
    </CantLoad>
  )
}

const CantLoad = styled.div`
  width: 95%;
  max-width: 1140px;
  margin: auto;
  overflow: auto;
  background: var(--darkBackground);
  min-height: 6.3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .cant-load {
    font-size: 1.2rem;
    font-weight: normal;
    background-color: #ffa500;
    padding: 1rem;
    color: #333;
  }
`;