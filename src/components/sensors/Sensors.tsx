import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteSensor, getSensors } from './actions';
import { isLoggedIn } from '../../utils/checkAuth';
import {
    EuiBasicTable,
    EuiHealth,
    EuiPanel,
    EuiSpacer,
} from '@elastic/eui';
import './Sensors.scss';

function Sensors() {
    const { loading, error, data } = useSelector((state: any) => state.sensorsReducer);
    const url = process.env.REACT_APP_API_SENSORS || '';
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteUser = (user: any) => {
        dispatch(deleteSensor(url + '/' + user.id, user.id))
    };

    const actions = [
        {
            name: 'Delete',
            description: 'Delete',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: deleteUser,
        },
    ];

    const columns = [
        {
            field: 'description',
            name: 'Description',
        },
        {
            field: 'samplingPeriod',
            name: 'Sampling Period',
            width: '30%',
        },
        {
            field: 'isActive',
            name: 'Active',
            width: '10%',
            render: (isActive: any) => {
                const color = isActive ? 'success' : 'danger';
                const label = isActive ? 'Active' : 'inActive';
                return <EuiHealth color={color}>{label}</EuiHealth>;
            },
        },
        {
            field: 'id',
            name: 'Actions',
            width: '10%',
            actions,
        },
    ];

    useEffect(() => {
        if (isLoggedIn() && data.length === 0) {
            dispatch(getSensors(url));
        }
    }, []);

    if (!isLoggedIn()) {
        history.push('/login');
    }

    return (
        <EuiPanel>
            <h2>Sensors</h2>
            <EuiSpacer size="l" />
            { data.length > 0 && (
                <EuiBasicTable
                    items={data}
                    itemId="id"
                    columns={columns}
                    hasActions={true}
                    isSelectable={false}
                    tableLayout='auto'
                />
            )}
        </EuiPanel>
    )
}

export default Sensors
