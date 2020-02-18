import React from 'react';
import styled from 'styled-components';
import Legend from './Legend';
import LegendStatsBackground from '../images/LegendStatsBackground.jpg';

export default function LegendStats({ stats }) {
  const legends = stats.segments.filter(legend => legend.type === 'legend').map(legend => {
    return <Legend key={legend.attributes.id} legend={legend} />
  });

  return (
    <LegendStatsContainer>
      {legends}
    </LegendStatsContainer>
  )
}

const LegendStatsContainer = styled.div`
  padding-bottom: 8rem;
  padding-top: 4.5rem;
  background: url(${LegendStatsBackground}) center/cover no-repeat;
`;