import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

class todo_app extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#42144E'/>
                <Text style={styles.titleBar}>ToDo List</Text>
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
      paddingTop: 40,
      paddingBottom: 10,
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
