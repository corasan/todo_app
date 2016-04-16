import React, { Component } from 'react';
import { ListView, Text, StyleSheet, View } from 'react-native';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.todos)
        }
    }

    renderRow = (data) => {
        return (
            <View style={styles.container}>
                <Text style={styles.todo}>{data.todo}</Text>
            </View>
        )
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={ this.renderRow }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: 78,
        width: 340,
        paddingTop: 27.5,
        paddingBottom: 27.5,
        paddingLeft: 35,
        marginBottom: 20,
        marginLeft: 20,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3
    }
})
