import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{ padding: 20, gap: 40 }}>
      <Text>App</Text>
      <Button title='contoh button' />
      <TouchableOpacity
        onPress={() => alert('ini bisa diklik')}
        style={styles.button}
      >
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>
          ini bisa diklik
        </Text>
      </TouchableOpacity>
      <Pressable style={styles.button} onPress={() => alert('ini pressable')}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>ini pressable</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
  },
});
