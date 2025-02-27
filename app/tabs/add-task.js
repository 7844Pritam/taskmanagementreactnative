import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTaskScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <TextInput style={styles.input} placeholder="Task Title" />
      <TextInput style={styles.input} placeholder="Task Description" />
      <Button title="Submit" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 }
});
