import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./src/context/AuthContex";
import { StackNavigator } from "./src/navigation/stack";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <AuthProvider>
          <SafeAreaProvider>
            <StackNavigator />
            <StatusBar />
          </SafeAreaProvider>
        </AuthProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
