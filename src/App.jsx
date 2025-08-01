import React, { useState, useEffect } from "react"
import Search from "./components/Search"

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const [errorMessage, seterrorMessage] = useState('');

  const fetchMovies = async () => {
    try {

    } catch (error){
      console.error(`Error fetching movies: ${error}`);
      seterrorMessage('Error fetching movies. Please try again later');
    }
  }

  useEffect(()=>{

  }, []);

  return(
    <main>
      <div className="pattern"/> 

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner"/>
          <h1>Find <span className="text-gradient">Movies</span> You Likes</h1>
          <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        </header>

        <section className="all-movies">

        </section>

      </div>
    </main>
  )
}

export default App
