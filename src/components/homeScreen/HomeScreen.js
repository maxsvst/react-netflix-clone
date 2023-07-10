import "./homeScreen.css";
import Nav from "../nav/Nav";
import Banner from "../banner/Banner";
import Row from "../row/Row";

import requests from "../../api/requests";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="TRANDING" fetchData={requests.fetchTranding} isLargeRow />
      <Row
        title="NETFLIX ORIGINALS"
        fetchData={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TOP RATED" fetchData={requests.fetchTopRated} isLargeRow />
      <Row title="ACTION MOVIES" fetchData={requests.fetchActionMovies} isLargeRow />
      <Row title="COMEDY MOVIES" fetchData={requests.fetchComdeyMovies} isLargeRow />
      <Row title="HORROR MOVIES" fetchData={requests.fetchHorrorMovies} isLargeRow />
      <Row
        title="ROMANCE MOVIES"
        fetchData={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="DOCUMENTARIES"
        fetchData={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
