import Urls from "./urls/urls";

export const getUserList= ()=>{
   fetch(Urls.getUserList).
   then (response=>response.json()).
   catch(error=>console.log(error));


}