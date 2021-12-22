import {Component} from 'react';
import { getPostById } from '../../Posts/Api'
import autoBind from "react-autobind";


class PostDetailComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          body: "",
        }
        autoBind(this);
      
    }

    componentDidMount() {
       // console.log(this.props.urlParam.id);
        if (this.props.urlParam && this.props.urlParam.id) {
          this.postDeatilAction(this.props.urlParam.id)
        }
      }

      async postDeatilAction(postId){
          const getData= await getPostById(postId);
          if(getData){
        this.setState({
            title:getData.title,

            body:getData.body,
        })
    }

      }

render(){
    const{
        title,body
            
       
    }=this.state;
    return(
        <div>

            
            <h1>{title}</h1>
            <p>{body}</p>

        </div>
    )
}


}
export default PostDetailComponent ;