import { convertLegacyProps } from 'antd/lib/button/button';
import { useEffect, useState } from 'react';

const UserFunctionComp = (props) => {


    // const [count, setCount]= useState(0);
    const [userInput, setInput] = useState({
        name: "",
        email: "",
        address: " ",
        phone: "",
        company:"",
        isError: false


    });  // pass field and function as parameter

    //const { name, email, address,phone,company, isError } = this.useState

    const handleChange = (key, value) => {
        setInput({
            [key]: value

        })


    }
    useEffect(() => {   // see state change 
        console.log("fname state change" + name)
    }, [name]);

    const handleClick = (e) => {
        e.preventDefault();
        setInput(false);
        if (!(name && email)) {
            setInput(true);
            return;

        }
        props.submitAction({
            name, email,address, phone,company
        })


        //  console.log("fname " + fName + " last name " + lName);

    }
    return (
        
        <div className="user-container">
            <h1> Functional component test</h1>
            <div className="user-field">
                <label className="user-lable" > Name: </label>
                <input className="user-input" type="text" value={name} onChange={(event) => { handleChange("name", event.target.value) }} />
            </div>
            <div className="user-field">
                <label className="user-lable"> Email: </label>
                <input className="user-input" type="text" value={email} onChange={(event) => { handleChange("email", event.target.value) }} />
            </div>
            <div className="user-field">
                <label className="user-lable">Address: </label>
                <input className="user-input" type="text" value={address} onChange={(event) => { handleChange("address", event.target.value) }} />
            </div>
            <div className="user-field">
                <label className="user-lable">Phone Number: </label>
                <input className="user-input" type="text" value={phone} onChange={(event) => { handleChange("phone", event.target.value) }} />
            </div>
            <div className="user-field">
                <label className="user-lable">Company: </label>
                <input className="user-input" type="text" value={company} onChange={(event) => { handleChange("company", event.target.value) }} />
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