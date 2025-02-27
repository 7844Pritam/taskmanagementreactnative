import { View, Text, FlatList, StyleSheet } from 'react-native';

const tasks = [
  { id: '1', title: 'Task 1' },
  { id: '2', title: 'Task 2' },
  { id: '3', title: 'Task 3' }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.task}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  task: { fontSize: 18, padding: 10, backgroundColor: '#f0f0f0', marginVertical: 5 }
});
