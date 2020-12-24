// We can have spec.js or file suffixed with .test.js to be considered as test file
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

// test() and it() methods are pretty much the same
describe('Header component test suite', () => {
    
    let component;
    beforeEach(() => {
        // It runs before every single test
        component = setUp();
    });

    it('Header should renders without errors', () => {
        // We can move shallow logic in seperate function such as setUp to create component repeatly
        // To view component defination, we can do
        //console.log(component.debug());
        // This time instead of using classes, we will use data-testid(not fixed attribute as in @testing-library/react render)
        const headerBlock = component.find(`[data-testid="header"]`);
        expect(headerBlock.length).toBe(1);
    })

    it('Should render a logo on Header component', () => {
        const img = component.find(`[data-testid="logo"]`);
        expect(img.length).toBe(1);
    })
});