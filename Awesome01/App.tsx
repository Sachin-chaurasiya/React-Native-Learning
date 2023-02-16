import React, {useState} from 'react';
import {View, Text, StyleSheet, useColorScheme, Button} from 'react-native';

const App = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const handleIncrease = () => setCounter(prev => prev + 1);
  const handleDecrease = () => setCounter(prev => (prev > 0 ? prev - 1 : prev));
  const handleReset = () => setCounter(0);

  return (
    <View style={styles.container}>
      <Text style={styles.tagLine}>Welcome to first React Native App!</Text>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Counter - {counter}
      </Text>
      <View style={styles.buttonWrapper}>
        <Button color="#5765F2" title="Decrease" onPress={handleDecrease} />
        <Button color="#f194ff" title="Increase" onPress={handleIncrease} />
      </View>
      <View style={styles.resetButton}>
        <Button color="#FF0000" title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tagLine: {
    fontSize: 24,
    marginBottom: 16,
    color: '#61D9FB',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  whiteText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
  darkText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
  resetButton: {
    marginTop: 8,
  },
  buttonWrapper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});

export default App;
