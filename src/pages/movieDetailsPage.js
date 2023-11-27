import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import MovieRecommendationsPage from "../components/movieRecommendations/";
import MovieCreditsPage from "../components/movieCredits/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { getMovieRecommendations } from '../api/tmdb-api'
import { getMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: credits, error: creditsError, isLoading: creditsLoading, isError: creditsIsError } = useQuery(
    ["movieCredits", { id: id }],
    getMovieCredits
  );

  const { data: movie, error: movieError, isLoading: movieLoading, isError: movieIsError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: movieRecommendation, error: movieRecommendationError, isLoading: movieRecommendationLoading, isError: movieRecommendationIsError } = useQuery(
    ["movieRecommedation", { id: id }],
    getMovieRecommendations
  );
  console.log("Movies recommendation prop:", movieRecommendation)

  if (movieLoading || creditsLoading || movieRecommendationLoading) {
    return <Spinner />;
  }

  if (movieIsError || creditsIsError || movieRecommendationIsError) {
    return <h1>{movieError.message || creditsError.message || movieRecommendationError.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <MovieCreditsPage credits={credits} />
            <MovieRecommendationsPage movies={movieRecommendation} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;