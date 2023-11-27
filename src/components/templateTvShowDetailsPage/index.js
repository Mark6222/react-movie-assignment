import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTvShowImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateTvShowDetailsPage = ({ show, children }) => {

    const { data, error, isLoading, isError } = useQuery(
        ["images", { id: show.id }],
        getTvShowImages

    );

    if (!show) {
        return <div>Error with movies</div>;
    }

    if (!show || !show.id) {
        return <h1>No information available for this person.</h1>;
    }

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const images = data.posters

    return (
        <>
            <MovieHeader movie={show} />
            <Grid container spacing={5} sx={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}>
                        <ImageList
                            cols={1}>
                            {images.map((image) => (
                                <ImageListItem key={image.file_path} cols={1}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                        alt={image.file_path}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateTvShowDetailsPage;