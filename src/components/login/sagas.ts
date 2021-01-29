import { call, put, takeEvery } from 'redux-saga/effects';
import * as t from './types';
import { setClient } from '../../client/actions';
import apiHelper from '../../utils/apiHelper';

const url = process.env.REACT_APP_API_LOGIN || '';

function* login({ payload }: any) {
    const { username, password } = payload;
    yield put({ type: t.LOGIN_REQUEST });
    try {
        let token = yield call(apiHelper.postApi, url, username, password);
        yield put(setClient(token));
        yield put({ type: t.LOGIN_SUCCESS });
    } catch (error) {
        yield put({ type: t.LOGIN_ERROR, error: error.message });
    }
}

export function* watchLogin() {
    yield takeEvery(t.LOGIN_REQUEST_SAGA, login);
}