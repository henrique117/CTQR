import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QrCodeScreen } from "../screens";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: colors.darkBlue,
                tabBarActiveTintColor: colors.white,
                tabBarInactiveBackgroundColor: colors.darkBlue,
                tabBarInactiveTintColor: colors.white,
            }}
        >
            <Tab.Screen
                name="QR CODE"
                component={QrCodeScreen}
                options={{
                    tabBarIcon: () => (
                        null
                    ),
                }}
            />
        </Tab.Navigator>

    );
}