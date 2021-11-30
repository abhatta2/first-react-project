
//import './component/style.scss'
function PreviewComponent(props) {
    const { prevData, modalVisibility } = props;

    return (
        <>
            <br />
            <br />
            <div className="user-form-container">
                <div className="user-form -prev">
                    <label> First Name</label>
                    <label> {prevData.firstName}  </label>
                </div>
                <div className="user-form -prev">
                    <label> Last Name</label>
                    <label > {prevData.lastName} </label>
                </div>

                <div className="user-form -prev">
                    <label> Phone Number</label>
                    <label > {prevData.phoneNumber} </label>
                </div>
                <div className="user-form -prev">
                    <label>occupation</label>
                    <label > {prevData.occupation}</label>
                </div>
                <div>
                    <button onClick={() => modalVisibility()}>Close</button>
                </div>
            </div>
        </>
    )
}
export default PreviewComponent;