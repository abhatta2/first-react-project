import { Component } from 'react';
import autoBind from "react-autobind";
import './style.scss';

class UserComponent extends Component {
    constructor(props) {          // initial stae of every class component
        super(props);
        this.state = {
            firstName: " ",
            lastName: " ",
            phoneNumber: " ",
            occupation: " ",
            isError: false
        }
        autoBind(this);
    }

    handleClick() {
        const {
            firstName,
            lastName,
            phoneNumber,
            occupation,
            isError
        } = this.state;

        if (!(firstName && lastName && phoneNumber && occupation))
            this.setState({ isError: true });
        this.props.submitAction({
            firstName,
            lastName,
            phoneNumber,
            occupation,
        });
        this.setState({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            occupation: "",
            isError: false,
        });
    }

    handleChange(field, value) {   //event handler function
        this.setState({
            [field]: value,
            isError: false,
        });

    }
    render() {
        const {
            firstName,
            lastName,
            phoneNumber,
            occupation,
            isError
        } = this.state;
        return (
            <div className="user-container">
                <div className="user-field">
                    <label className="user-lable"> First Name: </label>
                    <input className="user-input" type="text" value={firstName} onChange={(event) => this.hand("firstName", event.target.value)} />
                </div>

                <div className="user-field">
                    <label className="user-lable"> Last Name: </label>
                    <input className="user-input" type="text" value={lastName} onChange={(event) => this.handleChange("lastName", event.target.value)} />
                </div>

                <div className="user-field">
                    <label className="user-lable">Phone Number: </label>
                    <input className="user-input" type="text" value={phoneNumber} onChange={(event) => this.handleChange("phoneNumber", event.target.value)} />
                </div>

                <div className="user-field">
                    <label className="user-lable"> Occupation </label>
                    <input className="user-input" type="text" value={occupation} onChange={(event) => this.handleChange("occupation", event.target.value)} />
                </div>
                <div className="user-field">
                    {isError && <label> Please enter all required fields</label>}

                </div>
                <div className="submit-bttn">
                    <button onClick={this.handleClick}> Submit </button>
                </div>

            </div>

        );
    }


}
export default UserComponent;



