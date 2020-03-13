import React from 'react';
import { useParams } from 'react-router-dom';
import { StatContext } from '../context';
import { useContext, useEffect } from 'react';
import Loading from './Loading';
import PlayerNotFound from './PlayerNotFound';
import LifetimeStats from './LifetimeStats';
import LegendStats from './LegendStats';
import styled from 'styled-components';

export default function PlayerPage() {
  const { platform, username } = useParams();
  const context = useContext(StatContext);
  let { getStats, loading, error, stats } = context;

  document.title = `${username} ${platform === 'origin' ? '(PC)' : platform === 'xbl' ? '(Xbox)' : '(PS4)'} – Statfinder`;

  useEffect(() => {
    getStats(platform, username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading === true) {
    return <Loading />
  }
  else if (loading === false && error === true) {
    return <PlayerNotFound />
  }
  else return (
    <PlayerPageContainer>
      <LifetimeStats platform={platform} stats={stats} />
      <LegendStats stats={stats} />
    </PlayerPageContainer>
  )
}

const PlayerPageContainer = styled.div`
  min-height: 100vh;
`;