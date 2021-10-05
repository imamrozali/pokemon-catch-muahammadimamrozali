
import React, { useContext, useEffect, useState } from 'react'
import { graphqlPokemonDetail } from '../graphql/pokemons'
import { useHistory, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { storePokemons, storePokemon } from '../utils/store.type'
import PokemonImage from "../components/PokemonImage"
import CatchPopup from "../components/CatchPopup"
import PercentageBar from '../components/PercentageBar'

interface Props { }

interface IParams {
  name: string
}

const Container = styled.div`
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 0 1rem 3rem
  overflow: hidden
  gap: 1rem
`

const DetailPokemon: React.FC<Props> = () => {
  const [pokemonBasicData, setPokemonBasicData] = useState<storePokemons>(undefined!)
  const [pokemonDetailData, setPokemonDetailData] = useState<storePokemon>(undefined!)

  const [isCatching, setIsCatching] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  const { name } = useParams<IParams>()
  const history = useHistory()

  useEffect(() => {
    setIsMounted(true)

    const fetchPokemonDetail = async () => {
      setPokemonDetailData(undefined!)

      const resultPokemon = await graphqlPokemonDetail(name)

      if (!isMounted) return

      if (resultPokemon.data) {

        setPokemonBasicData({
          ...resultPokemon.data,
        })
        setPokemonDetailData(resultPokemon.data)
      }
    }

    if (name) {
      fetchPokemonDetail()
    }

    return () => {
      setIsMounted(false)
    }
  }, [name, isMounted])
  console.log("render", pokemonDetailData)

  const handle = {
    goBack: () => {
      history.push("/")
    },
    exitCatching: () => {
      setIsCatching(false)
    },
    catchPokemon: () => {
      setIsCatching(true)
    }
  }
  return (
    <Container>
      <PokemonImage
        src={pokemonBasicData?.image ?? ""}
        alt={pokemonBasicData?.name ?? ""}
      />
      <div>
        {!pokemonDetailData ? (
          <p>loading</p>
        ) : (
          <p>name: {pokemonDetailData.name}</p>
        )}
      </div>
      <div>
        {!pokemonDetailData ? (
          <p>loading</p>
        ) : (
          <p>height: {pokemonDetailData.height}</p>
        )}
      </div>
      <div>
        {!pokemonDetailData ? (
          <p>loading</p>
        ) : (
          <p>weight: {pokemonDetailData.weight}</p>
        )}
      </div>
      <div>
        {!pokemonDetailData ? (
          <p>loading</p>
        ) : (
          pokemonDetailData.types.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        )}
      </div>
      <div>
        {!pokemonDetailData ? (
          <p>loading</p>
        ) : (
          pokemonDetailData.stats.map((item, index) => (
            <div key={index}>{item.name} <PercentageBar completed={item.base_stat}>{item.base_stat}</PercentageBar></div>
          ))
        )}
      </div>

      {isCatching && <CatchPopup pokemon={pokemonDetailData} exitCatching={handle.exitCatching} />}
      <button onClick={handle.catchPokemon}>
        Catch
      </button>
    </Container>
  )
}

export default DetailPokemon
