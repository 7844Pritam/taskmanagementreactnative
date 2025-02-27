import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* ✅ Force the app to start at Splash */}
      <Stack.Screen name="(auth)/splash" options={{ title: 'Splash' }} initialRouteName="(auth)/splash" />
      <Stack.Screen name="(auth)/login" options={{ title: 'Login' }} />
      <Stack.Screen name="(tabs)" options={{ title: 'Home' }} />
    </Stack>
  );
}
