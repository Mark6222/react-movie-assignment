import React from "react";
import Show from "../tvShowCard";
import Grid from "@mui/material/Grid";

const TvShowList = ({ tvShows, action }) => {
    console.log("tv shows2: ", tvShows)
    if (!Array.isArray(tvShows)) {
        return <div>Error: invalid actors data {tvShows}</div>
    }
    let showCards = tvShows.map((tvShow) => (
        <Grid key={tvShow.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Show key={tvShow.id} show={tvShow} action={action} />
        </Grid>
    ));
    return showCards;
};

export default TvShowList;