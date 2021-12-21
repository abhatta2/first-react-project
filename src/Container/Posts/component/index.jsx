import { Component } from "react";
import { Row, Col, Button } from "antd";
import autoBind from "react-autobind";
import PostListComp from "./postList";
import { getPostList } from "../Api";


//import '../style.scss';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
     postInput:[],
      postList: [],
    }
    autoBind(this);
  }
  
  componentDidMount() {
    //console.log(this.props)
    this.getPostListAction();
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
  async getPostListAction() {
    const getData = await getPostList();
    if (getData && getData.length > 0) {
      this.setState({
        postList: [...getData]
      })
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
          <Col span={12}>
            <label className="user-label">Title </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={title} onChange={(event) => this.handleChange("title", event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">body </label>
          </Col>
          <Col span={12}>
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

        <Button  onClick={() => this.props.navigate('/')} > 
        Back To HomePage 
        </Button>
        <br />

        <h1> {this.state.title}</h1>
        <h2> {this.state.body}</h2>
        

        <br/>
        <PostListComp
          postList={postList}
          navigate={this.props.navigate}
        />
      </div>
    );
  }
}

export default UserComponent;