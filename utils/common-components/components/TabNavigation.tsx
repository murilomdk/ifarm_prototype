import React from "react";
import LoginPage from "../../../pages/LoginPage";
import {theme} from "../../styles/theme";
import ProfileSignInPage from "../../../pages/ProfileSignInPage";
import ProductSelection from "../../../pages/ProductSelection";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const TabNavigation: React.FC = () => {
    return (
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
    )
}
