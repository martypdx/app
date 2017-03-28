import React from 'react';
import fetcher from '../helpers/fetcher';

class SignIn extends React.Component {

    doFetch(username, password) {
        return fetcher({
            path: '/auth/signin',
            method: 'POST',
            body: {
                username,
                password,
            },
        })
        .then(res => {
            return res.json();
        })
        .then(json => {
            if(json.error) {
                console.log('error', json.error);
                return;
            }
            return json.token;
        });
    }


    render() {
        return (
            <div className='container'>
                <h3 style={{textAlign: 'center'}}>Welcome back!</h3>
                <div className='twelve columns'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const username = this.refs.username.value;
                        const password = this.refs.password.value;

                        this.doFetch(username, password)
                            .then((token) => {
                                this.props.handleSignIn(token);
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        e.target.reset();
                    }}>
                    <input type='text' ref='username' placeholder='username' className='four columns offset-by-four' required />   
                    <br/>
                    <input type='password' ref='password' placeholder='password' className='four columns offset-by-four' required />
                    <br/>
                    <button type='submit' className='four columns offset-by-four button-primary'>Sign In</button>
                </form>
                </div>
            </div>
        );
    }
}

export default SignIn;
