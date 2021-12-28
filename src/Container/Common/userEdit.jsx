import { useEffect } from 'react';
import { Modal ,Input} from "antd";
import { Row, Col } from "antd";

const UserEditComponent = (props) => {
    const { userData} = props;
    /*useEffect(() => {
        return () => {
            console.log("Component will unmount ")
            props.resetPreviewState();
        }
    }, []); */
    return (
        <Modal
            title="Edit User"
            visible={true}
            onOk={props.submitAction}
           onCancel={() => props.modalVisibility()}
        >
             <Row gutter={[10, 10]}>
                <Col span={12}>
                    <label className="user-label">Full Name:</label>
                </Col>
                <Col span={12}>
                    <Input value={userData.name} onChange={(event) => props.handleChange("name", event.target.value)} />
                </Col>
                <Col span={12}>
                    <label className="user-label">Email:</label>
                </Col>
                <Col span={12}>
                    <Input value={userData.email} onChange={(event) => props.handleChange("email", event.target.value)} />
                </Col>
                <Col span={12}>
                    <label className="user-label">Address:</label>
                </Col>
                <Col span={12}>
                    <Input value={userData.userAddress} onChange={(event) => props.handleChange("userAddress", event.target.value)} />
                </Col>
                <Col span={12}>
                    <label className="user-label">Phone No:</label>
                </Col>
                <Col span={12}>
                    <Input value={userData.phone} onChange={(event) => props.handleChange("phone", event.target.value)} />
                </Col>
                <Col span={12}>
                    <label className="user-label">Company:</label>
                </Col>
                <Col span={12}>
                    <Input value={userData.userCompany} onChange={(event) => props.handleChange("userCompany", event.target.value)} />
                </Col>
            </Row>
        </Modal>
    );
}

export default UserEditComponent;