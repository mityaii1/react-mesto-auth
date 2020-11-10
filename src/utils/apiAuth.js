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
        .then((response => response.json()))
        .then((data) => {
            console.log(data)
          if (data){
            
            setToken(data.jwt);
            return data;
          } else {
            return;
          }
        })
        .catch(err => console.log(err))
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
        .then(res => res.json())
        .then(data => data)
    }


