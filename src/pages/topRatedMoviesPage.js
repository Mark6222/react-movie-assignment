import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddPlaylistIcon from '../components/cardIcons/addPlaylistIcon'


const TopRatedMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('TopRated Movies', getTopRatedMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    const playlist = movies.filter(m => m.playlist)
    localStorage.setItem('playlist', JSON.stringify(playlist))

    return (
        <PageTemplate
            title="Top Rated Movies"
            movies={movies}
            action={(movie) => {
                return <AddPlaylistIcon movie={movie} />
            }}
        />
    );
};

export default TopRatedMoviesPage;