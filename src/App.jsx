import axios from "axios";

//HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";

//components
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

//Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "ee7d4ab40d4687b444e98d9b184beef3";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movies/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
};

export default App;
