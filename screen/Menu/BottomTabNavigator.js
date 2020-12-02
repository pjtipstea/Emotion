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

export default function BottomTabNavigator({ navigation, route }) {
    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'grey',
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                initialParams={{ set: true }}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => focused ? <AntDesign name="home" size={24} color="black" /> : <AntDesign name="home" size={24} color="grey" />
                }}
            />
            <BottomTab.Screen
                name="Insights"
                component={InsightsScreen}
                options={{
                    title: '활동',
                    tabBarIcon: ({ focused }) => focused ? <SimpleLineIcons name="graph" size={24} color="black" /> : <SimpleLineIcons name="graph" size={24} color="grey" />
                }}
            />
            <BottomTab.Screen
                name="Monitor"
                component={MonitorScreen}
                options={{
                    title: '공지사항',
                    tabBarIcon: ({ focused }) => focused ? <Entypo name="compass" size={24} color="black" /> : <Entypo name="compass" size={24} color="grey" />
                }}
            />
            <BottomTab.Screen
                name="Entries"
                component={EntriesScreen}
                options={{
                    title: '내정보',
                    tabBarIcon: ({ focused }) => focused ? <MaterialCommunityIcons name="calendar-month" size={24} color="black" /> : <MaterialCommunityIcons name="calendar-month" size={24} color="grey" />
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