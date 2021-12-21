import urls from "../../urls";

export const getUserList= ()=>
   fetch(urls.getUserList).
   then (response=>response.json()).
   catch(error=>console.log(error));