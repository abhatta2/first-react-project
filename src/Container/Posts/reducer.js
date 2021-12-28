const initialState = {
    PostDataList:[],
    isFetched: false,
}


const post = (state = initialState, action) => {  // create conatct reducer method with state,action paramater
    switch (action.type) {
        case "POST_DATA_LIST": {
            return {
                // return state according to type 
                //and update state with action

                ...state,
                PostDataList:action.data,
                isFetched: true,


            }
        }

        case "RESET_POST_DATA_LIST":{
            return{
                ...state,
                isFetched: false,
            }
        }

        default: {
            return {
                ...state

            }
        }
    }
}

export default post;
