import React,{Component} from 'react'
import path from '../../assets/searchIcon.png'
import Icon from '../Common/Icon'
import './styles.css';

class SearchBox extends Component {
    
    constructor(props){
        super(props); 
    }

    dontReload = function (e) {
      e.preventDefault();
      return true;
    }

    handleInputChange(event) {
      this.setState({
        query: event.target.value
      });
      // Use the store two communicate with other components and sets filterName value 
      this.props.setFilter(event.target.value);
    }
   
    render() {
        return (
          <div className="search-box">
            <Icon path={path}/>
                <input
                type='text'
                size='45'
                onSubmit = {this.dontReload}
                onChange={this.handleInputChange.bind(this)}
                placeholder='Buscar sucursal'
                />
          </div>
        )
    }
}

export default SearchBox;