import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setFilter from '../actions'
import SearchBox from '../components/SearchBar/SearchBox'

//SearchBoxContainer connects SearchBox representational Component with store
class SearchBoxContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <SearchBox setFilter={this.props.setFilter}/>
        );
    }
}
SearchBoxContainer.propTypes = {
    setFilter: PropTypes.func.isRequired,
}
  
const mapDispatchToPropsActions = dispatch => () => (
    {
        setFilter: value => dispatch(setFilter(value))
    }
);
  
export default connect(null, mapDispatchToPropsActions)(SearchBoxContainer);