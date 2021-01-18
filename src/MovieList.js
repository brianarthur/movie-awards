import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addNomination, removeNomination } from './store/actions';


import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { red } from '@material-ui/core/colors';


import DATA from './api.json';
import IRONMAN from './iron-man.json';
import MovieCard from './MovieCard';

const MovieList = ({ data, addNomination, removeNomination, nominated = false, page = 0 }) => {
    const [nominations, setNominations] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedDetails, setSelectedDetails] = useState({});

    useEffect(() => {
        setSelectedDetails(IRONMAN);
    }, []);

    const handleExpandCard = movie => {
        if (expanded) {
            setExpanded(false);
            setSelectedMovie(null);
        } else {
            setExpanded(true);
            setSelectedMovie(movie);
        }
    };

    const pageData = data.slice(page * 3, page * 3 + 3);
    const gridFiller = [];

    for (let i = 3; i > pageData.length; i--) {
        gridFiller.push(<Grid item xs={4}></Grid>);
    }

    return (
        <>
            {!expanded &&
                <Grid container spacing={3}>
                    {pageData.map(movie => {
                        return (
                            <Grid item xs={4}>
                                <MovieCard movie={movie} nominated={nominated} expanded={expanded} handleExpandCard={handleExpandCard} />
                            </Grid>
                        );
                    })}
                    {gridFiller}
                </Grid>
            }
            {expanded &&
                <MovieCard movie={selectedMovie} movieDetails={selectedDetails} nominated={nominated} expanded={expanded} handleExpandCard={handleExpandCard} />
            }
        </>
    );
}

const mapDispatchToProps = { addNomination, removeNomination };

export default connect(null, mapDispatchToProps)(MovieList);