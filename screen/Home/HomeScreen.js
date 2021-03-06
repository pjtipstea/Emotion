import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font'

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    console.log("[ HomeScreen.js ]");

    this.state = {
      text: this.setText(),
    }
  }

  setText() {
    if (global.language == "Kor") {
      return [
        "Daily reflection",
        "오늘의 감정기록 시작",
      ]
    } else {
      return [
        "How are you feeling today?",
        "Begin today's reflection",
      ]
    }
  }

  componentDidUpdate() {
    if (this.props.route.params?.set) {
      if (this.props.route.params.set) {
        this.props.route.params.set = false;
        this.setState({ text : this.setText() })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(24, 0, 169, 0.05)', 'rgba(111, 230, 255, 0.05)', 'rgba(218, 218, 218, 0.05)',]}
          style={styles.background}
        >
          <View
            style={styles.header}
          >
            <Text style={global.language == "Kor" ? styles.headerTitleKor : styles.headerTitleEng}>Home</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Setting', { params: { set: true } })}
              style={styles.rightIconContainer}>
              <Ionicons
                name='md-person'
                size={30}
                style={{ marginBottom: 5, }}
                color={'#000'}
              />
            </TouchableOpacity>
            <StatusBar style = "auto" />
          </View>
          <Text style={styles.subTitle}>Today</Text>
          <LinearGradient
            // Background Linear Gradient
            colors={['rgba(3,106,215,1)', 'rgba(58,155,255,1)', 'rgba(120,134,255,1)',]}
            start={[0.0, 0.0]}
            end={[0.8, 1.0]}
            style={styles.box}
          >
            <View style={styles.boxHeader}>
              <Text style={styles.headerText}>
                {this.state.text[0]}
              </Text>
            </View>
            <View style={styles.boxContent}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Main', { version: global.language })}
              >
                <View style={styles.blankSpace} />
                <Text style={global.language == "Kor" ? styles.buttonTextKor : styles.buttonTextEng}>
                  {this.state.text[1]}
                </Text>
                <View style={styles.blankSpace} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </LinearGradient>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    padding: 10,
  },
  blankSpace: {
    flex: 1,
  },
  header: {
    height: Dimensions.get('window').height * 0.12,
    flexDirection: 'row',
    padding: 10,
    paddingTop: 15,
    alignItems: 'flex-end',
  },
  headerTitleEng: {
    width: Dimensions.get('window').width - 70,
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily:'Visby',
  },
  headerTitleKor: {
    includeFontPadding:false,
    width: Dimensions.get('window').width - 70,
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily:'Visby',
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  subTitle: {
    marginHorizontal: 10,
    marginVertical: 20,
    fontSize: 24,
    fontFamily:'HelveticaM',
  },
  box: {
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 20,
    marginTop: 0,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 20,
  },
  boxHeader: {
    flex: 3,
    paddingHorizontal: 5,
    borderColor: '#DDD',
    borderBottomWidth: 1,
  },
  headerText: {
    flex: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 18,
    color: '#FFF',
    fontFamily:'HelveticaM',
  },
  boxContent: {
    flex: 10,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginTop:10,
    paddingVertical: 20,
  },
  buttonTextEng: {
    color: 'rgb(1, 87, 172)',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily:'HelveticaM',
  },
  buttonTextKor: {
    includeFontPadding:false,
    color: 'rgb(1, 87, 172)',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily:'NotoM',
  },
});