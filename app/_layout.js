import { Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)/splash" />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/signup" />
        <Stack.Screen name="(tabs)" />
      </Stack>i
    </AuthProvider>
  );
}
