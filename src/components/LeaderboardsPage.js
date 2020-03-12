import React from 'react';
import Leaderboard from './Leaderboard';
import styled from 'styled-components';
import { StatContext } from '../context';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LegendStatsBackground from '../images/LegendStatsBackground.jpg';

export default function LeaderboardsPage() {
  const { searchType, searchPlatform, searchLegend } = useParams();
  const context = useContext(StatContext);
  let { getLeaderboardStats, loading, error, leaderboardStats } = context;
  document.title = `Statfinder – ${leaderboardStats ? leaderboardStats.metadata.title : ''} Leaderboard`;

  useEffect(() => {
    getLeaderboardStats(searchType, searchPlatform, searchLegend);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LeaderboardsPageContainer>
      {loading === true ? 'Loading...' : loading === false && error === true ? 'Please try again later...' : <Leaderboard leaderboardStats={leaderboardStats} />}
    </LeaderboardsPageContainer>
  )
}

const LeaderboardsPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 7rem;
  padding-bottom: 8rem;
  background: url(${LegendStatsBackground}) center/cover no-repeat;
`;