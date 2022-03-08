import './App.css';
import "./styles/output.css"
import MyPokemonList from "./components/MyPokemonList"

function App() {
  return (
    <div className="space-y-5 flex flex-col items-center bg-slate-50">
      <h1 className='text-red-500 text-4xl mt-5'>My PokéDex!</h1>
      <MyPokemonList/>
    </div>
  );
}

export default App;
