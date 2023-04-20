import {View} from 'react-native';
import SignInFormPage from "./pages/SignInFormPage";
import {useTheme} from "react-native-paper";
import {ThemeInitilizer} from './utils/styles/ThemingProvider';
import ProfileSignInPage from "./pages/ProfileSignInPage";
import LoginPage from "./pages/LoginPage";


export default function App() {
    // const theme = useTheme();
    return (

        <ThemeInitilizer>
            <View>
                <LoginPage />
                {/*<SignInFormPage/>*/}
                {/*<ProfileSignInPage />*/}
            </View>
        </ThemeInitilizer>
    );
}
