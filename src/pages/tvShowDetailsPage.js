import React from "react";
import { getTvShow } from '../api/tmdb-api'
import { getPersonCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PageTemplate from "../components/templateTvShowDetailsPage";
import TvShowDetails from "../components/tvShowDetails/";
import { useParams } from 'react-router-dom';

const TvShowDetailsPage = (prop) => {
    const { id } = useParams();
    const { data: show, error: showError, isLoading: showLoading, isError: showIsError } = useQuery(
        ["tvShow", { id: id }],
        getTvShow
    );
    console.log("tv details: ", show)
    if (showLoading) {
        return <Spinner />;
    }

    if (showIsError) {
        return <h1>{showError.message}</h1>;
    }
    return (
        <>
            {show ? (
                <>
                    <PageTemplate show={show}>
                        <TvShowDetails show={show} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );
};

export default TvShowDetailsPage;