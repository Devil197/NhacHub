import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import
import BottomNavigation from './BottomNavigation';
import SearchPage from './screen/SearchPage';
import Login from './screen/Login';
import Login1 from './screen/Login1';
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode="none"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name="BottomNavigation"
                component={BottomNavigation}
            />
            <Stack.Screen
                name="SearchPage"
                component={SearchPage}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Login1"
                component={Login1}
            />
        </Stack.Navigator>
    );
}
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}