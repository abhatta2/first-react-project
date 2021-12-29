import { useEffect } from 'react';
import { Modal } from "antd";
import { Row, Col ,Button} from "antd";

const PreviewComponent = (props) => {
    const { previewDetails, modalVisibility } = props;
    /*useEffect(() => {
        return () => {
            console.log("Component will unmount ")
            props.resetPreviewState();
        }
    }, []); */
    return (
        <Modal
            title="Preview User Details"
            visible={true}
            onCancel={modalVisibility}
            footer={<Button onClick={modalVisibility}>Close</Button>}
        >
            <Row gutter={12,12}>
                <Col span={12}>
                    <label className="user-label">Full Name:</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.name}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Email:</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.email}</div>
                </Col>
                
                <Col span={12}>
                    <label className="user-label">Address:</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.userAddress}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Phone Number:</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.phone}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Company:</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.userCompany}</div>
                </Col>
                
            </Row>
        </Modal>
    );
}

export default PreviewComponent;