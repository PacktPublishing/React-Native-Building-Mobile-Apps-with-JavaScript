import React from 'react';
import { StackNavigator } from 'react-navigation';
import routes from './config/routes';
import { initApi } from './services/api';

const AppNavigator = StackNavigator(routes);

export default class extends React.Component {
    componentWillMount() {
        initApi();
    }

    render() {
        return (
            <AppNavigator />
        )
    }
}