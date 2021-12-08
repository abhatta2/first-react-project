

import { Component } from 'react';
import UserComponent from './component/userform';
import PreviewComponent from './component/NewProject/previewComponent';
import autoBind from 'react-autobind';
import UserFormComponent from './component/NewProject/userFormComponent'
import UserListComp from './component/NewProject/userListComponent'
import "antd/dist/antd.css";




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

  previewForm(previewData = {}) {
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

  // add event handle function    2nd step 

 

  render() {
    const { previewData, previewVisibility,isSubmittedData ,userListData} = this.state;
    return (
      <div>
        < UserFormComponent //submitAction={this.saveUserDataAction}
       
        // submitAction={this.previewForm} 
        submitdataAction={this.saveUserDataAction}  // use thist call method
         isSubmittedData={isSubmittedData}  //  3rd step
         
        />     
        < UserListComp passData={userListData}  //pass data to component
          previewVisibility={this.previewForm} 
        />
       
        {previewVisibility &&
          < PreviewComponent
            previewDetails={previewData} 
            modalVisibility={this.state.previewForm}
            // pass dtata
            
         />
        }

      </div>
    );

  }

}


export default App;
