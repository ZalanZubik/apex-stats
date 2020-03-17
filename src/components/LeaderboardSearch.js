import React from 'react';
import styled from 'styled-components';

export default function LeaderboardSearch({ searchType, searchPlatform, searchLegend }) {

  function platformRedirectPage(e) {
    e.preventDefault();
    window.location.replace(`/leaderboards/${e.target.value}/${searchType}/${searchLegend}`);
  }

  function typeRedirectPage(e) {
    e.preventDefault();
    window.location.replace(`/leaderboards/${searchPlatform}/${e.target.value}/${searchLegend}`);
  }

  function legendRedirectPage(e) {
    e.preventDefault();
    window.location.replace(`/leaderboards/${searchPlatform}/${searchType}/${e.target.value}`);
  }

  return (
    <SearchContainer>
      <div className="select-container">
        <div>
          <p>Platform</p>
          <select value={searchPlatform} onChange={platformRedirectPage}>
            <option value="all">All Platforms</option>
            <option value="origin">Origin (PC)</option>
            <option value="psn">PlayStation 4</option>
            <option value="xbl">Xbox One</option>
          </select>
        </div>
        <div>
          <p>Type</p>
          <select value={searchType} onChange={typeRedirectPage}>
            <option value="RankScore">Rank Score</option>
            <option value="Level">Level</option>
            <option value="Kills">Kills</option>
            <option value="KillsPerMatch">Kills Per Match</option>
            <option value="KillsAsKillLeader">Kills As Kill Leader</option>
            <option value="Damage">Damage</option>
            <option value="DamagePerMatch">Damage Per Match</option>
            <option value="MatchesPlayed">Matches Played</option>
            <option value="Headshots">Headshots</option>
            <option value="Finishers">Finishers</option>
            <option value="Revives">Revives</option>
            <option value="PistolKills">Pistol Kills</option>
            <option value="ShotgunKills">Shotgun Kills</option>
            <option value="SmgKills">SMG Kills</option>
            <option value="ArKills">AR Kills</option>
            <option value="LmgKills">LMG Kills</option>
            <option value="SniperKills">Sniper Kills</option>
            <option value="CarePackageKills">Care Package Kills</option>
            <option value="WinningKills">Winning Kills</option>
            <option value="TimesPlacedtop3">Times Placed Top 3</option>
          </select>
        </div>
        <div>
          <p>Legend</p>
          <select value={searchLegend} onChange={legendRedirectPage}>
            <option value="all">All Legends</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Bloodhound">Bloodhound</option>
            <option value="Caustic">Caustic</option>
            <option value="Crypto">Crypto</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Lifeline">Lifeline</option>
            <option value="Mirage">Mirage</option>
            <option value="Octane">Octane</option>
            <option value="Pathfinder">Pathfinder</option>
            <option value="Revenant">Revenant</option>
            <option value="Wattson">Wattson</option>
            <option value="Wraith">Wraith</option>
          </select>
        </div>
      </div>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  width: 95%;
  max-width: 1140px;
  margin: auto;
  overflow: auto;
  background: var(--darkBackground);
  padding-bottom: 2.5rem;

  .select-container {
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .select-container p {
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 1px;
    font-size: 0.9rem;
    margin: 0 1.1rem;
    padding-bottom: 0.3rem;
    margin-top: 2rem;
  }

  .select-container select {
    padding: 0.5rem 0.3rem;
    font-size: 0.9rem;
    background: rgba(60, 60, 60, 1);
    border: 2px solid var(--grayHover);
    width: 180px;
    color: #fff;
    letter-spacing: 1px;
    margin: 0 1rem;
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 686px) {
    .select-container {
      flex-direction: column;
    }

    .select-container p {
      text-align: center;
    }
  }
`;