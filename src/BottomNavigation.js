import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screen/TabScreen/Home';
import Discover from './screen/TabScreen/Discover';
import Music from './screen/TabScreen/Music';
import Profile from './screen/TabScreen/Profile';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

function MyBottomTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "white",
                inactiveTintColor: '#bebebe',
                showIcon: true,
                showLabel: false,
                style: {
                    backgroundColor: '#000',
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="folder-video" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Music"
                component={Music}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="music" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default function BottomNavigation() {
    return (
        <MyBottomTab />
    );
}