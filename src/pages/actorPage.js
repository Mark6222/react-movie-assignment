import React from "react";
import { getPerson } from '../api/tmdb-api'
import { getPersonCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PageTemplate from "../components/templateActorPage";
import ActorDetails from "../components/actorDetails/";
import { useParams } from 'react-router-dom';

const ActorPage = (person) => {
    const { name } = useParams();
    const { data: actor, error: actorError, isLoading: actorLoading, isError: actorIsError } = useQuery(
        ["person", { name: name }],
        getPerson
    );

    const { data: actorCredits, error: actorCreditsError, isLoading: actorCreditsLoading, isError: actorCreditsIsError } = useQuery(
        ["personCredits", { name: name }],
        getPersonCredits
    );

    if (actorLoading || actorCreditsLoading) {
        return <Spinner />;
    }

    if (actorIsError || actorCreditsIsError) {
        return <h1>{actorError.message || actorCreditsError.message}</h1>;
    }

    if(!actor){
        <p>error</p>
    }
return (
    <>
      {person ? (
        <>
          <PageTemplate person={actor}>
            <ActorDetails person={actor} credits={actorCredits}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default ActorPage;