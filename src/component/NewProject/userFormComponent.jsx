
import { useState, useEffect } from 'react';
import { Row, Col, Button } from "antd";
import './style.scss';

 const UserFormComponent = (props) => {
    const [userObj, handleUserObjChange] = useState({  // initializa state and setStateAction
      fullName:"",  
      dateOfBrith: "",
      email: "",
      phoneNo: "",
      isError: false,
      isSubmitEnabled: false,
    });
    const {fullName, dateOfBrith, email,phoneNo,isError,
      isSubmitEnabled,
    } = userObj;   // deconstruct 
 

 
    const handleChange = (key, value) => {  // update state action
      handleUserObjChange({
        ...userObj,
        [key]: value,
        isSubmitEnabled: false,
        isError: false,
      });
    }
    const handleClick = () => {

      const {
        fullName,
        dateOfBrith,
        email,
        phoneNo,
      } = userObj;
      if (!(fullName && dateOfBrith && email && phoneNo)){
      
      handleUserObjChange({ ...userObj, isError: true });
      return;
    }
     // props.submitAction({ ...userObj});

      props.submitdataAction({
        ...userObj
      });
      
      handleUserObjChange({    // reset back to original state
        fullName:"",
        dateOfBrith:"",
        email:"",
        phoneNo:""
      });
    }
  
 
   
    return (
      <div className="user-container">
        <h1> User form </h1>
        <Row gutter={[10, 10]}>
          <Col span={12}>
            <label className="user-label">Full Name </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={fullName} onChange={(event) => handleChange("fullName",event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">Date Of Brith </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={dateOfBrith} onChange={(event) => handleChange("dateOfBrith", event.target.value)} />
          </Col>
         
          <Col span={12}>
            <label className="user-label">Email </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={email} onChange={(event) => handleChange("email", event.target.value)} />
          </Col>
        
          <Col span={12}>
            <label className="user-label">Phone Number </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={phoneNo} onChange={(event) => handleChange("phoneNo", event.target.value)} />
          </Col>
          <Col span={24}>
            {isError && <label className="user-error">Please complete all details</label>}
          </Col>
          <Col span={24}>
            <Button type="primary" onClick={handleClick}>
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
 
  export default UserFormComponent;
  
  