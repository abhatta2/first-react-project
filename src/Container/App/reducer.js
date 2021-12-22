import { act } from "react-dom/test-utils"

const initialState= {
    appName: "react",
    appName2:"react-2"
}

const app= (state= initialState,action) => {
    switch(action.type){
        case "Test_Action":{
            return { ...state, appName: action.data}
        }
        default:{
            return {...state , }   //which to update as 2nd parameter
        }
    }
}
export default app