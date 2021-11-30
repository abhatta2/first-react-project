import {useState} from 'react';

const UserFunctionComp= ()=>{
    const [count, setCount]= useState(0);
    const [ fName, handleChangeFName]= useState("");  // pass field and function as parameter
    const [ isError, handleChangeError]= useState("false");  
 // const  handleClick =() =>{
   //   console.log(fName);

    //}

    const handleChange=()=>{

    }
       

    const handleClick =()=>{
        handleChangeError(false);


        if(!(fName))
        handleChangeError(true);

       // console.log("button clicked");

    }


    return(
        <div className="user-container">
        <h1> Functional component test</h1>
        <button> - </button>
        <span> {count} </span>
        <button>+</button>
        
                <div className="user-field">
                    <label className="user-lable"> First Name: </label>
                    <input className="user-input" type="text" value={fName} onChange={handleChangeFName} />
                </div>

               

                
              
                <div className="user-field">
                    { isError && <label> Please enter all required fields</label>}
                 </div>

                <div className="">
                    <button onClick={handleClick}> Submit </button>
                </div>

            </div>

        );


    


}

export default UserFunctionComp;