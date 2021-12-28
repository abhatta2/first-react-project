import React from 'react';
import UserComponent from './component'

import{useLocation, useNavigate} from 'react-router-dom';
import {connect } from 'react-redux';
import {takeAction} from '../App/action';
import { fetchUserData, resetFetch, updateUserData,updateReset, deleteData ,resetDelete} from './action';

const UserComponentWithRouter = (props)=>{
    let getLocation = useLocation();
    let getNav = useNavigate();
    return < UserComponent 
    history={getLocation} 
    navigate={getNav}
    {...props}
    />
}

const mapStateToPros= ({app,user})=>({
    appName:app.appName,
    appName2: app.appName2,
    userListData:user.userListData,
    deleteSucceeded:user.deleteSucceeded,
    isFetched:user.isFetched,
    isUpdated:user.isUpdated,


});

const mapDispatchToPros ={
    takeAction,
    fetchUserData,
    resetFetch,
    updateUserData,
    updateReset,
    deleteData,
    resetDelete,
    
}

export default connect (mapStateToPros, mapDispatchToPros) (UserComponentWithRouter);
