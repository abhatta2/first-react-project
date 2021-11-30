

import { Component } from 'react';
import UserComponent from './component/userform';
import PreviewComponent from './component/previewform';
import autoBind from 'react-autobind';
import UserFunctionComp from './functionalComponent/userfunctionalComponent'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewData: null,
      previewvisibility: false,
    }
    autoBind(this);
  }

  priviewform(previewData = null) {
    this.setState({
      previewData,
      previewvisibility: !this.state.previewvisibility,
    }) 
  }

  render() {
    const { previewData, previewvisibility } = this.state;
    return (
      <div>
        < UserFunctionComp
        //  submitAction={this.priviewform}
        />
    {previewvisibility &&
          <PreviewComponent
            prevData={previewData}
            modalVisibility={this.priviewform}
          />
        }
      </div>
    );

  }

}


export default App;
