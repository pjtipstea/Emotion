import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as GoogleSignIn from 'expo-google-sign-in';

export default class SettingScreen extends Component {

  constructor(props) {
    super(props);
    console.log("[ SettingScreen.js ]");
    console.log(global.language);

    this.state = {
      text: this.setText(),
    }
  }

  setText() {
    if (global.language == "Kor") {
      return [
        [
          "이름",
          "나이",
          "언어",
          "한글",
        ],
        [
          "피드백 작성",
          "버그 신고",
          "추가 기능 요청",
        ],
        [
          "도움말, 고객 지원",
          "개인정보 취급방침",
          "이용약관",
        ],
        [
          "로그아웃"
        ],
      ]
    } else {
      return [
        [
          "Name",
          "Age",
          "Language",
          "English",
        ],
        [
          "Give feedback",
          "Report bugs",
          "Request features",
        ],
        [
          "Help and support",
          "Privacy policy",
          "Terms of service",
        ],
        [
          "Sign out"
        ],
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
    } else if (type == 'help') {
      url = 'https://www.notion.so/Help-and-support-f272b58d41ed4be8b0c5f7af08b0a17b';
    } else if (type == 'privacy') {
      url = 'https://www.notion.so/Privacy-policy-b293ef91c91c4fd9935fd0b5216c25d7';
    } else if (type == 'terms') {
      url = 'https://www.notion.so/Terms-of-use-9ea863640e2049d8bc85fec4c2b59d70';
    }

    Linking.openURL(url);
  }

  changeLanguage(language) {
    const url = 'http://yooyu852.dothome.co.kr/scribble/changeLanguage.php'

    let data = {
      mail: global.mail,
      language: language,
    }

    console.log(global.mail)

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data }),
      }).then((response) => response.json())
        .then((responseInJson) => {
          console.log(responseInJson);
        })
    } catch (e) {
      console.warn('fetch failed', e, url);
    }
  }

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(24, 0, 169, 0.15)', 'rgba(111, 230, 255, 0.15)', 'rgba(218, 218, 218, 0.15)',]}
          style={styles.background}
        >
          <View
            style={styles.header}
          >
            <Text style={styles.headerTitle}>Account Setting</Text>
          </View>
          <View style={styles.box} >
            <View style={[styles.boxHeader, { flexDirection: 'row' }]}>
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[0][0]}
              </Text>
              <Text style={global.language == "Kor" ? styles.headerTextReverseKor : styles.headerTextReverseEng}>
                {global.nickname}
              </Text>
            </View>
            <View style={[styles.boxHeader, { flexDirection: 'row' }]}>
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[0][1]}
              </Text>
              <Text style={global.language == "Kor" ? styles.headerTextReverseKor : styles.headerTextReverseEng}>
                {global.age}
              </Text>
            </View>
            <View style={[styles.boxHeaderLast, { flexDirection: 'row' }]}>
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[0][2]}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  if (global.language == "Kor") {
                    global.language = "Eng"
                    this.changeLanguage("Eng")
                  } else {
                    global.language = "Kor"
                    this.changeLanguage("Kor")
                  }

                  this.setState({ text: this.setText() })
                }}
              >
              <Text style={global.language == "Kor" ? styles.headerTextReverseKor : styles.headerTextReverseEng}>
                {this.state.text[0][3]}
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box} >
            <TouchableOpacity
              style={styles.boxHeader}
              onPress={() => this.openLink('feedback')}
            >
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[1][0]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boxHeader}
              onPress={() => this.openLink('report')}
            >
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[1][1]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boxHeaderLast}
              onPress={() => this.openLink('request')}
            >
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[1][2]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box} >
            <TouchableOpacity
              style={styles.boxHeader}
              onPress={() => this.openLink('help')}
            >
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[2][0]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boxHeader}
              onPress={() => this.openLink('privacy')}
            >
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[2][1]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boxHeaderLast}
              onPress={() => this.openLink('terms')}
            >
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[2][2]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxSingle} >
            <TouchableOpacity
              style={styles.boxHeaderLast}
              onPress={() => this.signOutAsync()}
            >
              <Text style={global.language == "Kor" ? styles.headerTextKor : styles.headerTextEng}>
                {this.state.text[3][0]}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    padding: 10,
  },
  header: {
    height: Dimensions.get('window').height * 0.1,
    flexDirection: 'row',
    padding: 15,
    paddingTop: 20,
    alignItems: 'center',
  },
  headerTitle: {
    width: Dimensions.get('window').width - 70,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily:'Visby',
  },
  box: {
    flex: 3,
    backgroundColor: '#FFF',
    borderRadius: 20,
    margin: 10,
    padding: 20,
  },
  boxSingle: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 20,
    margin: 10,
    padding: 20,
  },
  boxHeader: {
    flex: 1,
    borderColor: '#DDD',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
  },
  boxHeaderLast: {
    flex: 1,
    borderColor: '#DDD',
  },
  headerTextEng: {
    flex: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 15,
    color: '#000',
    fontFamily:'HelveticaM',
  },
  headerTextReverseEng: {
    flex: 1,
    textAlign: 'right',
    textAlignVertical: 'center',
    fontSize: 15,
    color: '#999',
    fontFamily:'HelveticaM',
  },
  headerTextKor: {
    flex: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 15,
    color: '#000',
    fontFamily:'NotoR',
  },
  headerTextReverseKor: {
    flex: 1,
    textAlign: 'right',
    textAlignVertical: 'center',
    fontSize: 15,
    color: '#999',
    fontFamily:'NotoR',
  },
});