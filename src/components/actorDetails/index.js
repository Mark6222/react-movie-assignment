import React, { useState } from 'react';
import { Button, Collapse, CardContent } from '@mui/material';

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';

const ActorDetails = ({ person, credits }) => {
    const [biography, setShowBiography] = useState(false);
    if (!person || !credits) {
        return <div>Error with person or movies</div>;
    }
    const handleShowBiography = () => {
        setShowBiography(!biography);
    };

    if (!person.id) {
        return <div>not array</div>; // or handle the case where known_for is undefined or not an array
    }


    return (
        <>
            <CardContent>
                <Typography component="h1" align="center">age: {person.age}</Typography>
                <Typography component="h1" align="center">popularity: {person.popularity}</Typography>
                <Typography component="h1" align="center">Place of birth: {person.place_of_birth}</Typography>
            </CardContent>
            <CardContent>
                <Button onClick={handleShowBiography} variant="outlined" style={{ marginTop: '16px' }}>
                    Show Biography
                </Button>

                <Collapse in={biography}>
                    <div>
                        <Typography><h1>Biography</h1></Typography>
                        <Typography>{person.biography}</Typography>
                    </div>
                </Collapse>

                <Typography component="h3" align="center">
                    <h2>{person.name} Movies</h2>
                </Typography>

                <Paper component="ul" style={{ maxWidth: '100vw', maxHeight: '500px', overflow: 'auto', padding: '10px', listStyleType: 'none', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {credits.cast.map((movie) => (
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
            </CardContent>
        </>
    );
};
export default ActorDetails;