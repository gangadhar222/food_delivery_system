import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mobile: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = e => {
        e.preventDefault();
    };


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        console.log(this.state.users)
        return (
            <>
                <h1 className="text-center p-3">Login</h1>
                <form className="container">
                    <div className="form-group">
                        <label>Mobile</label>
                        <input
                            type="number"
                            name="mobile"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary p-2 m-2 btn-block"
                        >
                            Login
                    </button>
                    </div>
                </form>
            </>
        )
    }
}

export default Signup;
