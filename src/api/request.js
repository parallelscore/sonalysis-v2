import axios from 'axios';
import cookie from 'js-cookie';
export const baseURL = process.env.REACT_APP_BASE_URL

const logOut = (error) => {
    if (error.response?.status === 401) {
        cookie.remove('auth');
        window.location.replace('/');
    }
};



export async function postCall(endpoint, data, headers) {
    const bearerToken = cookie.get('auth');

    return axios({
        method: 'POST',
        url: endpoint,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
            ...headers,
        },
        data,
    })
        .then((response) => response)
        .catch((error) => {
            logOut(error);
            return error.response;
        });
}
export async function s3PostCall(endpoint, data, headers) {
    const config = {
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(percentCompleted);
        },
    };

    return axios
        .post(endpoint, data, config)
        .then((response) => response)
        .catch((error) => {
            logOut(error);
            return error.response;
        });
}

export async function getCall(endpoint, headers) {
    const bearerToken = cookie.get('auth');
    return axios({
        method: 'GET',
        url: endpoint,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
            ...headers,
        },
    })
        .then((response) => response)
        .catch((error) => {
            logOut(error);
            return error.response;
        });
}

export async function patchCall(endpoint, data, headers) {
    const bearerToken = cookie.get('auth');
    return axios({
        method: 'PATCH',
        url: endpoint,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
            ...headers,
        },
        data,
    })
        .then((response) => response)
        .catch((error) => {
            logOut(error);
            return error.response;
        });
}

export async function putCall(endpoint, data, headers) {
    const bearerToken = cookie.get('auth');
    return axios({
        method: 'PUT',
        url: endpoint,
        headers: {
            ...headers,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
        },
        data,
    })
        .then((response) => response)
        .catch((error) => {
            logOut(error);
            return error.response;
        });
}

export async function deleteCall(endpoint, headers) {
    const bearerToken = cookie.get('auth');
    return axios({
        method: 'DELETE',
        url: endpoint,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${bearerToken}`,
            ...headers,
        },
    })
        .then((response) => response)
        .catch((error) => {
            logOut(error);
            return error.response;
        });
}
