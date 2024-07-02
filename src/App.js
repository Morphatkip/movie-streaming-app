import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import AnimeContent, {
  FeaturedMovies,
  GenreContent,
  TVSeries,
} from "./pages/FeaturedMovies";
import Stream from "./pages/Stream";
import { SearchProvider } from "./context/SearchContext";
import SearchResults from "./pages/SearchResults";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home handleSetStream />} />
          <Route path="/movies/:category" element={<FeaturedMovies />} />
          <Route path="/tv-series/:category" element={<TVSeries />} />
          <Route path="/movies/anime" element={<AnimeContent />} />
          <Route
            path="/genre/:contentType/:genreId"
            element={<GenreContent />}
          />
          <Route path="/movies/watch/:movieName" element={<Stream />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
