import PostComponent from './component';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import {getPostDataList,resetPostData} from './action';

const PostComponentRouter = (props) => {

   let getLocation= useLocation();
   let getNav= useNavigate();
   let getParam = useParams();

   return <PostComponent  
   history={getLocation} 
   navigate={getNav} 
   urlParam={getParam} 
   {...props}



   />


}
const mapStateToProps=({post})=>({
  //return state
  PostDataList: post.PostDataList,
  isFetched: post.isFetched,
})

const mapDispatchToPros= {
   //paas all action method 
   getPostDataList,
   resetPostData
}





export default connect(mapStateToProps,mapDispatchToPros) (PostComponentRouter);