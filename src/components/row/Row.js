import { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../api/axios";

const Row = ({ title, fetchData, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const getMovies = async () => {
    try {
      const { data } = await axios(fetchData);
      setMovies(data.results);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [fetchData]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {!!movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Row;
