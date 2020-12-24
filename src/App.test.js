import App from './App';
import {shallow} from 'enzyme';
import React from 'react';
import store from './components/redux/store';
// Note App component is using redux provider, there is ContextProvider wrapping over it. To get App Component
// To pass store to props, we can pass props to App Component
// we have to use childAt(0) to get component
// But childAt just gives decoration, not component, so to get it we have to use dive method
// In my case it is not required but Simple Tut Author required it. Edit: It is required for component where connect is used
describe('Testing App Component', () => {
    it('Rendering App Component', () => {
        //const component = shallow(<App store={store} />).childAt(0).dive();
        const component = shallow(<App store={store} />);
        console.log(component.debug());
        const appDiv = component.find(`[data-testid="app-component"]`);
        expect(appDiv.length).toBe(1);
    })
});
