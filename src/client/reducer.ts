import { CLIENT_SET, CLIENT_UNSET } from './types';
import { IToken } from './iToken';

interface IAction {
    type: string,
    payload?: IToken
}

const initState: IToken = {
    // expired: false,
    access_token: '',
    token_type: ''
}

function clientReducer(state = initState, action: IAction) {
    switch (action.type) {
        case CLIENT_SET:
            let data = {
                access_token: action.payload?.access_token,
                token_type: action.payload?.token_type,
                // expired: false,
            };
            localStorage.setItem('utoken', JSON.stringify(data));
            return {
                ...state,
                ...data
            };

        case CLIENT_UNSET:
            localStorage.removeItem('utoken');
            return initState;

        default:
            return state
    }
}

export default clientReducer;

export function getToken(state: IToken): string { return state.access_token || '' };