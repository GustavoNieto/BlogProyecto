import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    //El codigo 13 sirve para que nose vea la cosa verde en redux
    //El codigo 15 sirve para que este activo y se vea la cosa verde de redux
    // applyMiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;