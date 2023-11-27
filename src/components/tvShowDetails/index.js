import React, { useState } from 'react';
import { Button, Collapse, CardContent } from '@mui/material';

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';

const TvShowDetails = ({ show}) => {
    const [overview, setShowOverview] = useState(false);
    if (!show) {
        return <div>Error with person or movies</div>;
    }
    console.log("show3:", show)
    const handleShowOverview = () => {
        setShowOverview(!overview);
    };

    if (!show.id) {
        return <div>not array</div>; // or handle the case where known_for is undefined or not an array
    }


    return (
        <>
            <CardContent>
            <Typography component="h1" align="center"><h1>{show.name}</h1></Typography>
                <Typography component="h1" align="center">Air Date: {show.first_air_date}</Typography>
            </CardContent>
            <CardContent>
                <Button onClick={handleShowOverview} variant="outlined" style={{ marginTop: '16px' }}>
                    Show Overview
                </Button>

                <Collapse in={overview}>
                    <div>
                        <Typography><h1>Overview</h1></Typography>
                        <Typography>{show.overview}</Typography>
                    </div>
                </Collapse>
            </CardContent>
        </>
    );
};
export default TvShowDetails;