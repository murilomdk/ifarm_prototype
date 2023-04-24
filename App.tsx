import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import SignInFormPage from "./pages/SignInFormPage";
import { useTheme } from "react-native-paper";
import { ThemeInitilizer } from "./utils/styles/ThemingProvider";
import ProfileSignInPage from "./pages/ProfileSignInPage";
import NewNegotiationPage from "./pages/NewNegotiation";
import LoginPage from "./pages/LoginPage";
import { theme } from "./utils/styles/theme";
// import ProductSelection from "./pages/ProductSelection";
import PropertySelection from "./pages/PropertySelection";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductSelection from "./pages/ProductSelection";

const Tab = createBottomTabNavigator();

export default function App() {
  // const theme = useTheme();
  return (
    <NavigationContainer>
      <ThemeInitilizer>
        <SafeAreaView style={styles.container}>
          <Tab.Navigator sceneContainerStyle={{ backgroundColor: 'white'}} screenOptions={{
            headerShown: false,
          }}>
            <Tab.Screen name="Início" component={LoginPage} options={{
              tabBarActiveTintColor: theme.colors.primary,
              tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size}/>
              )
            }} />
            <Tab.Screen name="Desempenho" component={ProfileSignInPage} options={{
              tabBarActiveTintColor: theme.colors.primary,
              tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="speedometer" color={color} size={size} />
              )
            }} />
            <Tab.Screen name="Produtos" component={ProductSelection} options={{
              tabBarActiveTintColor: theme.colors.primary,
              tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cart" color={color} size={size} />
              )
            }}/>
            <Tab.Screen name="Loja" component={ProfileSignInPage} options={{
              tabBarActiveTintColor: theme.colors.primary,
             tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="storefront" color={color} size={size} />
              )
            }}/>
          </Tab.Navigator>
          {/*        <LoginPage />*/}
          {/*        <SignInFormPage/>*/}
          {/*        <ProfileSignInPage />*/}
          {/*<NewNegotiationPage/>*/}
          {/*<ProfileSignInPage />*/}
          {/*<ProductSelection />*/}
          {/*<PropertySelection />*/}
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
