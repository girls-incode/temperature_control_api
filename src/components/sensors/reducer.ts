import * as t from './types';

interface ISensor {
    id: number,
    description: string,
    samplingPeriod: number,
    isActive: boolean
}

interface IAction {
    type: string,
    payload: any,
}

const initState = {
    loading: false,
    error: '',
    data: [] as ISensor[]
}

function sensorsReducer(state = initState, { type, payload }: IAction) {
    switch (type) {
        case t.SENSORS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case t.SENSORS_SUCCESS:
            return {
                loading: false,
                error: '',
                data: payload
            }
        case t.SENSOR_DELETE_SUCCESS:
            const newList = state.data.filter((item: ISensor) => item.id !== payload);
            return {
                loading: false,
                error: '',
                data: newList
            }
        case (t.SENSORS_ERROR || t.SENSOR_DELETE_ERROR):
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export default sensorsReducer;