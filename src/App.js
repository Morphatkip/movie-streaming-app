import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import AnimeContent, {
  FeaturedMovies,
  GenreContent,
  TVSeries,
} from "./pages/FeaturedMovies";
import Stream from "./pages/Stream";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home handleSetStream />} />
        <Route path="/movies/:category" element={<FeaturedMovies />} />
        <Route path="/tv-series/:category" element={<TVSeries />} />
        <Route path="/movies/anime" element={<AnimeContent />} />
        <Route path="/genre/:contentType/:genreId" element={<GenreContent />} />
        <Route path="/movies/watch/:movieName" element={<Stream />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
