

import { Component } from 'react';
import UserComponent from './component/userform';
import PreviewComponent from './component/previewform';
import autoBind from 'react-autobind';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevData: null,
      previewvisibility: false,
    }
    autoBind(this);
  }

  previewvisibility(prevData = null) {
    this.setState({
      prevData,
      previewvisibility: !this.state.previewvisibility,
    }, () => {
      console.log("Updated state in app.js");
      console.log(this.state.prevData);
      console.log(this.state.previewvisibility);
    })
  }

  render() {
    const { prevData, previewvisibility } = this.state;
    return (
      <div>
        <UserComponent
          submitAction={this.previewvisibility}
        />
        {previewvisibility &&
          <PreviewComponent
            previewData={prevData}
            modalVisibility={this.previewvisibility}
          />
        }
      </div>
    );

  }

}


export default App;
