import React from "react";
import Actor from "../ActorCard";
import Grid from "@mui/material/Grid";

const ActorList = ( {actors, action }) => {
  let actorCards = actors.map((actor) => (
    <Grid key={actor.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={actor.id} actor={actor} action={action} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;