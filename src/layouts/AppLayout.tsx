import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent
} from '@elastic/eui';
import './AppLayout.scss';
import Header from '../components/header/Header';

interface IProps {
  children: JSX.Element[] | JSX.Element
}

function AppLayout(props: IProps) {
  return (
    <EuiPage>
      <EuiPageBody component='main'>
        <Header />
        <EuiPageContent>
          {props.children}
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage >
  );
}

export default AppLayout;
