import {createStore} from 'redux'; 
import {rootReducer} from '../Reducer';


export default function configureStore(initialState={}){  // first step
    const store= createStore(
        rootReducer,
        initialState,
       
    );
    return store;
}