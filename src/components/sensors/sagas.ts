import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as t from './types';
import apiHelper from '../../utils/apiHelper';
import { unsetClient } from '../../client/actions';

function* getSensors({ url }: any) {
    yield put({ type: t.SENSORS_REQUEST });
    let res = yield call(apiHelper.fetchApi, url);
    if (res.ok) {
        let data = yield res.json();
        yield put({ type: t.SENSORS_SUCCESS, payload: data });
    }
    else {
        yield call(unsetClient);
        yield put({ type: t.SENSORS_ERROR });
    }
}

export function* watchGetSensors() {
    yield takeEvery(t.SENSORS_REQUEST_SAGA, getSensors);
}

function* deleteSensor({ url, id }: any) {
    try {
        yield call(apiHelper.deleteApi, url);
        yield put({ type: t.SENSOR_DELETE_SUCCESS, payload: id });
    } catch (error) {
        yield put({ type: t.SENSOR_DELETE_ERROR, error: error.message });
    }
}

export function* watchDeleteSensor() {
    yield takeLatest(t.SENSOR_DELETE_SAGA, deleteSensor);
}