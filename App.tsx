import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from "./pages/LoginPage";
import ProfileSignInPage from "./pages/ProfileSignInPage";
import SignInFormPage from "./pages/SignInFormPage";
import { useTheme, Provider as PaperProvider } from "react-native-paper";


export default function App() {
  const theme = useTheme();
  return (
      <PaperProvider theme={theme}>
        <View>
          {/*<LoginPage />*/}
          {/*<ProfileSignInPage />*/}
          <SignInFormPage />
        </View>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
