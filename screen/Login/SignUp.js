import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    console.log("[ SignUpScreen.js ]");

    this.state = {
      mail: this.props.route.params.mail,
      name: this.props.route.params.name,
      nickname: "",
      gender: "Male",
      age: "",
      text: this.setText(),
    }
  }

  setText() {
    if (global.language == "Kor") {
      return [
        "당신에 대해 좀 더 알아가고 싶어요",
        "닉네임",
        "나이",
        [
          "남성",
          "여성",
          "기타",
          "말하고 싶지 않아요",
        ],
      ]
    } else {
      return [
        "Tell us a bit about yourself",
        "Your nickname",
        "Your age",
        [
          "Male",
          "Female",
          "Other",
          "Prefer not to say",
        ],
      ]
    }
  }

  sendDataToServer() {
    const url = 'http://yooyu852.dothome.co.kr/scribble/addUser.php'

    let data = {
      mail: this.state.mail,
      name: this.state.name,
      nickname: this.state.nickname,
      gender: this.state.gender,
      age: this.state.age,
      language: global.language,
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
          this.props.navigation.navigate('Menu')
        })
    } catch (e) {
      console.warn('fetch failed', e, url);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(24,0,169,0.05)', 'rgba(111,230,255,0.05)', 'rgba(218,218,218,0.05)',]}
          style={styles.background}
        >
          <View style={styles.header}>
            <Text style={global.language == "Kor" ? styles.headerTitleKor : styles.headerTitleEng}>{this.state.text[0]}</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={global.language == "Kor" ? styles.inputKor : styles.inputEng}
              onChangeText={text => this.setState({ nickname : text})}
              placeholder={this.state.text[1]}
            />
            <TextInput
              style={global.language == "Kor" ? styles.inputKor : styles.inputEng}
              onChangeText={text => this.setState({ age : text})}
              placeholder={this.state.text[2]}
            />
            <Picker
              selectedValue={this.state.gender}
              style={global.language == "Kor" ? styles.inputKor : styles.inputEng}
              mode={'dialog'}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ gender: itemValue })
              }>
              <Picker.Item label={this.state.text[3][0]} value="Male" />
              <Picker.Item label={this.state.text[3][1]} value="Female" />
              <Picker.Item label={this.state.text[3][2]} value="Other" />
              <Picker.Item label={this.state.text[3][3]} value="Prefer not to say" />
            </Picker>
          </View>
          <View style={styles.buttonBox}>
            <View style={{flex: 4}}/>
            <TouchableOpacity
              onPress={() => this.sendDataToServer()}
              style={styles.button}
            >
              <Image
                style={{ width: Dimensions.get('window').width * 0.13, height: Dimensions.get('window').width * 0.13 }}
                source={require('../../assets/icon/next.png')}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
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
  header: {
    height: Dimensions.get('window').height * 0.12,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'flex-end',
  },
  headerTitleEng: {
    width: Dimensions.get('window').width - 70,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily:'Visby',
  },
  headerTitleKor: {
    width: Dimensions.get('window').width - 70,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily:'Jua',
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputBox: {
    flex: 8,
    padding: 20,
    paddingTop: 0,
  },
  inputEng: {
    width: '95%',
    height: Dimensions.get('window').height * 0.1,
    
    borderColor:'#D9D9D9',
    fontSize: 18,
    fontFamily:'HelveticaR',
  },
  inputKor: {
    width: '95%',
    height: Dimensions.get('window').height * 0.1,
    
    borderColor:'#D9D9D9',
    fontSize: 18,
    fontFamily:'NotoR',
  },
  buttonBox: {
    flex: 1,
    flexDirection:'row',
  },
  button: {
    flex: 1,
  }
});