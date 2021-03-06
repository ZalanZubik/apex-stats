import React from 'react';
import styled from 'styled-components';
import { FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';
import LifetimeStatsBackground from '../images/LifetimeStatsBackground.jpg';
import LifetimeStatsBackgroundLow from '../images/LifetimeStatsBackground_lowres.jpg';

export default function LifetimeStats({ platform, stats }) {
  return (
    <LifetimeStatsContainer>
      <div className='stat-container'>
        <div className='user-info'>
          <div className='user-images'>
            <div className='user-avatar-cut'>
              {stats.platformInfo ? (
                <img src={stats.platformInfo.avatarUrl} alt='user avatar' className='user-avatar' />
              ) : (
                ''
              )}
            </div>
            {stats.userInfo.countryCode ? (
              <img
                className='country-icon'
                src={`https://cdn.thetrackernetwork.com/cdn/flags/4x3/${stats.userInfo.countryCode.toLowerCase()}.svg`}
                alt={stats.userInfo.countryCode}
                title={stats.userInfo.countryCode}
              />
            ) : (
              ''
            )}
          </div>
          <h1 className='username'>{stats.platformInfo ? stats.platformInfo.platformUserHandle : ''}</h1>
          <p>
            {platform === 'origin' ? (
              <FaWindows title='Origin (PC)' className='platform-icon' />
            ) : platform === 'xbl' ? (
              <FaXbox title='Xbox One' className='platform-icon' />
            ) : (
              <FaPlaystation title='PlayStation 4' className='platform-icon' />
            )}
          </p>
        </div>
        <div className='grid'>
          <div className='active-legend-container'>
            <div className='active-legend-text'>
              <h3>Active Legend</h3>
              <h2>{stats.metadata ? stats.metadata.activeLegendName : '-'}</h2>
            </div>
            {
              <div className='img-cut'>
                {stats.segments[1].metadata ? (
                  <img
                    src={stats.segments[1].metadata.tallImageUrl}
                    alt='active legend'
                    className='active-legend-img'
                  />
                ) : (
                  ''
                )}
              </div>
            }
          </div>
          <div>
            <ul>
              <li>
                <h3>Apex Level</h3>
                <h2>
                  {stats.segments[0].stats.level
                    ? stats.segments[0].stats.level.value.toLocaleString('hu-HU')
                    : '-'}
                </h2>
              </li>
              <li>
                <h3>Total Kills</h3>
                <h2>
                  {stats.segments[0].stats.kills
                    ? stats.segments[0].stats.kills.value.toLocaleString('hu-HU')
                    : '-'}
                </h2>
              </li>
              <li>
                <h3>Total Damage</h3>
                <h2>
                  {stats.segments[0].stats.damage
                    ? stats.segments[0].stats.damage.value.toLocaleString('hu-HU')
                    : '-'}
                </h2>
              </li>
              <li>
                <h3>Headshots</h3>
                <h2>
                  {stats.segments[0].stats.headshots
                    ? stats.segments[0].stats.headshots.value.toLocaleString('hu-HU')
                    : '-'}
                </h2>
              </li>
              <li>
                <h3>Finishers</h3>
                <h2>
                  {stats.segments[0].stats.finishers
                    ? stats.segments[0].stats.finishers.value.toLocaleString('hu-HU')
                    : '-'}
                </h2>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h3>Matches Played</h3>
                <h2>
                  {stats.segments[0].stats.matchesPlayed
                    ? stats.segments[0].stats.matchesPlayed.value.toLocaleString('hu-HU')
                    : '-'}
                </h2>
              </li>
              <li>
                <h3>Kills Per Match</h3>
                <h2>
                  {stats.segments[0].stats.killsPerMatch ? stats.segments[0].stats.killsPerMatch.value : '-'}
                </h2>
              </li>
              <li>
                <h3>Damage Per Match</h3>
                <h2>
                  {stats.segments[0].stats.damagePerMatch
                    ? stats.segments[0].stats.damagePerMatch.value
                    : '-'}
                </h2>
              </li>
              <li>
                <h3>Kills As Kill Leader</h3>
                <h2>
                  {stats.segments[0].stats.killsAsKillLeader
                    ? stats.segments[0].stats.killsAsKillLeader.value.toLocaleString('hu-HU')
                    : '-'}
                </h2>
              </li>
              <li>
                <h3>Revives</h3>
                <h2>
                  {stats.segments[0].stats.revives
                    ? stats.segments[0].stats.revives.value.toLocaleString('hu-HU')
                    : '-'}
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LifetimeStatsContainer>
  );
}

const LifetimeStatsContainer = styled.div`
  background: url(${LifetimeStatsBackground}) center/cover no-repeat,
    url(${LifetimeStatsBackgroundLow}) center/cover no-repeat;
  min-height: 100vh;

  .stat-container {
    width: 85vw;
    max-width: 1140px;
    margin: auto;
    padding-top: 7rem;
    padding-bottom: 2.5rem;
  }

  .user-info {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    padding: 1.2rem 1rem;
    background: var(--darkBackground);
  }

  .user-images {
    position: relative;
  }

  .user-avatar-cut {
    height: 120px;
    overflow: hidden;
    margin-right: 1.7rem;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  .user-avatar {
    width: 120px;
    left: 0;
    clip: rect(0px, 120px, 120px, 0px);
  }

  .username {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  .platform-icon {
    vertical-align: middle;
    padding-left: 0.8rem;
    font-size: 2.5rem;
  }

  .country-icon {
    height: 1.9rem;
    position: absolute;
    bottom: 0.4rem;
    margin-left: 1.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  .active-legend-text {
    background: var(--darkBackground);
    padding: 1rem;
    height: 6rem;
  }

  .active-legend-text h3 {
    font-weight: normal;
  }

  .img-cut {
    height: 448px;
    overflow: hidden;
    background: var(--darkBackground);
  }

  .active-legend-img {
    width: 100%;
    left: 0;
    clip: rect(0px, 400px, 448px, 0px);
    padding: 0 2px;
  }

  li {
    background: var(--darkBackground);
    padding: 1rem;
    margin-bottom: 1rem;
    list-style-type: none;
    height: 6rem;
  }

  li h3 {
    font-weight: normal;
  }
`;
