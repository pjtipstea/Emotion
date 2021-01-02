import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

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
      ]
    };
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
    backgroundColor: '#DDD',
  },
  box: {
    flex: 1,
    borderRadius: 20,
  },
  boxHeader: {
    margin: 10,
    paddingLeft: 5,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold'
  },
  touchBox: {
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').height * 0.29,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#DDEDFE',
  },
  cardTop: {
    flex: 1,
    flexDirection: 'row',
  },
  progress: {
    width: Dimensions.get('window').width * 0.085,
    height: Dimensions.get('window').width * 0.085,
  },
  progressCircle: {
    flex: 1,
    width: Dimensions.get('window').width * 0.08,
    height: Dimensions.get('window').width * 0.08,
    opacity: 0.85,
  },
  cardBottom: {
    flex: 5,
  },
  cardText: {
    flex: 1,
    textAlignVertical: 'bottom',
    fontSize: 15,
  },
  boxContent: {
    padding: 50,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width - 20,
  },
  contentCircle: {
    flex: 1,
    backgroundColor: '#90CAF9',
    borderRadius: (Dimensions.get('window').width - 20) / 2,
  },
});