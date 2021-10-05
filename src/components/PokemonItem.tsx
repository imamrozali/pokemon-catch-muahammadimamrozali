import styled from "@emotion/styled"
import React from "react"
import { useHistory } from "react-router-dom"
import { storePokemons } from '../utils/store.type'
import PokemonImage from './PokemonImage'


interface Props {
  data: storePokemons
  totalOwned: number
}

const CardListPokemon = styled.div`
    font-family: 'Rubik', sans-serif;
    color:#000 #000 !important;
    text-align: center;
    background: lightgray;
    border-radius: 15px; 
    text-transform: uppercase;
    cursor:pointer;
    &:hover {
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    }
`

const TotalOwned = styled.div`
  position: absolute
  z-index: 1
  right: -0.5rem
  background: #7894d1
  padding: 2px 0.5rem
  border-radius: 9999px
  color: white
  font-weight: 600
  font-size: 0.8rem
`

const Name = styled.div`
  text-transform: capitalize
  text-align: center
  font-size: 0.7rem
  font-weight: 600;
  padding: 7px;
`

const PokemonItem: React.FC<Props> = (props) => {
  const history = useHistory()

  const handle = {
    openPokemon: () => {
      history.push(`/detail-pokemon/${props.data.name}`)
    },
  }

  return (
    <CardListPokemon onClick={handle.openPokemon}>
      {props.totalOwned > 0 && <TotalOwned>{`x${props.totalOwned}`}</TotalOwned>}
      <PokemonImage src={props.data.image} alt={props.data.name} />
      <Name>{props.data.name}</Name>
    </CardListPokemon>
  )
}

export default PokemonItem
