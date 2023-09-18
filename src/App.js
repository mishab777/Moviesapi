import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Moviecard } from './components/moviescard/Moviecard';

function App() {

  const [movies,setmovies] = useState();
  const getmovies = async () =>{
    try{
      const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      setmovies(data);
    }catch(err){
      console.log(err);
    }

  }
  useEffect(() =>{
    getmovies();
  },[])
  return (
    <div className="App">
     <h1 className='head'>The Best Of Best</h1>
     <main className='main'>
     {
      movies && movies.length > 0 && movies.map(movie => <Moviecard key={movie.id} movie={movie}/>)
     }
     </main>
    </div>
  );
}

export default App;
