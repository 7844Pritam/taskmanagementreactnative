import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => router.replace('/tabs')} />
      <Button title="New user? Sign Up" onPress={() => router.push('/(auth)/signup')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 }
});
