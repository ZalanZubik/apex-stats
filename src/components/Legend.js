import React from 'react';
import styled from 'styled-components';

export default function Legend({ legend }) {

  const formatData = () => {
    let tempStats = [];
    for (let stat in legend.stats) {
      tempStats.push(legend.stats[stat]);
    }
    return tempStats;
  }

  const legendStats = formatData();

  return (
    <LegendContainer>
      <div className="legend">
        <h2 className="legend-name">{legend.metadata ? legend.metadata.name : '-'}</h2>
        {legend.metadata ? <img src={legend.metadata.tallImageUrl} alt="" className="legend-img" /> : ''}
      </div>
      <div className="legend-stat-container">
        <ul className="stat-list">
          {legendStats.map((stat, index) => <li key={index}><h3>{stat.displayName}</h3><h2>{stat.displayValue}</h2></li>)}
        </ul>
      </div>
    </LegendContainer>
  )
}

const LegendContainer = styled.div`
    margin: auto;
    width: 85vw;
    max-width: 1140px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1rem;
    padding-top: 2rem;

  .legend {
    background: var(--darkBackground);
    height: 277px;
    overflow: hidden;
  }

  .legend-name {
    padding-top: 0.4rem;
    padding-left: 0.4rem;
    text-align: left;
  }

  .legend-img {
    width: 160px;
    left: 0;
    clip: rect(0px,160px,300px,0px);
  }

  .legend-stat-container {
    background: var(--darkBackground);
  }

  .stat-list {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto auto;
  }

  .stat-list li {
    list-style-type: none;
    border-left: 4px solid var(--lightRed);
    margin-left: 1.3rem;
    margin-top: 1.3rem;
    text-align: left;
    padding-left: 0.5rem;
  }

  .stat-list li h3 {
    font-weight: normal;
  }

`;