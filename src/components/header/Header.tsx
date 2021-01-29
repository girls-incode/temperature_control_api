import React from 'react';
import {
    EuiIcon
} from '@elastic/eui';
import './Header.scss';

function Header() {
    return (
        <header>
            <h1 className='text-center'>
                <a href='/' className='logo'>
                    <EuiIcon type="visualizeApp" size="l" />ThermoCo
                </a>
            </h1>
        </header>
    )
}

export default Header
