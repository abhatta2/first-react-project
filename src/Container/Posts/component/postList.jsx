
import { Row, Col, Button, Table } from "antd";

import { ZoomInOutlined, } from '@ant-design/icons';
import { Navigate } from "react-router";


const PostListComp = (props) => {

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title:"Action"  ,  // action to render use record 
      render:(record) =>    
        <div>
          <ZoomInOutlined  onClick={()=>props.navigate(`/posts/${record.id}`)} />
        </div>

      
    },

  ];
  return (
    <div className="user-list-container">
      <Row gutter={[10, 5]}>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={props.postList}
            size="middle"
            pagination={false}
          />
        </Col>
      </Row>
    </div >
  );
}
export default PostListComp;