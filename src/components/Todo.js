import React, { Component } from 'react';
import TodoList from '../containers/todoList';
import store from '../reducers';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: store.getState()
        }
    }

    // componentWillMount() {
    //     store.dispatch({type: 'FETCH_TODO'});
    // }
    render() {
        return(
            <TodoList todos={this.state.todos}/>
        )
    }
}
