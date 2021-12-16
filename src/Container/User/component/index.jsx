import { Component } from 'react';
import autoBind from 'react-autobind';
import "antd/dist/antd.css";
import {Button,Row} from 'antd';
import { UserListComponent } from './UserLists'


class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {       
      //add global variable to use in other component   1st step
      previewData: null,
      previewVisibility: false,
      userListData: [],
      isSubmittedData:false,
    }
    autoBind(this);
  }

  previewForm(previewData = null) {
    this.setState({
      previewData,
      previewVisibility: !this.state.previewVisibility,
    }) 
  }

  saveUserDataAction(userData) {
    const userListData = [...this.state.userListData]
    userListData.push(userData);
     this.setState({
        userListData:[...userListData]
      
  });
  }

  resetSubmitteddata(){
    this.setState({

    
      isSubmittedData: false,


    });
  }

  previewVisibilityAction(previewData ={}){
    this.setState({
      previewData,
      previewVisibility: !this.state.previewVisibility,
    })
  }

 

  deleteDataFromTable(userId){     // usefilter methid to  delete by using id
     let updatedList = [...this.state.userListData] ;
     updatedList= updatedList.filter(list=> list.id !== userId);


    this.setState({

      userListData:[...updatedList]
    })


  }


  async getUserdata(){
    const getData = await getUserList();
     if (getData && getData.length > 0) {
       this.setState({
        userListData: [...getData.map(list => (
          {
          ...list,
         fullName: list.name,
         userCompany:list.company.name,
         userAddress:list.address.city
        }))],
    });
  }

    
  }



getUserdatafromapi (){
  const datalistuser= getUserList(); // call method and store in varaible
datalistuser.map(list=>({...list}) )
}
 // add event handle function    2nd step 

 

  render() {



    const { previewData, previewVisibility,isSubmittedData ,userListData} = this.state;
    return (
      <div className="app-container">
       
        <h1>Fetch data from Api Call</h1>
         
         <Button type="primary" style={{marginLeft:'10px'}} onClick={this.getUserdata}> Api Call</Button>
        <br></br>
        


         {/*< UserFormComponent //submitAction={this.saveUserDataAction}
       
        // submitAction={this.previewForm} 
        submitdataAction={this.saveUserDataAction}  // use thist call method
         isSubmittedData={isSubmittedData} 
         resetSubmitedData={this.resetSubmitteddata} 
         addUserData={this.addUserData}//  3rd step
         
        />      */}
        < UserListComponent passData={userListData}  //pass data to component
          previewVisibility={this.previewForm} 
          previewVisibilityAction={this.previewVisibilityAction}
          userdatadeleteAction={this.deleteDataFromTable}

        />
       
        { /* previewVisibility &&
          < PreviewComponent
            previewDetails={previewData} 
            modalVisibility={this.previewForm}
            // pass dtata
            
         /> 
        */}
      </div>
    );

  }

}


export default UserComponent;
