import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import SignInFormPage from "./pages/SignInFormPage";
import {useTheme} from "react-native-paper";
import {ThemeInitilizer} from './utils/styles/ThemingProvider';
import ProfileSignInPage from "./pages/ProfileSignInPage";
import NewNegotiationPage from "./pages/NewNegotiation";
import LoginPage from "./pages/LoginPage";
import {theme} from "./utils/styles/theme";
import ProductSelection from "./pages/ProductSelection";
import PropertySelection from "./pages/PropertySelection";


export default function App() {
    // const theme = useTheme();
    return (

        <ThemeInitilizer>
            <SafeAreaView style={styles.container}>
            {/*        <LoginPage />*/}
            {/*        <SignInFormPage/>*/}
            {/*        <ProfileSignInPage />*/}
                    {/*<NewNegotiationPage/>*/}
                    {/*<ProfileSignInPage />*/}
                {/*<ProductSelection />*/}
                <PropertySelection />
            </SafeAreaView>
        </ThemeInitilizer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.size.md,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    }
});
