import React from 'react';
import styled from 'styled-components';

export default function Legend({ legend }) {

  const formatData = () => {
    let tempStats = [];
    for (let stat in legend.stats) {
      tempStats.push(legend.stats[stat]);
    }
    return tempStats.sort((a, b) => a.displayName.localeCompare(b.displayName));
  }

  const legendStats = formatData();

  return (
    <LegendContainer>
      <div className="legend" style={{ background: legend.metadata ? `url(${legend.metadata.tallImageUrl}) top/170px no-repeat` : '', backgroundPositionY: legend.metadata ? '7px' : '', backgroundColor: 'var(--darkBackground)' }}>
        <h2 className="legend-name">{legend.metadata ? legend.metadata.name : '-'}</h2>
      </div>
      <div className="legend-stat-container">
        <ul className="stat-list">
          {legendStats.map((stat, index) => <li key={index}><h3>{stat.displayName}</h3><h2>{Number.isInteger(stat.value) ? stat.value.toLocaleString('nu') : stat.value}</h2></li>)}
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
    min-height: 192px;
    position: relative;
  }

  .legend-name {
    display: block;
    bottom: 1rem;
    padding: 0 0.4rem;
    position: absolute;
    background-color: var(--lightRed);
  }

  .legend-stat-container {
    background: var(--darkBackground);
  } 

  .stat-list {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1.3rem;
    padding-left: 1.3rem;
  }

  .stat-list li {
    list-style-type: none;
    border-left: 4px solid var(--lightRed);
    margin-right: 3rem;
    margin-top: 1.3rem;
    text-align: left;
    padding-left: 0.5rem;
    min-width: 130px;
  }

  .stat-list li h3 {
    font-weight: normal;
  }
`;