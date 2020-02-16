import React from 'react';
import LoadingGif from '../images/gifs/Loading.gif';
import SearchBackground from '../images/SearchBackground.jpg';
import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingContainer>
      <img src={LoadingGif} alt="loading" />
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  height: 100vh;
  background: url(${SearchBackground}) top/cover no-repeat;

  img {
    padding-top: 4.5rem;
  }
`;