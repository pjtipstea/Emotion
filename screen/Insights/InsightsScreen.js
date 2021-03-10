import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default class InsightsScreen extends Component {

  constructor(props) {
    super(props);
    console.log("[ InsightsScreen.js ]");
    
    this.state = {
      text: this.setText(),
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
  
  setText() {
    if (global.language == "Kor") {
      return [
        "피드백 작성",
        "버그 신고",
        "추가 기능 요청",
      ]
    } else {
      return [
        "Give feedback",
        "Report bugs",
        "Request features",
      ]
    }
  }

  openLink(type) {
    var url;

    if (type == 'feedback') {
      url = 'https://forms.gle/ngnMAEDJmGsLySgS7';
    } else if (type == 'report') {
      url = 'https://forms.gle/N4tu3Pp3uYZw5LSN7';
    } else if (type == 'request') {
      url = 'https://forms.gle/qpQpPVnQVLheUrda7';
    }

    Linking.openURL(url);
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
            <Text style={global.language == "Kor" ? styles.headerTitleKor : styles.headerTitleEng}>Insights</Text>
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
          </View>
          <Text style={styles.subTitle}>Coming soon...</Text>
          <View style={styles.box} >
            <View style={styles.boxHeader}>
              <Text style={styles.headerText}>
                Give feedback
              </Text>
            </View>
            <View style={styles.boxContent}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.openLink('feedback')}
              >
                <View style={styles.blankSpace} />
                <Text style={global.language == "Kor" ? styles.buttonTextKor : styles.buttonTextEng}>
                  {this.state.text[0]}
                </Text>
                <View style={styles.blankSpace} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.openLink('report')}
              >
                <View style={styles.blankSpace} />
                <Text style={global.language == "Kor" ? styles.buttonTextKor : styles.buttonTextEng}>
                  {this.state.text[1]}
                </Text>
                <View style={styles.blankSpace} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.openLink('request')}
              >
                <View style={styles.blankSpace} />
                <Text style={global.language == "Kor" ? styles.buttonTextKor : styles.buttonTextEng}>
                  {this.state.text[2]}
                </Text>
                <View style={styles.blankSpace} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 7}}/>
        </LinearGradient>
      </View>
    )


    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.box}
        >
          <View style={styles.boxHeader}>
            <Text style={styles.headerText}>
              Good morning
            </Text>
          </View>
          <View style={styles.boxContent}>
            <View style={styles.contentCircle}>
            </View>
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
            <View style={styles.contentCircle}>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  blankSpace: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 10,
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
    height: Dimensions.get('window').height * 0.35,
    backgroundColor:"#FFF",
    borderRadius: 20,
    marginTop: 0,
    marginBottom: 5,
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
    color: '#000',
    fontFamily:'HelveticaM',
  },
  boxContent: {
    flex: 21,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  button: {
    flex: 1,
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#ADC6D1',
    marginTop: 10,
    marginVertical: 5,
    paddingVertical: 10,
  },
  buttonTextEng: {
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily:'HelveticaM',
  },
  buttonTextKor: {
    includeFontPadding:false,
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily:'NotoM',
  },
});