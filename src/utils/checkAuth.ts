import { setClient } from '../client/actions';
import store from './../store/store';

export function isLoggedIn() {
    try {
        const storedToken = localStorage.getItem('utoken');
        if (storedToken && store.getState().clientReducer.access_token) {
            return true;
        }
    } catch (err) {
        return false
    }
    return false
}