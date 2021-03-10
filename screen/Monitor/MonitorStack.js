import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MonitorScreen from './MonitorScreen';
import MonitorDetailScreen from './MonitorDetailScreen';

const MonitorStack = createStackNavigator();

export default function MonitorStackScreen({ navigation, route }) {
    return (
        <MonitorStack.Navigator
          screenOptions={{
            headerRight: () => (
              <TouchableOpacity
                //onPress={() => navigation.navigate('알림', {params : {set:true}})}
                style={styles.rightIconContainer}>
                <Ionicons
                  name='md-person'
                  size={30}
                  style={{ marginBottom: -3 }}
                  color={'#000'}
                />
              </TouchableOpacity>
            ),
            headerBackground: () => (
                <LinearGradient
                  colors={['#DDD', '#999']}
                  style={{ flex: 1 }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                />
            ),
            headerLeft: null,
            headerTintColor: '#000',
            headerTitleStyle: {fontSize:30},
            headerShown: false
          }}
        >
          <MonitorStack.Screen name='Monitor' component={MonitorScreen} />
          <MonitorStack.Screen name='MonitorDetail' component={MonitorDetailScreen} />
        </MonitorStack.Navigator>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    leftIconContainer: {
      flexDirection: "row",
      justifyContent: 'center',
      width: 130,
      resizeMode: 'contain',
      marginLeft: 25,
    },
    rightIconContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: 80,
    }
  });