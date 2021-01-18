import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { search, clearSearch } from './store/actions';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import SearchResults from './SearchResults';
import Nominations from './Nominations';

import DATA from './api.json';

const Main = ({ searchValue, search, clearSearch }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(DATA.Search);
    }, []);

    return (
        <Container>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <FormControl style={{margin: 16}}>
                <TextField
                    value={searchValue}
                    placeholder="Movie search"
                    onChange={(e) => search(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <>
                                {searchValue &&
                                    <InputAdornment position="end">
                                        <IconButton onClick={clearSearch}>
                                            <CloseIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                {!searchValue && null}
                            </>
                        )
                    }}
                />
            </FormControl>
            </div>
            <SearchResults data={data} />
            <Nominations />
        </Container>
    );
}

const mapStateToProps = ({ searchValue }) => {
    return {
        searchValue
    }
}

const mapDispatchToProps = { search, clearSearch };

export default connect(mapStateToProps, mapDispatchToProps)(Main);