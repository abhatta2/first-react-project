

import { Component } from 'react';
import UserComponent from './component/userform';
import PreviewComponent from './component/NewProject/previewComponent';
import autoBind from 'react-autobind';
import UserFormComponent from './component/NewProject/userFormComponent';
import UserListComp from './component/NewProject/userListComponent';
import "antd/dist/antd.css";
import {Button,Row} from 'antd';
 import {getUserList} from './Api';
 import { UserListCompTable } from './component/NewProject/UserListTableComp';




class App extends Component {
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
      userListData: [...userListData],
      isSubmittedData: true,
    })
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
        }))],
    });
  }

    
  }



getUserdatafromapi (){
  const datalistuser= getUserList(); // call method and store in varaible
datalistuser.map(list=>({...list}) )
}

  //savedata(data){
  //create variable to store prev state
    //variableName.push(data)
    
   // this.setState({
      //userListData:
   // })
  //}

  // add event handle function    2nd step 

 

  render() {
    const { previewData, previewVisibility,isSubmittedData ,userListData} = this.state;
    return (
      <div>
       
        <h1>Fetch data from Api Call</h1>
         
         <Button type="primary" style={{marginLeft:'10px'}} onClick={this.getUserdata}> Api Call</Button>
        <br></br>
        


        < UserFormComponent //submitAction={this.saveUserDataAction}
       
        // submitAction={this.previewForm} 
        submitdataAction={this.saveUserDataAction}  // use thist call method
         isSubmittedData={isSubmittedData} 
         resetSubmitedData={this.resetSubmitteddata} //  3rd step
         
        />     
        < UserListComp passData={userListData}  //pass data to component
          previewVisibility={this.previewForm} 
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

      </div>
    );

  }

}


export default App;
