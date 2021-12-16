import React from 'react';
import { Component } from 'react';
import autoBind from 'react-autobind';
import { Routes, Route, Link } from "react-router-dom";
import PostComponent from '../Posts/component';
import UserComponent from '../User/component'




class App extends Component {
    constructor(props) {
        super(props);

        //add global variable to use in other component   1st step


        autoBind(this);
    }



    render() {

        return (
            <div className="class-container" style={{ display: 'flex' }}>
                <div> <Link to="/" style={{ fontSize: '20px', padding: '10px' }}> Page 1 </Link> </div>
                <br />
                <div> <Link to="/two" style={{ fontSize: '20px' }}> Page 2 </Link> </div>

                <Routes >
                    <Route
                        path="/"
                        element={< UserComponent />}

                    />

                    <Route
                        path="/two"
                        element={<PostComponent />}

                    />

                </Routes>


            </div>
        );

    }

}


export default App;
