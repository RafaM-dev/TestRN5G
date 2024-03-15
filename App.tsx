import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/presentation/navigation/StackNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "./src/styles";
import { StatusBar } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import Constants from "expo-constants";


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor='#210049' />
      <Theme>
        <NavigationContainer>
          <ToastProvider
            offsetTop={Constants.statusBarHeight}
            placement="top"
            dangerColor="#EF5350"
            successColor="#198754"
          >
            <StackNavigator />
          </ToastProvider>
        </NavigationContainer>
      </Theme>
    </SafeAreaView>
  );
}