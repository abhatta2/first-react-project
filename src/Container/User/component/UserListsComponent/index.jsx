
import { Row, Col, Button, Table } from "antd";
import { ZoomInOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
//import './style.scss';

const UserListComponent = (props) => {
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
      title: "Address",
      dataIndex: "userAddress",
      key: "userAddress",
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
          <ZoomInOutlined
            className="user-preview"
            onClick={() => props.previewVisibilityAction(record)}
          />
            <EditOutlined
            className="user-edit" style={{paddingLeft:'10px'}}
            onClick={() => props.editUserListAction(record)}
          />
          <DeleteOutlined
            className="user-delete"style={{paddingLeft:'10px'}}
            onClick={() => props.userdatadeleteAction(record.id)}
          />
        </div>
    },
  ]

  if (props.passData.length === 0)
    return (
      <div className="user-list-container">
        <Row>
          <Col span={24}>
            <div className="user-list-empty">
              No Record
            </div>
          </Col>
        </Row>
      </div>
    );
  else
    return (
      <div className="user-list-container" style={{marginTop:''}}>
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

export default UserListComponent;