import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import MovieList from './MovieList';


const SearchResults = ({data, searchValue, searchResults}) => {
    console.log(searchResults);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setPage(0);
    }, [searchValue])

    const backClick = () => {
        let p = page - 1;
        if (p < 0) p = Math.ceil(searchResults.length / 3) - 1;
        setPage(p);
    }

    const nextClick = () => {
        let p = page + 1;
        if (p >= Math.ceil(searchResults.length / 3)) p = 0;
        setPage(p);
    }

    if (!searchValue) return null;

    return (
        <>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4">Search Results for "{searchValue}"</Typography>
                { searchResults && searchResults.length > 3 &&
                    <div>
                        <IconButton onClick={backClick}><ChevronLeftIcon /></IconButton>
                        <IconButton onClick={nextClick}><ChevronRightIcon /></IconButton>
                    </div>
                }
            </div>
            {!searchResults &&
                <Typography variant="body">Could not find any search results.</Typography>
            }
            {searchResults &&
                <MovieList data={searchResults} page={page} />
            }
        </>
    );
}

const mapStateToProps = ({ searchValue, searchResults }) => {
    return {
        searchValue, searchResults
    }
}

export default connect(mapStateToProps)(SearchResults);