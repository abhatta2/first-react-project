import PostComponent from './component';
import { useLocation, useNavigate, useParams } from "react-router-dom";


const PostComponentRouter = () => {

   let getLocation= useLocation();
   let getNav= useNavigate();
   let getParam = useParams();

   return <PostComponent  history={getLocation} navigate={getNav} urlParam={getParam} />

}


export default PostComponentRouter;