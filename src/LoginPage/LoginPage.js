import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        if (name === 'foo' && password === 'bar') {
            history.push('/home');
        } else {
            alert('Invalid Username or Password');
        }
    };

    return (
        <>
            <div className='title'>
                <h1> Welcome!!</h1>
            </div>
            <div className='loginForm'>
                <form onSubmit={handleSubmit}>
                    <label className='label'>
                        Username: <input type="text" placeholder={'Enter the UserName'}
                                         onChange={e => setName(e.target.value)}/>
                    </label>
                    <br/>
                    <br/>
                    <label className='label'>
                        Password: <input type="password" placeholder={'Enter the Password'}
                                         onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </>
    )
};

export default LoginPage;