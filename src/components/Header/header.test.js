// We can have spec.js or file suffixed with .test.js to be considered as test file
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

// test() and it() methods are pretty much the same
describe('Header component test suite', () => {
    it('Header should renders without errors', () => {
        // We can move shallow logic in seperate function such as setUp to create component repeatly
        const component = shallow(<Header />);
        // To view component defination, we can do
        console.log(component.debug());
        const headerBlock = component.find('.header-component');
        expect(headerBlock.length).toBe(1);
    })

    it('Should render a logo on Header component', () => {
        const component = shallow(<Header />);
        const img = component.find('.logo-img');
        expect(img.length).toBe(1);
    })
});