import './App.css';
import "./styles/output.css"
import {useState} from "react"
import MyPokemonList from "./components/MyPokemonList"

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className= "space-y-5 flex flex-col items-center dark:bg-slate-800">
        <h1 className='text-red-500 text-4xl mt-5'>My PokéDex!</h1>
        <button className="" onClick={() => setIsDarkMode(!isDarkMode)}>Change theme</button>
        <MyPokemonList/>
      </div>
    </div>
  );
}

export default App;
