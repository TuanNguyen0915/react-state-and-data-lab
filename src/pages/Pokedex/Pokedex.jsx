import { useState } from "react"
import { Link } from "react-router-dom"
import "./Pokedex.css"
import { pokeData } from "../../data/pokeData"
console.log(pokeData);


const Pokedex = () => {

  const displayCount = 10
  const [currIdx, setCurrIdx] = useState(0)
  const [displayedPokemon, setDisplayedPokemon] = useState(filterPokemonData(0))

  
  function filterPokemonData(newIdx) {
    const res = pokeData.filter((poke, idx) => {
      return idx >= newIdx && idx < newIdx + displayCount
    })
    console.log(res);
    return res
  }

  const handleIncrease = () => {
    if (currIdx < pokeData.length) {
      let newIdx = currIdx + displayCount
      setCurrIdx(newIdx)
      setDisplayedPokemon(filterPokemonData(newIdx))
    }
  }

  const handleDecrease = () => {
    if (currIdx > 0) {
      let newIdx = currIdx - displayCount
      setCurrIdx(newIdx)
      setDisplayedPokemon(filterPokemonData(newIdx))
    }
  }

  return (
    <>
      <h1>Pokemon List</h1>
      <div className="pagination-container">
        <button onClick={handleDecrease}>&lt;</button>
        <button onClick={handleIncrease}>&gt;</button>
      </div>
      <div className="num-results-container">
        Results {currIdx + 1} - {currIdx + displayCount} of {pokeData.length}
      </div>
      <div className="pokemon-container">
        {displayedPokemon.map(pokemon =>
          <Link to={`/pokemon/${pokemon.number - 1}`} key={pokemon._id}>
            <div className="pokemon-link">
              <img src={pokemon.image} alt="a fierce pokemon" />
              <p>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</p>
            </div>
          </Link>
        )}
      </div>
    </>
  )
}

export default Pokedex