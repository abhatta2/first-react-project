 // 1st step creating index file for router

 //const PostDetailRouter= ()=>{
     //uselocation, useNavgate, useParams  hooks

import PostDetailComponent from "./Component";
import { useLocation, useNavigate, useParams } from "react-router-dom";



const PostDetailComponentWithRouter=()=>{
   let getLocation= useLocation();
    let getNav=useNavigate();
    let getParam=useParams();
    

    return < PostDetailComponent history={getLocation} navigate={getNav} urlParam={getParam} />

}
export default PostDetailComponentWithRouter;

 

