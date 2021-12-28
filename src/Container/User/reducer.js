

const initialState={
    userListData:[],
    isFetched:false,
    isUpdated:false,
    deleteSucceeded:false,
}

// pass state and actiontype in reducer

const user =(state=initialState,action)=>{
    switch(action.type){
        case "Get_User_DataList":{
            return {
                ...state,
                userListData: [...action.data.map(list => ({
                    ...list,
                    userAddress: list.address && list.address.city,
                    userCompany: list.company && list.company.name,
                }))],
               isFetched: true
            }
        }

        case "Reset_Fetch":{
            return{
                ...state,
                isFetched:false,
            }
        }

      case "Update_User_Data":{
          let updatedData=[...state.userListData];
         let getUserIndex=updatedData.findIndex(list=>list.id===action.updateByID.id);
         updatedData[getUserIndex]=action.updateByID;
         return{
              ...state,
              userListData:[...updatedData],
              isUpdated:true
          }
      }

      case "Reset_Update_Message":{
        return{
            ...state,
            isUpdated:false
        }
    }



        case "Delete_User":{
            let finalList=[...state.userListData];
            finalList=finalList.filter(list=>list.id !== action.userId)
            return{
                ...state,
                userListData:[...finalList],
                deleteSucceeded:true,

            }
        }

        case "Reset_delete_Message":{
            return{
                ...state,
                deleteSucceeded:false
            }
        }


            default:{
                return { ...state}
            }

        }
    }

export default user
