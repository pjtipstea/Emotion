import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign, SimpleLineIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

import HomeScreen from './HomeScreen';
import InsightsScreen from './InsightsScreen';
import MonitorScreen from './MonitorScreen';
import EntriesScreen from './EntriesScreen';
import { HeaderTitle } from '@react-navigation/stack';

export default function BottomTabNavigator({ navigation, route }) {
    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: '#999',
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                initialParams={{ set: true }}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => focused ? <AntDesign name="home" size={24} color="black" /> : <AntDesign name="home" size={24} color="#999" />,
                }}

            />
            <BottomTab.Screen
                name="Insights"
                component={InsightsScreen}
                options={{
                    title: 'Insights',
                    tabBarIcon: ({ focused }) => focused ? <SimpleLineIcons name="graph" size={24} color="black" /> : <SimpleLineIcons name="graph" size={24} color="#999" />
                }}
            />
            <BottomTab.Screen
                name="Monitor"
                component={MonitorScreen}
                options={{
                    title: 'Monitor',
                    tabBarIcon: ({ focused }) => focused ? <Entypo name="compass" size={24} color="black" /> : <Entypo name="compass" size={24} color="#999" />
                }}
            />
            <BottomTab.Screen
                name="Entries"
                component={EntriesScreen}
                options={{
                    title: 'Entries',
                    tabBarIcon: ({ focused }) => focused ? <MaterialCommunityIcons name="calendar-month" size={24} color="black" /> : <MaterialCommunityIcons name="calendar-month" size={24} color="#999" />
                }}
            />
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});