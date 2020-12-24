import React from 'react';
import moxios from 'moxios';
import store from '../redux/store';
import {getPostActionCreator} from '../redux/actions/postsActionCreator';
import Posts from '.';
import {shallow} from 'enzyme';

describe('Testing Posts Component', () => {
    beforeEach(() => {
        moxios.install();
    });

    it('Posts is updated correctly', () => {
        const expectedPosts = [{
            id:1,
            title:'Mocking Axios Post Response'
        }];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedPosts
            });
        });

        return store.dispatch(getPostActionCreator()).then(() => {
            const updatedStore = store.getState();
            expect(updatedStore.posts).toEqual(expectedPosts);
        }, () => {
            const error = 'Error in API';
            expect(error).toBe('');
        });
    });

    it('Testing the state update', () => {
        // Note here childAt and dive is used as here connect is used on component
        const component = shallow(<Posts store={store} />).childAt(0).dive();
        const postClassInstance = component.instance();
        postClassInstance.updatePostBtnMsg('Test Msg');
        const updatedState = postClassInstance.state.postBtnMsg;
        expect(updatedState).toBe('Test Msg');  
    })
    
    afterEach(() => {
        moxios.uninstall();
    });
});