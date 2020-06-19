import SearchBoxContainer from './SearchBoxContainer';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

test('should render without crashing', () => {
    const setFilter = () =>{ 
    };
    const store = {
        getState: ()=>{}, 
    };
    shallow(<SearchBoxContainer store={store} setFilter={setFilter} />);
});