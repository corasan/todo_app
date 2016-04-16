import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Todo from './src/components/Todo.js';

class todo_app extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <Text style={styles.titleBar}>Todo List</Text>
                <Todo/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3F6'
  },
  titleBar: {
      paddingTop: 35,
      paddingBottom: 15,
      textAlign: 'center',
      backgroundColor: '#42144E',
      color: '#FFFFFF',
      fontSize: 20,
      marginBottom: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todo_app', () => todo_app);
