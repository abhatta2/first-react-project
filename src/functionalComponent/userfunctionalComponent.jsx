import { convertLegacyProps } from 'antd/lib/button/button';
import { useEffect, useState } from 'react';
import './style.scss';

const UserFunctionComp = (props) => {


    // const [count, setCount]= useState(0);
    const [userInput, setInput] = useState({
        fullName: "",
        dateOfBrith: "",
        email: " ",
        phoneNum: "",
        isError: false


    });  // pass field and function as parameter

    const { fullName, dateOfBrith, email, phoneNum, isError } = this.useState

    handleChange = (key, value) => {
        setInput({
            [key]: value

        })


    }
    useEffect(() => {   // see state change 
        console.log("fname state change" + fName)
    }, [fName]);
    const handleClick = (e) => {
        e.preventDefault();
        setInput(false);
        if (!(fullName && email)) {
            setInput(true);
            return;

        }
        props.submitAction({
            fullName, dateOfBrith, email, phoneNum
        })


        //  console.log("fname " + fName + " last name " + lName);

    }
    return (
        <div className="user-container">
            <h1> Functional component test</h1>
            <div className="user-field">
                <label className="user-lable" > First Name: </label>
                <input className="user-input" type="text" value={fullName} onChange={(event) => { handleChange("fullName", event.target.value) }} />
            </div>
            <div className="user-field">
                <label className="user-lable"> Last Name: </label>
                <input className="user-input" type="text" value={dateOfBrith} onChange={(event) => { handleChange("dateOfBrith", event.target.value) }} />
            </div>
            <div className="user-field">
                <label className="user-lable">Email: </label>
                <input className="user-input" type="text" value={email} onChange={(event) => { handleChange("email", event.target.value) }} />
            </div>
            <div className="user-field">
                <label className="user-lable">Phone Number: </label>
                <input className="user-input" type="text" value={phoneNum} onChange={(event) => { handleChange("phoneNum", event.target.value) }} />
            </div>
            <div className="form-Error">
                {isError && <p> Please enter all required fields.</p>}
            </div>

            <div className="btt-btn-primary">
                <button onClick={handleClick}> Submit </button>
            </div>

        </div>

    );
}

export default UserFunctionComp;