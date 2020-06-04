import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Input from './Input';

export default class App extends React.Component {
  state = {
    isValid: null,
  };

  render() {
    const { isValid } = this.state;
    console.log('isValid', isValid);

    return (
      <View style={styles.container}>
        <Text>TextInput validation using RegEx rules</Text>
        <Input
          placeholder="Password"
          style={styles.input}
          pattern={[
            "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$", // min 8 chars
          ]}
          onValidation={isValid => this.setState({ isValid })}
        />
        <View>
          <Text style={{ color: isValid && isValid[0] ? 'green' : 'red' }}>
            Rule 1: Email should be correct 
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 48,
    width: '80%',
    padding: 8,
    margin: 16,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
});