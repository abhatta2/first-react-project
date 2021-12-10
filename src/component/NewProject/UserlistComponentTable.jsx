
import {useState} from 'react';
import { Row, Col, Button ,Table} from "antd";
import './style.scss';

const UserListCompTable = (props)=>{

  const columns = [
    {
      title:'Name',
      dataIndex:'name',
      key:'name'

    },

    {
      title:'Email',
      dataIndex:'email',
      key:'email'

    },

    {
      title:'Address',
      dataIndex:'userAddress',
      key:'userAddress'

    },

    

  ]

    //if() 
    //return();

   
//else
    return(
        <div className="user-container">
           <Row gutter={10,5}>
          <Table>
           
          columns={columns},
          dataSource={props.userListData},
          size="middle",
          pagination={false}
          </Table>
          </Row>

       </div>

        );
}

export default UserListCompTable;