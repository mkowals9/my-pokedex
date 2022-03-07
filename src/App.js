import './App.css';
import "./styles/lightMode.css"
import MyPokemonList from "./components/MyPokemonList"
import Pokeball from './images/poke_ball_icon.svg'

function App() {
  return (
    <div className="App">
      <h1 className='home-text'>My PokéDex!</h1>
      <img className="pokeball-logo" src={Pokeball} alt="Pokeball" />
      <MyPokemonList/>
    </div>
  );
}

export default App;
