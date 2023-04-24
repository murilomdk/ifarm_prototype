import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {ThemeInitilizer} from "./utils/styles/ThemingProvider";
import NewNegotiationPage from "./pages/NewNegotiation";
import {theme} from "./utils/styles/theme";
// import ProductSelection from "./pages/ProductSelection";
import {NavigationContainer} from "@react-navigation/native";
import {TabNavigation} from "./utils/common-components/components/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeInitilizer>
        <SafeAreaView style={styles.container}>
          {/*<NewNegotiationPage/>*/}
          <TabNavigation/>
        </SafeAreaView>
      </ThemeInitilizer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    // paddingHorizontal: theme.size.md,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
});
