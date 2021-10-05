import { gql } from '@apollo/client'

export const queryPokemons = gql`
    query pokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
                id
                name
                image
            }
        }
    }
`

export const queryPokemon = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            height
            weight
            sprites {
                front_default
            }
            stats {
                base_stat
                effort
                stat {
                name
                }
            }
            types {
                type {
                name
                }
            }
        }
    }
`
