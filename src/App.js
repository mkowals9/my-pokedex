import logo from './logo.svg';
import './App.css';
import "./styles/lightMode.css"
import "./styles/darkMode.css"

function App() {
  return (
    <div className="App">
      <h1 className="home-text">My PokeDex!</h1>
      <MyPokemonList/>
    </div>
  );
}

export default App;
