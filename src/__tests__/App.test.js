import App from '../App';
import Home from '../components/Home';
import Enzyme from 'enzyme';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('should render without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
    });
});

describe('App', () => {
    it('should redirect to home page', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Route).props().path).toBe('/');
        expect(wrapper.find(Route).props().element.type).toBe(Home);
    });
});