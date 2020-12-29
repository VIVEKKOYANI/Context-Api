import React, { useState } from "react";
import Movie from "./Movie";

function MovieList() {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game Of Thrones",
      price: "$10",
      id: 2566124,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524,
    },
  ]);
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <Movie name={movie.name} price={movie.price} key={movie.id} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
