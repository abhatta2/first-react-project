import {combineReducers} from 'redux';  // 2ns step
import app from '../Container/App/reducer';
import user from '../Container/User/reducer';
import post from '../Container/Posts/reducer'

    export const rootReducer = combineReducers({
        app,
        user,
        post,
    });

    