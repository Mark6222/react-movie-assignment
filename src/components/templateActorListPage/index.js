import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterActorsCard";
import ActorList from "../ActorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ actors, title, action }) {
    const [nameFilter, setNameFilter] = useState("");

    if (!Array.isArray(actors)) {
        return <div>Error: invalid actors data</div>
    }
    let displayedActors = actors
        .filter((actor) => {
            return actor.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
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
            <Grid item container spacing={5}>
                <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FilterCard
                        onUserInput={handleChange}
                        nameFilterFilter={nameFilter}
                    />
                </Grid>
                <ActorList action={action} actors={displayedActors}></ActorList>
            </Grid>
        </Grid>
    );
}
export default ActorListPageTemplate;