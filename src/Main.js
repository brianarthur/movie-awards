import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import SearchResults from './SearchResults';
import Nominations from './Nominations';

import DATA from './api.json';
import IRONMAN from './iron-man.json';

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(DATA.Search);
    }, []);

    return (
        <Container>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <FormControl style={{margin: 16}}>
                <Input
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <CloseIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            </div>
            <hr />
            <SearchResults data={data} />
            <hr />
            <Nominations />
        </Container>
    );
}

export default Main;