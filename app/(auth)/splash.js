import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        router.replace('/tabs'); // Redirect to Bottom Navigation
      } else {
        router.replace('/(auth)/login'); // Redirect to Login Screen
      }
    };
    setTimeout(checkAuth, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Manager</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
