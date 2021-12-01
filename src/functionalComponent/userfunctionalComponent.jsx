import {useEffect, useState} from 'react';
import './style.scss';

const UserFunctionComp = ()=>{

   
   // const [count, setCount]= useState(0);
    const [ fName, handleChangeFName]= useState("");  // pass field and function as parameter
    const [ lName, handleChangeLName]= useState("");
    const [ email, handleChangeemail]= useState("");
    const [ isError, handleChangeError ]= useState(false);  
 

useEffect(()=>{   // see state change 
    console.log("fname state change" + fName)
},[fName]);

    const handleClick = (e) =>{
       e.preventDefault();
        handleChangeError(false);
        if(!(fName && lName)){
        handleChangeError(true);
        return;
        }

       console.log("fname " + fName + " last name " + lName);

    }
    return(
        <div className="user-container">
        <h1> Functional component test</h1>
                <div className="user-field">
                    <label className="user-lable" > First Name: </label>
                    <input className="user-input" type="text" value={fName} required= "true" onChange={(event)=>{handleChangeFName(event.target.value)}}  />
                </div>
                <div className="user-field">
                    <label className="user-lable"> Last Name: </label>
                    <input className="user-input" type="text" value={lName} required= "true" onChange={(event)=>{handleChangeLName(event.target.value)}}  />
                </div>
                <div className="user-field">
                    <label className="user-lable">Email: </label>
                    <input className="user-input" type="text" value={email}  />
                </div>
                <div className="form-Error">
                    { isError && <p> Please enter all required fields.</p>}
                 </div>

                <div className="btt-btn-primary">
                    <button onClick={handleClick}> Submit </button>
                </div>

            </div>

        );
}

export default UserFunctionComp;