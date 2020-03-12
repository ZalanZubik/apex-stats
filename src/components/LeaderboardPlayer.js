import React from 'react';
import styled from 'styled-components';
import { FaPlaystation, FaWindows, FaXbox, FaTwitch, FaTwitter } from 'react-icons/fa';
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from 'react-icons/gi';

export default function LeaderboardPlayer({ player }) {
  return (
    <PlayerContainer>
      <div className="rank">
        <p>{player.rank === 1 ? <GiPodiumWinner title="First" className="rank-icon" /> : player.rank === 2 ? <GiPodiumSecond title="Second" className="rank-icon" /> : player.rank === 3 ? <GiPodiumThird title="Third" className="rank-icon" /> : player.rank}</p>
      </div>
      <div className="player">
        <p className="player-name">{player.owner.metadata.platformUserHandle ? player.owner.metadata.platformUserHandle : '-'}</p>
        <p>{player.owner.metadata.platformSlug === 'origin' ? <FaWindows title="Origin (PC)" className="platform-icon" /> : player.owner.metadata.platformSlug === 'xbl' ? <FaXbox title="Xbox One" className="platform-icon" /> : <FaPlaystation title="PlayStation 4" className="platform-icon" />}</p>
        <p>{player.owner.metadata.twitch ? <a title="Twitch" href={`https://twitch.tv/${player.owner.metadata.twitter}`} target="_blank" rel="noopener noreferrer"><FaTwitch /></a> : ''}</p>
        <p>{player.owner.metadata.twitter ? <a title="Twitter" href={`https://twitter.com/${player.owner.metadata.twitter}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a> : ''}</p>
      </div>
      <div className="country">
        {player.owner.metadata.countryCode ? <img src={`https://cdn.thetrackernetwork.com/cdn/flags/4x3/${player.owner.metadata.countryCode.toLowerCase()}.svg`} alt={player.owner.metadata.countryCode} title={player.owner.metadata.countryCode} /> : ''}
      </div>
      <div className="type">
        <p>{!player.value ? '-' : Number.isInteger(player.value) ? player.value.toLocaleString('nu') : player.value}</p>
      </div>
      <div className="matches">
        <p>{player.owner.stats[0].value ? player.owner.stats[0].value.toLocaleString('nu') : '-'}</p>
      </div>
    </PlayerContainer>
  )
}

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 2fr 2fr;
  grid-auto-rows: 70px;
  text-align: left;
  
  div {
    border-top: 2px solid #222;
    height: 70px;
    display: flex;
    align-items: center;
  }

  p {
    font-size: 1.3rem;
    font-weight: normal;
  }

  .rank {
    justify-content: center;
  }

  .rank p {
    font-weight: bold;
  }

  .rank-icon {
    vertical-align: middle;
    font-size: 3rem;
    color: #f70d1a;
  }

  .player {
    padding-left: 2rem;
  }

  .player-name {
    cursor: pointer;
    padding: 0.3rem 0.2rem;
  }

  .platform-icon {
    vertical-align: middle;
    font-size: 1.7rem;
    margin-left: 1rem;
  }

  .player a {
    vertical-align: middle;
    font-size: 1.7rem;
    margin-left: 0.7rem;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .country {
    justify-content: center;
  }

  .country img {
    height: 1.9rem;
    vertical-align: middle;
  }

  .type, .matches {
    justify-content: flex-end;
  }

`;
