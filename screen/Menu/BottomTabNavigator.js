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
import HomeStack from '../Home/HomeStack';
import InsightsStack from '../Insights/InsightsStack';
import MonitorStack from '../Monitor/MonitorStack';
import EntiresStack from '../Entries/EntriesStack';

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
                name="HomeStack"
                component={HomeStack}
                initialParams={{ set: true }}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => focused ? <AntDesign name="home" size={24} color="black" /> : <AntDesign name="home" size={24} color="#999" />,
                }}

            />
            <BottomTab.Screen
                name="InsightsStack"
                component={InsightsStack}
                options={{
                    title: 'Insights',
                    tabBarIcon: ({ focused }) => focused ? <SimpleLineIcons name="graph" size={24} color="black" /> : <SimpleLineIcons name="graph" size={24} color="#999" />
                }}
            />
            <BottomTab.Screen
                name="MonitorStack"
                component={MonitorStack}
                options={{
                    title: 'Monitor',
                    tabBarIcon: ({ focused }) => focused ? <Entypo name="compass" size={24} color="black" /> : <Entypo name="compass" size={24} color="#999" />
                }}
            />
            <BottomTab.Screen
                name="EntriesStack"
                component={EntiresStack}
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