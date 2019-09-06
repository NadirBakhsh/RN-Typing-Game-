import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class MyComponent extends React.Component {

    render() {
        return (
            <Appbar.Header style={{ backgroundColor: "#8E6E53" }}>
                <Appbar.Content title={this.props.title} />
            </Appbar.Header>
        );
    }
}