import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
    const component = shallow(<Headline />);
    return component;
}

describe('Testing Headline Component', () => {
    let componentWithCorrectProps, componentWithInCorrectProps;
    describe('Healine component with correct props', () => {
        beforeEach(() => {
            componentWithCorrectProps = setUp({
                headline:'Testing Headline',
                description:'Testing description',
                tempAr:[{
                    name:'Test',
                    city:'Delhi',
                    isOnline:true
                }]
            });
        });

        it('Component renders correctly with correct props', () => {
            const expectedProps = {
                headline:'Testing Headline',
                description:'Testing description',
                tempAr:[{
                    name:'Test',
                    city:'Delhi',
                    isOnline:true
                }]
            };

            const propsError = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name);
            expect(propsError).toBeUndefined();
        })
    })
    describe('Healine component with incorrect props', () => {
        // Just to show how we can use describe for different scenarios. However we may not required it for props case
        beforeEach(() => {
            componentWithCorrectProps = setUp({
                headline:'Testing Headline',
                description:'Testing description',
                tempAr:[{
                    name:'Test',
                    city:'Delhi',
                    isOnline:'true'
                }]
            });
        });
    })
});