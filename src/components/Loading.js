import React from 'react';
import LoadingGif from '../images/gifs/Loading.gif';
import SearchBackground from '../images/SearchBackground.jpg';
import SearchBackgroundSmall from '../images/SearchBackgroundSmall.jpg';
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

  @media screen and (max-width: 991px){
    background: url(${SearchBackgroundSmall}) center/cover no-repeat;
    
    img {
      width: 170px;
    }
  }

  @media screen and (max-width: 479px){
    img {
      width: 140px;
    }
  }
`;