import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterActorsCard";
import TvShowList from "../tvShowList";
import Grid from "@mui/material/Grid";

function TvShowListPageTemplate({ tvShows, title, action }) {
    const [nameFilter, setNameFilter] = useState("");

    if (!Array.isArray(tvShows)) {
        return <div>Error: invalid actors data</div>
    }
    let displayedTvShows = tvShows
        .filter((show) => {
            return show.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })


    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setNameFilter(value);
    };
    return (
        <Grid container sx={{ padding: '20px' }}>
            <Grid item xs={12}>
                <Header title={title} />
            </Grid>
            <TvShowList action={action} tvShows={tvShows}></TvShowList>
        </Grid>
    );
}
export default TvShowListPageTemplate;