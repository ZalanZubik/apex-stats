import React from 'react';
import styled from 'styled-components';
import LeaderboardPlayer from './LeaderboardPlayer';

export default function Leaderboard({ leaderboardStats }) {
  if (leaderboardStats) {
    const leaderboardPlayer = leaderboardStats.items.map(player => <LeaderboardPlayer key={player.id} player={player} />)

    return (
      <LeaderboardContainer>

        <select>
          <option defaultValue="all">All Platforms</option>
          <option value="origin">Origin (PC)</option>
          <option value="psn">PlayStation 4</option>
          <option value="xbl">Xbox One</option>
        </select>

        <select>
          <option defaultValue="all">All Legends</option>
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

        <select>
          <option defaultValue="RankScore">Rank Score</option>
          <option value="Level">Apex Level</option>
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
          <option value="SMGKills">SMG Kills</option>
          <option value="ARKills">AR Kills</option>
          <option value="ARKills">AR Kills</option>
          <option value="LMGKills">LMG Kills</option>
          <option value="SniperKills">Sniper Kills</option>
          <option value="CarePackageKills">Care Package Kills</option>
          <option value="WinningKills">Winning Kills</option>
          <option value="TimesPlacedtop3">Times Placed Top 3</option>
        </select>

        <h2><strong>{leaderboardStats.metadata.title ? leaderboardStats.metadata.title : ''}</strong> Leaderboard</h2>
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
max-width: 1140px;
margin: auto;
overflow: auto;
background: var(--darkBackground);

h2 {
  padding: 2.5rem 0rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
}

.leaderboard-header {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 2fr 2fr;
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
