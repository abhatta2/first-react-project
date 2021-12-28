export const getPostDataList = (data) => ({
    type: "POST_DATA_LIST",
    data,
})

export const resetPostData= ()=> ({
    type: "RESET_POST_DATA_LIST",
});
