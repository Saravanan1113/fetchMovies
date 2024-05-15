import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

interface Movies {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

function App() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const apiKey = "ca7b112ff608d9602cdcfbc360b5e366";
  const popular = "https://api.themoviedb.org/3/movie/popular";

  //title -string
  //poster_path -string
  //id-number
  //releaseDATE string
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${popular}?api_key=${apiKey}`).then((response) => {
      const result = response.data.results;
      setMovies(result);
      console.log(result);
    });
  };
  return (
    <div className="App">
      {movies.map((item) => (
        <div className="movieContainer" key={item.id}>
          <h2>{item.title}</h2>
          {item.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt={`${item.title} Poster`}
            ></img>
          )}
          <p>{item.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
