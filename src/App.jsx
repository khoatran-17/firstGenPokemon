import { Component } from 'react';
import './App.css';
import PokeList from './PokeList.jsx';
import Searchbox from './Searchbox.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchfield: '',
    };
  }

  async componentDidMount() {
    try {
      const pokemonsResp = await fetch('https://pokeapi.co/api/v2/generation/1/');
      const pokemonList = await pokemonsResp.json();
      this.setState({ pokemons: pokemonList.pokemon_species });
    } catch (error) {
      console.log('Cannot fetch the first gen pokemons.');
    }
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({searchfield: event.target.value})
  }

  render() {
    const {pokemons, searchfield} = this.state;
    const filterPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div>
        <h1>First Gen Pokedex</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <PokeList pokeList={filterPokemons} />
      </div>
    );
  }
}

export default App;
