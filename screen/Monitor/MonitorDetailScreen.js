import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { G, Line } from 'react-native-svg'
import * as shape from 'd3-shape'

export default class MonitorDetailScreen extends Component {

  constructor(props) {
    super(props);
    console.log("[ MonitorDetailScreen.js ]");

    this.state = {
      title: props.route.params.title,
    }
  }

  

  render() {
    const data1 = [7, 17, 14, 13, 16]
    const data2 = [3, 7, 10, 8, 10]
    const data3 = [1, 3, 5, 2, 6]
    const emptyData = []
    const yData = [0, 20]
    const xData = [
      {
        value: 1
      },
      {
        value: 2
      },
      {
        value: 3
      },
      {
        value: 4
      },
      {
        value: 5
      },
    ]

    const data = [
      {
        data: data1,
        svg: { stroke: '#888' },
      },
      {
        data: data2,
        svg: { stroke: '#90CAF9', strokeWidth: 3 },
      },
      {
        data: data3,
        svg: { stroke: '#888' },
      },
      {
        data: emptyData,
      },
      {
        data: emptyData,
      },
    ]

    const Decorator = ({ x, y, data }) => {
      console.log(data[1].data)
      return data[1].data.map((value, index) => (
          <View
              key={ index }
              cx={ x(index) }
              cy={ y(value) }
              style={{backgroundColor:'#000', width : 10, height: 10, borderRadius: 10, position: 'absolute'}}
              stroke={ 'rgb(134, 65, 244)' }
              fill={ 'white' }
          />
      ))
  }

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

    const CustomGrid = ({ x, y, data, ticks }) => (
      <G>
        {
          // Horizontal grid
          ticks.map(tick => (
            <Line
              key={tick}
              x1={'0%'}
              x2={'100%'}
              y1={y(tick)}
              y2={y(tick)}
              stroke={'rgba(0,0,0,0.2)'}
            />
          ))
        }
        {
          // Vertical grid
          data.map((_, index) => (
            <Line
              key={index}
              y1={'4%'}
              y2={'96%'}
              x1={x(index)}
              x2={x(index)}
              stroke={'rgba(0,0,0,0.2)'}
            />
          ))
        }
      </G>
    )

    return (
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <View style={styles.boxHeader}>
            <Text style={styles.headerText}>
              Weekly Average
            </Text>
            <Text style={styles.headerTitle}>
              {this.state.title}
            </Text>
            <Text style={styles.headerText}>
              Jan 1 - Jan 2, 2021
            </Text>
          </View>
          <View style={styles.boxContent}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <YAxis
                data={yData}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
                numberOfTicks={4}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                  style={{ flex: 1 }}
                  data={data}
                  contentInset={verticalContentInset}
                  svg={{ stroke: 'rgb(134, 65, 244)' }}
                  yMax={20}
                  yMin={0}
                  numberOfTicks={4}
                >
                  <CustomGrid belowChart={true} />
                </LineChart>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={xData}
                  formatLabel={(value, index) => value}
                  contentInset={{ left: 10, right: 10 }}
                  svg={axesSvg}
                  xAccessor={({ item }) => item.value}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreText}>
              Latest score
            </Text>
            <Text style={styles.score}>
              14.0
            </Text>
          </View>
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
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 13,
  },
  boxContent: {
    padding: 20,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width - 20,
  },
  contentCircle: {
    flex: 1,
    backgroundColor: '#90CAF9',
    borderRadius: (Dimensions.get('window').width - 20) / 2,
  },
  scoreBox: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    flex: 1,
    margin: 20,

  },
  scoreText: {
    flex: 1,
    textAlign:'left',
    textAlignVertical: 'center',
    fontSize: 15,
  },
  score: {
    flex: 1,
    textAlign:'right',
    textAlignVertical: 'center',
    fontSize: 15,
  },
});