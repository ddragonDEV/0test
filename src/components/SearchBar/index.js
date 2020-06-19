import React from 'react'
import './styles.css';
import Grid from '@material-ui/core/Grid';
import SearchBoxContainer from '../../containers/SearchBoxContainer';

const SearchBar = ({setFilter}) =>{
    return(
        <div className="container-search-bar">
            <div className="search-bar">
                <Grid container spacing={0}>      
                    <div className="grid-item">
                        <SearchBoxContainer setFilter={setFilter} />
                    </div>
                    <Grid item lg={2}>
                        <div />
                    </Grid>
                    <Grid item lg={5}>
                        <div />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};


export default SearchBar;