import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import TodoList from '../containers/todoList';
import store from '../reducers';
import { fetchTodos } from '../actions/todo';
import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/');
//
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: store.getState(),
            hi: {}
        }
        store.subscribe(() => {
            this.setState({todos: store.getState()});
        })
    }

    // componentWillMount() {
    //     store.dispatch({type: 'FETCH_TODO'});
    // }

    render() {
        return(
            <View>
                <TouchableHighlight onPress={this.clicko}><Text>HI</Text></TouchableHighlight>
                <TodoList todos={this.state.todos}/>
            </View>
        )
    }
}
