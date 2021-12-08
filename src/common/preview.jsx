import { useEffect } from 'react';
import '../App/App.scss';
import { Modal } from "antd";
import { Row, Col } from "antd";

const PreviewtesComponent = (props) => {
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
        >
            <Row gutter={[10, 10]}>
                <Col span={12}>
                    <label className="user-label">Full Name</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.fullName}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Date of Birth</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.dateOfBrith}</div>
                </Col>
                
                <Col span={12}>
                    <label className="user-label">Email</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.email}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Phone Number</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{previewDetails.phoneNum}</div>
                </Col>
            </Row>
        </Modal>
    );
}

export default Previewtesomponent;