import * as t from './types';

export const getSensors = (url: string) => ({ type: t.SENSORS_REQUEST_SAGA, url });
export const deleteSensor = (url: string, id: number) => ({ type: t.SENSOR_DELETE_SAGA, url, id });