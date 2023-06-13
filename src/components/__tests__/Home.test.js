import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import fs from 'fs';
import Home from '../Home.jsx';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  it('should exist', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('style.css file', () => {
  it('should exist', () => {
    expect(fs.existsSync('public/style.css')).toBe(true);
  });
});