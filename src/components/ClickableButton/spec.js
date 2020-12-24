import React from 'react';
import Button from './Button';
import {shallow} from 'enzyme';

describe('Testing Button Component', () => {
    let mockEvent;
    beforeEach(() => {
        mockEvent = jest.fn();
    });
    it('Testing click event', () => {
        const component = shallow(<Button onClick={mockEvent}>Get Posts</Button>);
        const button = component.find(`[data-testid="button"]`);
        button.simulate('click');
        const callback = mockEvent.mock.calls.length;
        expect(callback).toBe(1);
    })
});