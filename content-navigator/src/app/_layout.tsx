import { Stack } from "expo-router";
import "../../global.css";
import { UserProvider } from "../context/useUsers";

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
