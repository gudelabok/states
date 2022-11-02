import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            gender: 'man'
        }

        this.onNameChangeEventHandling = this.onNameChangeEventHandling.bind(this);
        this.onEmailChangeEventHandling = this.onEmailChangeEventHandling.bind(this);
        this.onGenderChangeEventHandling = this.onGenderChangeEventHandling.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onNameChangeEventHandling(e) {
        this.setState(() => {
            return {
                name: e.target.value
            }
        })
    }

    onEmailChangeEventHandling(e) {
        this.setState(() => {
            return {
                email: e.target.value
            }
        })
    }

    onGenderChangeEventHandling(e) {
        this.setState((prevState) => {
            return {
                gender: e.target.value
            }
        })
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        const message = `
            Name : ${this.state.name}
            Email: ${this.state.email}
            Gender : ${this.state.gender}
        `

        alert(message)
    }


    render() {
        return (
            <div>
                <h1>Registrasi Form</h1>
                <form onSubmit={this.onSubmitEventHandler}>
                    <label for="name">Name :</label>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandling} />
                    <br />

                    <label for='email'>Email :</label>
                    <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeEventHandling} />
                    <br />

                    <label for="gender">Gender :</label>
                    <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandling}>
                        <option value="man" >Man</option>
                        <option value="woman" >Women</option>
                    </select>
                    <br />

                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
