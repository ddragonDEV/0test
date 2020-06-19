import filterLookginFor from './Comparer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({adapter: new Adapter()});

test('should pass the test without crashing', () => {
    const list =[
        {name:"Servipag 1"},
        {name:"Servipag 2"},
        {name:"Clínica 1"},
        {name:"Notaría de la esquina"},
        {name:"LeftToRight"},
        {name:"thgiRoTtfeL"},];
    
    // if looking for have the same letters than a part of results
    expect(filterLookginFor(list,"Servipag",true).length).toEqual(2);
    // if looking for do not have any coincidence
    expect(filterLookginFor(list,"x",true).length).toEqual(0);
    // if looking for have the same letters than results not in order
    expect(filterLookginFor(list,"pagservi",true).length).toEqual(2);
    //if looking for have the same letters than results but have missing letters between
    expect(filterLookginFor(list,"tría",true).length).toEqual(1);
    // exact coincidence
    expect(filterLookginFor(list,"LeftToRight",true).length).toEqual(1);
    // if looking for have the same letters but 1 different
    expect(filterLookginFor(list,"LeftToRixth",true).length).toEqual(2);
    // if looking for have the same letters but 2 differents
    expect(filterLookginFor(list,"LeftToRixyth",true).length).toEqual(0);
    // if looking for have special characters
    expect(filterLookginFor(list,"NÓtárÌÁ",true).length).toEqual(1);
    // if looking for have spaces between letters
    expect(filterLookginFor(list,"n    o t a r   i a ",true).length).toEqual(1);
    // if looking for have words withot space between
    expect(filterLookginFor(list,"Notariadelaesquina",true).length).toEqual(1);
    // if looking for have words with spaces inside
    expect(filterLookginFor(list,"Not     ariad elaesq uina",true).length).toEqual(1);
});