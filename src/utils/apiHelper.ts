import store from './../store/store';

const apiHelper = {
    fetchApi: (url: string) => {
        const { access_token } = store.getState().clientReducer;
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        })
    },
    postApi: (url: string, username: string, password: string) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${username}&password=${password}`,
        })
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                return res.json()
            })
            .then(res => {
                return res;
            })
            .catch((error) => { throw error })
    },
    deleteApi: (url: string) => {
        const { access_token } = store.getState().clientReducer;
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${access_token}`
            },
        })
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                return true;
            })
            .catch((error) => { throw error })
    }
}

export default apiHelper;