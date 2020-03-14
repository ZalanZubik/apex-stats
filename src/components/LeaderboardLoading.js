import React from 'react';
import styled from 'styled-components';

export default function LeaderboardLoading() {
  return (
    <Loader>
      <span></span>
      <span></span>
      <span></span>
    </Loader>
  )
}

const Loader = styled.div`
  width: 95%;
  max-width: 1140px;
  height: 6.3rem;
  margin: auto;
  overflow: auto;
  background: var(--darkBackground);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background-color: purple;
    border-radius: 50%;
    margin: 0 8px;
    transform: translate3d(0);
    animation: bounce 0.5s infinite alternate;
    width: 16px;
    height: 16px;
  }

  span:nth-child(2) {
    background-color: palevioletred;
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    to {
      transform: translate3d(0, -16px, 0);
    }
  }
`;