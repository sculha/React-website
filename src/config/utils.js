import { notification } from 'antd';

export const setLocalStorage = (name, value) => {
    return localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorage = (name) => {
    const value = JSON.parse(localStorage.getItem(name))
    return value;
}

export const removeLocalStorage = (name) => {
    localStorage.removeItem(name)
}

export const responseMessage = ({ type, message, description }) => {
    if (message) {
        notification[type]({
            message: message,
            description: description
        });
    }
};