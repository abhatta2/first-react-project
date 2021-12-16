import React from 'react';
import UserComponent from './component'

import{useLocation, useNavigate} from 'react-router-dom';

const UserComponentWithRouter = ()=>{
    let getLocation = useLocation();
    let getNav = useNavigate();
    return < UserComponent history={getLocation} navigate={getNav}/>
}
export default UserComponentWithRouter;
