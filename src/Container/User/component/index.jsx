import { Component } from 'react';
import autoBind from 'react-autobind';
import "antd/dist/antd.css";
import { Button, Row, message } from 'antd';
import UserListComponent from './UserListsComponent';
import { getUserList } from '../Api';
import AddUserComponent from './UserFuncComponent';
import PreviewComponent from '..//../Common/previewComponent'
import './style.scss';
import UserEditComponent from '../../Common/userEdit';



class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //add global variable to use in other component   1st step
      previewData: null,
      previewVisibility: false,
      // userListData: [],
    //  isSubmittedData: false,
     selectedData:null,
     userEditVisibility:false,
    }
    autoBind(this);
  }

  componentDidUpdate(prevProps) {

    if (this.props.isFetched !== prevProps.isFetched &&
      this.props.isFetched) {
      this.props.resetFetch();
      message.success("User date fetch successful");
      

    }

    if(this.props.isUpdated !== prevProps.isUpdated && 
      this.props.isUpdated){
        message.success("user Data updated");
        this.props.updateReset();
        this.userDataEditAction();
      }
    

    if (this.props.deleteSucceeded !== prevProps.deleteSucceeded &&
      this.props.deleteSucceeded) {
      message.success("User data deleted.");
      this.props.resetDelete();
    }
  }

  previewForm(previewData = null) {
    this.setState({
      previewData,
      previewVisibility: !this.state.previewVisibility,
    })
  }
  //Redux implementation
  async getUserdata() {
    const getData = await getUserList();
    if (getData && getData.length > 0) {
      this.props.fetchUserData(getData);

    }
   
}



userDataEditAction(selectedData= null){
  this.setState({
    selectedData,
    userEditVisibility: selectedData ? true : false,
  })
}

handleEditChange(key,value){
  this.setState({
    selectedData:{
      ...this.state.selectedData,
      [key]:value,
    }
  })
}

updateSelectedData(){
  this.props.updateUserData(this.state.selectedData);


}
  deleteDataFromTable(userId) {
    this.props.deleteData(userId);

  }

  saveUserDataAction(userData) {
    const userListData = [...this.state.userListData]
    userListData.push(userData);
    this.setState({
      userListData: [...userListData]
    });
  }

  resetSubmitteddata() {
    this.setState({
      isSubmittedData: false,
    });
  }

  previewVisibilityAction(previewData = {}) {
    this.setState({
      previewData,
      previewVisibility: !this.state.previewVisibility,
    })
  }

  render() {
     const { previewData, previewVisibility, isSubmittedData, userEditVisibility } = this.state;
    return (
      <div className="User-container" >
        <div className="userPage">
          <h1>Fetch data from Api Call</h1>
        </div>
        <Button type="primary" style={{ marginLeft: '10px' }} onClick={this.getUserdata}> Api Call</Button>
        <br />
        <Button type="primary" style={{ marginTop: '20px' }} onClick={() => this.props.takeAction("HI this is update")}> State update</Button>

        <label> State Update :{this.props.appName}</label>

        <div style={{ paddingTop: '20px' }}>
          <h1>Add User Detail Form </h1>
        </div>


        <AddUserComponent
          submitAction={this.saveUserDataAction}
        />

        {/*< UserFormComponent //submitAction={this.saveUserDataAction}
       
        submitAction={this.previewForm} 
        submitdataAction={this.saveUserDataAction}  // use thist call method
         isSubmittedData={isSubmittedData} 
         resetSubmitedData={this.resetSubmitteddata} 
         addUserData={this.addUserData}//  3rd step
         
        />      
        < UserListComponent passData={userListData}  //pass data to component
          previewVisibility={this.previewForm} 
          previewVisibilityAction={this.previewVisibilityAction}
          userdatadeleteAction={this.deleteDataFromTable}

        />*/}


        < UserListComponent passData={this.props.userListData}  //pass data to component
          previewVisibility={this.previewForm}
          editUserListAction={this.userDataEditAction}
          previewVisibilityAction={this.previewVisibilityAction}
          userdatadeleteAction={this.deleteDataFromTable}

        />

        {previewVisibility &&
          < PreviewComponent
            previewDetails={previewData}
            modalVisibility={this.previewForm}
          // pass dtata

          />
        }


        {userEditVisibility &&
        < UserEditComponent  
        userData={this.state.selectedData}
        submitAction={this.updateSelectedData}
        handleChange={this.handleEditChange}
        modalVisibility={this.userDataEditAction}
        />
        }
      </div>
    );

  }

}


export default UserComponent;
