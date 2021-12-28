import { Component } from "react";
import { Row, Col, Button ,message} from "antd";
import autoBind from "react-autobind";
import PostListComp from "./postList";
import { getPostList } from "../Api";
import { Space, Card } from 'antd';


//import '../style.scss';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      postInput: [],
      postList: [],
    }
    autoBind(this);
  }

  componentDidMount() {
    //console.log(this.props)
    //  this.getPostListAction();    // call here to pass when page loads
  }


  handleClick() {
    const {
      title,
      body,
    } = this.state;
    this.props.submitAction({
      title,
      body,
    });
    this.setState({
      title: "",
      body: "",
    });
  }

  /*submitAction (submitInput){
   const getSubmitInput= [...this.submitInput];
    getSubmitInput.push(submitInput);
    this.setState({
      postInput:[...getSubmitInput]
    })

  }*/

  handleChange(field, value) {
    this.setState({
      [field]: value,
      isError: false,
    })
  }

componentDidUpdate(prevProps){
  if (this.props.isFetched !== prevProps.isFetched &&
    this.props.isFetched) 
    {
    this.props.resetPostData();
    message.success("Post List Data fetched Successfully.");
  }
}

  async getPostListAction() {
    const getData = await getPostList();
    if (getData && getData.length > 0) {
      this.props.getPostDataList(getData);
    }
  }
  render() {
    const {
      title,
      body,
      postList,
      navigate
    } = this.state;
    return (
      <div className="user-container">
        <Row gutter={[10, 10]}>
          <Col span={8}>
            <label className="user-label">Title </label>
          </Col>
          <Col span={16}>
            <input className="user-input" type="text" value={title} onChange={(event) => this.handleChange("title", event.target.value)} />
          </Col>
          <Col span={8}>
            <label className="user-label">body </label>
          </Col>
          <Col span={16}>
            <input className="user-input" type="text" value={body} onChange={(event) => this.handleChange("body", event.target.value)} />
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              onClick={this.handleClick}
            >
              Submit
            </Button>
          </Col>
        </Row>
        <br />


        <div style={{ paddingTop: '10px' }}>
          <Button onClick={() => this.props.navigate('/')} >
            Back To HomePage
        </Button>
        </div>

        { /*/ by default it is 24 */}


        <Row gutter={24}>
          < Col span={6}> column 1</Col>
          < Col span={6}> column 2</Col>
          < Col span={6}> column 3</Col>
          < Col span={6}> column 4</Col>



        </Row>
        <br />

        <h1> {this.state.title}</h1>
        <h2> {this.state.body}</h2>

      <div style={{paddingBottom:'10px'}}> 
        <Button
          type="primary" 
          onClick={this.getPostListAction}
        >
          Call Post list form API
            </Button>
            </div>

        <br />
        <PostListComp
          //postList={postList} 
          postList={this.props.PostDataList}
          navigate={this.props.navigate}
        />
      </div>
    );
  }
}

export default UserComponent;