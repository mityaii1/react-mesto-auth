import React from 'react';
import { useHistory } from 'react-router-dom';
import { setToken } from '../utils/token';
import * as apiAuth from '../utils/apiAuth';


function Login(props) {
    const [data, setData] = React.useState({ email: '', password: '' });
    const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = data;
        if (!email || !password) {
            return;
        }
        apiAuth.authorize(email, password)
            .then((data) => {
                if (data) {
                    setToken(data.token);
                    setData({ email: '', password: '' });
                    props.onLogin(email, password)
                    history.push('/');
                }
            })
            .catch((err) => {
                if (err.status === 401) {
                    console.log('Пользователь с email не найден')
                } else if (err.status === 400) {
                    console.log('Не передано одно из полей ')
                } else {
                    console.log(err)
                }
                props.onInfoTooltip(false, 'Что-то пошло не так! Попробуйте ещё раз.')
                
            })
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