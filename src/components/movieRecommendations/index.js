import React from "react";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';

const MovieRecommendationsPage = ({ movies }) => {
    console.log("Movies prop:", movies)
    if (!movies || !Array.isArray(movies)) {
        return <div>Error with recommendations</div>;
    }
    return (
        <Paper component="ul" style={{ maxWidth: '100vw', maxHeight: '500px', overflow: 'auto', padding: '10px', listStyleType: 'none', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
            <li key={movie.id} style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to={`/movies/${movie.id}`}>
                    <div style={{ marginBottom: '8px' }}>
                        <strong>{movie.title}</strong>
                    </div>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                        alt={movie.title}
                        style={{ marginRight: '8px', width: '200px', height: '200px' }}
                    />
                </Link>
            </li>
        ))}
    </Paper>
    );
};

export default MovieRecommendationsPage;