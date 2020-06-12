import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            mobile: '',
            password: '',
            users: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            users:[{...this.state.users},{name:this.state.name,mobile:this.state.mobile,password:this.state.password}]
        })
        console.log(this.state.users)
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
                <h1 className="text-center p-3">Signup</h1>
                <form className="container">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={this.handleChange}
                        />
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
                            Signup
                    </button>
                    </div>
                </form>
            </>
        )
    }
}

export default Signup;
