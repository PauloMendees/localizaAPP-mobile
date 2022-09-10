import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./src/context/AuthContex";
import { StackNavigator } from "./src/navigation/stack";
import { SheetContextProvider } from "./src/context/ActionSheetContext";
import { SnackbarProvider } from "./src/context/SnackbarContext";
import { BarCodeProvider } from "./src/context/BarCodeContext";
import { CameraProvider } from "./src/context/CameraContext";

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
        <SnackbarProvider>
          <AuthProvider>
            <CameraProvider>
              <BarCodeProvider>
                <SafeAreaProvider>
                  <SheetContextProvider>
                    <StackNavigator />
                  </SheetContextProvider>
                </SafeAreaProvider>
              </BarCodeProvider>
            </CameraProvider>
          </AuthProvider>
        </SnackbarProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
