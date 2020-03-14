import React from 'react';
import Leaderboard from './Leaderboard';
import LeaderboardSearch from './LeaderboardSearch';
import LeaderboardLoading from './LeaderboardLoading';
import LeaderboardCantLoad from './LeaderboardCantLoad';
import styled from 'styled-components';
import { StatContext } from '../context';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LegendStatsBackground from '../images/LegendStatsBackground.jpg';

export default function LeaderboardsPage() {
  const { searchType, searchPlatform, searchLegend } = useParams();
  const context = useContext(StatContext);

  let { getLeaderboardStats, loading, error, leaderboardStats } = context;
  document.title = `${leaderboardStats ? leaderboardStats.metadata.title + ' – Statfinder' : 'Leaderboards – Statfinder'}`;

  useEffect(() => {
    getLeaderboardStats(searchType, searchPlatform, searchLegend);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LeaderboardsPageContainer>
      <LeaderboardSearch searchType={searchType} searchPlatform={searchPlatform} searchLegend={searchLegend} />
      {loading === true ? <LeaderboardLoading /> : loading === false && error === true ? <LeaderboardCantLoad /> : <Leaderboard leaderboardStats={leaderboardStats} searchPlatform={searchPlatform} searchLegend={searchLegend} />}
    </LeaderboardsPageContainer>
  )
}

const LeaderboardsPageContainer = styled.div`
  min-height: 100vh;
  padding-top: 7rem;
  padding-bottom: 8rem;
  background: url(${LegendStatsBackground}) center/cover no-repeat;
`;