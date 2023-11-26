import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('Trending', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  return (
    <PageTemplate
      title='Actors Trending'
      actors={actors}
      action={actors}
    />
  );
};
export default ActorsPage;