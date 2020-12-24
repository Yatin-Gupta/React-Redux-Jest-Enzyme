import axios from 'axios';
export function getPostActionCreator() {
    return async (dispatch) => {
        // Must to use await, otherwise test case will resolve this GET request
        // in promise asynchronously and expected result will not be correct
        await axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            dispatch({
                type:'GET_POSTS',
                payload:response.data
            });    
        });
    }
}