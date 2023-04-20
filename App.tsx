import {View} from 'react-native';
import SignInFormPage from "./pages/SignInFormPage";
import {useTheme} from "react-native-paper";
import {ThemeInitilizer} from './utils/styles/ThemingProvider';


export default function App() {
    const theme = useTheme();
    return (

        <ThemeInitilizer>
            <View>
                <SignInFormPage/>
            </View>
        </ThemeInitilizer>
    );
}
