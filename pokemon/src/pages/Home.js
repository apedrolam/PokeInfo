import '../styles/Home.css'
import { useEffect, useState } from 'react'

const API_URL = 'https://pokeapi.co/api/v2/'

const Home = () => {
    const [pokemonId, setPokemonId] = useState(1)
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch(`${API_URL}pokemon/${pokemonId}`)
            .then(res => res.json())
            .then(data => {
                setPokemon(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [pokemonId])

    const getRandomPokemon = () => {
        fetch(`${API_URL}pokemon/`)
            .then(response => response.json())
            .then((jsonData) => {
                //console.log(jsonData)
                //console.log(Math.floor((Math.random() * jsonData.count) +1))
                setPokemonId(Math.floor((Math.random() * jsonData.count) +1))
                
            })
            .catch((error) => {
                console.log(error)
            })
            console.log(pokemon)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={getRandomPokemon}>Click</button>
        </div>
    )
}

export default Home;