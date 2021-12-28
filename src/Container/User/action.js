export const fetchUserData =(data)=>({
    type:"Get_User_DataList",
    data

});

export const resetFetch = ()=>({
    type:"Reset_Fetch",
});


export const updateUserData= (updateByID) =>({
    type:"Update_User_Data",
    updateByID
});

export const updateReset= () =>({
    type:"Reset_Update_Message",
    
});


export const deleteData=(userId)=>({
    type:"Delete_User",
    userId

});

export const resetDelete=()=>({
    type:"Reset_delete_Message"
});


