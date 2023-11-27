import React from "react";
import { getTvShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowsPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const TvShowsPage = (props) => {

    const { data, error, isLoading, isError } = useQuery('Trending', getTvShows)
    console.log("tv shows: ", data)
    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const tvShows = data.results;

    return (
        <PageTemplate
            title='TV Shows Trending'
            tvShows={tvShows}
            action={tvShows}
        />
    );
};
export default TvShowsPage;