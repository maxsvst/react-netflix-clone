import { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../api/axios";
import requests from "../../api/requests";

const Banner = () => {
  const [movie, setMovies] = useState({});

  const fetchData = async () => {
    try {
      const { data } = await axios(requests.fetchNetflixOriginals);
      setMovies(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncate = (string, numOfChars) => {
    return string?.length > numOfChars
      ? string.substr(0, numOfChars - 1) + "..."
      : string;
  };

  return (
    <>
      {!!movie && (
        <header
          key={movie.id}
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner__content">
            <h1 className="banner__title">
              {movie.title || movie.name || movie.original_name}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My list</button>
            </div>
            <h1 className="banner__description">
              {truncate(movie.overview, 300)}
            </h1>
          </div>
          <div className="banner--fadeBottom" />
        </header>
      )}
    </>
  );
};

export default Banner;
