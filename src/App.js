import './App.css';
import "./styles/output.css"
import MyPokemonList from "./components/MyPokemonList"

function App() {
  return (
    <div className="App">
      <h1 className='text-red-600'>My PokéDex!</h1>
      <MyPokemonList/>
    </div>
  );
}

export default App;
