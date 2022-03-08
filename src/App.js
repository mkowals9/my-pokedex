import './App.css';
import "./styles/lightMode.css"
import MyPokemonList from "./components/MyPokemonList"

function App() {
  return (
    <div className="App">
      <h1>My PokéDex!</h1>
      <MyPokemonList/>
    </div>
  );
}

export default App;
