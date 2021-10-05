import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
})

export default client
