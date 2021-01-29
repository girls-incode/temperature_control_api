import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types';

interface IAction {
    type: string,
    error: string,
}

interface IState {
    loading: boolean,
    error: string,
}

const initState: IState = {
    loading: false,
    error: '',
}

function loginReducer(state = initState, { type, error }: IAction) {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                errors: ''
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                error: '',
            }
        case LOGIN_ERROR:
            return {
                loading: false,
                error
            }
        default:
            return state
    }
}
export default loginReducer;