import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import s from '../initialState';

todoStore = (state, action) => {
    switch(action.type) {
        case 'FETCH_TODOS':
            return [
                ...state,
                {todo: action.todo}
            ];
        default:
            return state || s.todos
    }
}

export default createStore(todoStore, applyMiddleware(thunk));
