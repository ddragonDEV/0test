import React,{Component} from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Main from './components/Main'
import './App.css';
import setFilter from './actions'


class App extends Component{

  render(){
    return (
      <div className="App">
        <Header className="header"/>
        <SearchBar setFilter={setFilter}/>
        <Main className="mainContent"/>
      </div>
    )
  }
}

export default App;