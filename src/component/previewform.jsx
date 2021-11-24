
//import './component/style.scss'
function PreviewComponent(props) {
    const { previewData, modalVisibility } = props;

    return (
        <>
            <br />
            <div className="user-form-container">
                <div className="user-form -prev">
                    <label> First Name</label>
                    <label> {previewData.firstName}  </label>
                </div>
                <div className="user-form -prev">
                    <label> Last Name</label>
                    <label > {previewData.lastName} </label>
                </div>

                <div className="user-form -prev">
                    <label> Phone Number</label>
                    <label > {previewData.phoneNumber} </label>
                </div>
                <div className="user-form -prev">
                    <label>occupation</label>
                    <label > {previewData.occupation}</label>
                </div>
                <div>
                    <button onClick={() => modalVisibility()}>Close</button>
                </div>
            </div>
        </>
    )
}
export default PreviewComponent;