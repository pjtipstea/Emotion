import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ImageBackground, Animated, LogBox } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fonts } from '../../assets/fonts/Font';

LogBox.ignoreAllLogs();

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fade: [
        new Animated.Value(0),
        new Animated.Value(0), new Animated.Value(0),
        new Animated.Value(0), new Animated.Value(0),
        new Animated.Value(0), new Animated.Value(0),
      ],
      num: 0,
      load: false,
      step: 0,
      progress: [
        0, 0, 0, 0, 0, 0, 0, 0,
      ],
      nextButton: false,
      user: [],
      name: "Yoon",
      gender: "Male",
      age: "26",
      V: 0,
      A: 0,
      D: 0,
      selected: [],
      reload: 0,
      wordSpace: [
        'Good', 'Neutral', 'Awful', 'Great',
        'Bad', '', '', '',
        '', '', '', '',
      ],
      wordSelected: [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
      ],
      wordNext: 0,
      stateSpace: [
        '', '',
        '', '',
        '', '',
      ],
      stateSelected: [
        0, 0,
        0, 0,
        0, 0,
      ],
      stateNext: 0,
      totalList: [],
      initialEmotion: [
        [
          { id: "kw001", word: "행복해요", V: 0.5, A: 0.235, D: 0.272, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw004", word: "즐거워요", V: 0.49, A: 0.24, D: 0.167, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw006", word: "흡족해요", V: 0.47, A: 0.087, D: 0.37, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw016", word: "희망을 느껴요", V: 0.447, A: -0.143, D: 0.127, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw021", word: "기분이 좋아요", V: 0.438, A: -0.132, D: 0.034, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw023", word: "편안해요", V: 0.427, A: -0.337, D: -0.027, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw040", word: "침착해요", V: 0.385, A: 0.04, D: 0.281, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw045", word: "가치있다고 느껴요", V: 0.372, A: 0.01, D: 0.389, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw048", word: "마음이 편해요", V: 0.365, A: -0.41, D: -0.118, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw069", word: "자신감이 있어요", V: 0.265, A: -0.176, D: 0.223, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw072", word: "흥미를 느껴요", V: 0.25, A: 0.029, D: 0.225, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw078", word: "친밀감을 느껴요", V: 0.224, A: 0.098, D: -0.107, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "kw153", word: "공허해요", V: -0.312, A: -0.317, D: -0.419, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw136", word: "슬퍼요", V: -0.275, A: -0.167, D: -0.351, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw179", word: "기운이 없어요", V: -0.375, A: -0.183, D: -0.309, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw166", word: "심심해요", V: -0.347, A: -0.333, D: -0.304, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw149", word: "마음이 뒤숭숭해요", V: -0.306, A: -0.108, D: -0.287, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw129", word: "외로워요", V: -0.25, A: -0.274, D: -0.262, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw134", word: "동떨어진 느낌이들어요", V: -0.271, A: -0.176, D: -0.231, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw042", word: "마음이 차분해요", V: 0.375, A: -0.4, D: -0.218, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw177", word: "무력함을 느껴요", V: -0.375, A: 0, D: -0.172, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw151", word: "의욕이 없어요", V: -0.312, A: -0.208, D: -0.167, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw104", word: "바빠요", V: -0.098, A: 0, D: -0.026, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw163", word: "스트레스를 받아요", V: -0.333, A: 0.24, D: 0.002, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "kw117", word: "걱정이되어요", V: -0.208, A: 0.198, D: -0.15, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw119", word: "불안해요", V: -0.219, A: 0.375, D: -0.066, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw129", word: "외로워요", V: -0.25, A: -0.274, D: -0.262, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw136", word: "슬퍼요", V: -0.275, A: -0.167, D: -0.351, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw180", word: "화가나요", V: -0.378, A: 0.33, D: 0.104, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw205", word: "근심을 느껴요", V: -0.406, A: 0.324, D: -0.105, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw216", word: "속상해요", V: -0.429, A: 0.18, D: -0.17, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw217", word: "서운해요", V: -0.429, A: 0.18, D: -0.17, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw153", word: "공허해요", V: -0.312, A: -0.317, D: -0.419, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw225", word: "소외감을 느껴요", V: -0.439, A: 0.04, D: -0.366, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw215", word: "실망스러워요", V: -0.429, A: -0.028, D: -0.259, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw142", word: "기분이 울적해요", V: -0.292, A: -0.17, D: -0.236, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "kw034", word: "애정을 느껴요", V: 0.398, A: 0.059, D: 0.196, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw001", word: "행복해요", V: 0.5, A: 0.235, D: 0.272, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw006", word: "흡족해요", V: 0.47, A: 0.087, D: 0.37, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw016", word: "희망을 느껴요", V: 0.447, A: -0.143, D: 0.127, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw018", word: "기뻐요", V: 0.439, A: -0.19, D: 0.173, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw023", word: "편안해요", V: 0.427, A: -0.337, D: -0.027, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw032", word: "자부심을 느껴요", V: 0.406, A: 0.2, D: 0.373, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw035", word: "마음이 든든해요", V: 0.398, A: -0.194, D: 0.259, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw042", word: "마음이 차분해요", V: 0.375, A: -0.4, D: -0.218, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw043", word: "지지를 느껴요", V: 0.375, A: -0.08, D: 0.135, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw045", word: "가치있다고 느껴요", V: 0.372, A: 0.01, D: 0.389, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw070", word: "만족스러워요", V: 0.264, A: -0.204, D: 0.059, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 }
        ],
        [
          { id: "kw216", word: "속상해요", V: -0.429, A: 0.18, D: -0.17, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw217", word: "서운해요", V: -0.429, A: 0.18, D: -0.17, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw197", word: "후회스러워요", V: -0.396, A: 0.283, D: -0.155, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw179", word: "기운이 없어요", V: -0.375, A: -0.183, D: -0.309, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw166", word: "심심해요", V: -0.347, A: -0.333, D: -0.304, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw163", word: "스트레스를 받아요", V: -0.333, A: 0.24, D: 0.002, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw158", word: "연약함을 느껴요", V: -0.32, A: -0.259, D: -0.455, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw155", word: "부담스러워요", V: -0.312, A: 0.11, D: -0.286, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw136", word: "슬퍼요", V: -0.275, A: -0.167, D: -0.351, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw133", word: "초조해요", V: -0.265, A: 0.32, D: -0.287, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw225", word: "소외감을 느껴요", V: -0.439, A: 0.04, D: -0.366, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw180", word: "화가나요", V: -0.378, A: 0.33, D: 0.104, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
      ],
      emotion: [
        { id: "kw002", word: "사랑을 느껴요", V: 0.5, A: 0.019, D: 0.173, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw001", word: "행복해요", V: 0.5, A: 0.235, D: 0.272, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw004", word: "즐거워요", V: 0.49, A: 0.24, D: 0.167, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw003", word: "발랄해요", V: 0.49, A: 0.22, D: 0.196, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw005", word: "낙관적이에요", V: 0.479, A: 0.08, D: 0.321, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw006", word: "흡족해요", V: 0.47, A: 0.087, D: 0.37, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw008", word: "고마움을 느껴요", V: 0.469, A: -0.156, D: 0.214, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw007", word: "감탄해요", V: 0.469, A: 0.083, D: 0.226, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw009", word: "고무된다", V: 0.467, A: 0.202, D: 0.236, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw010", word: "마음에 든다", V: 0.463, A: 0.104, D: 0.089, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw012", word: "충족되었어요", V: 0.459, A: 0.01, D: 0.185, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw011", word: "긍정적이에요", V: 0.459, A: 0.01, D: 0.355, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw013", word: "감사해요", V: 0.458, A: -0.147, D: 0.06, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw014", word: "기분이 매우 좋아요", V: 0.458, A: 0.165, D: 0.31, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw015", word: "성공적이에요", V: 0.449, A: 0.224, D: 0.438, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw016", word: "희망을 느껴요", V: 0.447, A: -0.143, D: 0.127, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw017", word: "평화롭다고 느껴요", V: 0.439, A: -0.344, D: 0.113, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw018", word: "기뻐요", V: 0.439, A: -0.19, D: 0.173, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw019", word: "타고났다고 느껴요", V: 0.439, A: 0.135, D: 0.438, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw021", word: "기분이 좋아요", V: 0.438, A: -0.132, D: 0.034, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw020", word: "열정이 있어요", V: 0.438, A: 0.316, D: 0.298, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw022", word: "낭만적이에요", V: 0.436, A: 0.031, D: 0.098, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw023", word: "편안해요", V: 0.427, A: -0.337, D: -0.027, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw024", word: "여유로워요", V: 0.427, A: -0.337, D: -0.027, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw025", word: "용기 있어요", V: 0.418, A: 0.087, D: 0.379, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw027", word: "다정함을 느껴요", V: 0.417, A: -0.102, D: 0.098, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw026", word: "창의적이에요", V: 0.417, A: 0.018, D: 0.288, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw028", word: "의지할만한것 같아요", V: 0.412, A: -0.259, D: 0.375, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw029", word: "힘이나요", V: 0.412, A: 0.245, D: 0.395, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw030", word: "존중받는다고 느껴요", V: 0.408, A: -0.059, D: 0.353, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw031", word: "사람에게 끌림을 느껴요", V: 0.406, A: 0.274, D: 0.212, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw032", word: "자부심을 느껴요", V: 0.406, A: 0.2, D: 0.373, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw033", word: "소중함을 느껴요", V: 0.399, A: 0.047, D: 0.298, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw034", word: "애정을 느껴요", V: 0.398, A: 0.059, D: 0.196, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw035", word: "마음이 든든해요", V: 0.398, A: -0.194, D: 0.259, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw037", word: "자유로워요", V: 0.396, A: 0, D: 0.044, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw036", word: "신나요", V: 0.396, A: 0.184, D: 0.231, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw038", word: "장난기가 있어요", V: 0.392, A: 0.188, D: -0.037, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw041", word: "감사함을 느껴요", V: 0.385, A: -0.059, D: 0.11, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw039", word: "종경을 느껴요", V: 0.385, A: 0.199, D: 0.208, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw040", word: "침착해요", V: 0.385, A: 0.04, D: 0.281, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw042", word: "마음이 차분해요", V: 0.375, A: -0.4, D: -0.218, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw044", word: "놀랐어요", V: 0.375, A: 0.375, D: 0.062, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw043", word: "지지를 느껴요", V: 0.375, A: -0.08, D: 0.135, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw045", word: "가치있다고 느껴요", V: 0.372, A: 0.01, D: 0.389, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw047", word: "마음이 놓여요", V: 0.365, A: -0.41, D: -0.118, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw048", word: "마음이 편해요", V: 0.365, A: -0.41, D: -0.118, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw046", word: "강해요", V: 0.365, A: 0.33, D: 0.491, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw049", word: "신뢰할 수 있어요", V: 0.357, A: 0.008, D: 0.25, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw051", word: "사교적이에요", V: 0.354, A: -0.041, D: 0.127, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw050", word: "의욕적이에요", V: 0.354, A: 0.284, D: 0.302, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw052", word: "인정받았다고 느껴요", V: 0.347, A: -0.214, D: 0.065, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw053", word: "활동적이에요", V: 0.347, A: 0.23, D: 0.231, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw054", word: "기운이 나요", V: 0.347, A: 0.368, D: 0.402, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw055", word: "안심되어요", V: 0.344, A: -0.222, D: -0.019, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw056", word: "보호받는다고 느껴요", V: 0.344, A: -0.12, D: 0.414, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw057", word: "시원시원해요", V: 0.337, A: -0.294, D: -0.018, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw058", word: "안심할 수 있어요", V: 0.337, A: -0.14, D: 0.321, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw060", word: "쓸모 있다고 느껴요", V: 0.333, A: -0.089, D: 0.226, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw059", word: "유대감을 느껴요", V: 0.333, A: -0.062, D: 0.292, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw061", word: "편안함을 느껴요", V: 0.323, A: -0.224, D: 0.038, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw062", word: "도움이 된다고 느껴요", V: 0.316, A: -0.163, D: 0.205, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw064", word: "타당하다고 느껴요", V: 0.312, A: 0.057, D: 0.143, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw063", word: "신경이 쓰여요", V: 0.312, A: 0.02, D: 0.224, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw065", word: "조용해요", V: 0.292, A: -0.395, D: -0.069, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw066", word: "긴장이 풀려요", V: 0.292, A: -0.265, D: -0.038, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw067", word: "이해심을 느껴요", V: 0.28, A: -0.059, D: 0.186, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw068", word: "의미를 느껴요", V: 0.27, A: 0, D: 0.302, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw069", word: "자신감이 있어요", V: 0.265, A: -0.176, D: 0.223, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw070", word: "만족스러워요", V: 0.264, A: -0.204, D: 0.059, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw071", word: "결단력이 있어요", V: 0.26, A: 0.028, D: 0.173, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw072", word: "흥미를 느껴요", V: 0.25, A: 0.029, D: 0.225, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw073", word: "바람직하다고 느껴요", V: 0.24, A: 0.235, D: 0.25, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw074", word: "동정심을 느껴요", V: 0.235, A: -0.242, D: 0.009, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw075", word: "집중력이 있었어요", V: 0.235, A: 0, D: 0.222, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw076", word: "보살핌을 느껴요", V: 0.229, A: -0.13, D: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw077", word: "자제심을 느껴요", V: 0.229, A: -0.148, D: 0.308, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw078", word: "친밀감을 느껴요", V: 0.224, A: 0.098, D: -0.107, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw079", word: "민감해요", V: 0.214, A: -0.074, D: -0.246, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw080", word: "흥분되었어요", V: 0.208, A: 0.452, D: 0.167, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw081", word: "진실함을 느껴요", V: 0.208, A: -0.033, D: 0.307, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw082", word: "미래에 대한 생각을 해요", V: 0.198, A: 0.039, D: 0.211, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw083", word: "안정감을 느껴요", V: 0.18, A: -0.314, D: 0.263, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw084", word: "필요성을 느껴요", V: 0.177, A: -0.158, D: 0.179, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw085", word: "욕구를 느껴요", V: 0.171, A: 0.142, D: 0.098, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw086", word: "외향적이에요", V: 0.15, A: -0.028, D: 0.038, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw087", word: "울적해요", V: 0.146, A: -0.363, D: -0.209, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw088", word: "호기심을 느껴요", V: 0.135, A: 0.1, D: -0.017, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw089", word: "사심이 없는 것 같아요", V: 0.115, A: -0.147, D: -0.123, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw091", word: "졸려요", V: 0.104, A: -0.375, D: -0.25, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw090", word: "그리움을 느껴요", V: 0.104, A: -0.066, D: 0.06, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw092", word: "내성적이에요", V: 0.094, A: -0.184, D: 0.083, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw093", word: "착잡해요", V: 0.07, A: -0.098, D: 0.088, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw094", word: "수다스러워요", V: 0.062, A: 0.173, D: 0.035, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw095", word: "열의를 느껴요", V: 0.021, A: 0.312, D: -0.194, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw097", word: "부족해요", V: 0.01, A: 0.074, D: -0.3, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw096", word: "갈망을 느껴요", V: 0.01, A: 0.255, D: 0.136, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw098", word: "정신이 초롱초롱해요", V: -0.021, A: 0.32, D: 0.148, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw099", word: "무방비 상태이에요", V: -0.029, A: 0.161, D: 0.009, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw100", word: "중립적이에요", V: -0.031, A: -0.316, D: -0.143, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw101", word: "철저해요", V: -0.033, A: -0.15, D: 0.058, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw102", word: "과거가 그리워요", V: -0.042, A: -0.149, D: -0.316, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw103", word: "용서하기 힘들어요", V: -0.094, A: 0.13, D: 0.293, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw104", word: "바빠요", V: -0.098, A: 0, D: -0.026, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw105", word: "무관심해요", V: -0.104, A: -0.343, D: -0.25, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw106", word: "긴장되어요", V: -0.104, A: -0.061, D: 0.155, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw107", word: "게을러요", V: -0.108, A: -0.236, D: -0.404, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw108", word: "느려요", V: -0.143, A: -0.427, D: -0.369, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw109", word: "조마조마해요", V: -0.156, A: 0.356, D: -0.245, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw110", word: "감당하기 힘들어요", V: -0.159, A: 0.18, D: -0.152, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw111", word: "결정을 내리기 어려워요", V: -0.167, A: 0.042, D: -0.179, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw112", word: "깜짝 놀랐어요", V: -0.167, A: 0.365, D: 0.026, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw114", word: "당혹스러워요", V: -0.188, A: 0.205, D: -0.182, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw113", word: "비판적이에요", V: -0.188, A: 0.302, D: 0.045, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw115", word: "탐구심이 많아요", V: -0.199, A: 0.137, D: 0.115, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw116", word: "곤란스러워요", V: -0.204, A: 0.15, D: -0.142, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw117", word: "걱정이되어요", V: -0.208, A: 0.198, D: -0.15, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw118", word: "충격을 느꼈어요", V: -0.214, A: 0.321, D: -0.047, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw119", word: "불안해요", V: -0.219, A: 0.375, D: -0.066, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw120", word: "비난당한다고 느껴요", V: -0.219, A: 0.373, D: 0.009, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw121", word: "부끄러워요", V: -0.22, A: -0.347, D: -0.368, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw122", word: "떨려요", V: -0.225, A: 0.349, D: -0.245, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw123", word: "우유부단해요", V: -0.229, A: -0.08, D: -0.31, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw124", word: "도발당했다고 느껴요", V: -0.229, A: 0.176, D: 0.028, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw125", word: "열등감을 느껴요", V: -0.24, A: -0.246, D: -0.394, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw126", word: "혼란스러워요", V: -0.245, A: 0.167, D: -0.223, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw127", word: "당황스러워요", V: -0.245, A: 0.167, D: -0.223, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw129", word: "외로워요", V: -0.25, A: -0.274, D: -0.262, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw128", word: "혹독해요", V: -0.25, A: 0.15, D: 0.123, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw130", word: "못마땅해요", V: -0.255, A: 0.125, D: -0.048, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw131", word: "기분변화가 심해요", V: -0.255, A: 0.311, D: 0.095, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw132", word: "시기심이 들어요", V: -0.26, A: 0.204, D: -0.073, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw133", word: "초조해요", V: -0.265, A: 0.32, D: -0.287, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw134", word: "동떨어진 느낌이들어요", V: -0.271, A: -0.176, D: -0.231, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw135", word: "안절부절 못해요", V: -0.271, A: 0.286, D: -0.149, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw136", word: "슬퍼요", V: -0.275, A: -0.167, D: -0.351, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw137", word: "강박적이에요", V: -0.276, A: -0.04, D: -0.13, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw138", word: "고립감을 느껴요", V: -0.279, A: -0.144, D: -0.245, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw139", word: "낙심되어요", V: -0.28, A: -0.196, D: -0.41, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw140", word: "가만히 쉬지를 못해요", V: -0.281, A: 0.31, D: -0.196, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw141", word: "씁슬해요", V: -0.282, A: 0.127, D: -0.089, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw143", word: "죄책감을 느껴요", V: -0.292, A: 0.067, D: -0.294, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw142", word: "기분이 울적해요", V: -0.292, A: -0.17, D: -0.236, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw144", word: "회의적이에요", V: -0.293, A: 0, D: -0.048, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw145", word: "업신여김을 당했어요", V: -0.294, A: 0.135, D: -0.104, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw147", word: "취약하다고 느껴요", V: -0.302, A: -0.01, D: -0.255, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw146", word: "소란스러워요", V: -0.302, A: 0.388, D: -0.083, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw149", word: "마음이 뒤숭숭해요", V: -0.306, A: -0.108, D: -0.287, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw148", word: "경악스러워요", V: -0.306, A: 0.292, D: 0.062, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw150", word: "냉담해요", V: -0.311, A: -0.077, D: -0.198, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw153", word: "공허해요", V: -0.312, A: -0.317, D: -0.419, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw155", word: "부담스러워요", V: -0.312, A: 0.11, D: -0.286, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw151", word: "의욕이 없어요", V: -0.312, A: -0.208, D: -0.167, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw152", word: "무시당했어요", V: -0.312, A: 0.041, D: -0.07, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw154", word: "적대감을 느껴요", V: -0.312, A: 0.377, D: -0.026, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw156", word: "민망스러워요", V: -0.316, A: 0.06, D: -0.254, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw157", word: "내향적이에요", V: -0.318, A: -0.132, D: -0.279, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw158", word: "연약함을 느껴요", V: -0.32, A: -0.259, D: -0.455, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw160", word: "부들부들 떨려요", V: -0.323, A: 0.324, D: -0.176, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw159", word: "처벌을 받는다고 느껴요", V: -0.323, A: 0.235, D: -0.019, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw161", word: "질투를 느껴요", V: -0.327, A: 0.355, D: -0.155, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw162", word: "실패감을 느껴요", V: -0.333, A: 0.075, D: -0.361, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw163", word: "스트레스를 받아요", V: -0.333, A: 0.24, D: 0.002, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw164", word: "크게 실망했어요", V: -0.335, A: 0.235, D: -0.111, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw165", word: "수치당하는 느낌이에요", V: -0.344, A: 0.088, D: -0.272, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw166", word: "심심해요", V: -0.347, A: -0.333, D: -0.304, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw167", word: "지루해요", V: -0.347, A: -0.333, D: -0.304, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw169", word: "겁먹었어요", V: -0.347, A: 0.317, D: -0.245, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw168", word: "장래에 대해 낙담해요", V: -0.347, A: 0.292, D: -0.132, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw170", word: "비참해요", V: -0.354, A: -0.122, D: -0.342, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw171", word: "무서워요", V: -0.354, A: 0.328, D: -0.315, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw172", word: "위협감을 느껴요", V: -0.365, A: 0.365, D: 0.167, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw173", word: "눈물이 나요", V: -0.367, A: 0.127, D: -0.245, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw178", word: "피곤해요", V: -0.375, A: -0.183, D: -0.309, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw179", word: "기운이 없어요", V: -0.375, A: -0.183, D: -0.309, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw176", word: "심기가 불편해요", V: -0.375, A: 0.37, D: -0.195, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw177", word: "무력함을 느껴요", V: -0.375, A: 0, D: -0.172, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw175", word: "기분이 안좋아요", V: -0.375, A: 0.125, D: -0.127, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw174", word: "공격적이에요", V: -0.375, A: 0.449, D: 0.148, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw182", word: "부족하다고 느껴요", V: -0.378, A: -0.05, D: -0.277, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw181", word: "배신감을 느꼈어요", V: -0.378, A: 0.269, D: -0.192, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw183", word: "상황에 대해 압박을 받아요", V: -0.378, A: 0.156, D: 0.08, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw180", word: "화가나요", V: -0.378, A: 0.33, D: 0.104, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw184", word: "분해요", V: -0.38, A: 0.108, D: -0.176, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw185", word: "낙담되어요", V: -0.381, A: -0.039, D: -0.245, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw191", word: "피해자라고 느껴요", V: -0.385, A: 0.176, D: -0.298, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw188", word: "절망스러워요", V: -0.385, A: 0.294, D: -0.255, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw189", word: "추잡함을 느껴요", V: -0.385, A: 0.12, D: -0.236, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw186", word: "저의 탓인것 같아요", V: -0.385, A: 0.14, D: -0.191, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw190", word: "안정적이지 않아요", V: -0.385, A: 0.098, D: -0.151, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw187", word: "마음이 어수선해요", V: -0.385, A: 0.347, D: -0.058, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw192", word: "정서적으로 불안해요", V: -0.386, A: 0.038, D: -0.368, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw194", word: "조롱당했다고 느껴요", V: -0.388, A: 0.306, D: -0.288, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw193", word: "예민해요", V: -0.388, A: 0.452, D: -0.038, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw195", word: "무뎌요", V: -0.392, A: -0.08, D: -0.148, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw196", word: "기분이 음울해요", V: -0.393, A: -0.09, D: -0.213, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw201", word: "울렁거려요", V: -0.396, A: -0.069, D: -0.364, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw198", word: "의지할 곳이 없어요", V: -0.396, A: -0.08, D: -0.286, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw199", word: "속이 메스꺼워요", V: -0.396, A: 0.281, D: -0.227, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw200", word: "역겨워요", V: -0.396, A: 0.265, D: -0.157, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw197", word: "후회스러워요", V: -0.396, A: 0.283, D: -0.155, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw202", word: "부정적이에요", V: -0.398, A: 0.027, D: -0.324, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw203", word: "거절감을 느껴요", V: -0.398, A: -0.02, D: -0.25, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw204", word: "가망이 없다고 느껴요", V: -0.406, A: -0.202, D: -0.388, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw205", word: "근심을 느껴요", V: -0.406, A: 0.324, D: -0.105, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw206", word: "망연자실해요", V: -0.41, A: 0.404, D: -0.028, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw207", word: "비관적이에요", V: -0.412, A: -0.106, D: -0.264, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw211", word: "하찮다고 느껴요", V: -0.417, A: -0.194, D: -0.386, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw212", word: "제 자신이 쓸모없다고 느껴요", V: -0.417, A: -0.08, D: -0.347, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw210", word: "두려워요", V: -0.417, A: -0.018, D: -0.222, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw208", word: "절박해요", V: -0.417, A: 0.342, D: -0.163, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw209", word: "혐오스러워요", V: -0.417, A: 0.3, D: -0.008, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw213", word: "격노로 가득 찼어요", V: -0.418, A: 0.388, D: 0.158, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw214", word: "괴로워요", V: -0.427, A: 0.34, D: -0.104, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw215", word: "실망스러워요", V: -0.429, A: -0.028, D: -0.259, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw216", word: "속상해요", V: -0.429, A: 0.18, D: -0.17, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw217", word: "서운해요", V: -0.429, A: 0.18, D: -0.17, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw218", word: "깊은 슬픔에 잠겼어요", V: -0.43, A: 0.14, D: -0.026, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw219", word: "공포스러워요", V: -0.431, A: 0.402, D: -0.085, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw222", word: "상처받았어요", V: -0.438, A: 0.273, D: -0.209, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw220", word: "존중받지 못해요", V: -0.438, A: 0.137, D: -0.198, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw223", word: "허둥지둥해요", V: -0.438, A: 0.438, D: -0.1, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw221", word: "분노해요", V: -0.438, A: 0.453, D: 0.098, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw225", word: "소외감을 느껴요", V: -0.439, A: 0.04, D: -0.366, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw226", word: "무례함을 느껴요", V: -0.439, A: 0.321, D: -0.098, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw224", word: "기분이 매우나빠요", V: -0.439, A: 0.286, D: -0.05, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw227", word: "이기적인", V: -0.439, A: 0.137, D: -0.005, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw228", word: "침해당했다고 느껴요", V: -0.439, A: 0.47, D: 0.019, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw229", word: "좌절감은 느껴요", V: -0.44, A: 0.23, D: -0.22, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw231", word: "쓸모 없다고 느껴요", V: -0.448, A: -0.158, D: -0.316, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw230", word: "싫어요", V: -0.448, A: 0.275, D: -0.183, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw232", word: "자기혐오를 느껴요", V: -0.449, A: 0.273, D: -0.226, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw233", word: "굴욕적이에요", V: -0.452, A: 0.212, D: -0.19, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw234", word: "불만족스러워요", V: -0.458, A: 0.061, D: -0.209, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw235", word: "망신스러워요", V: -0.46, A: 0.18, D: -0.236, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw237", word: "미움을 느껴요", V: -0.469, A: 0.302, D: -0.07, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw236", word: "죽음에 대해 생각해요", V: -0.469, A: 0.22, D: -0.028, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw238", word: "우울해요", V: -0.476, A: -0.055, D: -0.364, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw239", word: "고통을 느껴요", V: -0.488, A: 0.265, D: -0.105, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw240", word: "겁이 나요", V: -0.49, A: 0.275, D: -0.255, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 }
      ],
      state: [
        { id: "ks001", word: "일 또는 여가 활동을 하는 데 흥미나 즐거움을 느끼지못해요", V: 0.311, A: 0.731, D: 0.593, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks002", word: "기분이 우울하고 희망이 없어요", V: -1.174, A: -0.427, D: -0.988, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks003", word: "어렵게 잠들어도 계속 깨요", V: -0.271, A: -0.558, D: -0.559, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks004", word: "잠을 너무 많이 자요", V: -0.271, A: -0.558, D: -0.559, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks005", word: "기운이 거의 없어요", V: -0.222, A: -0.051, D: -0.211, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks006", word: "입맛이 없어요", V: -0.771, A: -0.252, D: -0.673, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks007", word: "과식을 하게돼요", V: -0.771, A: -0.252, D: -0.673, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks008", word: "내 자신이 별로인것 같아요", V: -1, A: 0.03, D: -0.724, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks009", word: "스스로가 실패자라고 느껴요", V: -1, A: 0.03, D: -0.724, question: "TAI, BCSS, ROS, BDIneg, PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks010", word: "자신 또는 가족을 실망시켰다고 느껴요", V: -1, A: 0.03, D: -0.724, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks011", word: "신문을 읽거나 텔레비전 보는 것과 같은 일에도 집중하는 것이 어려워요", V: -0.041, A: 0.392, D: -0.009, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks012", word: "말이나 행동이 주위 사람들도 알아차릴 정도로 평상시보다 너무 느려요  ", V: -0.414, A: -0.141, D: -0.518, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks013", word: "가만히 있지못하고 안절부절못하거나 들떠 있어요", V: -0.414, A: -0.141, D: -0.518, question: "PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks014", word: "걱정하는 것을 멈추거나 조절할 수가 없어요", V: -0.406, A: 0.324, D: -0.105, question: "GAD", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks015", word: "여러가지에 대해 걱정을 너무 많이해요", V: -0.406, A: 0.324, D: -0.105, question: "GAD", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks016", word: "마음의 긴장을 풀고 편하게 쉬기가 어려워요", V: 0.404, A: 2.519, D: 1.543, question: "GAD", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks017", word: "너무 안절부절못해서 가만히 앉아 있기가 힘들어요", V: -0.552, A: 0.596, D: -0.345, question: "GAD", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks018", word: "너무 쉽게 짜증이 나거나 쉽게 화를 내게돼요", V: -0.686, A: 0.599, D: -0.374, question: "GAD", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks019", word: "마치 끔찍한 일이 생길것같이 두려워요", V: -1.652, A: 0.899, D: -0.877, question: "GAD", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks020", word: "긴장되어 있어요", V: -0.104, A: -0.061, D: 0.155, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks021", word: "후회스럽고 서운해요", V: -0.378, A: 0.156, D: 0.08, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks022", word: "당황스러워서 어떻게 해야할지 모르겠고 속상해요", V: -0.429, A: 0.18, D: -0.17, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks023", word: "앞으로 불행이 있을까 걱정이 돼요", V: -0.406, A: 0.324, D: -0.105, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks024", word: "불안해서 괴로워요", V: -0.347, A: 0.317, D: -0.245, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks025", word: "짜증스러워요", V: -0.265, A: 0.32, D: -0.287, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks026", word: "낙담해서 마음이 울적해요", V: -0.229, A: -0.08, D: -0.31, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks027", word: "마음은 긴장이 풀려서 푸근해요", V: 0.365, A: -0.41, D: -0.118, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks028", word: "스스로가 만족스러워요", V: 0.264, A: -0.204, D: 0.059, question: "SAI, TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks029", word: "걱정하고 있어요", V: -0.406, A: 0.324, D: -0.105, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks030", word: "너무 당황해서 어쩔 줄 모르겠어요", V: -0.245, A: 0.167, D: -0.223, question: "SAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks031", word: "쉽게 피로해져요", V: -0.546, A: 0.63, D: -0.483, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks032", word: "울고 싶은 심정이에요", V: 0.459, A: 0.01, D: 0.185, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks033", word: "다른 사람들처럼 행복해졌으면 좋겠어요", V: -0.26, A: 0.469, D: 0.155, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks034", word: "우유부단해서 많은 것들을 놓쳐요", V: -0.333, A: 0.075, D: -0.361, question: "TAI, BCSS, ROS, BDIneg, PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks035", word: "스스로가 차분하고 침착하고 생각해요", V: 0.83, A: -0.458, D: 0.151, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks036", word: "밀려오는 여러 문제들은 쌓여만 가는데 극복해낼 수 없을 것 같아요", V: -0.492, A: 0.42, D: -0.15, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks037", word: "별것도 아닌 거같은 일에 너무 걱정을 해요", V: -0.406, A: 0.324, D: -0.105, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks038", word: "어떤 일이건 어렵게 생각하는 경향이 있어요", V: -0.47, A: 2.424, D: 0.714, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks039", word: "자신감이 부족하다고 느껴요", V: 0.235, A: 0.676, D: 0.277, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks040", word: "위기나 어려움을 직면하기보단 피하려고 애써요", V: 0.729, A: 0.58, D: 0.81, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks041", word: "사소한 생각이 나를 괴롭게해요 ", V: 0.781, A: 0.19, D: 0.696, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks042", word: "실망감을 떨쳐버릴 수 없을 정도로 예민하게 받아들여요", V: -0.429, A: -0.028, D: -0.259, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks043", word: "스스로가 착실한 사람이라고 생각해요", V: 0.18, A: -0.314, D: 0.263, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks044", word: "요즘 생긴 걱정이나 관심거리를 생각하면 너무 긴장되고 혼란스러워요", V: -0.706, A: 0.896, D: -0.204, question: "TAI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks045", word: "사랑받지 못해요", V: 0.5, A: 0.5, D: 0.5, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks046", word: "나는 쓸모없는 사람이에요", V: -0.188, A: 0.863, D: -0.034, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks047", word: "나는 약해요", V: -0.32, A: -0.259, D: -0.455, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks048", word: "나는 마음의 상처를 잘 받는 스타일이에요", V: -0.302, A: -0.01, D: -0.255, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks049", word: "나는 나쁜 사람이에요", V: -0.375, A: 0.125, D: -0.127, question: "BCSS, PHQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks050", word: "나는 존중 받아요", V: 0.408, A: -0.059, D: 0.353, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks051", word: "나는 가치있고 소중해요", V: 0.399, A: 0.047, D: 0.298, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks052", word: "나는 타고난 재능 있어요", V: 0.439, A: 0.135, D: 0.438, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks053", word: "나는 성공했어요", V: 0.449, A: 0.224, D: 0.438, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks054", word: "나는 착해요", V: 0.438, A: -0.132, D: 0.034, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks055", word: "나는 재미있는 사람이에요", V: 0.427, A: 0.226, D: 0.231, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks056", word: "다른 사람들은 적대적이에요", V: -0.312, A: 0.377, D: -0.026, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks057", word: "다른 사람들은 거칠어요", V: -0.25, A: 0.15, D: 0.123, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks058", word: "다른 사람들은 용서를 잘 안해요", V: -0.094, A: 0.13, D: 0.293, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks059", word: "다른 사람들은 나빠요", V: -0.375, A: 0.125, D: -0.127, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks060", word: "다른 사람들은 정직하지 않아요", V: -0.375, A: 0.125, D: -0.127, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks061", word: "다른 사람들은 비열해요", V: -0.385, A: 0.12, D: -0.236, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks062", word: "다른 사람들은 공평해요", V: 0.312, A: 0.057, D: 0.143, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks063", word: "다른 사람들은 착해요", V: 0.438, A: -0.132, D: 0.034, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks064", word: "다른 사람들을 믿을 수 있어요", V: 0.469, A: -0.185, D: 0.324, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks065", word: "다른 사람들은 인정을 잘해줘요", V: 0.347, A: -0.214, D: 0.065, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks066", word: "다른 사람들은 지지해주고 힘이 되어 줘요", V: 0.375, A: -0.08, D: 0.135, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks067", word: "다른 사람들은 진실해요", V: 0.208, A: -0.033, D: 0.307, question: "BCSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks068", word: "내 자신에 대해 대체로 만족해요", V: 0.459, A: 0.01, D: 0.185, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks069", word: "때때로 내 자신이 쓸모없는 사람이라는 느낌이 들어요", V: -0.313, A: 0.757, D: 0.339, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks070", word: "좋은 성품을 가졌다고 생각해요", V: 1.303, A: 0.078, D: 0.592, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks071", word: "대부분의 다른 사람들만큼 일을 잘 해낼 수 있어요", V: 1.303, A: 0.078, D: 0.592, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks072", word: "나에 대해 자랑할 것이 별로 없어요", V: 0.094, A: 0.3, D: 0.127, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks073", word: "가끔 내가 전혀 유능하지 못하다고 느낄 때가 있어요", V: -0.448, A: -0.158, D: -0.316, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks074", word: "적어도 다른 사람들만큼은 나는 가치 있는 사람이라고 느껴요", V: 1.316, A: 0.627, D: 1.145, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks075", word: "스스로를 좀 더 존중할 수 있으면 좋겠어요", V: 0.092, A: 0.559, D: 0.147, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks076", word: "내 자신에 대해 긍정적인 태도를 가지고 있어요", V: 0.459, A: 0.01, D: 0.355, question: "ROS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks077", word: "사람들을 알아갈 때 천천히 시간을 가져요", V: 0.333, A: -0.062, D: 0.292, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks078", word: "살면서 결정을 내릴 때 다른 사람에게 의지해요", V: -0.229, A: -0.08, D: -0.31, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks079", word: "사람들은 나를 많이 실망시켜요", V: -0.429, A: -0.028, D: -0.259, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks080", word: "외로울 때 남들과 함께 있는 것을 그리워해요", V: -0.425, A: -0.484, D: -0.447, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks081", word: "다른 사람과 정서적으로 너무 가까워지지 않는 것이 가장 좋아요", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks082", word: "같이 사는 사람들이 집에 예정보다 늦게 들어오면 많이 걱정해요", V: -0.302, A: 0.258, D: -0.045, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks083", word: "문제가 생기면 대체로 다른 사람의 조언에 의지해요", V: -0.229, A: -0.08, D: -0.31, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks084", word: "다른 사람들이 너무 가깝게(친하게) 다가오는 것을 불편해해요", V: -0.529, A: -0.418, D: -0.507, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks085", word: "가까운 지인들이 자주 내 신경을 건드려요", V: -0.29, A: 0.316, D: -0.219, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks086", word: "사람들이 내게 적대적이라고 느껴요", V: -0.398, A: -0.02, D: -0.25, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks087", word: "가까운 가족과 친구들에게 일어나는 일들에 대해 걱정돼요", V: -0.625, A: 0.699, D: -0.171, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks088", word: "자주 말다툼에 휘말려요", V: -0.29, A: 0.316, D: -0.219, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks089", word: "나는 다른 사람에게 질척대는 스타일인거 같아요", V: -0.266, A: 0.034, D: -0.43, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks090", word: "나 혼자만의 시간을 보내는 것을 좋아해요", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks091", word: "나 혼자 결정을 내리는 것을 좋아해요", V: 0.479, A: 0.306, D: 0.548, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks092", word: "가까운 주변인들이 멀리 있으면 불안해져요", V: -0.115, A: 0.309, D: -0.006, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks093", word: "다른 사람들이 나에게 속마음을 애기하면 불편해져요", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks094", word: "다른 사람을 신뢰하는 것이 어려워요", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks095", word: "주변에 사람을 두면 귀찮은 일이 생길 수 있어요", V: -0.54, A: 0.042, D: -0.481, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks096", word: "사람들이 나에게 충분히 베풀지 않는다고 느껴요", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks097", word: "평소에 내 주변에 사람들이 많이 있는 게 나에겐 중요해요", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks098", word: "다른 사람에게 속마음을 털어놓는 것이 어려워요", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks099", word: "나는 슬프지 않아요", V: 0.775, A: 0.667, D: 0.851, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks100", word: "나는 슬퍼요", V: -0.275, A: -0.167, D: -0.351, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks101", word: "항상 슬프고 기운이 없어요", V: -0.275, A: -0.167, D: -0.351, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks102", word: "너무나 슬프고 불행해서 도저히 견디지 못하겠어요 ", V: -0.275, A: -0.167, D: -0.351, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks103", word: "미래에 대해서 별로 낙담하지 않아요", V: 0.78, A: 0.696, D: 0.91, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks104", word: "미래에 대해서 용기가 안나요", V: -0.686, A: -0.398, D: -0.798, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks105", word: "미래에 대해 기대할 게 없다고 느껴요 (or 기대가 없어요)", V: -0.406, A: -0.202, D: -0.388, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks106", word: "미래는 아주 절망적이고 나아질 가망이 없다고 느껴요 ", V: -0.686, A: -0.398, D: -0.798, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks107", word: "보통사람들보다 더 많이 실패한 것 같아요", V: -0.333, A: 0.075, D: -0.361, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks108", word: "살아온 과거를 뒤돌아 보면, 실패투성이인 것 같아요 ", V: -0.333, A: 0.075, D: -0.361, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks109", word: "인간으로서 완전한 실패자라고 느껴요", V: -0.333, A: 0.075, D: -0.361, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks110", word: "예전만큼 내 일상생활에 만족하고 있어요", V: 0.459, A: 0.01, D: 0.185, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks111", word: "요즘에는 어떤 것에서도 별로 만족을 얻지 못하고 있어요", V: 0.041, A: 0.49, D: 0.315, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks112", word: "내 일상생활은 예전처럼 즐겁지 않아요", V: 0.143, A: 1.025, D: 0.883, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks113", word: "모든 것이 다 불만스럽고 싫증나요", V: -0.204, A: 0.692, D: 0.579, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks114", word: "딱히 죄책감을 느끼지 않아요", V: 0.792, A: 0.433, D: 0.794, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks115", word: "죄책감을 느낄 때가 꽤 있어요", V: -0.292, A: 0.067, D: -0.294, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks116", word: "죄책감을 느낄때가 아주 많아요", V: -0.292, A: 0.067, D: -0.294, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks117", word: "항상 죄책감에 시달리고 있어요", V: -0.292, A: 0.067, D: -0.294, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks118", word: "내가 지금 벌을 받고 있다고 느끼지 않아요", V: 0.792, A: 0.433, D: 0.794, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks119", word: "어쩌면 내가 벌을 받을지도 모른다는 느낌이 들어요", V: -0.323, A: 0.235, D: -0.019, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks120", word: "내가 지금 벌을 받고 있다고 느껴요", V: -0.323, A: 0.235, D: -0.019, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks121", word: "내가 벌을 받을 것 같다고 느껴요", V: -0.323, A: 0.235, D: -0.019, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks122", word: "스스로에게 실망하지 않아요", V: 0.929, A: 0.528, D: 0.759, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks123", word: "나 스스로가 넌더리가 나요", V: -0.449, A: 0.273, D: -0.226, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks124", word: "나 자신이 싫어졌어요", V: -0.918, A: 0.575, D: -0.296, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks125", word: "나 자신에게 실망했어요", V: -0.918, A: 0.575, D: -0.296, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks126", word: "내가 다른 사람보다 못한 것 같지는 않아요", V: 0.438, A: -0.132, D: 0.034, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks127", word: "나의 약점이나 실수에 대해서 나 자신을 탓하는 편이에요", V: -0.126, A: 0.934, D: 0.511, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks128", word: "일어나는 모든 나쁜 일들은 다 내 탓인 거 같아요 ", V: -0.667, A: 0.192, D: -0.421, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks129", word: "뭔가 일이 잘못되었을 때는 언제나 나를 탓해요", V: -0.667, A: 0.192, D: -0.421, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks130", word: "자살할 생각은 전혀 없다", V: 1.233, A: 0.076, D: 0.587, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks131", word: "자살에 대한 생각을 가끔 하지만, 실제로 하지는 않을 거에요", V: -0.469, A: 0.22, D: -0.028, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks132", word: "기회만 된다면 자살할 것 같아요", V: -0.469, A: 0.22, D: -0.028, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks133", word: "자살하고 싶은 생각이 자주 들어요", V: -0.469, A: 0.22, D: -0.028, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks134", word: "더이상 평소보다 더 울지는 않아요", V: 1.642, A: 1.04, D: 1.596, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks135", word: "전보다 더 많이 울어요", V: -0.642, A: -0.04, D: -0.596, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks136", word: "요즘엔 항상 울어요", V: -0.642, A: -0.04, D: -0.596, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks137", word: "예전에는 울고 싶을 때 울 수 있었지만 요즘에는 울래야 울 힘조차 없어요", V: -0.642, A: -0.04, D: -0.596, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks138", word: "요즘에 평소보다 더 짜증을 내는 편은 아닌거 같아요", V: 0.79, A: 0.184, D: 0.719, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks139", word: "요즘들어 항상 짜증이 나고 귀찮아 져요", V: -0.29, A: 0.316, D: -0.219, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks140", word: "짜증이 나거나 열받는 경우가 많아요", V: -0.686, A: 0.599, D: -0.374, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks141", word: "항상 짜증이 나고 열 받아요", V: -0.686, A: 0.599, D: -0.374, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks142", word: "주변 사람들에 대한 관심을 잃지 않고 신경쓰고 있어요", V: 0.25, A: 0.029, D: 0.225, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks143", word: "전보다 주변 사람들에 대한 관심이 줄었어요", V: 0.25, A: 0.471, D: 0.275, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks144", word: "주변 사람들에 대한 관심이 완전히 없어졌고 아예 신경쓰이지도 않아요", V: 0.25, A: 0.471, D: 0.275, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks145", word: "주변 사람들에 대한 관심이 거의 없고 그닥 신경쓰이지도 않아요", V: 0.25, A: 0.471, D: 0.275, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks146", word: "결정 내리는게 평소처럼 힘들지 않아요", V: 0.494, A: -0.324, D: 0.531, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks147", word: "결정을 미루는 때가 전보다 더 잦아요", V: 0.271, A: 0.648, D: 0.192, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks148", word: "전에 비해 결정내리는 게 훨씬 어려워요  ", V: 0.271, A: 0.648, D: 0.192, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks149", word: "더 이상 아무 결정도 내릴 수가 없어요", V: -0.125, A: 0.568, D: -0.094, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks150", word: "평소처럼 일을 하는데 어렵지 않아요", V: 0.354, A: 0.284, D: 0.302, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks151", word: "어떤 일을 시작하는 데에 전보다 더 많은 노력이 들어요", V: 0.146, A: 0.216, D: 0.198, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks152", word: "아무 일도 전혀 못하겠어요", V: 0.146, A: 0.216, D: 0.198, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks153", word: "무슨 일이든 하려면 나 자신을 매우 심하게 채찍질해야만 해요", V: 0.146, A: 0.216, D: 0.198, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks154", word: "평소처럼 잠을 잘 수 있어요", V: 0.104, A: -0.375, D: -0.25, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks155", word: "예전 만큼 잠을 잘 자지는 못해요", V: 1.271, A: 1.558, D: 1.559, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks156", word: "평소보다 한두 시간 일찍 깨고, 한번 깨면 다시 잠들기도 어려워요", V: 1.271, A: 1.558, D: 1.559, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks157", word: "평소보다 몇 시간이나 일찍 깨고, 한번 깨면 다시 잠에 들 수 없어요", V: 1.271, A: 1.558, D: 1.559, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks158", word: "평소 보다 더 피곤해하지는 않아요", V: 0.875, A: 0.683, D: 0.809, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks159", word: "전보다 더 쉽게 피곤해져요", V: -0.375, A: -0.183, D: -0.309, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks160", word: "뭘 해도 피곤해져요", V: -0.375, A: -0.183, D: -0.309, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks161", word: "너무나 피곤해서 아무 일도 할 수 없어요", V: -0.375, A: -0.183, D: -0.309, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks162", word: "식욕은 평소와 같아요", V: 0.896, A: 0.569, D: 0.864, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks163", word: "요즘은 전에만큼 식욕이 좋지는 않아요", V: -0.396, A: -0.069, D: -0.364, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks164", word: "요즘에는 전혀 식욕이 없어요", V: -0.396, A: -0.069, D: -0.364, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks165", word: "요즘에는 식욕이 많이 떨어졌어요", V: -0.396, A: -0.069, D: -0.364, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks166", word: "평소 체중에서 별로 줄지 않았어요", V: 0.896, A: 0.569, D: 0.864, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks167", word: "전보다 몸무게가 5Kg 가량 줄었어요", V: -0.396, A: -0.069, D: -0.364, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks168", word: "전보다 몸무게가 7Kg 가량 줄었어요", V: -0.396, A: -0.069, D: -0.364, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks169", word: "전보다 몸무게가 2Kg 가량 줄었어요", V: -0.396, A: -0.069, D: -0.364, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks170", word: "전보다 내 외모가 나빠졌다고 느끼지 않아요", V: 0.671, A: 0.098, D: 0.435, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks171", word: "나이들어 보이거나 매력 없이 보일까봐 걱정되요", V: 0.094, A: 0.226, D: 0.288, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks172", word: "더이상 내가 매력적일 수 없게 만드는 외모의 변화가 있는듯한 느낌이 들어요 ", V: 0.094, A: 0.226, D: 0.288, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks173", word: "내가 못생겨보인다고 생각해요", V: 0.094, A: 0.226, D: 0.288, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks174", word: "건강에 대해 전보다 더 염려하고 있지는 않아요", V: 0.906, A: 0.176, D: 0.605, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks175", word: "여러 가지 통증, 소화불량, 변비 등과 같은 신체적인 문제로 힘들어요", V: -0.406, A: 0.324, D: -0.105, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks176", word: "내 건강이 너무 염려되어 다른 일은 생각하기 힘들어요", V: -0.406, A: 0.324, D: -0.105, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks177", word: "다른 일은 아무 것도 생각할 수 없을 정도로 내 건강이 너무 염려되요", V: -0.406, A: 0.324, D: -0.105, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks178", word: "딱히 요즘들어 성욕에 별다른 변화가 있지는 않아요", V: 0.647, A: 0.692, D: 0.349, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks179", word: "전보다 성욕이 줄었어요", V: 0.353, A: 0.308, D: 0.651, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks180", word: "전에 비하면 성욕이 거의 없어요", V: 0.353, A: 0.308, D: 0.651, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks181", word: "성욕을 완전히 잃었어요", V: 0.353, A: 0.308, D: 0.651, question: "BDI", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks182", word: "예상치 못했던 일 때문에 당황스러워요", V: -0.643, A: 0.501, D: -0.217, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks183", word: "인생에서 중요한 일들을 조절할 수 없다고 느껴요 ", V: -0.771, A: -0.08, D: -0.458, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks184", word: "신경이 예민해지고 스트레스를 받아요", V: -0.598, A: 0.56, D: -0.285, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks185", word: "개인적인 문제를 처리하는 데 자신있어요", V: 0.494, A: -0.324, D: 0.531, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks186", word: "일상의 일들이 내 생각대로 진행되가고 있는 것 같아요", V: 0.493, A: -0.352, D: 0.367, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks187", word: "꼭 해야 할 모든 일들에 대처할 수 없을 것 같아요꼭 해야 할 모든 일들에 대처할 수 없을 것 같아요", V: -0.159, A: 0.18, D: -0.152, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks188", word: "일상생활 중에 짜증을 잘 다스릴 수 있어요", V: 0.493, A: -0.352, D: 0.367, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks189", word: "최상의 컨디션이에요", V: 0.888, A: 0.172, D: 0.96, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks190", word: "내가 통제할 수 없는 일 때문에 화가 나요", V: -0.503, A: 0.898, D: 0.01, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks191", word: "어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같아요", V: 0.404, A: 1, D: 0.636, question: "PSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks192", word: "기운이 없고 우울해요", V: -0.656, A: -0.206, D: -0.596, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks193", word: "하루 중 아침에 기분이 가장 좋아요", V: 0.438, A: -0.132, D: 0.034, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks194", word: "눈물을 쏟아졌거나 울고 싶어요", V: -0.642, A: -0.04, D: -0.596, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks195", word: "밤에 잠을 잘 못 자요", V: 0.021, A: 0.692, D: 0.441, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks196", word: " 평상시처럼 잘 먹어요", V: 0.439, A: 0.24, D: 0.182, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks197", word: "여전히 평소처럼 성관계를 즐겨요", V: 0.647, A: 0.692, D: 0.349, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks198", word: "체중이 줄고 있는 게 느껴져요", V: -0.32, A: -0.259, D: -0.455, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks199", word: "변비로 고생하고 있어요", V: -0.396, A: -0.069, D: -0.364, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks200", word: "심장이 전보다 빨리 뛰는거 같아요", V: -0.89, A: 1.019, D: -0.458, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks201", word: "별다른 이유 없이 피곤해져요", V: -0.265, A: 0.32, D: -0.287, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks202", word: "평소처럼 정신이 맑아요", V: 0.745, A: 0.333, D: 0.723, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks203", word: "평소만큼 일들을 쉽게 처리해요 OR 내가 하던 일을 하는 것이 쉽다고 생각해요", V: 0.659, A: 0.32, D: 0.652, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks204", word: "안절부절못해서 진정할 수가 없어요", V: -0.552, A: 0.596, D: -0.345, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks205", word: "내 미래는 희망적이라고 생각해요", V: 0.447, A: -0.143, D: 0.127, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks206", word: "평소보다 신경이 더 날카로워요", V: -0.388, A: 0.452, D: -0.038, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks207", word: "결정을 내리는데 별 어려움이 없어요", V: 0.229, A: -0.148, D: 0.308, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks208", word: "스스로가 쓸모 있고 필요한 사람이라고 느껴요", V: 0.51, A: -0.247, D: 0.405, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks209", word: "내 삶은 꽤 충만해요", V: 0.723, A: -0.194, D: 0.244, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks210", word: "내가 죽어야 남들이 더 잘 될 것 같아요", V: -0.469, A: 0.22, D: -0.028, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks211", word: "평소 즐기던 것들을 하면 여전히 즐거워요", V: 0.898, A: 0.465, D: 0.432, question: "SDS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks212", word: "무언가에 관심이 생기고 흥미를 느껴요", V: -0.062, A: 0.263, D: 0.108, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks213", word: "낮 동안에 일들을 다 해낼 수 있어요", V: 1.166, A: 0.992, D: 0.969, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks214", word: "스스로 일을 시작하는 것이 중요해요", V: 1.166, A: 0.992, D: 0.969, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks215", word: "새로운 경험을 하는 것에 관심이 있어요", V: 1.062, A: 0.737, D: 0.892, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks216", word: "새로운 것을 배우는 것에 관심이 있어요", V: 1.062, A: 0.737, D: 0.892, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks217", word: "어떤 일에도 거의 노력을 기울이지 않아요", V: -0.166, A: 0.008, D: 0.031, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks218", word: "삶에 열정적인 태도로 임해요", V: 1.166, A: 0.992, D: 0.969, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks219", word: "맡은 일을 끝까지 하는 것은 중요해요", V: 1.166, A: 0.992, D: 0.969, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks220", word: "내가 흥미있는 일을 하며 시간을 보내요", V: 1.416, A: 1.021, D: 1.194, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks221", word: "누군가 나에게 일을 시켜야지만 해요", V: 1.083, A: 1.356, D: 0.859, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks222", word: "내 문제에 대해 생각보다 신경을 안쓰는 것 같아요", V: 1.062, A: 1.179, D: 0.942, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks223", word: "친구가 있어요", V: -0.25, A: -0.274, D: -0.262, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks224", word: "친구를 만나는 것이 저에게는 중요해요", V: 1.097, A: 0.56, D: 0.827, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks225", word: "좋은 일이 생기면 기분이 들떠요", V: 1.208, A: 0.892, D: 0.898, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks226", word: "내 자신에 대한 문제점을 정확히 알아요", V: 1.306, A: 0.384, D: 1.198, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks227", word: "낮 동안 일을 다 끝내는 것이 나에게 중요해요", V: 1.166, A: 0.992, D: 0.969, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks228", word: "주도적이에요", V: 1.166, A: 0.992, D: 0.969, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks229", word: "의욕이 있어요", V: 1.166, A: 0.992, D: 0.969, question: "AES", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks230", word: "내 주위 사람들과 기분이 통해요", V: 0.75, A: 0.774, D: 0.762, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks231", word: "사람들과의 교제가 부족해요", V: -0.083, A: 0.288, D: -0.054, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks232", word: "의지할 사람이 한 사람도 없어요", V: -0.103, A: 0.318, D: 0.125, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks233", word: "어울려 지내는 친구들 모임이 있어요", V: 1.097, A: 0.56, D: 0.827, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks234", word: "주변 지인들과 많은 공통점을 가지고 있는 것 같아요", V: 1.097, A: 0.56, D: 0.827, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks235", word: "더 이상 아무하고도 가깝지 않은 것 같아요", V: 0.75, A: 0.774, D: 0.762, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks236", word: "내 관심사와 생각들을 주위 사람들과 나누지 않는 것 같아요", V: 0.75, A: 0.774, D: 0.762, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks237", word: "외향적이고 친절한 편이에요", V: 1.317, A: 0.644, D: 0.898, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks238", word: "가깝게 지내는 사람들이 있어요", V: 1.097, A: 0.56, D: 0.827, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks239", word: "혼자 남겨진 느낌이 들어요", V: 1.427, A: 0.89, D: 1.233, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks240", word: "사람들과 나와의 교제는 피상적인 것 같아요", V: -0.097, A: 0.44, D: 0.173, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks241", word: "어느 누구도 나를 제대로 알지 못하는 것 같아요", V: 0.529, A: 0.37, D: 0.483, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks242", word: "다른 사람들로 부터 소외감을 느껴요", V: -0.279, A: -0.144, D: -0.245, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks243", word: "원할 경우 나는 충분히 친구를 사귈 수 있어요", V: 1.43, A: 0.498, D: 1.119, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks244", word: "나를 진심으로 이해해 주는 사람들이 있어요", V: 1.097, A: 0.56, D: 0.827, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks245", word: "낯을 많이 가려요", V: -0.22, A: -0.347, D: -0.368, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks246", word: "주위에 사람들이 있긴 하지만 진정 나와 함께 있는 것은 아닌 것 같아요", V: -0.529, A: -0.418, D: -0.507, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks247", word: "함께 얘기를 나눌 수 있는 사람들이 있어요", V: 1.097, A: 0.56, D: 0.827, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks248", word: "진심으로 의지할 사람들이 있어요", V: 1.45, A: 0.468, D: 0.94, question: "LS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks249", word: "내 친구 관계 및 다른 인간관계에 만족해요", V: 1.097, A: 0.56, D: 0.827, question: "LSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks250", word: "필요할 경우 어느 때나 편하게 도움을 청할 수 있는 사람이 충분히 있어요", V: 1.45, A: 0.468, D: 0.94, question: "LSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks251", word: "내 인간관계는 내가 기대하는 만큼 충분해요", V: 1.45, A: 0.468, D: 0.94, question: "LSS", frequency: 0, simple: 0, average: 0, combine: 0, result: 0 }
      ],
      activity: '',
      activitySelected: [
        0, 0,
        0, 0,
        0, 0,
        0, 0,
      ],
      activityNext: [

      ],
      content: '',
    }

    this.getNumFromServer();
    this.fadeIn();
  }

  getNumFromServer() {
    const url = 'http://yooyu852.dothome.co.kr/scribble/getNum.php'

    fetch(url, {

      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        async: false,
      },
    })
      .then((response) => response.json())
      .then((responseInJson) => {
        console.log(responseInJson);
        this.setState({ num: responseInJson.num });
        this.setState({ load: true });
      })
      .catch((e) => console.log(e))
      .finally(() => {
      })
  }

  sendDataToServer() {
    const url = 'http://yooyu852.dothome.co.kr/scribble/addData.php'

    let data = {
      num: this.state.num,
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age,
      selected: this.state.selected,
      totalList: this.state.totalList,
      activity: this.state.activity,
      content: this.state.content,
    }

    console.log(data);

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
          console.log(responseInJson);
        })
    } catch (e) {
      console.warn('fetch failed', e, url);
    }
  }

  createList() {
    console.log("\n");

    this.increaseProgress()

    var count = this.state.count + 1;
    var step = this.state.step + 1;
    this.setState({ count: count });
    this.setState({ step: step });

    var index;
    var target = [];
    var targetNum = 0;
    var sequence = [];

    if (step == 1) {
      for (var i = 0; i < 5; i++) {
        if (this.state.wordSelected[i] == 1)
          target.push(this.state.wordSpace[i]);
      }
    } else if (step > 1 && step < 5) {
      for (var i = 0; i < 12; i++) {
        if (this.state.wordSelected[i] == 1) {
          target.push(this.state.wordSpace[i]);
          targetNum++;
          sequence.push(i);
        }
      }
    } else {
      for (var i = 0; i < 6; i++) {
        if (this.state.stateSelected[i] == 1) {
          target.push(this.state.stateSpace[i]);
          targetNum++;
          sequence.push(i);
        }
      }
    }

    if (step == 1) {
      // Face selected
      var num;

      switch (target[0]) {
        case 'Good':
          num = 0;
          break;
        case 'Neutral':
          num = 1;
          break;
        case 'Awful':
          num = 2;
          break;
        case 'Great':
          num = 3;
          break;
        case 'Bad':
          num = 4;
          break;
      }

      index = {
        id: 'face' + num,
        word: target[0],
        V: 0,
        A: 0,
        D: 0,
        sequence: num,
        similarity: 0,
        step: step - 1,
      };
      this.state.selected.push(index);

      // Empty array for word space
      let tmp = this.state.initialEmotion;
      let tmpList = [];

      for (var i = 0; i < tmp[num].length; i++) {
        var set = [];
        set.push(tmp[num][i].word);
        set.push(tmp[num][i].result);
        set.push(tmp[num][i].id);

        tmpList.push(set);
        //tmp[i].frequency++;
      }

      for (var i = tmp[num].length; i < 12; i++) {
        var set = [];
        set.push('');
        set.push(0);
        set.push('');

        tmpList.push(set);
        //tmp[i].frequency++;
      }

      // Set arrays to state
      this.setState({ wordSpace: tmpList });

      this.state.totalList.push(tmpList);

      this.resetSelected('word');
    } else {
      // Word selected      
      index = [];

      let tmp;

      if (step < 5) {
        tmp = this.state.emotion;
      } else {
        tmp = this.state.state;
      }

      // Finding selected emotion information
      for (var i = 0; i < targetNum; i++) {
        index.push(tmp.find((element) => {
          if (element.word == target[i][0]) {
            element.frequency = -1;
            return element;
          }
        }));
      }

      // Push word to selected array  
      for (var i = 0; i < targetNum; i++) {
        var selectedInfo = {
          id: index[i].id,
          word: index[i].word,
          V: index[i].V,
          A: index[i].A,
          D: index[i].D,
          sequence: sequence[i],
          similarity: index[i].result,
          step: step - 1,
        };

        this.state.selected.push(selectedInfo);
      }

      var V = 0;
      var A = 0;
      var D = 0;

      // Calculate standard matrix
      for (var i = 0; i < this.state.selected.length; i++) {
        V += this.state.selected[i].V;
        A += this.state.selected[i].A;
        D += this.state.selected[i].D;
      }

      V /= this.state.selected.length;
      A /= this.state.selected.length;
      D /= this.state.selected.length;

      // Initial matrix
      this.setState({ V: V, A: A, D: D });

      // Calculate similarity
      tmp.map((item) => {
        if (item.frequency >= 0 && item.frequency < 3) {
          var flag = true;

          for (var i = 0; i < index.length; i++) {
            if (item.word == index[i].word)
              flag = false;
          }

          if (flag) {
            // Combine matrix
            item.combine = (V * item.V + A * item.A + D * item.D) /
              Math.sqrt(Math.pow(V, 2) + Math.pow(A, 2) + Math.pow(D, 2)) /
              Math.sqrt(Math.pow(item.V, 2) + Math.pow(item.A, 2) + Math.pow(item.D, 2));

            if (step == 1) {
              item.simple = item.combine;
              item.average = item.combine;
              item.result = item.combine;
            } else if (step > 1) {
              // Simple, Average matrix
              var simple = [];
              var simpleMax = -1;
              var average = 0;

              for (var i = 1; i < this.state.selected.length; i++) {
                var matrix = (this.state.selected[i].V * item.V + this.state.selected[i].A * item.A + this.state.selected[i].D * item.D) /
                  Math.sqrt(Math.pow(this.state.selected[i].V, 2) + Math.pow(this.state.selected[i].A, 2) + Math.pow(this.state.selected[i].D, 2)) /
                  Math.sqrt(Math.pow(item.V, 2) + Math.pow(item.A, 2) + Math.pow(item.D, 2));

                simple.push(matrix);
                average += matrix;

                if (matrix > simpleMax) {
                  simpleMax = matrix;
                }
              }
              item.simple = simpleMax;
              item.average = average / this.state.selected.length;

              item.result = item.simple + item.average + item.combine;
            }
          } else {
            // Same word
            item.frequency = -1;
            item.simple = [];
            item.average = -1;
            item.combine = -1;
            item.result = -1;
          }
        }
        else {
          // Deleted word
          item.simple = [];
          item.average = -1;
          item.combine = -1;
          item.result = -1;
        }
      })

      // Sorting emotion array by matrix desc
      tmp.sort((a, b) => (a.result > b.result) ? -1 : 1);

      // Empty array for word space
      let tmpList = [];
      let check = []

      if (step < 5) {
        // Making 12 size word list
        for (var i = 0; i < 12; i++) {
          var duplicate = -1;
          if (i < 4) {
            for (var j = 0; j < 4; j++) {
              if (tmp[j].word == this.state.wordSpace[j]) {
                duplicate = j;
                break;
              }
            }
          } else if (i >= 4) {
            for (var j = 4; j < 12; j++) {
              if (tmp[j].word == this.state.wordSpace[j]) {
                duplicate = j;
                break;
              }
            }
          }

          check.push(duplicate);

          var set = [];
          set.push(tmp[i].word);
          set.push(tmp[i].result);
          set.push(tmp[i].id);

          tmpList.push(set);
          tmp[i].frequency++;
        }

        for (var i = 0; i < 12; i++) {
          if (check[i] > -1) {
            var tmpWord = tmpList[check[i]];
            tmpList[check[i]] = tmpList[i];
            tmpList[i] = tmpWord;
          }
        }

        // Set arrays to state
        this.setState({ emotion: tmp });
        this.setState({ wordSpace: tmpList });

        this.state.totalList.push(tmpList);
        this.resetSelected('word');
      } else {
        // Making 6 size word list
        for (var i = 0; i < 6; i++) {
          var duplicate = -1;
          for (var j = 0; j < 6; j++) {
            if (tmp[j].word == this.state.stateSpace[j]) {
              duplicate = j;
              break;
            }
          }

          check.push(duplicate);
          var set = [];
          set.push(tmp[i].word);
          set.push(tmp[i].result);
          set.push(tmp[i].id);

          tmpList.push(set);
          tmp[i].frequency++;
        }

        for (var i = 0; i < 6; i++) {
          if (check[i] > -1) {
            var tmpWord = tmpList[check[i]];
            tmpList[check[i]] = tmpList[i];
            tmpList[i] = tmpWord;
          }
        }

        // Set arrays to state
        this.setState({ state: tmp });
        this.setState({ stateSpace: tmpList });

        this.state.totalList.push(tmpList);
        this.resetSelected('state');
      }
    }

  }

  increaseProgress() {
    var progress = this.state.progress;

    progress[this.state.step] = 1;

    this.setState({ progress: progress })
  }

  /*
  decreaseProgress() {
    var progress = this.state.progress;

    progress[this.state.count - 1] = 0;

    this.setState({ progress: progress })
  }
  */

  resetSelected(flag) {
    if (flag == 'word') {
      let reset = [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
      ];

      this.setState({ wordSelected: reset, wordNext: 0 });
    } else if (flag == 'state') {
      let reset = [
        0, 0,
        0, 0,
        0, 0,
      ];

      this.setState({ stateSelected: reset, stateNext: 0 });
    }

  }

  toggleSelected(flag, i) {
    if (flag == 'word') {
      var toggle = this.state.wordSelected;
      var count = this.state.wordNext;
      if (toggle[i] == 0) {
        toggle[i] = 1;
        count++;
      } else {
        toggle[i] = 0;
        count--;
      }

      console.log(count);
      this.setState({ wordSelected: toggle, wordNext: count })

    } else if (flag == 'state') {
      var toggle = this.state.stateSelected;
      var count = this.state.stateNext;
      if (toggle[i] == 0) {
        toggle[i] = 1;
        count++;
      } else {
        toggle[i] = 0;
        count--;
      }

      this.setState({ stateSelected: toggle, stateNext: count })

    } else if (flag == 'activity') {
      var toggle = this.state.activitySelected;
      var count = this.state.activityNext;
      if (toggle[i] == 0) {
        toggle[i] = 1;
        count++;
      } else {
        toggle[i] = 0;
        count--;
      }

      this.setState({ activitySelected: toggle, activityNext: count })
    }
  }

  createButtons(type) {
    if (type == 'initial') {
      return (
        <View style={styles.wordBody}>
          <View style={styles.wordCol}>
            <View style={styles.wordBlank} />
            <Animated.View style={this.state.wordSelected[0] == 0 ? { opacity: this.state.fade[0], flex: 2 } : { opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 0)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <Text style={this.state.wordSelected[0] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[0]}</Text>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <Text style={this.state.wordSelected[0] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[0]}</Text>
                </View>
              }
            </Animated.View>
            <View style={styles.wordBlank} />
          </View>
          <View style={styles.wordCol}>
            <Animated.View style={this.state.wordSelected[1] == 0 ? { opacity: this.state.fade[0], flex: 2 } : { opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 1)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <Text style={this.state.wordSelected[1] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[1]}</Text>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <Text style={this.state.wordSelected[1] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[1]}</Text>
                </View>
              }
            </Animated.View>
            <View style={styles.wordBlank} />
            <Animated.View style={this.state.wordSelected[2] == 0 ? { opacity: this.state.fade[0], flex: 2 } : { opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 2)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <Text style={this.state.wordSelected[2] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[2]}</Text>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <Text style={this.state.wordSelected[2] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[2]}</Text>
                </View>
              }
            </Animated.View>
          </View>
          <View style={{ marginTop: 20 }} />
          <View style={styles.wordCol}>
            <View style={styles.wordBigBlank} />
            <Animated.View style={this.state.wordSelected[3] == 0 ? { opacity: this.state.fade[0], flex: 2 } : { opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 3)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <Text style={this.state.wordSelected[3] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[3]}</Text>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <Text style={this.state.wordSelected[3] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[3]}</Text>
                </View>
              }
            </Animated.View>
            <View style={styles.wordBigBlank} />
            <Animated.View style={this.state.wordSelected[4] == 0 ? { opacity: this.state.fade[0], flex: 2 } : { opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 4)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <Text style={this.state.wordSelected[4] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[4]}</Text>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <Text style={this.state.wordSelected[4] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[4]}</Text>
                </View>
              }
            </Animated.View>
            <View style={styles.wordBigBlank} />
          </View>
        </View>
      )
    } else if (type == 'emotion') {
      return (
        <View style={styles.wordBody}>
          <View style={styles.wordCol}>
            <View style={styles.wordBlank} />
            <Animated.View style={this.state.wordSelected[5] == 0 ? { opacity: this.state.fade[1], flex: 2 } : { opacity: this.state.fade[1], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 5)
                }}
              >
                <Text style={this.state.wordSelected[5] == 0 ? styles.wordMiddle : styles.wordMiddleSelected}>{this.state.wordSpace[5][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.wordSelected[6] == 0 ? { opacity: this.state.fade[2], flex: 2 } : { opacity: this.state.fade[2], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 6)
                }}
              >
                <Text style={this.state.wordSelected[6] == 0 ? styles.wordMiddle : styles.wordMiddleSelected}>{this.state.wordSpace[6][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <View style={styles.wordBlank} />
          </View>
          <View style={styles.wordCol}>
            <Animated.View style={this.state.wordSelected[4] == 0 ? { opacity: this.state.fade[1], flex: 2 } : { opacity: this.state.fade[1], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 4)
                }}
              >
                <Text style={this.state.wordSelected[4] == 0 ? styles.wordMiddle : styles.wordMiddleSelected}>{this.state.wordSpace[4][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.wordSelected[0] == 0 ? { opacity: this.state.fade[2], flex: 2 } : { opacity: this.state.fade[2], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 0)
                }}
              >
                <Text style={this.state.wordSelected[0] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[0][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.wordSelected[7] == 0 ? { opacity: this.state.fade[3], flex: 2 } : { opacity: this.state.fade[3], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 7)
                }}
              >
                <Text style={this.state.wordSelected[7] == 0 ? styles.wordMiddle : styles.wordMiddleSelected}>{this.state.wordSpace[7][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.wordCol}>
            <View style={styles.wordBlank} />
            <Animated.View style={this.state.wordSelected[3] == 0 ? { opacity: this.state.fade[2], flex: 2 } : { opacity: this.state.fade[2], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 3)
                }}
              >
                <Text style={this.state.wordSelected[3] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[3][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.wordSelected[1] == 0 ? { opacity: this.state.fade[3], flex: 2 } : { opacity: this.state.fade[3], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 1)
                }}
              >
                <Text style={this.state.wordSelected[1] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[1][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <View style={styles.wordBlank} />
          </View>
          <View style={styles.wordCol}>
            <Animated.View style={this.state.wordSelected[11] == 0 ? { opacity: this.state.fade[2], flex: 2 } : { opacity: this.state.fade[2], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 11)
                }}
              >
                <Text style={this.state.wordSelected[11] == 0 ? styles.wordMiddle : styles.wordMiddleSelected}>{this.state.wordSpace[11][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.wordSelected[2] == 0 ? { opacity: this.state.fade[3], flex: 2 } : { opacity: this.state.fade[3], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 2)
                }}
              >
                <Text style={this.state.wordSelected[2] == 0 ? styles.wordCenter : styles.wordCenterSelected}>{this.state.wordSpace[2][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.wordSelected[8] == 0 ? { opacity: this.state.fade[4], flex: 2 } : { opacity: this.state.fade[4], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 8)
                }}
              >
                <Text style={this.state.wordSelected[8] == 0 ? styles.wordMiddle : styles.wordMiddleSelected}>{this.state.wordSpace[8][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.wordCol}>
            <View style={styles.wordBlank} />
            <Animated.View style={this.state.wordSelected[10] == 0 ? { opacity: this.state.fade[3], flex: 2 } : { opacity: this.state.fade[3], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 10)
                }}
              >
                <Text style={this.state.wordSelected[10] == 0 ? styles.wordMiddle : styles.wordMiddleSelected}>{this.state.wordSpace[10][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.wordSelected[9] == 0 ? { opacity: this.state.fade[4], flex: 2 } : { opacity: this.state.fade[4], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('word', 9)
                }}
              >
                <Text style={this.state.wordSelected[9] == 0 ? styles.wordMiddle : styles.wordMiddleSelected}>{this.state.wordSpace[9][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <View style={styles.wordBlank} />
          </View>
        </View>
      )
    } else if (type == 'state') {
      return (
        <View style={styles.wordBody}>
          <View style={styles.wordCol}>
            <Animated.View style={this.state.stateSelected[4] == 0 ? { opacity: this.state.fade[1], flex: 2 } : { opacity: this.state.fade[1], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('state', 4)
                }}
              >
                <Text style={this.state.stateSelected[4] == 0 ? styles.stateCenter : styles.stateCenterSelected}>{this.state.stateSpace[4][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.stateSelected[5] == 0 ? { opacity: this.state.fade[2], flex: 2 } : { opacity: this.state.fade[2], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('state', 5)
                }}
              >
                <Text style={this.state.stateSelected[5] == 0 ? styles.stateCenter : styles.stateCenterSelected}>{this.state.stateSpace[5][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.wordCol}>
            <Animated.View style={this.state.stateSelected[0] == 0 ? { opacity: this.state.fade[2], flex: 2 } : { opacity: this.state.fade[2], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('state', 0)
                }}
              >
                <Text style={this.state.stateSelected[0] == 0 ? styles.stateCenter : styles.stateCenterSelected}>{this.state.stateSpace[0][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.stateSelected[1] == 0 ? { opacity: this.state.fade[3], flex: 2 } : { opacity: this.state.fade[3], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('state', 1)
                }}
              >
                <Text style={this.state.stateSelected[1] == 0 ? styles.stateCenter : styles.stateCenterSelected}>{this.state.stateSpace[1][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.wordCol}>
            <Animated.View style={this.state.stateSelected[2] == 0 ? { opacity: this.state.fade[3], flex: 2 } : { opacity: this.state.fade[3], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('state', 2)
                }}
              >
                <Text style={this.state.stateSelected[2] == 0 ? styles.stateCenter : styles.stateCenterSelected}>{this.state.stateSpace[2][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={this.state.stateSelected[3] == 0 ? { opacity: this.state.fade[4], flex: 2 } : { opacity: this.state.fade[4], flex: 2 }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('state', 3)
                }}
              >
                <Text style={this.state.stateSelected[3] == 0 ? styles.stateCenter : styles.stateCenterSelected}>{this.state.stateSpace[3][0]}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      )
    } else if (type == 'exercise') {
      return (
        <View style={styles.wordBody}>
          <View style={styles.wordCol}>
            <Animated.View style={{ opacity: this.state.fade[1], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.setState({ activity: 'family' })
                  this.toggleSelected('activity', 0)
                }}>
                {this.state.activitySelected[0] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/relationship.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/relationshipSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[2], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.setState({ activity: 'sleep' })
                  this.toggleSelected('activity', 1)
                }}>
                {this.state.activitySelected[1] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/sleep.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/sleepSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.wordCol}>
            <Animated.View style={{ opacity: this.state.fade[2], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.setState({ activity: 'hobbies' })
                  this.toggleSelected('activity', 2)
                }}>
                {this.state.activitySelected[2] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/hobbies.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/hobbiesSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[3], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.setState({ activity: 'work' })
                  this.toggleSelected('activity', 3)
                }}>
                {this.state.activitySelected[3] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/work.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/workSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>

          </View>
          <View style={styles.wordCol}>
            <Animated.View style={{ opacity: this.state.fade[3], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.setState({ activity: 'finances' })
                  this.toggleSelected('activity', 4)
                }}>
                {this.state.activitySelected[4] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/finances.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/financesSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[4], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.setState({ activity: 'relationships' })
                  this.toggleSelected('activity', 5)
                }}>
                {this.state.activitySelected[5] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/love.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/loveSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.wordCol}>
            <Animated.View style={{ opacity: this.state.fade[4], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.setState({ activity: 'exercise' })
                  this.toggleSelected('activity', 6)
                }}>
                {this.state.activitySelected[6] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/exercise.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/exerciseSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[5], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.setState({ activity: 'health' })
                  this.toggleSelected('activity', 7)
                }}>
                {this.state.activitySelected[7] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/health.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/healthSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      )
    }
  }

  changeList(type) {
    var reload = this.state.reload;
    let tmp = [];
    if (type == 'emotion') {
      var emotion = this.state.emotion;
      for (var i = 0; i < 12; i++) {
        var set = [];
        set.push(emotion[reload * 12 + i].word);
        set.push(emotion[reload * 12 + i].result);
        set.push(emotion[reload * 12 + i].id);

        emotion[reload * 12 + i].frequency++;

        tmp.push(set);
      }

      this.resetSelected('word');
      this.setState({ wordSpace: tmp, emotion: emotion });
    } else if (type == 'state') {
      var state = this.state.state;
      for (var i = 0; i < 6; i++) {
        var set = [];
        set.push(state[reload * 12 + i].word);
        set.push(state[reload * 12 + i].result);
        set.push(state[reload * 12 + i].id);

        state[reload * 6 + i].frequency++;

        tmp.push(set);
      }

      this.resetSelected('state');
      this.setState({ stateSpace: tmp, state: state });
    }
  }

  createProgressBar(l, i) {
    if (l == 0) {
      return (
        <View style={styles.progress} />
      )
    } else {
      return (
        <View style={styles.progressFill} />
      )
    }
  }
/*
  getActivity() {
    switch (this.state.activity) {
      case 'exercise':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../../assets/activities/exercise.png')}
          />
        )
      case 'family':
      case 'finances':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../../assets/activities/finances.png')}
          />
        )
      case 'friends':
      case 'health':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../../assets/activities/health.png')}
          />
        )
      case 'hobbies':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../../assets/activities/hobbies.png')}
          />
        )
      case 'location':
      case 'relationships':

      case 'sleep':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../../assets/activities/sleep.png')}
          />
        )
      case 'work':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../../assets/activities/work.png')}
          />
        )
    }
  }
*/
  fadeIn() {
    // Question Fade
    Animated.timing(this.state.fade[0], {
      useNativeDriver: true,
      toValue: 1,
      duration: 800,
    }).start();

    // 1st
    Animated.timing(this.state.fade[1], {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
    }).start();

    // 2nd
    Animated.timing(this.state.fade[2], {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
      delay: 200,
    }).start();

    // 3rd
    Animated.timing(this.state.fade[3], {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
      delay: 400,
    }).start();

    // 4th
    Animated.timing(this.state.fade[4], {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
      delay: 600,
    }).start();

    // 5th
    Animated.timing(this.state.fade[5], {
      useNativeDriver: true,
      toValue: 1,
      duration: 200,
      delay: 800,
    }).start();

    // Dummy
    Animated.timing(this.state.fade[6], {
      useNativeDriver: true,
      toValue: 1,
      duration: 500,
      delay: 500,
    }).start();
  };

  fadeOut() {
    // Question Fade
    Animated.timing(this.state.fade[0], {
      useNativeDriver: true,
      toValue: 0,
      duration: 800,
    }).start();

    // 1st
    Animated.timing(this.state.fade[1], {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
    }).start();

    // 2nd
    Animated.timing(this.state.fade[2], {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
      delay: 200,
    }).start();

    // 3rd
    Animated.timing(this.state.fade[3], {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
      delay: 400,
    }).start();

    // 4th
    Animated.timing(this.state.fade[4], {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
      delay: 600,
    }).start();

    // 5th
    Animated.timing(this.state.fade[5], {
      useNativeDriver: true,
      toValue: 0,
      duration: 200,
      delay: 800,
    }).start();

    // Dummy
    Animated.timing(this.state.fade[6], {
      useNativeDriver: true,
      toValue: 0,
      duration: 800,
      delay: 500,
    }).start();
  };

  render() {
    if (this.state.step == 9) {
      this.sendDataToServer();
      this.props.navigation.navigate('Menu', { screen: 'Home' })
    }

    console.log("seleted")
    console.log(this.state.stateSelected);
    console.log("fade");
    console.log(this.state.fade[0]);

    if (this.state.load) {
      return (
        <View style={styles.container}>
          {/*
          this.state.count == 0 && // Initial Screen - Name
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Animated.View style={{opacity: this.state.fade[0], flex: 14}}>
                  <Text style={styles.question}>What is your name?</Text>
                </Animated.View>
              </View>
              <View style={styles.wordBody}>
                <Animated.View style={{opacity: this.state.fade[0], flex: 1}}>
                  <View style={styles.wordCol}>
                    <TextInput
                      style={styles.nameInput}
                      onChangeText={(text) => {
                        this.setState({name : text})
                        if (text != '') {
                          this.setState({ nextButton : true })
                        } else {
                          this.setState({ nextButton : false })
                        }
                      }}
                      placeholder={'Write your name here'}
                    />
                  </View>
                </Animated.View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
                {!this.state.nextButton ?
                  <View style={styles.wordBlank} />
                  :
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      this.setState({ nextButton : false })
                      this.fadeOut();
                      setTimeout(function(){
                        this.increaseProgress();
                        this.setState({ count: this.state.count + 1});
                        this.fadeIn();
                      }.bind(this), 1300);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="arrow-right-drop-circle"
                      size={Dimensions.get('window').width * 0.2}
                      color="black"
                    />
                  </TouchableOpacity>
                }
              </View>
            </View>
          }
          {this.state.count == 1 && // Initial Screen - Gender
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Animated.View style={{opacity: this.state.fade[0], flex: 14}}>
                  <Text style={styles.question}>What is your gender?</Text>
                </Animated.View>
              </View>
              <View style={styles.wordBody}>
                <View style={styles.wordCol}>
                  <Animated.View style={{opacity: this.state.fade[0], flex: 1}}>
                    <TouchableOpacity
                      style={styles.wordSpace}
                      onPress={() => {
                        this.setState({ gender : 'Male', nextButton : true })
                      }}
                    >
                      <Text style={this.state.gender == 'Male' ? styles.genderSelectFill : styles.genderSelect}>
                        Male
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                  <Animated.View style={{opacity: this.state.fade[0], flex: 1}}>
                    <TouchableOpacity
                      style={styles.wordSpace}
                      onPress={() => {
                        this.setState({ gender : 'Female', nextButton : true })
                      }}
                    >
                      <Text style={this.state.gender == 'Female' ? styles.genderSelectFill : styles.genderSelect}>
                        Female
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                </View>
                <View style={styles.wordCol}>
                  <View style={styles.wordBlank}/>
                    <Animated.View style={{opacity: this.state.fade[0], flex: 1}}>
                      <TouchableOpacity
                        style={styles.wordSpace}
                        onPress={() => {
                          this.setState({ gender : 'Anonymous', nextButton : true })
                        }}
                      >
                        <Text style={this.state.gender == 'Anonymous' ? styles.genderSelectFill : styles.genderSelect}>
                          Anonymous
                        </Text>
                      </TouchableOpacity>
                    </Animated.View>
                  <View style={styles.wordBlank}/>
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
                {!this.state.nextButton ?
                  <View style={styles.wordBlank} />
                  :
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      this.setState({ nextButton : false })
                      this.fadeOut();
                      setTimeout(function(){
                        this.increaseProgress();
                        this.setState({ count: this.state.count + 1});
                        this.fadeIn();
                      }.bind(this), 1300);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="arrow-right-drop-circle"
                      size={Dimensions.get('window').width * 0.2}
                      color="black"
                    />
                  </TouchableOpacity>
                }
              </View>
            </View>
          }
          {this.state.count == 2 && // Initial Screen - Age
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Animated.View style={{opacity: this.state.fade[0], flex: 14}}>
                  <Text style={styles.question}>How old are you?</Text>
                </Animated.View>
              </View>
              <View style={styles.wordBody}>
                <Animated.View style={{flexDirection: 'row', flex: 1, opacity: this.state.fade[0]}}>
                  <View style={styles.wordCol}>
                    <TextInput
                      style={styles.ageInput}
                      onChangeText={(text) => {this.setState({ age : text })
                        if (text != '') {
                          this.setState({ nextButton : true })
                        } else {
                          this.setState({ nextButton : false })
                        }
                      }}
                      placeholder={'25'}
                      maxLength={3}
                      keyboardType='numeric'
                    />
                  </View>
                  <View style={styles.wordCol}>
                    <Text style={styles.ageText}>years old</Text>
                  </View>
                </Animated.View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
                {!this.state.nextButton ?
                  <View style={styles.wordBlank} />
                  :
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      this.setState({ nextButton : false })
                      this.fadeOut();
                      setTimeout(function(){
                        this.increaseProgress();
                        this.setState({ count: this.state.count + 1});
                        this.fadeIn();
                      }.bind(this), 1300);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="arrow-right-drop-circle"
                      size={Dimensions.get('window').width * 0.2}
                      color="black"
                    />
                  </TouchableOpacity>
                }
              </View>
            </View>
          */
          }
          {this.state.step == 0 && // Emotion Initial Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Animated.View style={{ opacity: this.state.fade[0], flex: 14 }}>
                  <Text style={styles.question}>How do you feel today?</Text>
                </Animated.View>
              </View>
              {this.createButtons('initial')}
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('HomeStack')
                    }}
                  >
                    <MaterialCommunityIcons
                      name="home-circle"
                      size={Dimensions.get('window').width * 0.15}
                      color="black"
                    />
                  </TouchableOpacity>
                </Animated.View>
                <View style={styles.wordBlank} />
              </View>
            </View>
          }
          {(this.state.step >= 1 && this.state.step < 5) && // Emotion Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Animated.View style={{ opacity: this.state.fade[0], flex: 14 }}>
                  <Text style={styles.question}>How do you feel today?</Text>
                </Animated.View>
              </View>
              {this.createButtons('emotion')}
              <View style={styles.wordBottom}>
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ wordNext: 0, reload: this.state.reload + 1 });
                      this.fadeOut();
                      setTimeout(function () {
                        this.changeList('emotion');
                        this.fadeIn();
                      }.bind(this), 800);
                    }}
                  >
                    <Image
                      style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15 }}
                      source={require('../../assets/reload.png')}
                    />
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('HomeStack')
                    }}
                  >
                    <MaterialCommunityIcons
                      name="home-circle"
                      size={Dimensions.get('window').width * 0.15}
                      color="black"
                    />
                  </TouchableOpacity>
                </Animated.View>
                {this.state.wordNext == 0 ?
                  <View style={styles.wordBlank} />
                  :
                  <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                    <TouchableOpacity
                      style={styles.nextButton}
                      onPress={() => {
                        this.fadeOut();
                        setTimeout(function () {
                          this.setState({ wordNext: 0 });
                          this.createList();
                          this.fadeIn();
                        }.bind(this), 800);
                      }}
                    >
                      <MaterialCommunityIcons
                        name="arrow-right-drop-circle"
                        size={Dimensions.get('window').width * 0.15}
                        color="black"
                      />
                    </TouchableOpacity>
                  </Animated.View>
                }
              </View>
            </View>
          }
          {(this.state.step >= 5 && this.state.step < 7) && // State Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Animated.View style={{ opacity: this.state.fade[0], flex: 14 }}>
                  <Text style={styles.question}>How do you feel today?</Text>
                </Animated.View>
              </View>
              {this.createButtons('state')}
              <View style={styles.wordBottom}>
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      this.setState({ wordNext: 0, reload: this.state.reload + 1 });
                      this.fadeOut();
                      setTimeout(function () {
                        this.changeList('state');
                        this.fadeIn();
                      }.bind(this), 800);
                    }}
                  >
                    <Image
                      style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15 }}
                      source={require('../../assets/reload.png')}
                    />
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('HomeStack')
                    }}
                  >
                    <MaterialCommunityIcons
                      name="home-circle"
                      size={Dimensions.get('window').width * 0.15}
                      color="black"
                    />
                  </TouchableOpacity>
                </Animated.View>
                {this.state.stateNext == 0 ?
                  <View style={styles.wordBlank} />
                  :
                  <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                    <TouchableOpacity
                      onPress={() => {
                        this.fadeOut();
                        setTimeout(function () {
                          this.setState({ stateNext: 0 });
                          this.createList();
                          this.fadeIn();
                        }.bind(this), 800);
                      }}
                    >
                      <MaterialCommunityIcons
                        name="arrow-right-drop-circle"
                        size={Dimensions.get('window').width * 0.15}
                        color="black"
                      />
                    </TouchableOpacity>
                  </Animated.View>
                }
              </View>
            </View>
          }
          {this.state.step == 7 && // Exercise Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Animated.View style={{ opacity: this.state.fade[0], flex: 14 }}>
                  <Text style={styles.question}>What made you feel this way?</Text>
                </Animated.View>
              </View>
              {this.createButtons('exercise')}
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('HomeStack')
                    }}
                  >
                    <MaterialCommunityIcons
                      name="home-circle"
                      size={Dimensions.get('window').width * 0.15}
                      color="black"
                    />
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ activityNext: 0 });
                      this.fadeOut();
                      setTimeout(function () {
                        this.increaseProgress();
                        this.setState({ step: this.state.step + 1 });
                        this.fadeIn();
                      }.bind(this), 800);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="arrow-right-drop-circle"
                      size={Dimensions.get('window').width * 0.15}
                      color="black"
                    />
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </View>
          }
          {this.state.step == 8 && // Exercise Detail Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Animated.View style={{ opacity: this.state.fade[0], flex: 14 }}>
                  <Text style={styles.question}>Could you describe your feeling to me?</Text>
                </Animated.View>
              </View>
              <Animated.View style={{ opacity: this.state.fade[0], flex: 3 }}>
                <View style={styles.exerciseBox}>
                  {
                    //this.getActivity()
                  }
                  <TextInput
                    style={styles.exerciseInput}
                    onChangeText={(text) => {
                      this.setState({ content: text })
                    }}
                    placeholder={'Start Writing'}
                    multiline={true}
                  />
                </View>
              </Animated.View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('HomeStack')
                    }}
                  >
                    <MaterialCommunityIcons
                      name="home-circle"
                      size={Dimensions.get('window').width * 0.15}
                      color="black"
                    />
                  </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ nextButton: false });
                      this.fadeOut();
                      setTimeout(function () {
                        this.increaseProgress();
                        this.setState({ step: this.state.step + 1 });
                      }.bind(this), 800);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="arrow-right-drop-circle"
                      size={Dimensions.get('window').width * 0.15}
                      color="black"
                    />
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </View>
          }
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Now Loading</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 10,
  },
  wordCol: {
    flex: 1,
    flexDirection: 'row',
  },
  progressBar: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    paddingHorizontal: Dimensions.get('window').width * 0.05
  },
  progress: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    margin: 2,
  },
  progressFill: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: '#cccccc',
    margin: 2,
  },
  progressStart: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#f2f2f2',
  },
  progressStartFill: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#cccccc',
  },
  progressMiddle: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  progressMiddleFill: {
    flex: 1,
    backgroundColor: '#cccccc',
  },
  progressEnd: {
    flex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#f2f2f2',
  },
  progressEndFill: {
    flex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#cccccc',
  },
  question: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    textAlignVertical: 'center',
  },
  wordTop: {
    flex: 1,
    marginBottom: 10,
  },
  wordBottom: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
  prevButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      { rotateY: '180deg' }
    ]
  },
  nextButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordBody: {
    flex: 3,
  },
  wordSpace: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordBlank: {
    flex: 1,
  },
  wordBigBlank: {
    flex: 2,
  },
  nameInput: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: '100%',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  genderSelect: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 0.99,

    backgroundColor: "#FFF",
    color: '#000',
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  genderSelectFill: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 0.99,

    backgroundColor: "#000",
    color: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  ageInput: {
    flex: 1,
    padding: 10,
    fontSize: 30,
    textAlign: 'right',
    textAlignVertical: 'center',
  },
  ageText: {
    flex: 1,
    padding: 10,
    fontSize: 30,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  face: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    margin: 10,
    borderRadius: 500,
    opacity: 0.99,

    color: "#000",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  wordCenter: {
    width: Dimensions.get('window').width * 0.25 - 10,
    height: Dimensions.get('window').width * 0.25 - 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 0.99,

    color: "#000",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  wordCenterSelected: {
    width: Dimensions.get('window').width * 0.25 - 10,
    height: Dimensions.get('window').width * 0.25 - 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 0.99,

    color: "#FFF",
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  wordMiddle: {
    width: Dimensions.get('window').width * 0.25 - 10,
    height: Dimensions.get('window').width * 0.25 - 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 0.99,

    color: "#666",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  wordMiddleSelected: {
    width: Dimensions.get('window').width * 0.25 - 10,
    height: Dimensions.get('window').width * 0.25 - 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 0.99,

    color: "#FFF",
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  stateCenter: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: Dimensions.get('window').width * 0.16,
    opacity: 0.99,

    color: "#000",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  stateCenterSelected: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: Dimensions.get('window').width * 0.16,
    opacity: 0.99,

    color: "#FFF",
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  exerciseBox: {
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 30,

    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 30,

    elevation: 10,
  },
  exerciseImage: {
    padding: 10,
    width: Dimensions.get('window').height * 0.13,
    height: Dimensions.get('window').height * 0.13,
    resizeMode: 'contain',
    position: 'absolute',
  },
  exerciseInput: {
    flex: 5,
    fontSize: 20,
    //marginTop: Dimensions.get('window').height * 0.13 + 10,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});