import React from 'react';
import { useHistory } from 'react-router-dom';
import { setToken } from '../utils/token';
import * as apiAuth from '../utils/apiAuth';


function Login({ onLogin }) {
    // const [email, setEmail] = React.useState('')
    // const [password, setPassword] = React.useState('')
    const [data, setData] = React.useState({ email: '', password: '' });
    const history = useHistory();
    const [message, setMessage] = React.useState('');

    // function handleChangeEmail(evt) {
    //     setEmail(evt.target.value);
    // }

    // function handleChangePassword(evt) {
    //     setPassword(evt.target.value);
    // }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        const { email, password } = data;
        if (!email || !password) {
            return;
        }
        apiAuth.authorize(email, password)
            .then((data) => {
                if (!data) {
                    setMessage('Что-то пошло не так!')
                }
                if (data) {
                    setToken(data.jwt);
                    setData({ email: '', password: '' });
                    setMessage('');
                    onLogin(email, password)
                    history.push('/');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="register">
            <h1 className="register__title">Вход</h1>
            <form onSubmit={handleSubmit} className="register__form">
                <input name="email" id="email" type="email" className="register__input"
                    placeholder="Email" required value={data.email} onChange={handleChange} />
                <input name="password" type="password" className="register__input"
                    placeholder="Пароль" required value={data.password} onChange={handleChange} />
                <button type="submit" className="register__button-singup">Войти</button>
            </form>
        </div>
    )
}

export default Login;