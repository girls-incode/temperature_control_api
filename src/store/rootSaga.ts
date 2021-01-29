import { all } from 'redux-saga/effects';
import { watchLogin } from '../components/login/sagas';
import { watchGetSensors, watchDeleteSensor } from '../components/sensors/sagas';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchGetSensors(),
        watchDeleteSensor()
    ]);
}