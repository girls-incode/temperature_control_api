import React, { useState, useEffect } from 'react';
import {
    EuiButton,
    EuiFieldPassword,
    EuiFieldText,
    EuiForm,
    EuiFormRow,
} from '@elastic/eui';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_REQUEST_SAGA } from './types';
import './Login.scss';

function Login() {
    const { access_token } = useSelector((state: any) => state.clientReducer);
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (access_token) history.push('/sensors');
    }, [access_token])

    return (
        <EuiForm component='form' className='login-form'>
            <EuiFormRow label='Username'>
                <EuiFieldText
                    name='username'
                    value={username}
                    aria-label='Username'
                    onChange={(e) => setUsername(e.target.value)} />
            </EuiFormRow>
            <EuiFormRow label='Password'>
                <EuiFieldPassword
                    name='password'
                    value={password}
                    aria-label='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </EuiFormRow>
            <EuiFormRow>
                <EuiButton fill
                    onClick={() => {
                        dispatch({
                            type: LOGIN_REQUEST_SAGA,
                            payload: {
                                username,
                                password,
                            }
                        })
                    }}> Login</EuiButton>
            </EuiFormRow>
        </EuiForm>
    )
}

export default Login;
