
import {useState} from 'react';
import { Row, Col, Button ,Table} from "antd";
import { ZoomInOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './style.scss';

const UserListComp = (props) => {

  const columns = [
    {
      title: "Name",
      render: (value, record) =>
        <div className="user-name-field" > {record.name}</div>
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
   
    {
      title: "Phone No.",
      dataIndex: "phone",
      key: "phone",
    },
    
    {
      title: "Company",
      dataIndex: "userCompany",
      key: "userCompany",
    },

    {
      title: "Action",
      render: (record) =>
      <div className="user-action"> 
       <ZoomInOutlined onClick={()=> props.previewVisibilityAction(record)}/>
       <DeleteOutlined onClick={()=> props.userdatadeleteAction(record.id)} />

      </div>

      
    }

   
   
  ]
    //return();

   
//else

if(props.passData.length===0){
  return(
    <div>
      <h3 style={{color:'red', marginLeft:'200px'}}> No record to display</h3>

    </div>
  );
}

  
return (
  <div className="user-list-container">
    <Row gutter={[10, 5]}>
      <Table
        columns={columns}
        dataSource={props.passData}
        size="middle"
        pagination={false}
      />
    </Row>
  </div>
);
}

export default UserListComp;