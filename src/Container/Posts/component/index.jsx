import { Component } from "react";

class PostComponent extends Component{
// Initailize state 
 
constructor(){
    super(props);
    this.state={
        title:"",
        body:"",
        isError:false
    }
    autoBind(this)

}

handleChange(field,value){    
    this.setState({
        [field]:value,
        isError:false
    })
}

handleClick(){

  this.props.submitAction({      // pass data
      title,
      body
  })

  this.setState({   // reset
      title:"",
      body:"",
  });


}



    render(){

        const {title, body}=this.state;


        return(
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
           </div>
        )
    }
}
export default PostComponent;