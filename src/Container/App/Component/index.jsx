
import { Component } from 'react';
import autoBind from 'react-autobind';
import { Routes, Route, Link } from "react-router-dom";
import '../App.scss';

import PostComponent from '../../Posts/component';
import UserComponent from '../../User/component';
import PostDetailComponent from '../../PostDetails/Component';





class App extends Component {
    constructor(props) {
        super(props);

        //add global variable to use in other component   1st step


        autoBind(this);
    }



    render() {

        return (
            <div className="app-container">
            <div className="app-header">
              <div className="app-header-list">
                <Link to="/users">User</Link>
              </div>
              <div className="app-header-list">
                <Link to="/posts">Post</Link>
              </div>
            </div> 
            <br/>

                <Routes >
                    <Route 
                    path="/"
                    
                    />
                    <Route
                        path="/users"
                        element={< UserComponent />}

                    />

                    <Route
                        path="/posts"
                        element={< PostComponent />}

                    />

                    <Route
                        path="/posts/:id"
                        element={<PostDetailComponent />}
                    /> 

                </Routes>


            </div>
        );

    }

}


export default App;
