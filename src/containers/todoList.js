import React, { Component } from 'react';
import { ListView, Text } from 'react-native';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.todos)
        }
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => <Text>{data.todo}</Text>}
            />
        )
    }
}
