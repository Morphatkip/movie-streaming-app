import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCategories from "./MovieCategories";
import axios from "axios";

export const FeaturedMovies = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let endpoint = "";
        switch (category) {
          case "featured":
            endpoint = "movie/now_playing?sort_by=popularity.desc";
            break;
          case "popular":
            endpoint = "movie/popular";
            break;
          case "top_rated":
            endpoint = "movie/top_rated";
            break;
          case "upcoming":
            endpoint = "movie/upcoming";
            break;
          default:
            endpoint = "discover/movie?sort_by=popularity.desc";
        }
        console.log({ endpoint });
        const response = await axios.get(
          `https://api.themoviedb.org/3/${endpoint}`,
          {
            params: {
              api_key: "9a2a09cb4cf2237fd864156a40c222cb",
              page: page, // Include the page parameter
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(`Error fetching ${category} movies:`, error);
      }
    };

    fetchMovies();
    console.log({ movies });
  }, [category, page]);

  const handleSetPage = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <MovieCategories
        handleSetPage={handleSetPage}
        movies={movies}
        title={category.replace("_", " ").toUpperCase()}
      />
    </div>
  );
};

export const TVSeries = () => {
  const { category } = useParams();
  const [tvSeries, setTVSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTVSeries = async () => {
      try {
        let endpoint = "";
        switch (category) {
          case "popular":
            endpoint = "tv/popular";
            break;
          case "airing_today":
            endpoint = "tv/airing_today";
            break;
          case "top_rated":
            endpoint = "tv/top_rated";
            break;
          default:
            endpoint = "tv/popular";
        }

        const response = await axios.get(
          `https://api.themoviedb.org/3/${endpoint}`,
          {
            params: {
              api_key: "9a2a09cb4cf2237fd864156a40c222cb",
              page: page,
            },
          }
        );
        setTVSeries(response.data.results);
      } catch (error) {
        console.error(`Error fetching ${category} TV series:`, error);
      }
    };

    fetchTVSeries();
  }, [category, page]);

  const handleSetPage = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <MovieCategories
        handleSetPage={handleSetPage}
        movies={tvSeries}
        title={category.replace("_", " ").toUpperCase()}
      />
    </div>
  );
};

const AnimeContent = () => {
  const { category, genreId } = useParams();
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        let endpoint = "";
        switch (category) {
          case "popular":
            endpoint = "anime/popular";
            break;
          case "top_rated":
            endpoint = "anime/top_rated";
            break;
          default:
            endpoint = "anime/popular";
        }

        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=16`,
          {
            params: {
              api_key: "9a2a09cb4cf2237fd864156a40c222cb",
              page: page,
            },
          }
        );
        setAnime(response.data.results);
      } catch (error) {
        console.error(`Error fetching ${category} anime:`, error);
      }
    };

    fetchAnime();
  }, [category, page]);

  const handleSetPage = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <div>
      <MovieCategories
        handleSetPage={handleSetPage}
        movies={anime}
        title="Anime"
      />
    </div>
  );
};

export default AnimeContent;

export const GenreContent = () => {
  const { genreId, contentType } = useParams();
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchContentByGenre = async () => {
      try {
        let endpoint = "";
        if (contentType === "movies") {
          endpoint = `discover/movie?with_genres=${genreId}`;
        } else if (contentType === "tv") {
          endpoint = `discover/tv?with_genres=${genreId}`;
        }

        const response = await axios.get(
          `https://api.themoviedb.org/3/${endpoint}`,
          {
            params: {
              api_key: "9a2a09cb4cf2237fd864156a40c222cb",
              page: page,
            },
          }
        );
        setContent(response.data.results);
      } catch (error) {
        console.error(`Error fetching ${contentType} by genre:`, error);
      }
    };

    fetchContentByGenre();
  }, [genreId, contentType, page]);

  const handleSetPage = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <MovieCategories
        handleSetPage={handleSetPage}
        movies={content}
        title={contentType.charAt(0).toUpperCase() + contentType.slice(1)}
      />
    </div>
  );
};
