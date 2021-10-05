
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../utils/app.state'
import { Actions } from '../utils/actions'
import styled from '@emotion/styled'
import PokemonItem from './../components/PokemonItem'
import { Container } from '../components/Container'
import Spinner from '../components/Spinner'
import Navigation from '../components/Navigation'

interface Props { }

const ListPokemon: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext)
  const { fetchPokemons } = Actions(state, dispatch)
  const [isMounted, setIsMounted] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [flagFetchMore, setFlagFetchMore] = useState(state.listPokemon.length === 0)
  const { listPokemon } = state

  useEffect(() => {
    setIsMounted(true)
    const startFetchingData = async (initialFetch?: boolean) => {
      setIsLoading(true)

      const offset = initialFetch ? 0 : state.listPokemon.length
      const limit = 40

      await fetchPokemons(offset, limit)
      setFlagFetchMore(false)

      if (!isMounted) return

      setFlagFetchMore(false)
      setIsLoading(false)
    }
    if (flagFetchMore && !isLoading) {
      const initialFetch = state.listPokemon.length === 0
      startFetchingData(initialFetch)
    }

    return () => {
      setIsMounted(false)
    }
  }, [flagFetchMore, isLoading, isMounted, fetchPokemons, state.listPokemon.length])


  useEffect(() => {
    const handleScroll = (e: any) => {
      e.preventDefault()
      checkIncreaseLimit()
    }

    const checkIncreaseLimit = () => {
      const scrollTop = window.scrollY || window.pageYOffset
      const scrollHeight = document.body.scrollHeight
      const clientHeight = window.innerHeight

      if (scrollTop >= scrollHeight - clientHeight * 2) {
        if (!flagFetchMore) {
          setFlagFetchMore(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isLoading, flagFetchMore])

  console.log(listPokemon)


  return (
    <Container>

      {listPokemon.map((item, index) => {
        const totalOwned = state.myPokemon.filter((pokemon) => {
          return item.id === pokemon.id
        }).length
        return <PokemonItem data={item} totalOwned={totalOwned} key={index} />
      })}

      {isLoading && (
        <LoadingContainer>
          <Spinner size={70} />
          <h1>Fetching Pokemons...</h1>
        </LoadingContainer>
      )}
      <Navigation />
    </Container>
  )
}

const LoadingContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export default ListPokemon
