import React from 'react';
import UserComponent from './component'

import{useLocation, useNavigate} from 'react-router-dom';
import {connect } from 'react-redux';
import {takeAction} from '../App/action'

const UserComponentWithRouter = (props)=>{
    let getLocation = useLocation();
    let getNav = useNavigate();
    return < UserComponent 
    history={getLocation} 
    navigate={getNav}
    {...props}
    />
}

const mapStateToPros= ({app})=>({
    appName:app.appName,
    appName2: app.appName2

})

const mapDispatchToPros ={
    takeAction,
}

export default connect (mapStateToPros, mapDispatchToPros) (UserComponentWithRouter);
