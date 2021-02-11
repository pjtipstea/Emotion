import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ImageBackground, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as GoogleSignIn from 'expo-google-sign-in';

export default class Login extends Component {

  constructor(props) {
    super(props);
    console.log("[ LoginScreen.js ]");

    this.state = {
      text: this.setText(),
      mail: "",
      name: "yoon",
    }

  }

  state = { user: null };

  setText() {
    if (global.language == "Kor") {
      return [
        [
          "안녕하세요.",
          "Piece of mind 입니다.",
          "로그인 후 더 많은 기능을 이용해보세요.",
        ],
        [
          "편리하고 간단한", "감정일기",
          "임상적으로", "정확한 분석",
          "안심할 수 있는", "데이터 보안",
        ],
      ]
    } else {
      return [
        [
          "Welcome to",
          "Piece of mind",
          "Create an account or sign in.",
        ],
        [
          "Mood and activity", "reflection",
          "Clinically accurate", "insights",
          "Data safe and", "secure",
        ],
      ]
    }
  }

  componentDidMount() {
    this.initAsync();
  }

  initAsync = async () => {
    var clientId = '';
    if (Platform.OS === 'android') {
      // for android
      clientId = '591844925241-mcrr2oj48bd7ma87bhr8qh4i1hb3m2mn.apps.googleusercontent.com';
    } else if (Platform.OS === 'ios' || Platform.OS === 'macos') {
      // for ios
      clientId = '591844925241-fn9okvjoohiabq2ad6kqoc2pavmbbo34.apps.googleusercontent.com';
    }

    try {
      await GoogleSignIn.initAsync({
        behavior: "web",
        clientId: clientId,
        scopes: ['profile', 'email'],
      });
      this._syncUserWithStateAsync();
    } catch ({ message }) {
      alert('GoogleSignIn.initAsync(): ' + message);
    }
    
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });

    var name = user.firstName + " " + user.lastName;

    this.setState({ mail: user.email, name: name });

    global.mail = user.email;
    this.checkUser(user.email);
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.setState({ user: null });
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  checkUser(mail) {
    const url = 'http://yooyu852.dothome.co.kr/scribble/checkUser.php'

    let data = {
      mail: mail,
    }

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data }),
      })
        .then((response) => response.json())
        .then((responseInJson) => {
          console.log(responseInJson.result);
          if (responseInJson.result) {
            global.nickname = responseInJson.result[2];
            global.age = responseInJson.result[5];
            global.language = responseInJson.result[7];
            console.log(global.language);
            this.props.navigation.navigate('Menu')
          } else {
            this.props.navigation.navigate('SignUp', {mail : mail, name: this.state.name})
          }
        })
    } catch (e) {
      console.warn('fetch failed', e, url);
    }
  }

  openLink(type) {
    var url;

    if (global.language == "Kor") {
      if (type == 'privacy') {
        url = 'https://www.notion.so/228f55554fa3459cb406b44ff4305484';
      } else if (type == 'terms') {
        url = 'https://www.notion.so/e0781144a6f6464fa34855d1cf0a8539';
      }
    } else {
      if (type == 'privacy') {
        url = 'https://www.notion.so/Privacy-policy-b293ef91c91c4fd9935fd0b5216c25d7';
      } else if (type == 'terms') {
        url = 'https://www.notion.so/Terms-of-use-9ea863640e2049d8bc85fec4c2b59d70';
      }
    }

    Linking.openURL(url);
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(24,0,169,0.05)', 'rgba(111,230,255,0.05)', 'rgba(218,218,218,0.05)',]}
          style={styles.background}
        >
          <View style={{ flex: 2 }} />
          <View style={styles.headerBox}>
            <Text style={global.language == "Kor" ? styles.titleKor : styles.titleEng}>{this.state.text[0][0]}</Text>
            <Text style={global.language == "Kor" ? styles.titleKor : styles.titleEng}>{this.state.text[0][1]}</Text>
            <Text style={global.language == "Kor" ? styles.subTitleKor : styles.subTitleEng}>{this.state.text[0][2]}</Text>
          </View>
          <View style={styles.iconBox}>
            <View style={styles.iconSet}>
              <View style={styles.iconShadow}>
                <Image
                  style={styles.icon}
                  source={require('../../assets/icon/icon_1.png')}
                />
              </View>
              <Text style={global.language == "Kor" ? styles.iconTextKor : styles.iconTextEng}>{this.state.text[1][0]}{'\n'}{this.state.text[1][1]}</Text>
            </View>
            <View style={styles.iconSet}>
              <View style={styles.iconShadow}>
                <Image
                  style={styles.icon}
                  source={require('../../assets/icon/icon_2.png')}
                />
              </View>
              <Text style={global.language == "Kor" ? styles.iconTextKor : styles.iconTextEng}>{this.state.text[1][2]}{'\n'}{this.state.text[1][3]}</Text>
            </View>
            <View style={styles.iconSet}>
              <View style={styles.iconShadow}>
                <Image
                  style={styles.icon}
                  source={require('../../assets/icon/icon_3.png')}
                />
              </View>
              <Text style={global.language == "Kor" ? styles.iconTextKor : styles.iconTextEng}>{this.state.text[1][4]}{'\n'}{this.state.text[1][5]}</Text>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                //this.props.navigation.navigate('Menu')
                this.signInAsync();
              }}
            >
              <ImageBackground
                style={styles.buttonIcon}
                source={require('../../assets/icon/google_icon.png')}
              />
              <Text style={styles.buttonText}>Continue with Google</Text>
              <View style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomBox}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.bottomText}>By signing up, you agree to the </Text>
              <Text
                style={styles.bottomTextLink}
                onPress={() => this.openLink('terms')}
              >
                Terms of
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={styles.bottomTextLink}
                onPress={() => this.openLink('terms')}
              >
                Service
              </Text>
              <Text style={styles.bottomText}> and </Text>
              <Text
                style={styles.bottomTextLink}
                onPress={() => this.openLink('privacy')}
              >
                Privacy Policy
              </Text>
            </View>

          </View>
        </LinearGradient>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    padding: 10,
  },
  headerBox: {
    flex: 7,
    padding: 18,
  },
  titleEng: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 2,
    fontFamily:'Visby',
  },
  titleKor: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 2,
    fontFamily:'Jua',
  },
  subTitleEng: {
    fontSize: 15,
    margin: 3,
    marginTop: 10,
    color: '#666666',
    fontFamily:'HelveticaR',
  },
  subTitleKor: {
    fontSize: 15,
    margin: 3,
    marginTop: 10,
    color: '#666666',
    fontFamily:'NotoR',
  },
  iconBox: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  iconSet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  icon: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 0.11,
    height: Dimensions.get('window').width * 0.11,
    margin: 10,
    marginBottom: 20,
    borderRadius: 500,
    opacity: 0.99,
  },
  iconTextEng: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#747474',
    fontFamily:'HelveticaR',
  },
  iconTextKor: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#747474',
    fontFamily:'NotoR',
  },
  buttonBox: {
    flex: 3,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '94%',
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: '#FFF',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Dimensions.get('window').height * 0.04,
    paddingHorizontal: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  buttonIcon: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    opacity: 0.99,
  },
  buttonText: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    fontFamily:'HelveticaM',
  },
  bottomBox: {
    flex: 2,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 12,
    color: '#666666',
    fontFamily:'HelveticaR',
  },
  bottomTextLink: {
    fontSize: 12,
    color: '#444444',
    fontFamily:'HelveticaM',
  },
});