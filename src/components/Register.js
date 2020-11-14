import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as apiAuth from '../utils/apiAuth';

function Register(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory();

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        apiAuth.register(email, password)
            .then((res) => {
                if (res) {
                    props.onInfoTooltip(true, 'Вы успешно зарегистрировались!')
                    history.push('/sign-in');
                }
            })
            .catch((err) => {
                if (err.status === 400) {
                    console.log('Hекорректно заполнено одно из полей')
                } else {
                    console.log(err)
                }
                props.onInfoTooltip(false, 'Что-то пошло не так! Попробуйте ещё раз.')
            })
    }

    return (
        <div className="register">
            <h1 className="register__title">Регистрация</h1>
            <form onSubmit={handleSubmit} className="register__form">
                <input name="email" type="email" className="register__input"
                    placeholder="Email" required onChange={handleChangeEmail} />
                <input name="password" type="password" className="register__input"
                    placeholder="Пароль" required onChange={handleChangePassword} />
                <button type="submit" className="register__button-singup">Зарегистрироваться</button>
            </form>
            <div className="register__auth">
                <p>Уже зарегистрированы?</p>
                <Link to={'/sign-in'} className="register__auth_link transparent">Войти</Link>
            </div>
        </div>
    )
}

export default Register;