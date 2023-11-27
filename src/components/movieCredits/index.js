import React from "react";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';

const MovieCreditsPage = ({ credits }) => {
    console.log("Movies credits prop:", credits)
    if (!credits || !credits.cast) {
        return null;
    }
    return (
        <Paper component="ul" style={{ maxWidth: '100vw', maxHeight: '500px', overflow: 'auto', padding: '10px', listStyleType: 'none', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {credits.cast.map((castMember) => (
                <li key={castMember.id} style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '8px' }}>
                        <strong>{castMember.name}</strong> as {castMember.character}
                    </div>
                    <Link to={`/actors/${castMember.id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${castMember.profile_path}`}
                        alt={castMember.name}
                        style={{ marginRight: '8px', width: '200px', height: '200px' }}
                    />
                    </Link>
                </li>
            ))}
        </Paper>
    );
};

export default MovieCreditsPage;