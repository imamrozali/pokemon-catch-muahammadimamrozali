import React from "react";
import styled from '@emotion/styled'
import LoadedImage from './LoadedImage'
import Spinner from './Spinner';

interface Props {
  src: string
  alt: string
  withoutBackground?: boolean
}

const Container = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 100%;
  }
  & > img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const ImageNotFound = styled.div`
  text-align: center;
  height: 175px;
  padding: 69px 20px;
  margin: 10px;
  background: #ACACAC;
`;

const PokemonImage: React.FC<Props> = (props) => {
  const { hasLoaded, hasError } = LoadedImage(props.src)

  if (hasError) {
    return <ImageNotFound>Image Not Found</ImageNotFound>;
  }
  return (
    <Container>
      <ImageContainer>
        {hasError && <div>error</div>}
        {!hasLoaded && <Spinner size={70} />}
        {hasLoaded && <img src={props.src} alt={props.alt} data-testid="pokemon-image" />}
      </ImageContainer>
    </Container>
  )
}

export default PokemonImage
