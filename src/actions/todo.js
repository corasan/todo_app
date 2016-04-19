import Firebase from 'firebase';
const ref = new Firebase('https://sms-react.firebaseio.com/todos');

export function fetchTodos() {
    return (dispatch) => {
        ref.once('value', function(data) {
            dispatch({todo: data.val()});
        });
    }
}
