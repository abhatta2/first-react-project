import {useState} from 'react';
import { Row, Col, Button } from "antd";
import './style.scss';

const UserListCom = (props)=>{

    //if() 
    //return();

   
//else
    return(
        <div className="user-container">

{props.passData.map (list =>(
             <Col span={6}>
               <div className="user-list-field">
                 <label className="user-list-label">Name  : {list.fullName}</label>
                 <label className="user-list-email">Email : {list.email}</label>
                 <Button
                   type="link"
                   onClick={() => props.previewVisibility(list)}
                 >
                   View More Details
                 </Button>
               </div>
             </Col>
           ))}
           
       </div>

        );
}

export default UserListCom;