import React,{Component} from 'react';
import Office from './Office'
import './styles.css';
import Grid from '@material-ui/core/Grid';
import minutesToTime from '../../logic/Format.js'
import store from '../../store'
import filterLookginFor from '../../logic/Comparer'

class Main extends Component{
    constructor(){
        super();
        this.state = {
            error: null,
            isLoaded: false,
            offices: [],
            filterName: store.getState().filterName.toLowerCase(),
        };
    }
    
    getData = offices => {
        store.subscribe(() => {
            ;
            this.setState({
               filterName:store.getState().filterName,
            });
        });
        var data =[];
        
        for(var i=0; i < offices.length; i++){

            var office = offices[i];
            var name = office.name;
            var online = office.online;
            var elapsed = 0;
            var lines = office.lines;
            var waiting = 0;
            var elapsedSum = 0;
            var count = 0;

            Object.entries(lines).forEach(entry => {
                let line = entry[1];
                elapsedSum = elapsedSum + line.elapsed;
                waiting = waiting + line.waiting;
                count = count+1;
            });

            elapsed = elapsedSum/count;

            var item = {
                elapsedTime: minutesToTime(elapsed),
                peopleWaiting: waiting,
                name: name,
                class: online?"online":"offline"
            }

            data.push(item);
        }
        return data;
    }

    componentDidMount() {
        fetch("https://boiling-mountain-49639.herokuapp.com/desafio-frontend")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                offices: this.getData(result)
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }
    
    render(){
        const{offices} = this.state;
        
        return (
            <div className="offices">
                <Grid container spacing={0}>
                    {filterLookginFor(offices,this.state.filterName,this.state.isLoaded).map(office => (
                        <Grid key={office.name.toString()} item xs={12} sm={6} md={4} lg={3}>
                            <Office  office={office}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    };
}

export default Main;