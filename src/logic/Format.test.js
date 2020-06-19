import minutesToTime from './Format';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { minHeight } from '@material-ui/system';
configure({adapter: new Adapter()});

test('should pass the test without crashing', () => {
    const testTime1 = 120;
    const testTime2 = 121.7;
    const testTime3 = 0.1;
    const testTime4 = 1;
    const testTime5 = 182;
    expect(minutesToTime(testTime1)).toEqual("2 h");
    expect(minutesToTime(testTime5)).toEqual("3:02:00");
    expect(minutesToTime(testTime2)).toEqual("2:01:42");
    expect(minutesToTime(testTime3)).toEqual("6 s");
    expect(minutesToTime(testTime4)).toEqual("1 m");
  });