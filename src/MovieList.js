import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';

import DATA from './api.json';
import IRONMAN from './iron-man.json';
import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 300,
        display: "flex",
        margin: "auto",
    },
    expandCard: {
        maxWidth: 1000,
    },
    media: {
        objectFit: "unset",
    },
    expand: {
        //width: "100%",
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(-90deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const MovieList = ({ data, page = 0 }) => {
    const classes = useStyles();
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

    console.log(data);

    const pageData = data.slice(page * 3, page * 3 + 3);
    const gridFiller = [];

    for (let i = 3; i > pageData.length; i--) {
        gridFiller.push(<Grid item xs={4}></Grid>);
    }

    return (
        <>
            {!expanded &&
                <Grid container spacing={3}>
                    {pageData.map(movie => (
                        <Grid item xs={4}>
                            <MovieCard movie={movie} expanded={expanded} handleExpandCard={handleExpandCard} />
                        </Grid>
                    ))}
                    {gridFiller}
                </Grid>
            }
            {expanded &&
                <MovieCard movie={selectedMovie} movieDetails={selectedDetails} expanded={expanded} handleExpandCard={handleExpandCard} />
            }
        </>
    );
}

export default MovieList;