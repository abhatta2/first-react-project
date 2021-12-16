
import { useState, useEffect } from 'react';
import { Row, Col, Button, message } from "antd";
import './style.scss';

 const UserFormComponent = (props) => {
    const [userObj, handleUserObjChange] = useState({  // initializa state and setStateAction
      fullName:"",
        email:"",
        address:"",
        phone:"",
        company:"",
      isError: false,
      isSubmitEnabled: false,
    });
    const {fullName, address, email,phone,company,isError,
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

    useEffect ( ()=>{
      if(props.isSubmittedData){
        message.success("User data Saved.");
        props.resetSubmitedData();


      }

      
    }, [props])


    const handleClick = () => {

      const {
        fullName,
        email,
        address,
        phone,
        company
      } = userObj;
      if (!(fullName && address && email && phone && company)){
      
      handleUserObjChange({ ...userObj, isError: true });
      return;
    }
     // props.submitAction({ ...userObj});

      props.submitdataAction({
        ...userObj
      });

      //props.addUserData({
        //...userObj
      //})
     
      handleUserObjChange({    // reset back to original state
        fullName:"",
        email:"",
        address:"",
        phone:"",
        company:""
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
            <label className="user-label">Email </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={email} onChange={(event) => handleChange("email", event.target.value)} />
          </Col>
         
          <Col span={12}>
            <label className="user-label">Address </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={address} onChange={(event) => handleChange("address", event.target.value)} />
          </Col>
        
          <Col span={12}>
            <label className="user-label">Phone Number </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={phone} onChange={(event) => handleChange("phone", event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">Company </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={company} onChange={(event) => handleChange("company", event.target.value)} />
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
  
  