import { CLIENT_SET, CLIENT_UNSET } from './types';
import { IToken } from './iToken';

export const setClient = (token: IToken) => ({ type: CLIENT_SET, payload: token });

export const unsetClient = () => ({ type: CLIENT_UNSET });
