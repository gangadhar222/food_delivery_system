import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions.js';
import { Redirect } from 'react-router-dom';

export class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            mobile: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { signUp,userCheck,registered} = this.props;
        if(registered){
            return <Redirect to="/login" />
        }
        return (
            <div className="container" style={{width:'33%'}}>
                <h1 className="text-center p-3">Signup</h1>
                <div className="container">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                       {
                           userCheck ? <small style={{color:'red'}}>Username already taken</small>:<small></small>
                       }
                       <br/>
                        <label>Mobile</label>
                        <input
                            type="number"
                            name="mobile"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <br/>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                        <br/>
                        <button
                            className="btn btn-primary p-2 m-2 btn-block"
                            onClick={() => signUp({
                                name: this.state.name,
                                mobile: this.state.mobile,
                                password: this.state.password
                            })}
                        >
                            Signup
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        userCheck:state.userCheck,
        registered:state.registered
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: props => dispatch(signUp(props))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
