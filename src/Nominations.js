import React, { useState } from 'react';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import MovieList from './MovieList';


const Nominations = ({ nominations }) => {
    const [page, setPage] = useState(0);

    const backClick = () => {
        let p = page - 1;
        if (p < 0) p = Math.ceil(nominations.length / 3) - 1;
        setPage(p);
    }

    const nextClick = () => {
        let p = page + 1;
        if (p >= Math.ceil(nominations.length / 3)) p = 0;
        setPage(p);
    }

    return (
        <>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4">Nominations</Typography>
                { nominations.length > 3 &&
                    <div>
                        <IconButton onClick={backClick}><ChevronLeftIcon /></IconButton>
                        <IconButton onClick={nextClick}><ChevronRightIcon /></IconButton>
                    </div>
                }
            </div>
            {nominations.length === 0 && 
                <Typography variant="body">Currently no nominations. Start searching to get started.</Typography>
            }
            <MovieList data={nominations} nominated={true} page={page} />
        </>
    );
    
}

const mapStateToProps = ({ nominations }) => {
    return {
        nominations,
    }
}

export default connect(mapStateToProps)(Nominations);
