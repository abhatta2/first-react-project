import {createStore, compose} from 'redux'; 
import {rootReducer} from '../Reducer';


export default function configureStore(initialState={}){ 
    
    const composeEnhancers = typeof window === 'object' &&
        window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
        ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
        : compose;  
         // first step
    const store= createStore(


        rootReducer,
        initialState,
        composeEnhancers(),
       
    );
    return store;
}