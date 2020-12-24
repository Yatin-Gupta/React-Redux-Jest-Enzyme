const initialPostsState = [];
const postsReducer = (state = initialPostsState, action) => {
    switch(action.type) {
        case 'GET_POSTS': return [...action.payload];
        default: return state;
    }
};
export default postsReducer;