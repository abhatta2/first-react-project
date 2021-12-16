import { useLocation, useNavigate } from "react-router-dom"

const PostComponentRouter = ()=>{

   let getLocation= useLocation();
   let getNav= useNavigate();

   return < PostComponent history={getLocation} navigate={useNavigate}/>


}

export default PostComponentRouter;