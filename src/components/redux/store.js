import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middlewares = [ReduxThunk];
const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddlewares(rootReducer);

export default store;