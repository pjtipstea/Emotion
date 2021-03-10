import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { AntDesign, SimpleLineIcons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

import { HeaderTitle } from '@react-navigation/stack';
import HomeStack from '../Home/HomeStack';
import InsightsStack from '../Insights/InsightsStack';
import MonitorStack from '../Monitor/MonitorStack';
import EntiresStack from '../Entries/EntriesStack';

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={Platform.OS == 'android' ?
        {
        activeTintColor: 'black',
        inactiveTintColor: '#999',
        style: {height: 70},
        tabStyle: {height: 70, paddingVertical: 15},
        labelStyle: {fontSize: 13, margin: 0, padding: 0, fontFamily:'Visby'},
        showLabel: true,
        }
      :
        {
          activeTintColor: 'black',
          inactiveTintColor: '#999',
          style: {height: 110},
          tabStyle: {height: 85, paddingVertical: 15},
          labelStyle: {fontSize: 13, margin: 0, padding: 0, fontFamily:'Visby'},
          showLabel: true,
        }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        initialParams={{ set: true }}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => focused ? <Feather name="home" size={22} color="black" /> : <Feather name="home" size={22} color="#999" />,
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('HomeStack', {screen: 'Home', params: {set: true}})
          }
        })}
      />
      <BottomTab.Screen
        name="InsightsStack"
        component={InsightsStack}
        initialParams={{ set: true }}
        options={{
          title: 'Insights',
          tabBarIcon: ({ focused }) => focused ? <MaterialCommunityIcons name="lightbulb-outline" size={24} color="black" /> : <MaterialCommunityIcons name="lightbulb-outline" size={24} color="#999" />
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('InsightsStack', {screen: 'Insights', params: {set: true}})
          }
        })}
      />
      <BottomTab.Screen
        name="MonitorStack"
        component={MonitorStack}
        initialParams={{ set: true }}
        options={{
          title: 'Monitor',
          tabBarIcon: ({ focused }) => focused ? <Feather name="activity" size={22} color="black" /> : <Feather name="activity" size={22} color="#999" />
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('MonitorStack', {screen: 'Monitor', params: {set: true}})
          }
        })}
      />
      <BottomTab.Screen
        name="EntriesStack"
        component={EntiresStack}
        initialParams={{ set: true }}
        options={{
          title: 'Entries',
          tabBarIcon: ({ focused }) => focused ? <Feather name="calendar" size={22} color="black" /> : <Feather name="calendar" size={22} color="#999" />
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('EntriesStack', {screen: 'Entries', params: {set: true}})
          }
        })}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});