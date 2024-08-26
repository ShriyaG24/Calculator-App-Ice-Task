import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
  } from 'react-native';


function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };


  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/','power of','square root', '=', 'C'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f3f3f3',
    padding: 20,
  },
  resultText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputText: {
    fontSize: 35,
    color: '#888',
  },
  buttonsContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});


export default App;