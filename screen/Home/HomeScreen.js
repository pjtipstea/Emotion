import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    console.log("[ HomeScreen.js ]");
  }

  state = {
    name: "",
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => this.props.navigation.navigate('Main')}
        >
          <View style={styles.boxHeader}>
            <Text style={styles.headerText}>
              Good morning
            </Text>
          </View>
          <View style={styles.boxContent}>
            <LinearGradient
              colors={['#82ABD6', '#BADEFE']}
              style={styles.contentCircle}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
        >
          <View style={styles.boxHeader}>
            <Text style={styles.headerText}>
              How are you doing?
            </Text>
          </View>
          <View style={styles.boxContent}>
            <LinearGradient
              colors={['#C87E07', '#FDAC2A']}
              style={styles.contentCircle}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
  },
  box: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  boxHeader: {
    margin: 20,
    paddingLeft: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor:'#DDD',
  },
  headerText: {
    textAlign: 'left',
  },
  boxContent: {
    padding: 50,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width - 20,
  },
  contentCircle: {
    flex: 1,
    borderRadius: (Dimensions.get('window').width - 20) / 2,
  },
});