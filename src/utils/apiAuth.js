import { setToken } from './token';

export const BASE_URL = 'https://auth.nomoreparties.co';

function getResponseData(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}
export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(getResponseData)
}
export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(getResponseData)
        .then((data) => {
            if (data) {
                setToken(data);
                return data;
            } else {
                return;
            }
        })

}
export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(getResponseData)
}


