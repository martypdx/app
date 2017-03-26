import React from 'react';
import fetcher from '../helpers/fetcher';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    doFetch(state) {
        fetcher({
            path: '/signin',
            method: 'POST',
            body: state,
        })
        .then(res => {
            return res.json();
        })
        .then(token => {
            console.log(token);
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;

        this.setState({
            password,
            username,
        });
        this.doFetch(this.state);
        event.target.reset();
    }

    render() {
        return (
            <div className='container'>
                <h3 style={{textAlign: 'center'}}>Welcome back!</h3>
                <div className= 'twelve columns'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref='username' placeholder='username' className= 'four columns offset-by-four'/>   
                    <br/>
                    <input type='text' ref='password' placeholder='password' className= 'four columns offset-by-four'/>
                    <br/>
                    <button type='submit' className= 'four columns offset-by-four button-primary'>Sign In</button>
                </form>
                </div>
            </div>
        );
    }
}

export default SignIn;
