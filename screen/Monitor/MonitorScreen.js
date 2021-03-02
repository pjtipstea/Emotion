import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default class MonitorScreen extends Component {

  constructor(props) {
    super(props);
    console.log("[ MonitorScreen.js ]");

    this.state = {
      title : [
        [
          {
            title: 'Depressed Mood',
            progress: 0.7,
          },
          {
            title: 'Feelings of Anxiety',
            progress: 0.3,
          },
          {
            title: 'Positive Feelings',
            progress: 0.9,
          },
        ],
        [
          {
            title: 'Beliefs about Yourself',
            progress: 0.9,
          },
          {
            title: 'Beliefs about Others',
            progress: 0.55,
          },
          {
            title: 'Self-esteem',
            progress: 0.2,
          },
        ],
        [
          {
            title: 'Anxiety',
            progress: 0.9,
          },
          {
            title: 'Depression',
            progress: 0.5,
          },
        ],
      ],
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

  createList(index) {
    var color = [
      [
        '#DDEDFE',
        '#BFDEFE',
        '#CBF5FE',
      ],
      [
        '#FDBF2D',
        '#FEE59D',
        '#FDBF2D',
      ],
      [
        '#EB7D3C',
        '#EB6F2E',
      ],
    ];

    return (
      this.state.title[index].map((value, i) => (
        <TouchableOpacity
          key={index * 3 + i}
          style={{
            width: Dimensions.get('window').width * 0.35,
            height: Dimensions.get('window').height * 0.29,
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            padding: 10,
            backgroundColor: color[index][i],
          }}
          onPress={() => this.props.navigation.navigate('MonitorDetail', { title: value.title })}
        >
          <View style={styles.cardTop}>
            <View style={{ flex: 3 }} />
            <View style={styles.progress}>
              <ProgressCircle
                style={styles.progressCircle}
                progress={value.progress}
                progressColor={'#FFF'}
                backgroundColor={'none'}
                startAngle={0}
                endAngle={Math.PI * 2}
                strokeWidth={4}
              />
            </View>
          </View>
          <View style={styles.cardBottom}>
            <Text style={styles.cardText}>
              {value.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(24, 0, 169, 0.15)', 'rgba(111, 230, 255, 0.15)', 'rgba(218, 218, 218, 0.15)',]}
          style={styles.background}
        >
          <View
            style={styles.header}
          >
            <Text style={global.language == "Kor" ? styles.headerTitleKor : styles.headerTitleEng}>Monitor</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Setting', { params: { set: true } })}
              style={styles.rightIconContainer}>
              <Ionicons
                name='md-person'
                size={30}
                style={{ marginBottom: -3, }}
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
        <View style={styles.box}>
          <View style={styles.boxHeader}>
            <Text style={styles.headerText}>
              Mood
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          >
            <View style={styles.touchBox}>
              {this.createList(0)}
            </View>
          </ScrollView>
        </View>
        <View style={styles.box}>
          <View style={styles.boxHeader}>
            <Text style={styles.headerText}>
              Beliefs
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          >
            <View style={styles.touchBox}>
              {this.createList(1)}
            </View>
          </ScrollView>
        </View>
        <View style={styles.box}>
          <View style={styles.boxHeader}>
            <Text style={styles.headerText}>
              Life
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          >
            <View style={styles.touchBox}>
              {this.createList(2)}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
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
    width: Dimensions.get('window').width - 70,
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily:'Jua',
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  subTitle: {
    marginHorizontal: 10,
    marginVertical: 25,
    fontSize: 24,
    fontFamily:'HelveticaM',
  },
  box: {
    flex: 5,
    backgroundColor:"#FFF",
    borderRadius: 20,
    marginTop: 5,
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
    marginVertical: 7,
  },
  buttonTextEng: {
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily:'HelveticaM',
  },
  buttonTextKor: {
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontFamily:'NotoM',
  },
});