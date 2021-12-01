import {useState} from 'react';

const UserFunctionComp = ()=>{

    


    
   // const [count, setCount]= useState(0);
    const [ fName, handleChangeFName]= useState("");  // pass field and function as parameter
    const [ lName, handleChangeLName]= useState("");
    const [ email, handleChangeemail]= useState("");
    const [ isError, handleChangeError ]= useState("false");  
 


    const handleChange= (field,value) =>{//event handler function
        handleChangeFName({
           [field]:value,
        });

    }
       

    const handleClick = (e) =>{
       e.preventDefault();
        handleChangeError(false);
        if(fName===''){

       
        handleChangeError(true);
        }

       // console.log("button clicked");

    }


    return(
        <div className="user-container">
        <h1> Functional component test</h1>
       
        
                <div className="user-field">
                    <label className="user-lable"> First Name: </label>
                    <input className="user-input" type="text" value={fName} onChange={handleChange}  />
                </div>
                <div className="user-field">
                    <label className="user-lable"> Last Name: </label>
                    <input className="user-input" type="text" value={lName}  />
                </div>
                <div className="user-field">
                    <label className="user-lable">Email: </label>
                    <input className="user-input" type="text" value={email}  />
                </div>

               

                
              
                <div className="user-field">
                    { isError && <p> Please enter all required fields</p>}
                 </div>

                <div className="">
                    <button onClick={handleClick}> Submit </button>
                </div>

            </div>

        );


    


}

export default UserFunctionComp;