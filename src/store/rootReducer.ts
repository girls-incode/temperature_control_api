import { combineReducers } from 'redux';
import loginReducer from '../components/login/reducer';
import clientReducer from './../client/reducer';
import sensorsReducer from '../components/sensors/reducer';

const rootReducer = combineReducers({
    clientReducer,
    loginReducer,
    sensorsReducer
});

export default rootReducer;