import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ImageBackground, Animated, LogBox, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

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
      version: this.props.route.params.version,
      today: this.getToday(),
      num: 0,
      load: false,
      step: 0,
      progress: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      userAnswer: [],
      userInput: [],
      userScore: [],
      userId: "",
      userDay: 0,
      necessaryCount: 0,
      mail: global.mail,
      categoryList: [
        [
          { id: "es001", sequence: 0 },
          { id: "es002", sequence: 1 },
          { id: "es003", sequence: 2 },
          { id: "es004", sequence: 2 },
          { id: "es005", sequence: 2 },
          { id: "es006", sequence: 3 },
          { id: "es007", sequence: 3 },
          { id: "es008", sequence: 4 },
          { id: "es009", sequence: 4 },
          { id: "es010", sequence: 4 },
          { id: "es011", sequence: 5 },
          { id: "es012", sequence: 6 },
          { id: "es013", sequence: 6 },
          { id: "es026", sequence: 1 },
          { id: "es212", sequence: 4 },
          { id: "ew136", sequence: 1 },
          { id: "ew142", sequence: 1 },
          { id: "ew162", sequence: 4 },
          { id: "ew178", sequence: 7 },
          { id: "ew179", sequence: 7 },
          { id: "ew185", sequence: 1 },
          { id: "ew204", sequence: 1 },
          { id: "ew212", sequence: 4 },
          { id: "ew238", sequence: 1 },
        ],
        [
          { id: "es014", sequence: 1 },
          { id: "es015", sequence: 2 },
          { id: "es016", sequence: 3 },
          { id: "es017", sequence: 4 },
          { id: "es018", sequence: 5 },
          { id: "es019", sequence: 6 },
          { id: "ew109", sequence: 0 },
          { id: "ew119", sequence: 0 },
          { id: "ew133", sequence: 0 },
          { id: "ew140", sequence: 4 },
          { id: "ew205", sequence: 1 },
        ],
        [
          { id: "ew009", sequence: 6 },
          { id: "ew020", sequence: 3 },
          { id: "ew029", sequence: 2 },
          { id: "ew032", sequence: 4 },
          { id: "ew036", sequence: 1 },
          { id: "ew050", sequence: 6 },
          { id: "ew053", sequence: 9 },
          { id: "ew054", sequence: 9 },
          { id: "ew063", sequence: 8 },
          { id: "ew071", sequence: 7 },
          { id: "ew072", sequence: 0 },
          { id: "ew098", sequence: 5 },
        ],
        [
          { id: "es182", sequence: 0 },
          { id: "es183", sequence: 1 },
          { id: "es184", sequence: 2 },
          { id: "es185", sequence: 3 },
          { id: "es186", sequence: 4 },
          { id: "es187", sequence: 5 },
          { id: "es188", sequence: 6 },
          { id: "es189", sequence: 7 },
          { id: "es190", sequence: 8 },
          { id: "es191", sequence: 9 },
          { id: "ew133", sequence: 2 },
          { id: "ew214", sequence: 2 },
        ],
        [
          { id: "es230", sequence: 1 },
          { id: "es230", sequence: 2 },
          { id: "es231", sequence: 3 },
          { id: "es232", sequence: 4 },
          { id: "es233", sequence: 5 },
          { id: "es234", sequence: 6 },
          { id: "es235", sequence: 7 },
          { id: "es236", sequence: 8 },
          { id: "es237", sequence: 9 },
          { id: "es238", sequence: 10 },
          { id: "es239", sequence: 11 },
          { id: "es240", sequence: 12 },
          { id: "es241", sequence: 13 },
          { id: "es242", sequence: 14 },
          { id: "es243", sequence: 15 },
          { id: "es244", sequence: 16 },
          { id: "es245", sequence: 17 },
          { id: "es246", sequence: 18 },
          { id: "es247", sequence: 19 },
          { id: "es248", sequence: 20 },
          { id: "ew129", sequence: 0 },
        ],
        [
          { id: "es009", sequence: 5 },
          { id: "es045", sequence: 0 },
          { id: "es046", sequence: 1 },
          { id: "es047", sequence: 2 },
          { id: "es048", sequence: 3 },
          { id: "es049", sequence: 4 },
          { id: "es050", sequence: 6 },
          { id: "es051", sequence: 7 },
          { id: "es052", sequence: 8 },
          { id: "es053", sequence: 9 },
          { id: "es054", sequence: 10 },
          { id: "es055 ", sequence: 11 },
        ],
        [
          { id: "es056", sequence: 0 },
          { id: "es057", sequence: 1 },
          { id: "es058", sequence: 2 },
          { id: "es059", sequence: 3 },
          { id: "es060", sequence: 4 },
          { id: "es061", sequence: 5 },
          { id: "es062", sequence: 6 },
          { id: "es063", sequence: 7 },
          { id: "es064", sequence: 8 },
          { id: "es065", sequence: 9 },
          { id: "es066", sequence: 10 },
          { id: "es067", sequence: 11 },
        ],
        [
          { id: "es009", sequence: 9 },
          { id: "es028", sequence: 0 },
          { id: "es039", sequence: 1 },
          { id: "es068", sequence: 0 },
          { id: "es069", sequence: 1 },
          { id: "es070", sequence: 2 },
          { id: "es071", sequence: 3 },
          { id: "es072", sequence: 4 },
          { id: "es073", sequence: 5 },
          { id: "es074", sequence: 6 },
          { id: "es075", sequence: 7 },
          { id: "es076", sequence: 8 },
          { id: "ew012", sequence: 0 },
          { id: "ew231", sequence: 5 },
        ]
      ],
      V: 0,
      A: 0,
      D: 0,
      DEP: 0,
      ANX: 0,
      SOW: 0,
      STR: 0,
      NEU: 0,
      selected: [],
      reload: 0,
      reloadFlag: true,
      wordSpace: this.setInitial(),
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
      initialEmotion: [],
      emotion: [],
      state: [],
      initialEmotionEng: [
        [
          { id: "ew001", word: "happy", V: 0.5, A: 0.235, D: 0.235, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew016", word: "hopeful", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew070", word: "content", V: 0.264, A: -0.204, D: -0.204, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew035", word: "safe", V: 0.398, A: -0.194, D: -0.194, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew045", word: "of worth", V: 0.372, A: 0.01, D: 0.01, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew069", word: "confident", V: 0.265, A: -0.176, D: -0.176, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew032", word: "proud", V: 0.406, A: 0.2, D: 0.2, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew035", word: "safe", V: 0.398, A: -0.194, D: -0.194, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew042", word: "calm", V: 0.375, A: -0.4, D: -0.4, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew070", word: "content", V: 0.264, A: -0.204, D: -0.204, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew178", word: "tired", V: -0.375, A: -0.183, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew163", word: "stressed", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 0.2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "ew001", word: "happy", V: 0.5, A: 0.235, D: 0.235, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew016", word: "hopeful", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew047", word: "relaxed", V: 0.365, A: -0.41, D: -0.41, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew004", word: "joyful", V: 0.49, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew045", word: "of worth", V: 0.372, A: 0.01, D: 0.01, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew069", word: "confident", V: 0.265, A: -0.176, D: -0.176, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew032", word: "proud", V: 0.406, A: 0.2, D: 0.2, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew035", word: "safe", V: 0.398, A: -0.194, D: -0.194, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew042", word: "calm", V: 0.375, A: -0.4, D: -0.4, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew070", word: "content", V: 0.264, A: -0.204, D: -0.204, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew178", word: "tired", V: -0.375, A: -0.183, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew163", word: "stressed", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 0.2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "ew136", word: "sad", V: -0.275, A: -0.167, D: -0.167, DEP: 0.2, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew119", word: "anxious", V: -0.219, A: 0.375, D: 0.375, DEP: 0, ANX: 0.2, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew166", word: "bored", V: -0.347, A: -0.333, D: -0.333, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew042", word: "calm", V: 0.375, A: -0.4, D: -0.4, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew178", word: "tired", V: -0.375, A: -0.183, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew134", word: "distant", V: -0.271, A: -0.176, D: -0.176, DEP: 0, ANX: 0, SOW: 0.2, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew149", word: "distracted", V: -0.306, A: -0.108, D: -0.108, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew151", word: "apathetic", V: -0.312, A: -0.208, D: -0.208, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew163", word: "stressed", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 0.2, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew001", word: "happy", V: 0.5, A: 0.235, D: 0.235, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew016", word: "hopeful", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew047", word: "relaxed", V: 0.365, A: -0.41, D: -0.41, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "ew136", word: "sad", V: -0.275, A: -0.167, D: -0.167, DEP: 0.2, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew119", word: "anxious", V: -0.219, A: 0.375, D: 0.375, DEP: 0, ANX: 0.2, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew163", word: "stressed", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 0.2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew180", word: "angry", V: -0.378, A: 0.33, D: 0.33, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew129", word: "lonely", V: -0.25, A: -0.274, D: -0.274, DEP: 0, ANX: 0, SOW: 0.2, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew205", word: "worried", V: -0.406, A: 0.324, D: 0.324, DEP: 0, ANX: 0.2, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew216", word: "upset", V: -0.429, A: 0.18, D: 0.18, DEP: 0.2, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew151", word: "apathetic", V: -0.312, A: -0.208, D: -0.208, DEP: 0.2, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew153", word: "empty", V: -0.312, A: -0.317, D: -0.317, DEP: 0, ANX: 0, SOW: 0.2, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew197", word: "annoyed", V: -0.396, A: 0.283, D: 0.283, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew016", word: "hopeful", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew047", word: "relaxed", V: 0.365, A: -0.41, D: -0.41, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "ew136", word: "sad", V: -0.275, A: -0.167, D: -0.167, DEP: 0.2, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew119", word: "anxious", V: -0.219, A: 0.375, D: 0.375, DEP: 0, ANX: 0.2, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew163", word: "stressed", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 0.2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew178", word: "tired", V: -0.375, A: -0.183, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew216", word: "upset", V: -0.429, A: 0.18, D: 0.18, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew151", word: "apathetic", V: -0.312, A: -0.208, D: -0.208, DEP: 0.2, ANX: 0, SOW: 0, STR: 0, NEU: 0.2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew197", word: "annoyed", V: -0.396, A: 0.283, D: 0.283, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew180", word: "angry", V: -0.378, A: 0.33, D: 0.33, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew166", word: "bored", V: -0.347, A: -0.333, D: -0.333, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew153", word: "empty", V: -0.312, A: -0.317, D: -0.317, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew016", word: "hopeful", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "ew047", word: "relaxed", V: 0.365, A: -0.41, D: -0.41, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
      ],
      emotionEng: [
        { id: "ew001", word: "happy", V: 0.5, A: 0.019, D: 0.173, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew002", word: "love", V: 0.5, A: 0.235, D: 0.272, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew003", word: "cheerful", V: 0.49, A: 0.24, D: 0.167, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew004", word: "joyful", V: 0.49, A: 0.22, D: 0.196, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew005", word: "optimistic", V: 0.479, A: 0.08, D: 0.321, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew006", word: "excellent", V: 0.47, A: 0.087, D: 0.37, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew007", word: "admiration", V: 0.469, A: -0.156, D: 0.214, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew008", word: "thankful", V: 0.469, A: 0.083, D: 0.226, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew009", word: "inspired", V: 0.467, A: 0.202, D: 0.236, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew010", word: "liking", V: 0.463, A: 0.104, D: 0.089, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew011", word: "positive", V: 0.459, A: 0.01, D: 0.185, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew012", word: "satisfied", V: 0.459, A: 0.01, D: 0.355, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew013", word: "grateful", V: 0.458, A: -0.147, D: 0.06, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew014", word: "great", V: 0.458, A: 0.165, D: 0.31, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew015", word: "successful", V: 0.449, A: 0.224, D: 0.438, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew016", word: "hopeful", V: 0.447, A: -0.143, D: 0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew017", word: "peace", V: 0.439, A: -0.344, D: 0.113, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew018", word: "pleasant", V: 0.439, A: -0.19, D: 0.173, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew019", word: "talented", V: 0.439, A: 0.135, D: 0.438, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew020", word: "enthusiasm", V: 0.438, A: -0.132, D: 0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew021", word: "good", V: 0.438, A: 0.316, D: 0.298, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew022", word: "romantic", V: 0.436, A: 0.031, D: 0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew023", word: "comfortable", V: 0.427, A: -0.337, D: -0.027, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew025", word: "courageous", V: 0.418, A: 0.087, D: 0.379, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew026", word: "creative", V: 0.417, A: -0.102, D: 0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew027", word: "friendly", V: 0.417, A: 0.018, D: 0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew028", word: "reliable", V: 0.412, A: -0.259, D: 0.375, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew029", word: "strong", V: 0.412, A: 0.245, D: 0.395, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew030", word: "respected", V: 0.408, A: -0.059, D: 0.353, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew031", word: "attraction", V: 0.406, A: 0.274, D: 0.212, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew032", word: "proud", V: 0.406, A: 0.2, D: 0.373, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew033", word: "valuable", V: 0.399, A: 0.047, D: 0.298, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew034", word: "affection", V: 0.398, A: 0.059, D: 0.196, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew035", word: "safe", V: 0.398, A: -0.194, D: 0.259, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew036", word: "excitement", V: 0.396, A: 0, D: 0.044, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew037", word: "free", V: 0.396, A: 0.184, D: 0.231, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew038", word: "playful", V: 0.392, A: 0.188, D: -0.037, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew039", word: "adoration", V: 0.385, A: -0.059, D: 0.11, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew040", word: "cool", V: 0.385, A: 0.199, D: 0.208, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew041", word: "gratitude", V: 0.385, A: 0.04, D: 0.281, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew042", word: "calm", V: 0.375, A: -0.4, D: -0.218, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew043", word: "supported", V: 0.375, A: 0.375, D: 0.062, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew044", word: "surprised", V: 0.375, A: -0.08, D: 0.135, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew045", word: "of worth", V: 0.372, A: 0.01, D: 0.389, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew046", word: "powerful", V: 0.365, A: -0.41, D: -0.118, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew047", word: "relaxed", V: 0.365, A: -0.41, D: -0.118, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew048", word: "at ease", V: 0.365, A: -0.41, D: -0.118, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew049", word: "trust", V: 0.357, A: 0.008, D: 0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew050", word: "motivated", V: 0.354, A: -0.041, D: 0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew051", word: "sociable", V: 0.354, A: 0.284, D: 0.302, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew052", word: "accepted", V: 0.347, A: -0.214, D: 0.065, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew053", word: "active", V: 0.347, A: 0.23, D: 0.231, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew054", word: "energetic", V: 0.347, A: 0.368, D: 0.402, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew055", word: "relief", V: 0.344, A: -0.222, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew056", word: "secure", V: 0.344, A: -0.12, D: 0.414, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew057", word: "chill", V: 0.337, A: -0.294, D: -0.018, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew058", word: "security", V: 0.337, A: -0.14, D: 0.321, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew059", word: "companionship", V: 0.333, A: -0.089, D: 0.226, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew060", word: "useful", V: 0.333, A: -0.062, D: 0.292, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew061", word: "easygoing", V: 0.323, A: -0.224, D: 0.038, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew062", word: "helpful", V: 0.316, A: -0.163, D: 0.205, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew063", word: "attentive", V: 0.312, A: 0.057, D: 0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew064", word: "fair", V: 0.312, A: 0.02, D: 0.224, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew065", word: "quiet", V: 0.292, A: -0.395, D: -0.069, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew066", word: "rested", V: 0.292, A: -0.265, D: -0.038, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew067", word: "understood", V: 0.28, A: -0.059, D: 0.186, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew068", word: "meaningful", V: 0.27, A: 0, D: 0.302, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew069", word: "confident", V: 0.265, A: -0.176, D: 0.223, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew070", word: "content", V: 0.264, A: -0.204, D: 0.059, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew071", word: "determined", V: 0.26, A: 0.028, D: 0.173, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew072", word: "interested", V: 0.25, A: 0.029, D: 0.225, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew073", word: "desirable", V: 0.24, A: 0.235, D: 0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew074", word: "friendship", V: 0.235, A: -0.242, D: 0.009, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew075", word: "concentration", V: 0.235, A: 0, D: 0.222, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew076", word: "cared for", V: 0.229, A: -0.13, D: 0, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew077", word: "in control", V: 0.229, A: -0.148, D: 0.308, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew078", word: "intimate", V: 0.224, A: 0.098, D: -0.107, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew079", word: "sensitive", V: 0.214, A: -0.074, D: -0.246, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew080", word: "aroused", V: 0.208, A: 0.452, D: 0.167, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew081", word: "truthful", V: 0.208, A: -0.033, D: 0.307, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew082", word: "in anticipation", V: 0.198, A: 0.039, D: 0.211, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew083", word: "steady", V: 0.18, A: -0.314, D: 0.263, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew084", word: "needed", V: 0.177, A: -0.158, D: 0.179, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew085", word: "in want", V: 0.171, A: 0.142, D: 0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew086", word: "outgoing", V: 0.15, A: -0.028, D: 0.038, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew087", word: "blue", V: 0.146, A: -0.363, D: -0.209, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew088", word: "curious", V: 0.135, A: 0.1, D: -0.017, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew089", word: "unselfish", V: 0.115, A: -0.147, D: -0.123, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew090", word: "longing", V: 0.104, A: -0.375, D: -0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew091", word: "sleepy", V: 0.104, A: -0.066, D: 0.06, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew092", word: "reserved", V: 0.094, A: -0.184, D: 0.083, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew093", word: "collected", V: 0.07, A: -0.098, D: 0.088, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew094", word: "talkative", V: 0.062, A: 0.173, D: 0.035, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew095", word: "eager", V: 0.021, A: 0.312, D: -0.194, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew096", word: "craving", V: 0.01, A: 0.074, D: -0.3, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew097", word: "in need", V: 0.01, A: 0.255, D: 0.136, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew098", word: "alert", V: -0.021, A: 0.32, D: 0.148, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew099", word: "exposed", V: -0.029, A: 0.161, D: 0.009, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew100", word: "neutral", V: -0.031, A: -0.316, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew101", word: "thorough", V: -0.033, A: -0.15, D: 0.058, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew102", word: "nostalgic", V: -0.042, A: -0.149, D: -0.316, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew103", word: "unforgiving", V: -0.094, A: 0.13, D: 0.293, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew104", word: "busy", V: -0.098, A: 0, D: -0.026, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew105", word: "indifferent", V: -0.104, A: -0.343, D: -0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew106", word: "tense", V: -0.104, A: -0.061, D: 0.155, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew107", word: "lazy", V: -0.108, A: -0.236, D: -0.404, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew108", word: "slow", V: -0.143, A: -0.427, D: -0.369, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew109", word: "jittery", V: -0.156, A: 0.356, D: -0.245, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew110", word: "overwhelmed", V: -0.159, A: 0.18, D: -0.152, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew111", word: "hesitant", V: -0.167, A: 0.042, D: -0.179, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew112", word: "startled", V: -0.167, A: 0.365, D: 0.026, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew113", word: "critical", V: -0.188, A: 0.205, D: -0.182, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew114", word: "perplexed", V: -0.188, A: 0.302, D: 0.045, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew115", word: "inquisitive", V: -0.199, A: 0.137, D: 0.115, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew116", word: "awkward", V: -0.204, A: 0.15, D: -0.142, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew117", word: "concerned", V: -0.208, A: 0.198, D: -0.15, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew118", word: "shock", V: -0.214, A: 0.321, D: -0.047, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew119", word: "anxious", V: -0.219, A: 0.375, D: -0.066, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew120", word: "persecuted", V: -0.219, A: 0.373, D: 0.009, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew121", word: "shy", V: -0.22, A: -0.347, D: -0.368, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew122", word: "shaking", V: -0.225, A: 0.349, D: -0.245, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew123", word: "indecisive", V: -0.229, A: -0.08, D: -0.31, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew124", word: "provoked", V: -0.229, A: 0.176, D: 0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew125", word: "inferior", V: -0.24, A: -0.246, D: -0.394, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew126", word: "confused", V: -0.245, A: 0.167, D: -0.223, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew128", word: "harsh", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew129", word: "lonely", V: -0.25, A: 0.15, D: 0.123, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew130", word: "disapproving", V: -0.255, A: 0.125, D: -0.048, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew131", word: "moody", V: -0.255, A: 0.311, D: 0.095, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew132", word: "envy", V: -0.26, A: 0.204, D: -0.073, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew133", word: "nervous", V: -0.265, A: 0.32, D: -0.287, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew134", word: "distant", V: -0.271, A: -0.176, D: -0.231, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew135", word: "fidgety", V: -0.271, A: 0.286, D: -0.149, DEP: 3, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew136", word: "sad", V: -0.275, A: -0.167, D: -0.351, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew137", word: "clingy", V: -0.276, A: -0.04, D: -0.13, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew138", word: "isolated", V: -0.279, A: -0.144, D: -0.245, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew139", word: "discouraged", V: -0.28, A: -0.196, D: -0.41, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew140", word: "restless", V: -0.281, A: 0.31, D: -0.196, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew141", word: "bitter", V: -0.282, A: 0.127, D: -0.089, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew142", word: "down", V: -0.292, A: 0.067, D: -0.294, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew143", word: "guilty", V: -0.292, A: -0.17, D: -0.236, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew144", word: "skeptical", V: -0.293, A: 0, D: -0.048, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew145", word: "contempt", V: -0.294, A: 0.135, D: -0.104, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew146", word: "turmoil", V: -0.302, A: -0.01, D: -0.255, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew147", word: "vulnerable", V: -0.302, A: 0.388, D: -0.083, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew148", word: "appalled", V: -0.306, A: -0.108, D: -0.287, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew149", word: "distracted", V: -0.306, A: 0.292, D: 0.062, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew150", word: "aloof", V: -0.311, A: -0.077, D: -0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew151", word: "apathetic", V: -0.312, A: -0.317, D: -0.419, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew152", word: "dismissive", V: -0.312, A: 0.11, D: -0.286, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew153", word: "empty", V: -0.312, A: -0.208, D: -0.167, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew154", word: "hostile", V: -0.312, A: 0.041, D: -0.07, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew155", word: "uncomfortable", V: -0.312, A: 0.377, D: -0.026, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew156", word: "embarrassed", V: -0.316, A: 0.06, D: -0.254, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew157", word: "withdrawn", V: -0.318, A: -0.132, D: -0.279, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew158", word: "weak", V: -0.32, A: -0.259, D: -0.455, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew159", word: "punished", V: -0.323, A: 0.324, D: -0.176, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew160", word: "trembling", V: -0.323, A: 0.235, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew161", word: "jealous", V: -0.327, A: 0.355, D: -0.155, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew162", word: "failure", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew163", word: "stressed", V: -0.333, A: 0.24, D: 0.002, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew164", word: "dismayed", V: -0.335, A: 0.235, D: -0.111, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew165", word: "ashamed", V: -0.344, A: 0.088, D: -0.272, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew166", word: "bored", V: -0.347, A: -0.333, D: -0.304, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew167", word: "boring", V: -0.347, A: -0.333, D: -0.304, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew168", word: "dread", V: -0.347, A: 0.317, D: -0.245, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew169", word: "frightened", V: -0.347, A: 0.292, D: -0.132, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew170", word: "misery", V: -0.354, A: -0.122, D: -0.342, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew171", word: "scared", V: -0.354, A: 0.328, D: -0.315, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew172", word: "threatened", V: -0.365, A: 0.365, D: 0.167, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew173", word: "in tears", V: -0.367, A: 0.127, D: -0.245, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew174", word: "aggressive", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew175", word: "bad", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew176", word: "disturbed", V: -0.375, A: 0.37, D: -0.195, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew177", word: "powerless", V: -0.375, A: 0, D: -0.172, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew178", word: "tired", V: -0.375, A: 0.125, D: -0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew180", word: "angry", V: -0.378, A: -0.05, D: -0.277, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew181", word: "betrayed", V: -0.378, A: 0.269, D: -0.192, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew182", word: "inadequate", V: -0.378, A: 0.156, D: 0.08, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew183", word: "strained", V: -0.378, A: 0.33, D: 0.104, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew184", word: "resentful", V: -0.38, A: 0.108, D: -0.176, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew185", word: "downhearted", V: -0.381, A: -0.039, D: -0.245, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew186", word: "blame", V: -0.385, A: 0.176, D: -0.298, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew187", word: "chaotic", V: -0.385, A: 0.294, D: -0.255, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew188", word: "despair", V: -0.385, A: 0.12, D: -0.236, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew189", word: "nasty", V: -0.385, A: 0.14, D: -0.191, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew190", word: "uneasy", V: -0.385, A: 0.098, D: -0.151, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew191", word: "victimized", V: -0.385, A: 0.347, D: -0.058, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew192", word: "insecure", V: -0.386, A: 0.038, D: -0.368, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew193", word: "irritable", V: -0.388, A: 0.306, D: -0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew194", word: "ridiculed", V: -0.388, A: 0.452, D: -0.038, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew195", word: "numb", V: -0.392, A: -0.08, D: -0.148, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew196", word: "gloomy", V: -0.393, A: -0.09, D: -0.213, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew197", word: "annoyed", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew198", word: "helpless", V: -0.396, A: -0.08, D: -0.286, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew199", word: "nausea", V: -0.396, A: 0.281, D: -0.227, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew200", word: "revulsion", V: -0.396, A: 0.265, D: -0.157, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew201", word: "sick", V: -0.396, A: 0.283, D: -0.155, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew202", word: "negative", V: -0.398, A: 0.027, D: -0.324, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew203", word: "rejected", V: -0.398, A: -0.02, D: -0.25, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew204", word: "hopeless", V: -0.406, A: -0.202, D: -0.388, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew205", word: "worried", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew206", word: "devastated", V: -0.41, A: 0.404, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew207", word: "pessimistic", V: -0.412, A: -0.106, D: -0.264, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew208", word: "desperate", V: -0.417, A: -0.194, D: -0.386, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew209", word: "detest", V: -0.417, A: -0.08, D: -0.347, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew210", word: "fearful", V: -0.417, A: -0.018, D: -0.222, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew211", word: "insignificant", V: -0.417, A: 0.342, D: -0.163, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew212", word: "worthless", V: -0.417, A: 0.3, D: -0.008, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew213", word: "rage", V: -0.418, A: 0.388, D: 0.158, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew214", word: "distressed", V: -0.427, A: 0.34, D: -0.104, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew215", word: "disappointed", V: -0.429, A: -0.028, D: -0.259, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew216", word: "upset", V: -0.429, A: 0.18, D: -0.17, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew218", word: "grief", V: -0.43, A: 0.14, D: -0.026, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew219", word: "terrified", V: -0.431, A: 0.402, D: -0.085, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew220", word: "disrespect", V: -0.438, A: 0.273, D: -0.209, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew221", word: "furious", V: -0.438, A: 0.137, D: -0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew222", word: "hurt", V: -0.438, A: 0.438, D: -0.1, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew223", word: "panic", V: -0.438, A: 0.453, D: 0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew224", word: "awful", V: -0.439, A: 0.04, D: -0.366, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew225", word: "excluded", V: -0.439, A: 0.321, D: -0.098, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew226", word: "rude", V: -0.439, A: 0.286, D: -0.05, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew227", word: "selfish", V: -0.439, A: 0.137, D: -0.005, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew228", word: "violated", V: -0.439, A: 0.47, D: 0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew229", word: "frustration", V: -0.44, A: 0.23, D: -0.22, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew230", word: "disgust", V: -0.448, A: -0.158, D: -0.316, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew231", word: "useless", V: -0.448, A: 0.275, D: -0.183, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew232", word: "disgusted", V: -0.449, A: 0.273, D: -0.226, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew233", word: "humiliated", V: -0.452, A: 0.212, D: -0.19, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew234", word: "dissatisfied", V: -0.458, A: 0.061, D: -0.209, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew235", word: "shameful", V: -0.46, A: 0.18, D: -0.236, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew236", word: "dead", V: -0.469, A: 0.302, D: -0.07, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew237", word: "hatred", V: -0.469, A: 0.22, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew238", word: "depressed", V: -0.476, A: -0.055, D: -0.364, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew239", word: "pain", V: -0.488, A: 0.265, D: -0.105, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ew240", word: "afraid", V: -0.49, A: 0.275, D: -0.255, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 }
      ],
      stateEng: [
        { id: "es001", word: "I have little interest or pleasure in doing things", V: 0.311, A: 0.731, D: 0.593, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es002", word: "I feel down, depressed or hopeless", V: -1.174, A: -0.427, D: -0.988, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es003", word: "I have trouble falling or staying asleep", V: -0.271, A: -0.558, D: -0.559, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es004", word: "I have trouble staying asleep", V: -0.271, A: -0.558, D: -0.559, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es005", word: "I sleep too much", V: -0.222, A: -0.051, D: -0.211, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es006", word: "I have poor appetite", V: -0.771, A: -0.252, D: -0.673, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es007", word: "I am overeating", V: -0.771, A: -0.252, D: -0.673, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es008", word: "I'm feeling bad about myself", V: -1, A: 0.03, D: -0.724, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es009", word: "I feel like a failure", V: -1, A: 0.03, D: -0.724, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es010", word: "I let others down", V: -1, A: 0.03, D: -0.724, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es011", word: "I have trouble concentrating", V: -0.041, A: 0.392, D: -0.009, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es012", word: "I feel slow ", V: -0.414, A: -0.141, D: -0.518, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es013", word: "I feel fidgety", V: -0.414, A: -0.141, D: -0.518, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es014", word: "I'm not being able to stop or control worrying", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es015", word: "I'm worrying too much about different things", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es016", word: "I have trouble relaxing", V: 0.404, A: 2.519, D: 1.543, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es017", word: "I am being restless that it is hard to sit still", V: -0.552, A: 0.596, D: -0.345, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es018", word: "I become easily annoyed or irritable", V: -0.686, A: 0.599, D: -0.374, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es019", word: "I feel afraid as if something awful might happen", V: -1.652, A: 0.899, D: -0.877, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es023", word: "Concerned with future misfortunes", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es024", word: "Anguished", V: -0.347, A: 0.317, D: -0.245, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es028", word: "Satisfied with myself", V: 0.264, A: -0.204, D: 0.059, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es030", word: "Stunned", V: -0.245, A: 0.167, D: -0.223, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es031", word: "I tire quickly", V: -0.546, A: 0.63, D: -0.483, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es032", word: "I feel like crying", V: 0.459, A: 0.01, D: 0.185, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es033", word: "I wish I could be as happy as others seem to be", V: -0.26, A: 0.469, D: 0.155, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es034", word: "I am losing out on things because I can't make up my mind soon enough", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es035", word: "I am 'calm, cool and collected'", V: 0.83, A: -0.458, D: 0.151, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es036", word: "I feel that difficulties are piling up so that I cannot overcome them", V: -0.492, A: 0.42, D: -0.15, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es037", word: "I worry too much over something that really doesn't matter", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es038", word: "I am inclined to take things hard", V: -0.47, A: 2.424, D: 0.714, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es039", word: "I lack self-confidence", V: 0.235, A: 0.676, D: 0.277, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es040", word: "I try to avoid facing a crisis or difficulty", V: 0.729, A: 0.58, D: 0.81, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es041", word: "Some unimportant thought runs through my mind and bothers me", V: 0.781, A: 0.19, D: 0.696, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es042", word: "I take disappointments so keenly that I can't put them out of my mind", V: -0.429, A: -0.028, D: -0.259, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es043", word: "I am a steady person", V: 0.18, A: -0.314, D: 0.263, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es044", word: "I get in a state of tension or turmoil as I think over my recent concerns and interests", V: -0.706, A: 0.896, D: -0.204, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es045", word: "I am unloved", V: 0.5, A: 0.5, D: 0.5, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es046", word: "I am worthless", V: -0.188, A: 0.863, D: -0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es047", word: "I am weak", V: -0.32, A: -0.259, D: -0.455, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es048", word: "I am vulnerable", V: -0.302, A: -0.01, D: -0.255, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es049", word: "I am bad", V: -0.375, A: 0.125, D: -0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es050", word: "I am respected", V: 0.408, A: -0.059, D: 0.353, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es051", word: "I am valuable", V: 0.399, A: 0.047, D: 0.298, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es052", word: "I am talented", V: 0.439, A: 0.135, D: 0.438, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es053", word: "I am successful", V: 0.449, A: 0.224, D: 0.438, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es054", word: "I am good", V: 0.438, A: -0.132, D: 0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es055", word: "I am interesting", V: 0.427, A: 0.226, D: 0.231, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es056", word: "Others are hostile", V: -0.312, A: 0.377, D: -0.026, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es057", word: "Others are harsh", V: -0.25, A: 0.15, D: 0.123, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es058", word: "Others are unforgiving", V: -0.094, A: 0.13, D: 0.293, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es059", word: "Others are bad", V: -0.375, A: 0.125, D: -0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es060", word: "Others are devious", V: -0.375, A: 0.125, D: -0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es061", word: "Others are nasty", V: -0.385, A: 0.12, D: -0.236, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es062", word: "Others are fair", V: 0.312, A: 0.057, D: 0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es063", word: "Others are good", V: 0.438, A: -0.132, D: 0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es064", word: "Others are trustworthy", V: 0.469, A: -0.185, D: 0.324, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es065", word: "Others are accepting", V: 0.347, A: -0.214, D: 0.065, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es066", word: "Others are supportive", V: 0.375, A: -0.08, D: 0.135, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es067", word: "Others are truthful", V: 0.208, A: -0.033, D: 0.307, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es068", word: "I am satisfied with myself", V: 0.459, A: 0.01, D: 0.185, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es069", word: "I think I am no good at all", V: -0.313, A: 0.757, D: 0.339, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es070", word: "I have a number of good qualities", V: 1.303, A: 0.078, D: 0.592, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es071", word: "I am able to do things as well as most other people", V: 1.303, A: 0.078, D: 0.592, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es072", word: "I feel I do not have much to be proud of", V: 0.094, A: 0.3, D: 0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es073", word: "I feel useless at times", V: -0.448, A: -0.158, D: -0.316, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es074", word: "I feel that I am a person of worth, at least on an equal plane with others", V: 1.316, A: 0.627, D: 1.145, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es075", word: "I wish I could have more respect for myself", V: 0.092, A: 0.559, D: 0.147, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es076", word: "I take a positive attitude towards myself", V: 0.459, A: 0.01, D: 0.355, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es077", word: "I take time getting to know people", V: 0.333, A: -0.062, D: 0.292, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es078", word: "I rely on others to help me make decisions in life", V: -0.229, A: -0.08, D: -0.31, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es079", word: "People let me down a lot", V: -0.429, A: -0.028, D: -0.259, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es080", word: "I miss the company of others when I'm lonely", V: -0.425, A: -0.484, D: -0.447, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es081", word: "It's best not to get too emotionally close to other people", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es082", word: "I worry a lot if people I live with arrive back later than expected", V: -0.302, A: 0.258, D: -0.045, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es083", word: "I usually rely on advice from others when I've got a problem", V: -0.229, A: -0.08, D: -0.31, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es084", word: "I feel uncomfortable when people get too close to me", V: -0.529, A: -0.418, D: -0.507, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es085", word: "People close to me often get on my nerves", V: -0.29, A: 0.316, D: -0.219, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es086", word: "I feel people are against me", V: -0.398, A: -0.02, D: -0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es087", word: "I worry about things happening to close family and friends", V: -0.625, A: 0.699, D: -0.171, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es088", word: "I often get into arguments", V: -0.29, A: 0.316, D: -0.219, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es089", word: "I'm clingy with others", V: -0.266, A: 0.034, D: -0.43, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es090", word: "I look forward to spending time on my own", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es091", word: "I like making decisions on my own", V: 0.479, A: 0.306, D: 0.548, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es092", word: "I get anxious when people close to me are away", V: -0.115, A: 0.309, D: -0.006, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es093", word: "I feel uneasy when others confide in me", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es094", word: "I find it hard to trust others", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es095", word: "Having people around me can be a nuisance", V: -0.54, A: 0.042, D: -0.481, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es096", word: "I feel people haven't done enough for me", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es097", word: "It's important to have people around me a lot of the time", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es098", word: "I find it difficult to confide in people", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es099", word: "I do not feel sad", V: 0.775, A: 0.667, D: 0.851, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es100", word: "I feel sad", V: -0.275, A: -0.167, D: -0.351, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es101", word: "I am sad all the time and I can't snap out of it", V: -0.275, A: -0.167, D: -0.351, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es102", word: "I am so sad and unhappy that I can't stand it", V: -0.275, A: -0.167, D: -0.351, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es103", word: "I am not particularly discouraged about the future", V: 0.78, A: 0.696, D: 0.91, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es104", word: "I feel discouraged about the future", V: -0.686, A: -0.398, D: -0.798, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es105", word: "I feel I have nothing to look forward to", V: -0.406, A: -0.202, D: -0.388, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es106", word: "I feel the future is hopeless and that things cannot improve", V: -0.686, A: -0.398, D: -0.798, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es107", word: "I feel I have failed more than the average person", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es108", word: "As I look back on my life, all I can see is a lot of failures", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es109", word: "I feel I am a complete failure as a person", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es110", word: "I get as much satisfaction out of things as I used to", V: 0.459, A: 0.01, D: 0.185, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es111", word: "I don't get real satisfaction out of anything anymore", V: 0.041, A: 0.49, D: 0.315, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es112", word: "I don't enjoy things the way I used to", V: 0.143, A: 1.025, D: 0.883, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es113", word: "I am dissatisfied or bored with everything", V: -0.204, A: 0.692, D: 0.579, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es114", word: "I don't feel particularly guilt", V: 0.792, A: 0.433, D: 0.794, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es115", word: "I feel guilt a good part of the time", V: -0.292, A: 0.067, D: -0.294, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es116", word: "I feel quite guilt most of the time", V: -0.292, A: 0.067, D: -0.294, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es117", word: "I feel guilt all of the time", V: -0.292, A: 0.067, D: -0.294, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es118", word: "I don't feel I am being punished", V: 0.792, A: 0.433, D: 0.794, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es119", word: "I expect to be punished", V: -0.323, A: 0.235, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es120", word: "I feel I am being punished", V: -0.323, A: 0.235, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es121", word: "I feel I may be punished", V: -0.323, A: 0.235, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es122", word: "I don't feel disappointed in myself", V: 0.929, A: 0.528, D: 0.759, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es123", word: "I am disgusted with myself", V: -0.449, A: 0.273, D: -0.226, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es124", word: "I hate myself", V: -0.918, A: 0.575, D: -0.296, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es125", word: "I am disappointed in myself", V: -0.918, A: 0.575, D: -0.296, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es126", word: "I don't feel I am any worse than anybody else", V: 0.438, A: -0.132, D: 0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es127", word: "I am critical of myself for my weaknesses or mistakes", V: -0.126, A: 0.934, D: 0.511, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es128", word: "I blame myself for everything bad that happens", V: -0.667, A: 0.192, D: -0.421, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es129", word: "I blame myself all the time for my faults", V: -0.667, A: 0.192, D: -0.421, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es130", word: "I don't have any thoughts of killing myself", V: 1.233, A: 0.076, D: 0.587, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es131", word: "I have thoughts of killing myself, but I would not carry them out ", V: -0.469, A: 0.22, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es132", word: "I would kill myself if I had the chance", V: -0.469, A: 0.22, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es133", word: "I would like to kill myself", V: -0.469, A: 0.22, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es134", word: "I don't cry any more than usual", V: 1.642, A: 1.04, D: 1.596, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es135", word: "I cry more now than I used to", V: -0.642, A: -0.04, D: -0.596, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es136", word: "I cry all the time now", V: -0.642, A: -0.04, D: -0.596, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es137", word: "I used to be able to cry, but now I can't cry even though I want to ", V: -0.642, A: -0.04, D: -0.596, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es138", word: "I am no more irritated by things than I ever was", V: 0.79, A: 0.184, D: 0.719, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es139", word: "I am slightly more irritated now than usual", V: -0.29, A: 0.316, D: -0.219, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es140", word: "I am quite annoyed or irritated a good deal of the time", V: -0.686, A: 0.599, D: -0.374, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es141", word: "I feel irritated all the time", V: -0.686, A: 0.599, D: -0.374, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es142", word: "I have not lost interest in other people", V: 0.25, A: 0.029, D: 0.225, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es143", word: "I am less interested in other people than I used to be", V: 0.25, A: 0.471, D: 0.275, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es144", word: "I have lost all of my interest in other people", V: 0.25, A: 0.471, D: 0.275, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es145", word: "I have lost most of my interest in other people", V: 0.25, A: 0.471, D: 0.275, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es146", word: "I make decisions about as well as I ever could", V: 0.494, A: -0.324, D: 0.531, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es147", word: "I put off making decisions more than I used to", V: 0.271, A: 0.648, D: 0.192, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es148", word: "I have greater difficulty in making decisions more than I used to", V: 0.271, A: 0.648, D: 0.192, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es149", word: "I can't make decisions at all anymore", V: -0.125, A: 0.568, D: -0.094, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es150", word: "I can work about as well as before", V: 0.354, A: 0.284, D: 0.302, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es151", word: "It takes an extra effort to get started at doing something", V: 0.146, A: 0.216, D: 0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es152", word: "I can't do any work at all", V: 0.146, A: 0.216, D: 0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es153", word: "I have to push myself very hard to do anything", V: 0.146, A: 0.216, D: 0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es154", word: "I can sleep as well as usual", V: 0.104, A: -0.375, D: -0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es155", word: "I don't sleep as well as I used to", V: 1.271, A: 1.558, D: 1.559, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es156", word: "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep", V: 1.271, A: 1.558, D: 1.559, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es157", word: "I wake up several hours earlier than I used to and cannot get back to sleep", V: 1.271, A: 1.558, D: 1.559, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es158", word: "I don't get more tired than usual", V: 0.875, A: 0.683, D: 0.809, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es159", word: "I get tired more easily than I used to", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es160", word: "I get tired from doing almost anything", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es161", word: "I am too tired to do anything", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es162", word: "My appetite is no worse than usual", V: 0.896, A: 0.569, D: 0.864, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es163", word: "My appetite is not as good as it used to be", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es164", word: "I have no appetite at all anymore", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es165", word: "My appetite is much worse now", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es166", word: "I haven't lost much weight, if any, lately ", V: 0.896, A: 0.569, D: 0.864, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es167", word: "I have lost more than ten pounds", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es168", word: "I have lost more than fifteen pounds", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es169", word: "I have lost more than five pounds", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es170", word: "I don't feel that I look any worse than I used to", V: 0.671, A: 0.098, D: 0.435, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es171", word: "I am worried that I am looking old or unattractive", V: 0.094, A: 0.226, D: 0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es172", word: "I feel there are permanent changes in my appearance that make me look unattractive", V: 0.094, A: 0.226, D: 0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es173", word: "I believe that I look ugly", V: 0.094, A: 0.226, D: 0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es174", word: "I am no more worried about my health than usual", V: 0.906, A: 0.176, D: 0.605, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es175", word: "I am worried about physical problems like aches, pains, upset stomach, or constipation", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es176", word: "I am very worried about physical problems and it's hard to think of much else", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es177", word: "I am so worried about my physical problems that I cannot think of anything else", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es178", word: "I have not noticed any recent change in my interest in sex", V: 0.647, A: 0.692, D: 0.349, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es179", word: "I am less interested in sex than I used to be", V: 0.353, A: 0.308, D: 0.651, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es180", word: "I have almost no interest in sex", V: 0.353, A: 0.308, D: 0.651, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es181", word: "I have lost interest in sex completely", V: 0.353, A: 0.308, D: 0.651, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es182", word: "I feel upset because of something that happened unexpectedly", V: -0.643, A: 0.501, D: -0.217, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es183", word: "I feel that that I am unable to control the important things in Ir life", V: -0.771, A: -0.08, D: -0.458, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es184", word: "I feel nervous and distressed", V: -0.598, A: 0.56, D: -0.285, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es185", word: "I feel confident about my ability to handle my personal problems", V: 0.494, A: -0.324, D: 0.531, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es186", word: "I feel that things were going my way", V: 0.493, A: -0.352, D: 0.367, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es187", word: "I can not cope with all the things that I have to do", V: -0.159, A: 0.18, D: -0.152, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es188", word: "I am able to control irritations in my life", V: 0.493, A: -0.352, D: 0.367, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es189", word: "I feel that I am on top of things", V: 0.888, A: 0.172, D: 0.96, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es190", word: "I am angered because of things that are outside of my control", V: -0.503, A: 0.898, D: 0.01, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es191", word: "I feel that difficulties are piling up so high that I could not overcome them", V: 0.404, A: 1, D: 0.636, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es192", word: "I feel down hearted and blue", V: -0.656, A: -0.206, D: -0.596, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es193", word: "Morning is when I feel the best", V: 0.438, A: -0.132, D: 0.034, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es194", word: "I have crying spells or feel like it", V: -0.642, A: -0.04, D: -0.596, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es195", word: "I have trouble sleeping at night", V: 0.021, A: 0.692, D: 0.441, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es196", word: "I eat as much as I used to", V: 0.439, A: 0.24, D: 0.182, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es197", word: "I still enjoy sex", V: 0.647, A: 0.692, D: 0.349, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es198", word: "I notice that I am losing weight", V: -0.32, A: -0.259, D: -0.455, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es199", word: "I have trouble with constipation", V: -0.396, A: -0.069, D: -0.364, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es200", word: "My heart beats faster than usual", V: -0.89, A: 1.019, D: -0.458, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es201", word: "I get tired for no reason", V: -0.265, A: 0.32, D: -0.287, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es202", word: "My mind is as clear as it used to be", V: 0.745, A: 0.333, D: 0.723, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es203", word: "I find it easy to do the things I used to", V: 0.659, A: 0.32, D: 0.652, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es204", word: "I am restless and can't keep still", V: -0.552, A: 0.596, D: -0.345, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es205", word: "I feel hopeful about the future", V: 0.447, A: -0.143, D: 0.127, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es206", word: "I am more irritable than usual", V: -0.388, A: 0.452, D: -0.038, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es207", word: "I find it easy to make decisions", V: 0.229, A: -0.148, D: 0.308, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es208", word: "I feel that I am useful and needed", V: 0.51, A: -0.247, D: 0.405, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es209", word: "My life is pretty full", V: 0.723, A: -0.194, D: 0.244, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es210", word: "I feel that others would be better off if I were dead", V: -0.469, A: 0.22, D: -0.028, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es211", word: "I still enjoy the things I used to do", V: 0.898, A: 0.465, D: 0.432, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es212", word: "I am interested in things", V: -0.062, A: 0.263, D: 0.108, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es213", word: "I get things done during the day", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es214", word: "Getting things started on my own is important to me", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es215", word: "I am interested in having new experiences", V: 1.062, A: 0.737, D: 0.892, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es216", word: "I am interested in learning new things", V: 1.062, A: 0.737, D: 0.892, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es217", word: "I put little effort into anything", V: -0.166, A: 0.008, D: 0.031, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es218", word: "I approach life with intensity", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es219", word: "Seeing a job through to the end is important to me", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es220", word: "I spend time doing things that interest me", V: 1.416, A: 1.021, D: 1.194, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es221", word: "Someone has to tell me what to do each day", V: 1.083, A: 1.356, D: 0.859, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es222", word: "I am less concerned about my problems than I should be", V: 1.062, A: 1.179, D: 0.942, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es223", word: "I have friends", V: -0.25, A: -0.274, D: -0.262, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es224", word: "Getting together with friends is important to me", V: 1.097, A: 0.56, D: 0.827, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es225", word: "When something good happens, I get excited ", V: 1.208, A: 0.892, D: 0.898, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es226", word: "I have an accurate understanding of my problems", V: 1.306, A: 0.384, D: 1.198, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es227", word: "Getting things done during the day is important to me", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es228", word: "I have initiative", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es229", word: "I have motivation", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es230", word: "I feel that I am in tune with the people around me", V: 0.75, A: 0.774, D: 0.762, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es231", word: "I feel that I lack companionship", V: -0.083, A: 0.288, D: -0.054, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es232", word: "I feel that there is no one I can turn to", V: -0.103, A: 0.318, D: 0.125, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es233", word: "I feel part of a group of friends", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es234", word: "I feel that I have a lot in common with the people around me", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es235", word: "I feel that I am no longer close to anyone", V: 0.75, A: 0.774, D: 0.762, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es236", word: "I feel that my interests and ideas are not shared by those around me", V: 0.75, A: 0.774, D: 0.762, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es237", word: "I feel outgoing and friendly", V: 1.317, A: 0.644, D: 0.898, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es238", word: "I feel close to people", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es239", word: "I feel left out", V: 1.427, A: 0.89, D: 1.233, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es240", word: "I feel that my relationships with others are not meaningful", V: -0.097, A: 0.44, D: 0.173, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es241", word: "I feel that no one really knows me well", V: 0.529, A: 0.37, D: 0.483, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es242", word: "I feel isolated from others", V: -0.279, A: -0.144, D: -0.245, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es243", word: "I feel that I can find companionship when I want to", V: 1.43, A: 0.498, D: 1.119, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es244", word: "I feel that there are people who really understand me", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es245", word: "I feel shy", V: -0.22, A: -0.347, D: -0.368, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es246", word: "I feel that people are around me but not with me", V: -0.529, A: -0.418, D: -0.507, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es247", word: "I feel that there are people I can talk to", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es248", word: "I feel that there are people I can turn to", V: 1.45, A: 0.468, D: 0.94, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es249", word: "My relationships with others meet my expectations", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es250", word: "I have enough people who I can ask for help when needed", V: 1.45, A: 0.468, D: 0.94, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "es251", word: "I am happy with current relationships with my friends and others around me", V: 1.45, A: 0.468, D: 0.94, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 }
      ],
      initialEmotionKor: [
        [
          { id: "kw001", word: "????????????", V: 0.5, A: 0.235, D: 0.235, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw016", word: "????????? ?????????", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw070", word: "??????????????????", V: 0.264, A: -0.204, D: -0.204, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw035", word: "????????? ????????????", V: 0.398, A: -0.194, D: -0.194, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw045", word: "??????????????? ?????????", V: 0.372, A: 0.01, D: 0.01, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw069", word: "???????????? ?????????", V: 0.265, A: -0.176, D: -0.176, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw032", word: "???????????? ?????????", V: 0.406, A: 0.2, D: 0.2, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw035", word: "????????? ????????????", V: 0.398, A: -0.194, D: -0.194, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw042", word: "????????? ????????????", V: 0.375, A: -0.4, D: -0.4, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw070", word: "??????????????????", V: 0.264, A: -0.204, D: -0.204, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw179", word: "????????? ?????????", V: -0.375, A: -0.183, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw163", word: "??????????????? ?????????", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "kw001", word: "????????????", V: 0.5, A: 0.235, D: 0.235, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw016", word: "????????? ?????????", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw048", word: "????????? ?????????", V: 0.365, A: -0.41, D: -0.41, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw004", word: "????????????", V: 0.49, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw045", word: "??????????????? ?????????", V: 0.372, A: 0.01, D: 0.01, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw069", word: "???????????? ?????????", V: 0.265, A: -0.176, D: -0.176, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw032", word: "???????????? ?????????", V: 0.406, A: 0.2, D: 0.2, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw035", word: "????????? ????????????", V: 0.398, A: -0.194, D: -0.194, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw042", word: "????????? ????????????", V: 0.375, A: -0.4, D: -0.4, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw070", word: "??????????????????", V: 0.264, A: -0.204, D: -0.204, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw179", word: "????????? ?????????", V: -0.375, A: -0.183, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw163", word: "??????????????? ?????????", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "kw136", word: "?????????", V: -0.275, A: -0.167, D: -0.167, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw119", word: "????????????", V: -0.219, A: 0.375, D: 0.375, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw166", word: "????????????", V: -0.347, A: -0.333, D: -0.333, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw042", word: "????????? ????????????", V: 0.375, A: -0.4, D: -0.4, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw179", word: "????????? ?????????", V: -0.375, A: -0.183, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw134", word: "???????????? ??????????????????", V: -0.271, A: -0.176, D: -0.176, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw149", word: "????????? ???????????????", V: -0.306, A: -0.108, D: -0.108, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw151", word: "????????? ?????????", V: -0.312, A: -0.208, D: -0.208, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw163", word: "??????????????? ?????????", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw004", word: "????????????", V: 0.49, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw016", word: "????????? ?????????", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw048", word: "????????? ?????????", V: 0.365, A: -0.41, D: -0.41, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "kw136", word: "?????????", V: -0.275, A: -0.167, D: -0.167, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw119", word: "????????????", V: -0.219, A: 0.375, D: 0.375, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw163", word: "??????????????? ?????????", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw179", word: "????????? ?????????", V: -0.375, A: -0.183, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw216", word: "????????????", V: -0.429, A: 0.18, D: 0.18, DEP: 3, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw151", word: "????????? ?????????", V: -0.312, A: -0.208, D: -0.208, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw197", word: "??????????????????", V: -0.396, A: 0.283, D: 0.283, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw180", word: "????????????", V: -0.378, A: 0.33, D: 0.33, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw166", word: "????????????", V: -0.347, A: -0.333, D: -0.333, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw153", word: "????????????", V: -0.312, A: -0.317, D: -0.317, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw016", word: "????????? ?????????", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw048", word: "????????? ?????????", V: 0.365, A: -0.41, D: -0.41, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
        [
          { id: "kw136", word: "?????????", V: -0.275, A: -0.167, D: -0.167, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw119", word: "????????????", V: -0.219, A: 0.375, D: 0.375, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw163", word: "??????????????? ?????????", V: -0.333, A: 0.24, D: 0.24, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw180", word: "????????????", V: -0.378, A: 0.33, D: 0.33, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw129", word: "????????????", V: -0.25, A: -0.274, D: -0.274, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw205", word: "????????? ?????????", V: -0.406, A: 0.324, D: 0.324, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw216", word: "????????????", V: -0.429, A: 0.18, D: 0.18, DEP: 3, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw151", word: "????????? ?????????", V: -0.312, A: -0.208, D: -0.208, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw153", word: "????????????", V: -0.312, A: -0.317, D: -0.317, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw197", word: "??????????????????", V: -0.396, A: 0.283, D: 0.283, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw016", word: "????????? ?????????", V: 0.447, A: -0.143, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
          { id: "kw048", word: "????????? ?????????", V: 0.365, A: -0.41, D: -0.41, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        ],
      ],
      emotionKor: [
        { id: "kw002", word: "????????? ?????????", V: 0.5, A: 0.019, D: 0.173, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw001", word: "????????????", V: 0.5, A: 0.235, D: 0.272, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw004", word: "????????????", V: 0.49, A: 0.24, D: 0.167, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw003", word: "????????????", V: 0.49, A: 0.22, D: 0.196, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw005", word: "??????????????????", V: 0.479, A: 0.08, D: 0.321, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw006", word: "????????????", V: 0.47, A: 0.087, D: 0.37, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw008", word: "???????????? ?????????", V: 0.469, A: -0.156, D: 0.214, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw007", word: "????????????", V: 0.469, A: 0.083, D: 0.226, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw009", word: "????????????", V: 0.467, A: 0.202, D: 0.236, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw010", word: "????????? ??????", V: 0.463, A: 0.104, D: 0.089, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw012", word: "??????????????????", V: 0.459, A: 0.01, D: 0.185, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw011", word: "??????????????????", V: 0.459, A: 0.01, D: 0.355, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw013", word: "????????????", V: 0.458, A: -0.147, D: 0.06, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw014", word: "?????? ?????????", V: 0.458, A: 0.165, D: 0.31, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw015", word: "??????????????????", V: 0.449, A: 0.224, D: 0.438, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw016", word: "????????? ?????????", V: 0.447, A: -0.143, D: 0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw017", word: "??????????????? ?????????", V: 0.439, A: -0.344, D: 0.113, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw018", word: "?????????", V: 0.439, A: -0.19, D: 0.173, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw019", word: "??????????????? ?????????", V: 0.439, A: 0.135, D: 0.438, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw021", word: "?????????", V: 0.438, A: -0.132, D: 0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw020", word: "????????? ?????????", V: 0.438, A: 0.316, D: 0.298, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw022", word: "??????????????????", V: 0.436, A: 0.031, D: 0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw023", word: "????????????", V: 0.427, A: -0.337, D: -0.027, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw024", word: "???????????????", V: 0.427, A: -0.337, D: -0.027, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw025", word: "?????? ?????????", V: 0.418, A: 0.087, D: 0.379, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw027", word: "???????????? ?????????", V: 0.417, A: -0.102, D: 0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw026", word: "??????????????????", V: 0.417, A: 0.018, D: 0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw028", word: "?????????????????? ?????????", V: 0.412, A: -0.259, D: 0.375, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw029", word: "????????????", V: 0.412, A: 0.245, D: 0.395, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw030", word: "?????????????????? ?????????", V: 0.408, A: -0.059, D: 0.353, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw031", word: "???????????? ????????? ?????????", V: 0.406, A: 0.274, D: 0.212, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw032", word: "???????????? ?????????", V: 0.406, A: 0.2, D: 0.373, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw033", word: "???????????? ?????????", V: 0.399, A: 0.047, D: 0.298, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw034", word: "????????? ?????????", V: 0.398, A: 0.059, D: 0.196, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw035", word: "????????? ????????????", V: 0.398, A: -0.194, D: 0.259, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw037", word: "???????????????", V: 0.396, A: 0, D: 0.044, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw036", word: "?????????", V: 0.396, A: 0.184, D: 0.231, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw038", word: "???????????? ?????????", V: 0.392, A: 0.188, D: -0.037, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw041", word: "???????????? ?????????", V: 0.385, A: -0.059, D: 0.11, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw039", word: "????????? ?????????", V: 0.385, A: 0.199, D: 0.208, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw040", word: "????????????", V: 0.385, A: 0.04, D: 0.281, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw042", word: "????????? ????????????", V: 0.375, A: -0.4, D: -0.218, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw044", word: "????????????", V: 0.375, A: 0.375, D: 0.062, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw043", word: "????????? ?????????", V: 0.375, A: -0.08, D: 0.135, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw045", word: "??????????????? ?????????", V: 0.372, A: 0.01, D: 0.389, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw047", word: "????????? ?????????", V: 0.365, A: -0.41, D: -0.118, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw048", word: "????????? ?????????", V: 0.365, A: -0.41, D: -0.118, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw046", word: "?????????", V: 0.365, A: 0.33, D: 0.491, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw049", word: "????????? ??? ?????????", V: 0.357, A: 0.008, D: 0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw051", word: "??????????????????", V: 0.354, A: -0.041, D: 0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw050", word: "??????????????????", V: 0.354, A: 0.284, D: 0.302, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw052", word: "?????????????????? ?????????", V: 0.347, A: -0.214, D: 0.065, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw053", word: "??????????????????", V: 0.347, A: 0.23, D: 0.231, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw054", word: "????????? ??????", V: 0.347, A: 0.368, D: 0.402, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw055", word: "???????????????", V: 0.344, A: -0.222, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw056", word: "?????????????????? ?????????", V: 0.344, A: -0.12, D: 0.414, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw057", word: "??????????????????", V: 0.337, A: -0.294, D: -0.018, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw058", word: "????????? ??? ?????????", V: 0.337, A: -0.14, D: 0.321, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw060", word: "?????? ????????? ?????????", V: 0.333, A: -0.089, D: 0.226, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw059", word: "???????????? ?????????", V: 0.333, A: -0.062, D: 0.292, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw061", word: "???????????? ?????????", V: 0.323, A: -0.224, D: 0.038, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw062", word: "????????? ????????? ?????????", V: 0.316, A: -0.163, D: 0.205, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw064", word: "??????????????? ?????????", V: 0.312, A: 0.057, D: 0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw063", word: "????????? ?????????", V: 0.312, A: 0.02, D: 0.224, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw065", word: "????????????", V: 0.292, A: -0.395, D: -0.069, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw066", word: "????????? ?????????", V: 0.292, A: -0.265, D: -0.038, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw067", word: "???????????? ?????????", V: 0.28, A: -0.059, D: 0.186, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw068", word: "????????? ?????????", V: 0.27, A: 0, D: 0.302, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw069", word: "???????????? ?????????", V: 0.265, A: -0.176, D: 0.223, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw070", word: "??????????????????", V: 0.264, A: -0.204, D: 0.059, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw071", word: "???????????? ?????????", V: 0.26, A: 0.028, D: 0.173, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw072", word: "????????? ?????????", V: 0.25, A: 0.029, D: 0.225, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw073", word: "?????????????????? ?????????", V: 0.24, A: 0.235, D: 0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw074", word: "???????????? ?????????", V: 0.235, A: -0.242, D: 0.009, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw075", word: "???????????? ????????????", V: 0.235, A: 0, D: 0.222, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw076", word: "???????????? ?????????", V: 0.229, A: -0.13, D: 0, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw077", word: "???????????? ?????????", V: 0.229, A: -0.148, D: 0.308, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw078", word: "???????????? ?????????", V: 0.224, A: 0.098, D: -0.107, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw079", word: "????????????", V: 0.214, A: -0.074, D: -0.246, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw080", word: "??????????????????", V: 0.208, A: 0.452, D: 0.167, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw081", word: "???????????? ?????????", V: 0.208, A: -0.033, D: 0.307, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw082", word: "????????? ?????? ????????? ??????", V: 0.198, A: 0.039, D: 0.211, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw083", word: "???????????? ?????????", V: 0.18, A: -0.314, D: 0.263, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw084", word: "???????????? ?????????", V: 0.177, A: -0.158, D: 0.179, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw085", word: "????????? ?????????", V: 0.171, A: 0.142, D: 0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw086", word: "??????????????????", V: 0.15, A: -0.028, D: 0.038, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw087", word: "????????????", V: 0.146, A: -0.363, D: -0.209, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw088", word: "???????????? ?????????", V: 0.135, A: 0.1, D: -0.017, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw089", word: "????????? ?????? ??? ?????????", V: 0.115, A: -0.147, D: -0.123, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw091", word: "?????????", V: 0.104, A: -0.375, D: -0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw090", word: "???????????? ?????????", V: 0.104, A: -0.066, D: 0.06, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw092", word: "??????????????????", V: 0.094, A: -0.184, D: 0.083, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw093", word: "????????????", V: 0.07, A: -0.098, D: 0.088, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw094", word: "??????????????????", V: 0.062, A: 0.173, D: 0.035, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw095", word: "????????? ?????????", V: 0.021, A: 0.312, D: -0.194, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw097", word: "????????????", V: 0.01, A: 0.074, D: -0.3, DEP: 0, ANX: 0, SOW: 0, STR: 0.2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw096", word: "????????? ?????????", V: 0.01, A: 0.255, D: 0.136, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw098", word: "????????? ??????????????????", V: -0.021, A: 0.32, D: 0.148, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw099", word: "????????? ???????????????", V: -0.029, A: 0.161, D: 0.009, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw100", word: "?????? ?????????", V: -0.031, A: -0.316, D: -0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw101", word: "????????????", V: -0.033, A: -0.15, D: 0.058, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw102", word: "????????? ????????????", V: -0.042, A: -0.149, D: -0.316, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw103", word: "???????????? ????????????", V: -0.094, A: 0.13, D: 0.293, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw104", word: "?????????", V: -0.098, A: 0, D: -0.026, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw105", word: "???????????????", V: -0.104, A: -0.343, D: -0.25, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw106", word: "???????????????", V: -0.104, A: -0.061, D: 0.155, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw107", word: "????????????", V: -0.108, A: -0.236, D: -0.404, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw108", word: "?????????", V: -0.143, A: -0.427, D: -0.369, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw109", word: "??????????????????", V: -0.156, A: 0.356, D: -0.245, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw110", word: "???????????? ????????????", V: -0.159, A: 0.18, D: -0.152, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw111", word: "????????? ????????? ????????????", V: -0.167, A: 0.042, D: -0.179, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw112", word: "?????? ????????????", V: -0.167, A: 0.365, D: 0.026, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw114", word: "??????????????????", V: -0.188, A: 0.205, D: -0.182, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw113", word: "??????????????????", V: -0.188, A: 0.302, D: 0.045, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw115", word: "???????????? ?????????", V: -0.199, A: 0.137, D: 0.115, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw116", word: "??????????????????", V: -0.204, A: 0.15, D: -0.142, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw117", word: "??????????????????", V: -0.208, A: 0.198, D: -0.15, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw118", word: "????????? ????????????", V: -0.214, A: 0.321, D: -0.047, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw119", word: "????????????", V: -0.219, A: 0.375, D: -0.066, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw120", word: "?????????????????? ?????????", V: -0.219, A: 0.373, D: 0.009, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw121", word: "???????????????", V: -0.22, A: -0.347, D: -0.368, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw122", word: "?????????", V: -0.225, A: 0.349, D: -0.245, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw123", word: "??????????????????", V: -0.229, A: -0.08, D: -0.31, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw124", word: "?????????????????? ?????????", V: -0.229, A: 0.176, D: 0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw125", word: "???????????? ?????????", V: -0.24, A: -0.246, D: -0.394, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw126", word: "??????????????????", V: -0.245, A: 0.167, D: -0.223, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw127", word: "??????????????????", V: -0.245, A: 0.167, D: -0.223, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw129", word: "????????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw128", word: "????????????", V: -0.25, A: 0.15, D: 0.123, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw130", word: "???????????????", V: -0.255, A: 0.125, D: -0.048, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw131", word: "??????????????? ?????????", V: -0.255, A: 0.311, D: 0.095, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw132", word: "???????????? ?????????", V: -0.26, A: 0.204, D: -0.073, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw133", word: "????????????", V: -0.265, A: 0.32, D: -0.287, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw134", word: "???????????? ??????????????????", V: -0.271, A: -0.176, D: -0.231, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw135", word: "???????????? ?????????", V: -0.271, A: 0.286, D: -0.149, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw136", word: "?????????", V: -0.275, A: -0.167, D: -0.351, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw137", word: "??????????????????", V: -0.276, A: -0.04, D: -0.13, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw138", word: "???????????? ?????????", V: -0.279, A: -0.144, D: -0.245, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw139", word: "???????????????", V: -0.28, A: -0.196, D: -0.41, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw140", word: "????????? ????????? ?????????", V: -0.281, A: 0.31, D: -0.196, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw141", word: "????????????", V: -0.282, A: 0.127, D: -0.089, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw143", word: "???????????? ?????????", V: -0.292, A: 0.067, D: -0.294, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw142", word: "????????? ????????????", V: -0.292, A: -0.17, D: -0.236, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw144", word: "??????????????????", V: -0.293, A: 0, D: -0.048, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw145", word: "??????????????? ????????????", V: -0.294, A: 0.135, D: -0.104, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw147", word: "??????????????? ?????????", V: -0.302, A: -0.01, D: -0.255, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw146", word: "??????????????????", V: -0.302, A: 0.388, D: -0.083, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw149", word: "????????? ???????????????", V: -0.306, A: -0.108, D: -0.287, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw148", word: "??????????????????", V: -0.306, A: 0.292, D: 0.062, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw150", word: "????????????", V: -0.311, A: -0.077, D: -0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw153", word: "????????????", V: -0.312, A: -0.317, D: -0.419, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw155", word: "??????????????????", V: -0.312, A: 0.11, D: -0.286, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw151", word: "????????? ?????????", V: -0.312, A: -0.208, D: -0.167, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw152", word: "??????????????????", V: -0.312, A: 0.041, D: -0.07, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw154", word: "???????????? ?????????", V: -0.312, A: 0.377, D: -0.026, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw156", word: "??????????????????", V: -0.316, A: 0.06, D: -0.254, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw157", word: "??????????????????", V: -0.318, A: -0.132, D: -0.279, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw158", word: "???????????? ?????????", V: -0.32, A: -0.259, D: -0.455, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw160", word: "???????????? ?????????", V: -0.323, A: 0.324, D: -0.176, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw159", word: "????????? ???????????? ?????????", V: -0.323, A: 0.235, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw161", word: "????????? ?????????", V: -0.327, A: 0.355, D: -0.155, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw162", word: "???????????? ?????????", V: -0.333, A: 0.075, D: -0.361, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw163", word: "??????????????? ?????????", V: -0.333, A: 0.24, D: 0.002, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw164", word: "?????? ???????????????", V: -0.335, A: 0.235, D: -0.111, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw165", word: "??????????????? ???????????????", V: -0.344, A: 0.088, D: -0.272, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw166", word: "????????????", V: -0.347, A: -0.333, D: -0.304, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw167", word: "????????????", V: -0.347, A: -0.333, D: -0.304, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw169", word: "???????????????", V: -0.347, A: 0.317, D: -0.245, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw168", word: "????????? ?????? ????????????", V: -0.347, A: 0.292, D: -0.132, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw170", word: "????????????", V: -0.354, A: -0.122, D: -0.342, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw171", word: "????????????", V: -0.354, A: 0.328, D: -0.315, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw172", word: "???????????? ?????????", V: -0.365, A: 0.365, D: 0.167, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw173", word: "????????? ??????", V: -0.367, A: 0.127, D: -0.245, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw178", word: "????????????", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw179", word: "????????? ?????????", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw176", word: "????????? ????????????", V: -0.375, A: 0.37, D: -0.195, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw177", word: "???????????? ?????????", V: -0.375, A: 0, D: -0.172, DEP: 3, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw175", word: "????????????", V: -0.375, A: 0.125, D: -0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw174", word: "??????????????????", V: -0.375, A: 0.449, D: 0.148, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw182", word: "??????????????? ?????????", V: -0.378, A: -0.05, D: -0.277, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw181", word: "???????????? ????????????", V: -0.378, A: 0.269, D: -0.192, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw183", word: "????????? ?????? ????????? ?????????", V: -0.378, A: 0.156, D: 0.08, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw180", word: "????????????", V: -0.378, A: 0.33, D: 0.104, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw184", word: "?????????", V: -0.38, A: 0.108, D: -0.176, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw185", word: "???????????????", V: -0.381, A: -0.039, D: -0.245, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw191", word: "??????????????? ?????????", V: -0.385, A: 0.176, D: -0.298, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw188", word: "??????????????????", V: -0.385, A: 0.294, D: -0.255, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw189", word: "???????????? ?????????", V: -0.385, A: 0.12, D: -0.236, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw186", word: "?????? ????????? ?????????", V: -0.385, A: 0.14, D: -0.191, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw190", word: "??????????????? ?????????", V: -0.385, A: 0.098, D: -0.151, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw187", word: "????????? ???????????????", V: -0.385, A: 0.347, D: -0.058, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw192", word: "??????????????? ????????????", V: -0.386, A: 0.038, D: -0.368, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw194", word: "?????????????????? ?????????", V: -0.388, A: 0.306, D: -0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw193", word: "????????????", V: -0.388, A: 0.452, D: -0.038, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw195", word: "?????????", V: -0.392, A: -0.08, D: -0.148, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw196", word: "????????? ????????????", V: -0.393, A: -0.09, D: -0.213, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw201", word: "???????????????", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw198", word: "????????? ?????? ?????????", V: -0.396, A: -0.08, D: -0.286, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw199", word: "?????? ???????????????", V: -0.396, A: 0.281, D: -0.227, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw200", word: "????????????", V: -0.396, A: 0.265, D: -0.157, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw197", word: "??????????????????", V: -0.396, A: 0.283, D: -0.155, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw202", word: "??????????????????", V: -0.398, A: 0.027, D: -0.324, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw203", word: "???????????? ?????????", V: -0.398, A: -0.02, D: -0.25, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw204", word: "????????? ????????? ?????????", V: -0.406, A: -0.202, D: -0.388, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw205", word: "????????? ?????????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw206", word: "??????????????????", V: -0.41, A: 0.404, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw207", word: "??????????????????", V: -0.412, A: -0.106, D: -0.264, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw211", word: "???????????? ?????????", V: -0.417, A: -0.194, D: -0.386, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw212", word: "??? ????????? ??????????????? ?????????", V: -0.417, A: -0.08, D: -0.347, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw210", word: "????????????", V: -0.417, A: -0.018, D: -0.222, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw208", word: "????????????", V: -0.417, A: 0.342, D: -0.163, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw209", word: "??????????????????", V: -0.417, A: 0.3, D: -0.008, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw213", word: "????????? ?????? ?????????", V: -0.418, A: 0.388, D: 0.158, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw214", word: "????????????", V: -0.427, A: 0.34, D: -0.104, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw215", word: "??????????????????", V: -0.429, A: -0.028, D: -0.259, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw216", word: "????????????", V: -0.429, A: 0.18, D: -0.17, DEP: 3, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw217", word: "????????????", V: -0.429, A: 0.18, D: -0.17, DEP: 3, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw218", word: "?????? ????????? ????????????", V: -0.43, A: 0.14, D: -0.026, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw219", word: "??????????????????", V: -0.431, A: 0.402, D: -0.085, DEP: 0, ANX: 1.5, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw222", word: "??????????????????", V: -0.438, A: 0.273, D: -0.209, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw220", word: "???????????? ?????????", V: -0.438, A: 0.137, D: -0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw223", word: "??????????????????", V: -0.438, A: 0.438, D: -0.1, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 6, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw221", word: "????????????", V: -0.438, A: 0.453, D: 0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw225", word: "???????????? ?????????", V: -0.439, A: 0.04, D: -0.366, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw226", word: "???????????? ?????????", V: -0.439, A: 0.321, D: -0.098, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw224", word: "?????????", V: -0.439, A: 0.286, D: -0.05, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw227", word: "????????????", V: -0.439, A: 0.137, D: -0.005, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw228", word: "?????????????????? ?????????", V: -0.439, A: 0.47, D: 0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw229", word: "???????????? ?????????", V: -0.44, A: 0.23, D: -0.22, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw231", word: "?????? ????????? ?????????", V: -0.448, A: -0.158, D: -0.316, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw230", word: "?????????", V: -0.448, A: 0.275, D: -0.183, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw232", word: "??????????????? ?????????", V: -0.449, A: 0.273, D: -0.226, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw233", word: "??????????????????", V: -0.452, A: 0.212, D: -0.19, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw234", word: "?????????????????????", V: -0.458, A: 0.061, D: -0.209, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw235", word: "??????????????????", V: -0.46, A: 0.18, D: -0.236, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw237", word: "????????? ?????????", V: -0.469, A: 0.302, D: -0.07, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw236", word: "????????? ?????? ????????????", V: -0.469, A: 0.22, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw238", word: "????????????", V: -0.476, A: -0.055, D: -0.364, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw239", word: "????????? ?????????", V: -0.488, A: 0.265, D: -0.105, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "kw240", word: "?????? ??????", V: -0.49, A: 0.275, D: -0.255, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 }
      ],
      stateKor: [
        { id: "ks001", word: "?????? ?????? ?????? ????????? ???????????? ??????????????????", V: 0.311, A: 0.731, D: 0.593, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks002", word: "????????? ???????????? ????????? ?????????", V: -1.174, A: -0.427, D: -0.988, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks003", word: "????????? ???????????? ?????? ??????", V: -0.271, A: -0.558, D: -0.559, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks004", word: "?????? ?????? ?????? ??????", V: -0.271, A: -0.558, D: -0.559, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks005", word: "????????? ?????? ?????????", V: -0.222, A: -0.051, D: -0.211, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks006", word: "????????? ?????????", V: -0.771, A: -0.252, D: -0.673, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks007", word: "????????? ????????????", V: -0.771, A: -0.252, D: -0.673, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks008", word: "??? ????????? ???????????? ?????????", V: -1, A: 0.03, D: -0.724, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks009", word: "???????????? ??????????????? ?????????", V: -1, A: 0.03, D: -0.724, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks010", word: "?????? ?????? ????????? ?????????????????? ?????????", V: -1, A: 0.03, D: -0.724, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks011", word: "?????? ?????? ???????????? ?????? ????????????", V: -0.041, A: 0.392, D: -0.009, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks012", word: "????????? ????????? ??????????????? ?????? ?????????", V: -0.414, A: -0.141, D: -0.518, DEP: 3, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks013", word: "????????? ??????????????? ???????????????????????? ?????? ?????????", V: -0.414, A: -0.141, D: -0.518, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks014", word: "???????????? ?????? ???????????? ????????? ?????? ?????????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks015", word: "??????????????? ?????? ????????? ?????? ????????????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks016", word: "????????? ????????? ?????? ????????? ????????? ????????????", V: 0.404, A: 2.519, D: 1.543, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks017", word: "?????? ????????????????????? ????????? ?????? ????????? ????????????", V: -0.552, A: 0.596, D: -0.345, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks018", word: "?????? ?????? ????????? ????????? ?????? ?????? ????????????", V: -0.686, A: 0.599, D: -0.374, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks019", word: "?????? ????????? ?????? ??????????????? ????????????", V: -1.652, A: 0.899, D: -0.877, DEP: 0, ANX: 3, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks020", word: "????????? ???????????? ?????????", V: -0.104, A: -0.061, D: 0.155, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks021", word: "??????????????? ????????????", V: -0.378, A: 0.156, D: 0.08, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks022", word: "?????????????????? ????????? ???????????? ???????????? ????????????", V: -0.429, A: 0.18, D: -0.17, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks023", word: "????????? ????????? ????????? ????????? ??????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks024", word: "???????????? ????????????", V: -0.347, A: 0.317, D: -0.245, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks025", word: "??????????????????", V: -0.265, A: 0.32, D: -0.287, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks026", word: "???????????? ????????? ????????????", V: -0.229, A: -0.08, D: -0.31, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks027", word: "????????? ????????? ????????? ????????????", V: 0.365, A: -0.41, D: -0.118, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks028", word: "???????????? ??????????????????", V: 0.264, A: -0.204, D: 0.059, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks029", word: "???????????? ?????????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks030", word: "?????? ???????????? ?????? ??? ???????????????", V: -0.245, A: 0.167, D: -0.223, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks031", word: "?????? ???????????????", V: -0.546, A: 0.63, D: -0.483, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks032", word: "?????? ?????? ???????????????", V: 0.459, A: 0.01, D: 0.185, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks033", word: "?????? ??????????????? ?????????????????? ????????????", V: -0.26, A: 0.469, D: 0.155, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks034", word: "?????????????????? ?????? ????????? ?????????", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks035", word: "???????????? ???????????? ???????????? ????????????", V: 0.83, A: -0.458, D: 0.151, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks036", word: "???????????? ?????? ???????????? ????????? ????????? ???????????? ??? ?????? ??? ?????????", V: -0.492, A: 0.42, D: -0.15, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks037", word: "????????? ?????? ????????? ?????? ?????? ????????? ??????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks038", word: "?????? ????????? ????????? ???????????? ????????? ?????????", V: -0.47, A: 2.424, D: 0.714, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks039", word: "???????????? ??????????????? ?????????", V: 0.235, A: 0.676, D: 0.277, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks040", word: "????????? ???????????? ?????????????????? ???????????? ?????????", V: 0.729, A: 0.58, D: 0.81, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks041", word: "????????? ????????? ?????? ??????????????? ", V: 0.781, A: 0.19, D: 0.696, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks042", word: "???????????? ???????????? ??? ?????? ????????? ???????????? ???????????????", V: -0.429, A: -0.028, D: -0.259, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks043", word: "???????????? ????????? ??????????????? ????????????", V: 0.18, A: -0.314, D: 0.263, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks044", word: "?????? ?????? ???????????? ??????????????? ???????????? ?????? ???????????? ??????????????????", V: -0.706, A: 0.896, D: -0.204, DEP: 0, ANX: 0.4, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks045", word: "???????????? ?????????", V: 0.5, A: 0.5, D: 0.5, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks046", word: "?????? ???????????? ???????????????", V: -0.188, A: 0.863, D: -0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks047", word: "?????? ?????????", V: -0.32, A: -0.259, D: -0.455, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks048", word: "?????? ????????? ????????? ??? ?????? ??????????????????", V: -0.302, A: -0.01, D: -0.255, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks049", word: "?????? ?????? ???????????????", V: -0.375, A: 0.125, D: -0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks050", word: "?????? ?????? ?????????", V: 0.408, A: -0.059, D: 0.353, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks051", word: "?????? ???????????? ????????????", V: 0.399, A: 0.047, D: 0.298, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks052", word: "?????? ????????? ?????? ?????????", V: 0.439, A: 0.135, D: 0.438, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks053", word: "?????? ???????????????", V: 0.449, A: 0.224, D: 0.438, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks054", word: "?????? ?????????", V: 0.438, A: -0.132, D: 0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks055", word: "?????? ???????????? ???????????????", V: 0.427, A: 0.226, D: 0.231, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks056", word: "?????? ???????????? ??????????????????", V: -0.312, A: 0.377, D: -0.026, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks057", word: "?????? ???????????? ????????????", V: -0.25, A: 0.15, D: 0.123, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks058", word: "?????? ???????????? ????????? ??? ?????????", V: -0.094, A: 0.13, D: 0.293, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks059", word: "?????? ???????????? ?????????", V: -0.375, A: 0.125, D: -0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks060", word: "?????? ???????????? ???????????? ?????????", V: -0.375, A: 0.125, D: -0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks061", word: "?????? ???????????? ????????????", V: -0.385, A: 0.12, D: -0.236, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks062", word: "?????? ???????????? ????????????", V: 0.312, A: 0.057, D: 0.143, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks063", word: "?????? ???????????? ?????????", V: 0.438, A: -0.132, D: 0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks064", word: "?????? ???????????? ?????? ??? ?????????", V: 0.469, A: -0.185, D: 0.324, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks065", word: "?????? ???????????? ????????? ????????????", V: 0.347, A: -0.214, D: 0.065, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks066", word: "?????? ???????????? ??????????????? ?????? ?????? ??????", V: 0.375, A: -0.08, D: 0.135, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks067", word: "?????? ???????????? ????????????", V: 0.208, A: -0.033, D: 0.307, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks068", word: "??? ????????? ?????? ????????? ????????????", V: 0.459, A: 0.01, D: 0.185, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks069", word: "????????? ??? ????????? ???????????? ??????????????? ????????? ?????????", V: -0.313, A: 0.757, D: 0.339, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks070", word: "?????? ????????? ???????????? ????????????", V: 1.303, A: 0.078, D: 0.592, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks071", word: "???????????? ?????? ??????????????? ?????? ??? ?????? ??? ?????????", V: 1.303, A: 0.078, D: 0.592, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks072", word: "?????? ?????? ????????? ?????? ?????? ?????????", V: 0.094, A: 0.3, D: 0.127, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks073", word: "?????? ?????? ?????? ???????????? ???????????? ?????? ?????? ?????????", V: -0.448, A: -0.158, D: -0.316, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks074", word: "????????? ?????? ?????????????????? ?????? ?????? ?????? ??????????????? ?????????", V: 1.316, A: 0.627, D: 1.145, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks075", word: "???????????? ??? ??? ????????? ??? ????????? ????????????", V: 0.092, A: 0.559, D: 0.147, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks076", word: "??? ????????? ?????? ???????????? ????????? ????????? ?????????", V: 0.459, A: 0.01, D: 0.355, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks077", word: "???????????? ????????? ??? ????????? ????????? ?????????", V: 0.333, A: -0.062, D: 0.292, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks078", word: "????????? ????????? ?????? ??? ?????? ???????????? ????????????", V: -0.229, A: -0.08, D: -0.31, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks079", word: "???????????? ?????? ?????? ???????????????", V: -0.429, A: -0.028, D: -0.259, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks080", word: "????????? ??? ????????? ?????? ?????? ?????? ???????????????", V: -0.425, A: -0.484, D: -0.447, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks081", word: "?????? ????????? ??????????????? ?????? ??????????????? ?????? ?????? ?????? ?????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks082", word: "?????? ?????? ???????????? ?????? ???????????? ?????? ???????????? ?????? ????????????", V: -0.302, A: 0.258, D: -0.045, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks083", word: "????????? ????????? ????????? ?????? ????????? ????????? ????????????", V: -0.229, A: -0.08, D: -0.31, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks084", word: "?????? ???????????? ?????? ?????????(?????????) ???????????? ?????? ???????????????", V: -0.529, A: -0.418, D: -0.507, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks085", word: "????????? ???????????? ?????? ??? ????????? ????????????", V: -0.29, A: 0.316, D: -0.219, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks086", word: "???????????? ?????? ?????????????????? ?????????", V: -0.398, A: -0.02, D: -0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks087", word: "????????? ????????? ??????????????? ???????????? ????????? ?????? ????????????", V: -0.625, A: 0.699, D: -0.171, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks088", word: "?????? ???????????? ????????????", V: -0.29, A: 0.316, D: -0.219, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks089", word: "?????? ?????? ???????????? ???????????? ??????????????? ?????????", V: -0.266, A: 0.034, D: -0.43, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks090", word: "??? ???????????? ????????? ????????? ?????? ????????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks091", word: "??? ?????? ????????? ????????? ?????? ????????????", V: 0.479, A: 0.306, D: 0.548, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks092", word: "????????? ??????????????? ?????? ????????? ???????????????", V: -0.115, A: 0.309, D: -0.006, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks093", word: "?????? ???????????? ????????? ???????????? ???????????? ???????????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks094", word: "?????? ????????? ???????????? ?????? ????????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks095", word: "????????? ????????? ?????? ????????? ?????? ?????? ??? ?????????", V: -0.54, A: 0.042, D: -0.481, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks096", word: "???????????? ????????? ????????? ????????? ???????????? ?????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks097", word: "????????? ??? ????????? ???????????? ?????? ?????? ??? ????????? ????????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks098", word: "?????? ???????????? ???????????? ???????????? ?????? ????????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks099", word: "?????? ????????? ?????????", V: 0.775, A: 0.667, D: 0.851, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks100", word: "?????? ?????????", V: -0.275, A: -0.167, D: -0.351, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks101", word: "?????? ????????? ????????? ?????????", V: -0.275, A: -0.167, D: -0.351, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks102", word: "????????? ????????? ???????????? ????????? ????????? ??????????????? ", V: -0.275, A: -0.167, D: -0.351, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks103", word: "????????? ????????? ?????? ???????????? ?????????", V: 0.78, A: 0.696, D: 0.91, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks104", word: "????????? ????????? ????????? ?????????", V: -0.686, A: -0.398, D: -0.798, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks105", word: "????????? ?????? ????????? ??? ????????? ????????? (or ????????? ?????????)", V: -0.406, A: -0.202, D: -0.388, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks106", word: "????????? ?????? ??????????????? ????????? ????????? ????????? ????????? ", V: -0.686, A: -0.398, D: -0.798, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks107", word: "????????????????????? ??? ?????? ????????? ??? ?????????", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks108", word: "????????? ????????? ????????? ??????, ?????????????????? ??? ????????? ", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks109", word: "??????????????? ????????? ??????????????? ?????????", V: -0.333, A: 0.075, D: -0.361, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks110", word: "???????????? ??? ??????????????? ???????????? ?????????", V: 0.459, A: 0.01, D: 0.185, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks111", word: "???????????? ?????? ???????????? ?????? ????????? ?????? ????????? ?????????", V: 0.041, A: 0.49, D: 0.315, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks112", word: "??? ??????????????? ???????????? ????????? ?????????", V: 0.143, A: 1.025, D: 0.883, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks113", word: "?????? ?????? ??? ??????????????? ????????????", V: -0.204, A: 0.692, D: 0.579, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks114", word: "?????? ???????????? ????????? ?????????", V: 0.792, A: 0.433, D: 0.794, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks115", word: "???????????? ?????? ?????? ??? ?????????", V: -0.292, A: 0.067, D: -0.294, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks116", word: "???????????? ???????????? ?????? ?????????", V: -0.292, A: 0.067, D: -0.294, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks117", word: "?????? ???????????? ???????????? ?????????", V: -0.292, A: 0.067, D: -0.294, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks118", word: "?????? ?????? ?????? ?????? ????????? ????????? ?????????", V: 0.792, A: 0.433, D: 0.794, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks119", word: "????????? ?????? ?????? ???????????? ???????????? ????????? ?????????", V: -0.323, A: 0.235, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks120", word: "?????? ?????? ?????? ?????? ????????? ?????????", V: -0.323, A: 0.235, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks121", word: "?????? ?????? ?????? ??? ????????? ?????????", V: -0.323, A: 0.235, D: -0.019, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks122", word: "??????????????? ???????????? ?????????", V: 0.929, A: 0.528, D: 0.759, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks123", word: "??? ???????????? ???????????? ??????", V: -0.449, A: 0.273, D: -0.226, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks124", word: "??? ????????? ???????????????", V: -0.918, A: 0.575, D: -0.296, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks125", word: "??? ???????????? ???????????????", V: -0.918, A: 0.575, D: -0.296, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks126", word: "?????? ?????? ???????????? ?????? ??? ????????? ?????????", V: 0.438, A: -0.132, D: 0.034, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks127", word: "?????? ???????????? ????????? ????????? ??? ????????? ????????? ????????????", V: -0.126, A: 0.934, D: 0.511, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks128", word: "???????????? ?????? ?????? ????????? ??? ??? ?????? ??? ????????? ", V: -0.667, A: 0.192, D: -0.421, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks129", word: "?????? ?????? ??????????????? ?????? ????????? ?????? ?????????", V: -0.667, A: 0.192, D: -0.421, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks130", word: "????????? ????????? ?????? ??????", V: 1.233, A: 0.076, D: 0.587, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks131", word: "????????? ?????? ????????? ?????? ?????????, ????????? ????????? ?????? ?????????", V: -0.469, A: 0.22, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks132", word: "????????? ????????? ????????? ??? ?????????", V: -0.469, A: 0.22, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks133", word: "???????????? ?????? ????????? ?????? ?????????", V: -0.469, A: 0.22, D: -0.028, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks134", word: "????????? ???????????? ??? ????????? ?????????", V: 1.642, A: 1.04, D: 1.596, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks135", word: "????????? ??? ?????? ?????????", V: -0.642, A: -0.04, D: -0.596, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks136", word: "????????? ?????? ?????????", V: -0.642, A: -0.04, D: -0.596, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks137", word: "???????????? ?????? ?????? ??? ??? ??? ???????????? ???????????? ????????? ??? ????????? ?????????", V: -0.642, A: -0.04, D: -0.596, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks138", word: "????????? ???????????? ??? ????????? ?????? ?????? ????????? ?????????", V: 0.79, A: 0.184, D: 0.719, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks139", word: "???????????? ?????? ????????? ?????? ????????? ??????", V: -0.29, A: 0.316, D: -0.219, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks140", word: "????????? ????????? ????????? ????????? ?????????", V: -0.686, A: 0.599, D: -0.374, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks141", word: "?????? ????????? ?????? ??? ?????????", V: -0.686, A: 0.599, D: -0.374, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks142", word: "?????? ???????????? ?????? ????????? ?????? ?????? ???????????? ?????????", V: 0.25, A: 0.029, D: 0.225, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks143", word: "????????? ?????? ???????????? ?????? ????????? ????????????", V: 0.25, A: 0.471, D: 0.275, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks144", word: "?????? ???????????? ?????? ????????? ????????? ???????????? ?????? ?????????????????? ?????????", V: 0.25, A: 0.471, D: 0.275, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks145", word: "?????? ???????????? ?????? ????????? ?????? ?????? ?????? ?????????????????? ?????????", V: 0.25, A: 0.471, D: 0.275, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks146", word: "?????? ???????????? ???????????? ????????? ?????????", V: 0.494, A: -0.324, D: 0.531, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks147", word: "????????? ????????? ?????? ????????? ??? ?????????", V: 0.271, A: 0.648, D: 0.192, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks148", word: "?????? ?????? ??????????????? ??? ?????? ????????????  ", V: 0.271, A: 0.648, D: 0.192, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks149", word: "??? ?????? ?????? ????????? ?????? ?????? ?????????", V: -0.125, A: 0.568, D: -0.094, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks150", word: "???????????? ?????? ????????? ????????? ?????????", V: 0.354, A: 0.284, D: 0.302, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks151", word: "?????? ?????? ???????????? ?????? ????????? ??? ?????? ????????? ?????????", V: 0.146, A: 0.216, D: 0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks152", word: "?????? ?????? ?????? ???????????????", V: 0.146, A: 0.216, D: 0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks153", word: "?????? ????????? ????????? ??? ????????? ?????? ????????? ?????????????????? ??????", V: 0.146, A: 0.216, D: 0.198, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks154", word: "???????????? ?????? ??? ??? ?????????", V: 0.104, A: -0.375, D: -0.25, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks155", word: "?????? ?????? ?????? ??? ????????? ?????????", V: 1.271, A: 1.558, D: 1.559, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks156", word: "???????????? ?????? ?????? ?????? ??????, ?????? ?????? ?????? ???????????? ????????????", V: 1.271, A: 1.558, D: 1.559, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks157", word: "???????????? ??? ???????????? ?????? ??????, ?????? ?????? ?????? ?????? ??? ??? ?????????", V: 1.271, A: 1.558, D: 1.559, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks158", word: "?????? ?????? ??? ?????????????????? ?????????", V: 0.875, A: 0.683, D: 0.809, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks159", word: "????????? ??? ?????? ???????????????", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks160", word: "??? ?????? ???????????????", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks161", word: "????????? ???????????? ?????? ?????? ??? ??? ?????????", V: -0.375, A: -0.183, D: -0.309, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks162", word: "????????? ????????? ?????????", V: 0.896, A: 0.569, D: 0.864, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks163", word: "????????? ???????????? ????????? ????????? ?????????", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks164", word: "???????????? ?????? ????????? ?????????", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks165", word: "???????????? ????????? ?????? ???????????????", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks166", word: "?????? ???????????? ?????? ?????? ????????????", V: 0.896, A: 0.569, D: 0.864, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks167", word: "????????? ???????????? 5Kg ?????? ????????????", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks168", word: "????????? ???????????? 7Kg ?????? ????????????", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks169", word: "????????? ???????????? 2Kg ?????? ????????????", V: -0.396, A: -0.069, D: -0.364, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks170", word: "????????? ??? ????????? ??????????????? ????????? ?????????", V: 0.671, A: 0.098, D: 0.435, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks171", word: "???????????? ???????????? ?????? ?????? ???????????? ????????????", V: 0.094, A: 0.226, D: 0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks172", word: "????????? ?????? ???????????? ??? ?????? ????????? ????????? ????????? ???????????? ????????? ????????? ", V: 0.094, A: 0.226, D: 0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks173", word: "?????? ????????????????????? ????????????", V: 0.094, A: 0.226, D: 0.288, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks174", word: "????????? ?????? ????????? ??? ???????????? ????????? ?????????", V: 0.906, A: 0.176, D: 0.605, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks175", word: "?????? ?????? ??????, ????????????, ?????? ?????? ?????? ???????????? ????????? ????????????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks176", word: "??? ????????? ?????? ???????????? ?????? ?????? ???????????? ????????????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks177", word: "?????? ?????? ?????? ?????? ????????? ??? ?????? ????????? ??? ????????? ?????? ????????????", V: -0.406, A: 0.324, D: -0.105, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks178", word: "?????? ???????????? ????????? ????????? ????????? ????????? ?????????", V: 0.647, A: 0.692, D: 0.349, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks179", word: "????????? ????????? ????????????", V: 0.353, A: 0.308, D: 0.651, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks180", word: "?????? ????????? ????????? ?????? ?????????", V: 0.353, A: 0.308, D: 0.651, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks181", word: "????????? ????????? ????????????", V: 0.353, A: 0.308, D: 0.651, DEP: 0, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks182", word: "????????? ????????? ??? ????????? ??????????????????", V: -0.643, A: 0.501, D: -0.217, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks183", word: "???????????? ????????? ????????? ????????? ??? ????????? ????????? ", V: -0.771, A: -0.08, D: -0.458, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks184", word: "????????? ??????????????? ??????????????? ?????????", V: -0.598, A: 0.56, D: -0.285, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks185", word: "???????????? ????????? ???????????? ??? ???????????????", V: 0.494, A: -0.324, D: 0.531, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks186", word: "????????? ????????? ??? ???????????? ??????????????? ?????? ??? ?????????", V: 0.493, A: -0.352, D: 0.367, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks187", word: "??? ?????? ??? ?????? ????????? ????????? ??? ?????? ??? ???????????? ?????? ??? ?????? ????????? ????????? ??? ?????? ??? ?????????", V: -0.159, A: 0.18, D: -0.152, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks188", word: "???????????? ?????? ????????? ??? ????????? ??? ?????????", V: 0.493, A: -0.352, D: 0.367, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks189", word: "????????? ??????????????????", V: 0.888, A: 0.172, D: 0.96, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks190", word: "?????? ????????? ??? ?????? ??? ????????? ?????? ??????", V: -0.503, A: 0.898, D: 0.01, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks191", word: "????????? ????????? ?????? ?????? ????????? ???????????? ?????? ??? ?????????", V: 0.404, A: 1, D: 0.636, DEP: 0, ANX: 0, SOW: 0, STR: 2, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks192", word: "????????? ?????? ????????????", V: -0.656, A: -0.206, D: -0.596, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks193", word: "?????? ??? ????????? ????????? ?????? ?????????", V: 0.438, A: -0.132, D: 0.034, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks194", word: "????????? ??????????????? ?????? ?????????", V: -0.642, A: -0.04, D: -0.596, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks195", word: "?????? ?????? ??? ??? ??????", V: 0.021, A: 0.692, D: 0.441, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks196", word: " ??????????????? ??? ?????????", V: 0.439, A: 0.24, D: 0.182, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks197", word: "????????? ???????????? ???????????? ?????????", V: 0.647, A: 0.692, D: 0.349, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks198", word: "????????? ?????? ?????? ??? ????????????", V: -0.32, A: -0.259, D: -0.455, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks199", word: "????????? ???????????? ?????????", V: -0.396, A: -0.069, D: -0.364, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks200", word: "????????? ????????? ?????? ????????? ?????????", V: -0.89, A: 1.019, D: -0.458, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks201", word: "????????? ?????? ?????? ???????????????", V: -0.265, A: 0.32, D: -0.287, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks202", word: "???????????? ????????? ?????????", V: 0.745, A: 0.333, D: 0.723, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks203", word: "???????????? ????????? ?????? ???????????? OR ?????? ?????? ?????? ?????? ?????? ????????? ????????????", V: 0.659, A: 0.32, D: 0.652, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks204", word: "????????????????????? ????????? ?????? ?????????", V: -0.552, A: 0.596, D: -0.345, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks205", word: "??? ????????? ?????????????????? ????????????", V: 0.447, A: -0.143, D: 0.127, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks206", word: "???????????? ????????? ??? ???????????????", V: -0.388, A: 0.452, D: -0.038, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks207", word: "????????? ???????????? ??? ???????????? ?????????", V: 0.229, A: -0.148, D: 0.308, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks208", word: "???????????? ?????? ?????? ????????? ??????????????? ?????????", V: 0.51, A: -0.247, D: 0.405, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks209", word: "??? ?????? ??? ????????????", V: 0.723, A: -0.194, D: 0.244, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks210", word: "?????? ????????? ????????? ??? ??? ??? ??? ?????????", V: -0.469, A: 0.22, D: -0.028, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks211", word: "?????? ????????? ????????? ?????? ????????? ????????????", V: 0.898, A: 0.465, D: 0.432, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks212", word: "???????????? ????????? ????????? ????????? ?????????", V: -0.062, A: 0.263, D: 0.108, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks213", word: "??? ????????? ????????? ??? ?????? ??? ?????????", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks214", word: "????????? ?????? ???????????? ?????? ????????????", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks215", word: "????????? ????????? ?????? ?????? ????????? ?????????", V: 1.062, A: 0.737, D: 0.892, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks216", word: "????????? ?????? ????????? ?????? ????????? ?????????", V: 1.062, A: 0.737, D: 0.892, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks217", word: "?????? ????????? ?????? ????????? ???????????? ?????????", V: -0.166, A: 0.008, D: 0.031, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks218", word: "?????? ???????????? ????????? ?????????", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks219", word: "?????? ?????? ????????? ?????? ?????? ????????????", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks220", word: "?????? ???????????? ?????? ?????? ????????? ?????????", V: 1.416, A: 1.021, D: 1.194, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks221", word: "????????? ????????? ?????? ??????????????? ??????", V: 1.083, A: 1.356, D: 0.859, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks222", word: "??? ????????? ?????? ???????????? ????????? ????????? ??? ?????????", V: 1.062, A: 1.179, D: 0.942, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks223", word: "????????? ?????????", V: -0.25, A: -0.274, D: -0.262, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks224", word: "????????? ????????? ?????? ???????????? ????????????", V: 1.097, A: 0.56, D: 0.827, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks225", word: "?????? ?????? ????????? ????????? ?????????", V: 1.208, A: 0.892, D: 0.898, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks226", word: "??? ????????? ?????? ???????????? ????????? ?????????", V: 1.306, A: 0.384, D: 1.198, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks227", word: "??? ?????? ?????? ??? ????????? ?????? ????????? ????????????", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks228", word: "??????????????????", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks229", word: "????????? ?????????", V: 1.166, A: 0.992, D: 0.969, DEP: 0.4, ANX: 0, SOW: 0, STR: 0, NEU: 2, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks230", word: "??? ?????? ???????????? ????????? ?????????", V: 0.75, A: 0.774, D: 0.762, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks231", word: "??????????????? ????????? ????????????", V: -0.083, A: 0.288, D: -0.054, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks232", word: "????????? ????????? ??? ????????? ?????????", V: -0.103, A: 0.318, D: 0.125, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks233", word: "????????? ????????? ????????? ????????? ?????????", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks234", word: "?????? ???????????? ?????? ???????????? ????????? ?????? ??? ?????????", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks235", word: "??? ?????? ??????????????? ????????? ?????? ??? ?????????", V: 0.75, A: 0.774, D: 0.762, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks236", word: "??? ???????????? ???????????? ?????? ???????????? ????????? ?????? ??? ?????????", V: 0.75, A: 0.774, D: 0.762, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks237", word: "??????????????? ????????? ????????????", V: 1.317, A: 0.644, D: 0.898, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks238", word: "????????? ????????? ???????????? ?????????", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks239", word: "?????? ????????? ????????? ?????????", V: 1.427, A: 0.89, D: 1.233, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks240", word: "???????????? ????????? ????????? ???????????? ??? ?????????", V: -0.097, A: 0.44, D: 0.173, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks241", word: "?????? ????????? ?????? ????????? ?????? ????????? ??? ?????????", V: 0.529, A: 0.37, D: 0.483, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks242", word: "?????? ???????????? ?????? ???????????? ?????????", V: -0.279, A: -0.144, D: -0.245, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks243", word: "?????? ?????? ?????? ????????? ????????? ?????? ??? ?????????", V: 1.43, A: 0.498, D: 1.119, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks244", word: "?????? ???????????? ????????? ?????? ???????????? ?????????", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks245", word: "?????? ?????? ?????????", V: -0.22, A: -0.347, D: -0.368, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks246", word: "????????? ???????????? ?????? ????????? ?????? ?????? ?????? ?????? ?????? ?????? ??? ?????????", V: -0.529, A: -0.418, D: -0.507, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks247", word: "?????? ????????? ?????? ??? ?????? ???????????? ?????????", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks248", word: "???????????? ????????? ???????????? ?????????", V: 1.45, A: 0.468, D: 0.94, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks249", word: "??? ??????????????????????????????????????????????????????????", V: 1.097, A: 0.56, D: 0.827, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks250", word: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????", V: 1.45, A: 0.468, D: 0.94, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 },
        { id: "ks251", word: "??? ???????????????????????????????????????????????????????????", V: 1.45, A: 0.468, D: 0.94, DEP: 0, ANX: 0, SOW: 1, STR: 0, NEU: 0, frequency: 0, simple: 0, average: 0, combine: 0, result: 0 }
      ],
      activity: [],
      activitySelected: [
        0, 0,
        0, 0,
        0, 0,
        0, 0,
      ],
      activityNext: 0,
      activityFlag: true,
      keyboard: false,
      content: [],
    }

    this.getNumFromServer();
    this.fadeIn();
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.setState({ keyboard: true }));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState({ keyboard: false }));
  }

  getToday() {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var date = new Date();

    var today = month[date.getMonth()] + " " + date.getDate();

    return today;
  }

  setInitial() {
    if (global.language == "Kor") {
      return [
        '?????????', '??? ????????????', '?????? ?????????', '????????????',
        '?????????', '', '', '',
        '', '', '', '',
      ]
    } else {
      return [
        'Great', 'Good', 'Neutral', 'Awful',
        'Bad', '', '', '',
        '', '', '', '',
      ]
    }
  }

  getNumFromServer() {
    const url = 'http://yooyu852.dothome.co.kr/scribble/getNum.php'

    let data = {
      mail: this.state.mail,
    }

    fetch(url, {

      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        async: false,
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((responseInJson) => {
        var response = responseInJson.data;
        console.log(response.num);
        console.log(response.id);
        this.setState({ num: response.num, userAnswer: response.answer, userInput: response.input, userScore: response.score, userId: response.id, userDay: response.day });

        //console.log(response.answer);
        var count = 0;
        for (var i = 0; i < response.answer.length; i++) {
          //console.log("i : " + i + " category : " + response.answer[i].category + " flag : " + response.answer[i].flag);
          if (response.answer[i].flag == 1)
            count++;
        }

        this.setState({ necessaryCount: count, load: true });
      })
      .catch((e) => console.log(e))
      .finally(() => {
      })
  }

  async sendDataToServer() {
    const url = 'http://yooyu852.dothome.co.kr/scribble/addData.php'

    let content = [];
    let selected = [];
    let totalList = [];

    console.log("content")
    this.state.content.forEach( function(element) {
      content.push(element.replace(/\'/gi, "\'\'"));
    });

    console.log("selected")
    this.state.selected.forEach( function(element) {
      element.word = element.word.replace(/\'/gi, "\'\'");
      selected.push(element);
    })

    let tmpTotal = this.state.totalList;
    console.log("tmp")
    console.log(tmpTotal);

    for (var i = 0; i <= 7; i++) {
      if (i < 4) {
        totalList.push(tmpTotal[i]);
      } else {
        let sum = []
        tmpTotal[i].forEach( function(element) {
          console.log(element);
          element[0] = element[0].replace(/\'/gi, "\'\'");
          sum.push(element);
        })
        totalList.push(sum);
      }
    }

    console.log("total");
    console.log(totalList);

    let data = {
      num: this.state.num,
      selected: selected,
      totalList: totalList,
      activity: this.state.activity,
      content: content,
      userId: this.state.userId,
      userDay: this.state.userDay,
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

    this.increaseProgress()

    var version = this.state.version;

    var count = this.state.count + 1;
    var step = this.state.step + 1;
    this.setState({ count: count });
    this.setState({ step: step });

    var index;
    var target = [];
    var targetNum = 0;
    var targetInput = [];
    var sequence = [];

    if (step == 1) {
      for (var i = 0; i < 5; i++) {
        if (this.state.wordSelected[i] == 1)
          target.push(this.state.wordSpace[i]);
      }
    } else if (step > 1 && step < 5) {
      for (var i = 0; i < 12; i++) {
        if (this.state.wordSelected[i] >= 1) {
          target.push(this.state.wordSpace[i]);
          targetInput.push(this.state.wordSelected[i]);
          targetNum++;
          sequence.push(i);
        }
      }
    } else {
      for (var i = 0; i < 6; i++) {
        if (this.state.stateSelected[i] >= 1) {
          target.push(this.state.stateSpace[i]);
          targetInput.push(this.state.stateSelected[i]);
          targetNum++;
          sequence.push(i);
        }
      }
    }

    if (step == 1) {
      // Face selected
      var num;

      switch (target[0]) {
        case 'Great':
          num = 0;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: 0.458,
            A: 0.165,
            D: 0.31,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 0,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case 'Good':
          num = 1;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: 0.438,
            A: 0.316,
            D: 0.298,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 0,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case 'Neutral':
          num = 2;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: -0.031,
            A: -0.316,
            D: -0.143,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 6,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case 'Awful':
          num = 3;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: -0.439,
            A: 0.04,
            D: -0.366,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 0,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case 'Bad':
          num = 4;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: -0.375,
            A: -0.183,
            D: -0.309,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 0,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case '?????????':
          num = 0;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: 0.458,
            A: 0.165,
            D: 0.31,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 0,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case '??? ????????????':
          num = 1;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: 0.438,
            A: 0.316,
            D: 0.298,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 0,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case '?????? ?????????':
          num = 2;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: -0.031,
            A: -0.316,
            D: -0.143,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 6,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case '????????????':
          num = 3;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: -0.439,
            A: 0.04,
            D: -0.366,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 0,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
        case '?????????':
          num = 4;
          index = {
            id: 'Initial' + num,
            word: target[0],
            V: -0.375,
            A: -0.183,
            D: -0.309,
            DEP: 0,
            ANX: 0,
            SOW: 0,
            STR: 0,
            NEU: 0,
            sequence: num,
            input: 1,
            similarity: 0,
            step: 0,
          };
          break;
      }
      
      this.state.selected.push(index);

      // Empty array for word space
      let tmp;
      if (version == 'Eng') {
        tmp = this.state.initialEmotionEng;
      } else {
        tmp = this.state.initialEmotionKor;
      }
      let tmpList = [];

      let randomList = [0, 0, 0, 0, 0, 0, 0, 0,];
      let randomCheck = [0, 0, 0, 0, 0, 0, 0, 0,];

      var randomCount = 0;

      while (randomCount < 8) {
        var randomNum = Math.floor(Math.random() * 8);
        if (randomCheck[randomNum] == 0) {
          randomCheck[randomNum] = 1;
          randomList[randomCount++] = randomNum;
        }
      }

      // Pushing fix list
      for (var i = 0; i < 4; i++) {
        var set = [];
        set.push(tmp[num][i].word);
        set.push(tmp[num][i].result);
        set.push(tmp[num][i].id);

        tmpList.push(set);
        //tmp[i].frequency++;
        //this.checkCategory(tmp[num][i].id);
      }

      // Pushing random list
      for (var i = 0; i < 8; i++) {
        var set = [];
        set.push(tmp[num][4 + randomList[i]].word);
        set.push(tmp[num][4 + randomList[i]].result);
        set.push(tmp[num][4 + randomList[i]].id);

        tmpList.push(set);
        //tmp[i].frequency++;
        //this.checkCategory(tmp[num][4 + randomList[i]].id);
      }

      // Set arrays to state
      this.setState({ wordSpace: tmpList });

      this.state.totalList.push(tmpList);

      this.resetSelected('word');
    } else {
      // Word selected      
      index = [];

      let tmp;

      if (version == "Eng") {
        if (step < 5) {
          tmp = this.state.emotionEng;
        } else {
          tmp = this.state.stateEng;
        }
      } else {
        if (step < 5) {
          tmp = this.state.emotionKor;
        } else {
          tmp = this.state.stateKor;
        }
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
          DEP: index[i].DEP,
          ANX: index[i].ANX,
          SOW: index[i].SOW,
          STR: index[i].STR,
          NEU: index[i].NEU,
          sequence: sequence[i],
          input: targetInput[i],
          similarity: index[i].result,
          step: step - 1,
        };

        this.state.selected.push(selectedInfo);
      }

      var V = 0;
      var A = 0;
      var D = 0;
      var DEP = 0;
      var ANX = 0;
      var SOW = 0;
      var STR = 0;
      var NEU = 0;

      // Calculate standard matrix
      for (var i = 0; i < this.state.selected.length; i++) {
        V += this.state.selected[i].V;
        A += this.state.selected[i].A;
        D += this.state.selected[i].D;
        DEP += this.state.selected[i].DEP;
        ANX += this.state.selected[i].ANX;
        SOW += this.state.selected[i].SOW;
        STR += this.state.selected[i].STR;
        NEU += this.state.selected[i].NEU;
      }

      V /= this.state.selected.length;
      A /= this.state.selected.length;
      D /= this.state.selected.length;
      DEP /= this.state.selected.length;
      ANX /= this.state.selected.length;
      SOW /= this.state.selected.length;
      STR /= this.state.selected.length;
      NEU /= this.state.selected.length;

      // Initial matrix
      this.setState({ V: V, A: A, D: D, DEP: DEP, ANX: ANX, SOW: SOW, STR: STR, NEU: NEU });

      // Calculate similarity
      tmp.map((item) => {
        if (item.frequency == 0) {
          var flag = true;

          for (var i = 0; i < index.length; i++) {
            if (item.word == index[i].word)
              flag = false;
          }

          if (flag) {
            // Combine matrix
            item.combine = (V * item.V + A * item.A + D * item.D + DEP * item.DEP + ANX * item.ANX + SOW * item.SOW + STR * item.STR + NEU * item.NEU) /
              Math.sqrt(Math.pow(V, 2) + Math.pow(A, 2) + Math.pow(D, 2) + Math.pow(DEP, 2) + Math.pow(ANX, 2) + Math.pow(SOW, 2) + Math.pow(STR, 2) + Math.pow(NEU, 2)) /
              Math.sqrt(Math.pow(item.V, 2) + Math.pow(item.A, 2) + Math.pow(item.D, 2) + Math.pow(item.DEP, 2) + Math.pow(item.ANX, 2) + Math.pow(item.SOW, 2) + Math.pow(item.STR, 2) + Math.pow(item.NEU, 2));

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
                var matrix = (
                    this.state.selected[i].V * item.V + 
                    this.state.selected[i].A * item.A + 
                    this.state.selected[i].D * item.D +
                    this.state.selected[i].DEP * item.DEP +
                    this.state.selected[i].ANX * item.ANX +
                    this.state.selected[i].SOW * item.SOW +
                    this.state.selected[i].STR * item.STR +
                    this.state.selected[i].NEU * item.NEU
                  ) /
                  Math.sqrt(
                    Math.pow(this.state.selected[i].V, 2) + 
                    Math.pow(this.state.selected[i].A, 2) + 
                    Math.pow(this.state.selected[i].D, 2) +
                    Math.pow(this.state.selected[i].DEP, 2) +
                    Math.pow(this.state.selected[i].ANX, 2) +
                    Math.pow(this.state.selected[i].SOW, 2) +
                    Math.pow(this.state.selected[i].STR, 2) +
                    Math.pow(this.state.selected[i].NEU, 2)
                  ) /
                  Math.sqrt(
                    Math.pow(item.V, 2) + 
                    Math.pow(item.A, 2) + 
                    Math.pow(item.D, 2) +
                    Math.pow(item.DEP, 2) +
                    Math.pow(item.ANX, 2) +
                    Math.pow(item.SOW, 2) +
                    Math.pow(item.STR, 2) +
                    Math.pow(item.NEU, 2)
                  );

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
          // Checking Category
          //this.checkCategory(tmp[i].id);

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
        if (version == "Eng") {
          this.setState({ emotionEng: tmp });
        } else {
          this.setState({ emotionKor: tmp });
        }
        this.setState({ wordSpace: tmpList });

        /*
        for (var i = 0; i < 12; i++) {
          tmpList[i][0] = tmpList[i][0].replace(/\'/gi, "\'\'");
        }
        */

        this.state.totalList.push(tmpList);
        this.resetSelected('word');
      } else {
        // Making 6 size word list
        for (var i = 0; i < 6; i++) {
          // Checking Category
          //this.checkCategory(tmp[i].id);

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
        if (version == "Eng") {
          this.setState({ stateEng: tmp });
        } else {
          this.setState({ stateKor: tmp });
        }
        this.setState({ stateSpace: tmpList });

        let fixList = tmpList;

        /*
        console.log("change")
        for (var i = 0; i < 6; i++) {
          console.log(fixList[i]);
          console.log(fixList[i][0]);
          console.log(fixList[i][0].replace(/\'/gi, "\'\'"));
          fixList[i][0] = fixList[i][0].replace(/\'/gi, "\'\'");
        }
        */

        this.state.totalList.push(fixList);
        this.resetSelected('state');
      }
    }

    for (var i = 0; i < this.state.userAnswer.length; i++) {
      //console.log("i : " + i + " category : " + this.state.userAnswer[i].category + " flag : " + this.state.userAnswer[i].flag);
    }
  }

  checkCategory(id) {
    let answer = this.state.userAnswer;
    var count = this.state.necessaryCount;

    console.log(id);
    for (var i = 0; i < this.state.categoryList.length; i++) {
      var baseNum = 0;
      switch (i) {
        case 0:
          baseNum = 0;
          break;
        case 1:
          baseNum = 8;
          break;
        case 2:
          baseNum = 15;
          break;
        case 3:
          baseNum = 25;
          break;
        case 4:
          baseNum = 35;
          break;
        case 5:
          baseNum = 56;
          break;
        case 6:
          baseNum = 68;
          break;
        case 7:
          baseNum = 80;
          break;
      }

      for (var j = 0; j < this.state.categoryList[i].length; j++) {
        if (id == this.state.categoryList[i][j].id) {
          if (answer[baseNum + this.state.categoryList[i][j].sequence].flag == 0) {
            answer[baseNum + this.state.categoryList[i][j].sequence].flag = 1;
            count++;
            console.log("i : " + i + " j : " + j);
          }
        }
      }
    }

    this.setState({ userAnswer: answer, necessaryCount: count });
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

  toggleSelected(flag, i, long) {
    if (flag == 'word') {
      var toggle = this.state.wordSelected;
      var count = this.state.wordNext;
      if (long) {
        if (toggle[i] > 0) {
          count--;
        }
        toggle[i] = -1;
      } else {
        if (toggle[i] == 0) {
          toggle[i] = 1;
          count++;
        } else if (toggle[i] == 1) {
          toggle[i] = 2;
        } else {
          toggle[i] = 0;
          count--;
        }
      }

      this.setState({ wordSelected: toggle, wordNext: count })

    } else if (flag == 'state') {
      var toggle = this.state.stateSelected;
      var count = this.state.stateNext;
      if (long) {
        if (toggle[i] > 0) {
          count--;
        }
        toggle[i] = -1;
      } else {
        if (toggle[i] == 0) {
          toggle[i] = 1;
          count++;
        } else if (toggle[i] == 1) {
          toggle[i] = 2;
        } else {
          toggle[i] = 0;
          count--;
        }
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

  changeList(type) {
    var reload = this.state.reload;
    let tmp = [];
    if (type == 'emotion') {
      var emotion;
      if (this.state.version == "Eng") {
        emotion = this.state.emotionEng;
      } else {
        emotion = this.state.emotionKor;
      }
      for (var i = 0; i < 12; i++) {
        var set = [];
        set.push(emotion[reload * 12 + i].word);
        set.push(emotion[reload * 12 + i].result);
        set.push(emotion[reload * 12 + i].id);

        emotion[reload * 12 + i].frequency++;

        tmp.push(set);
      }

      this.resetSelected('word');
      this.setState({ wordSpace: tmp });
      if (this.state.version == "Eng") {
        this.setState({ emotionEng: emotion });
      } else {
        this.setState({ emotionKor: emotion });
      }
    } else if (type == 'state') {
      var state;
      if (this.state.version == "Eng") {
        state = this.state.stateEng;
      } else {
        state = this.state.stateKor;
      }
      for (var i = 0; i < 6; i++) {
        var set = [];
        set.push(state[reload * 12 + i].word);
        set.push(state[reload * 12 + i].result);
        set.push(state[reload * 12 + i].id);

        state[reload * 6 + i].frequency++;

        tmp.push(set);
      }

      this.resetSelected('state');
      this.setState({ stateSpace: tmp });
      if (this.state.version == "Eng") {
        this.setState({ stateEng: state });
      } else {
        this.setState({ stateKor: state });
      }
    }
  }

  createProgressBar(l, i) {
    if (i == 0 || i == 9 || i == 10) {
      if (l == 0) {
        return (
          <View
            style={styles.progress}
            key={i}
          />
        )
      } else {
        return (
          <View
            style={styles.progressFill}
            key={i}
          />
        )
      }
    } else if (i == 1 || i == 5) {
      if (l == 0) {
        return (
          <View
            style={styles.progressLeft}
            key={i}
          />
        )
      } else {
        return (
          <View
            style={styles.progressLeftFill}
            key={i}
          />
        )
      }
    } else if (i == 4 || i == 8) {
      if (l == 0) {
        return (
          <View
            style={styles.progressRight}
            key={i}
          />
        )
      } else {
        return (
          <View
            style={styles.progressRightFill}
            key={i}
          />
        )
      }
    } else {
      if (l == 0) {
        return (
          <View
            style={styles.progressMiddle}
            key={i}
          />
        )
      } else {
        return (
          <View
            style={styles.progressMiddleFill}
            key={i}
          />
        )
      }
    }
  }

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

  createWordButton(i) {
    if (i == 4 || i == 5) {
      return (
        <Animated.View style={{ opacity: this.state.fade[1], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('word', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('word', i, true)
            }}
          >
            {this.state.wordSelected[i] == -1 &&
              <View style={styles.wordOutLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 0 &&
              <View style={styles.wordOut}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 1 &&
              <View style={styles.wordOutSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 2 &&
              <View style={styles.wordOutDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    } else if (i == 6 || i == 11) {
      return (
        <Animated.View style={{ opacity: this.state.fade[2], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('word', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('word', i, true)
            }}
          >
            {this.state.wordSelected[i] == -1 &&
              <View style={styles.wordOutLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 0 &&
              <View style={styles.wordOut}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 1 &&
              <View style={styles.wordOutSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 2 &&
              <View style={styles.wordOutDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    } else if (i == 0 || i == 3) {
      return (
        <Animated.View style={{ opacity: this.state.fade[2], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('word', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('word', i, true)
            }}
          >
            {this.state.wordSelected[i] == -1 &&
              <View style={styles.wordCenterLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 0 &&
              <View style={styles.wordCenter}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 1 &&
              <View style={styles.wordCenterSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 2 &&
              <View style={styles.wordCenterDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    } else if (i == 7 || i == 10) {
      return (
        <Animated.View style={{ opacity: this.state.fade[3], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('word', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('word', i, true)
            }}
          >
            {this.state.wordSelected[i] == -1 &&
              <View style={styles.wordOutLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 0 &&
              <View style={styles.wordOut}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 1 &&
              <View style={styles.wordOutSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 2 &&
              <View style={styles.wordOutDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    } else if (i == 1 || i == 2) {
      return (
        <Animated.View style={{ opacity: this.state.fade[3], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('word', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('word', i, true)
            }}
          >
            {this.state.wordSelected[i] == -1 &&
              <View style={styles.wordCenterLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 0 &&
              <View style={styles.wordCenter}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 1 &&
              <View style={styles.wordCenterSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 2 &&
              <View style={styles.wordCenterDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    } else if (i == 8 || i == 9) {
      return (
        <Animated.View style={{ opacity: this.state.fade[4], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('word', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('word', i, true)
            }}
          >
            {this.state.wordSelected[i] == -1 &&
              <View style={styles.wordOutLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 0 &&
              <View style={styles.wordOut}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 1 &&
              <View style={styles.wordOutSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.wordSelected[i] == 2 &&
              <View style={styles.wordOutDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.wordSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    }
  }

  createStateButton(i) {
    if (i == 4) {
      return (
        <Animated.View style={{ opacity: this.state.fade[1], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('state', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('state', i, true)
            }}
          >
            {this.state.stateSelected[i] == -1 &&
              <View style={styles.stateLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 0 &&
              <View style={styles.state}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 1 &&
              <View style={styles.stateSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 2 &&
              <View style={styles.stateDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    } else if (i == 5 || i == 0) {
      return (
        <Animated.View style={{ opacity: this.state.fade[2], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('state', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('state', i, true)
            }}
          >
            {this.state.stateSelected[i] == -1 &&
              <View style={styles.stateLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 0 &&
              <View style={styles.state}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 1 &&
              <View style={styles.stateSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 2 &&
              <View style={styles.stateDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    } else if (i == 1 || i == 3) {
      return (
        <Animated.View style={{ opacity: this.state.fade[3], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('state', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('state', i, true)
            }}
          >
            {this.state.stateSelected[i] == -1 &&
              <View style={styles.stateLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 0 &&
              <View style={styles.state}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 1 &&
              <View style={styles.stateSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 2 &&
              <View style={styles.stateDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    } else if (i == 2) {
      return (
        <Animated.View style={{ opacity: this.state.fade[4], flex: 2 }}>
          <TouchableOpacity
            style={styles.wordSpace}
            onPress={() => {
              this.toggleSelected('state', i, false)
            }}
            onLongPress={() => {
              this.toggleSelected('state', i, true)
            }}
          >
            {this.state.stateSelected[i] == -1 &&
              <View style={styles.stateLong}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 0 &&
              <View style={styles.state}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 1 &&
              <View style={styles.stateSingle}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
            {this.state.stateSelected[i] == 2 &&
              <View style={styles.stateDouble}>
                <View style={styles.wordBlank} />
                <Text style={global.language == "Kor" ? styles.wordTextSelectedKor : styles.wordTextSelectedEng}>{this.state.stateSpace[i][0]}</Text>
                <View style={styles.wordBlank} />
              </View>
            }
          </TouchableOpacity>
        </Animated.View>
      )
    }
  }

  createExerciseList() {
    var select = this.state.activitySelected;
    var activity = [];
    var content = [];

    if (this.state.activityNext == 0) {
      content.push('');
      activity.push('Other');
    } else {
      for (var i = 0; i < 8; i++) {
        if (select[i] == 1) {
          content.push('');
          switch (i) {
            case 0:
              activity.push('relationship');
              break;
            case 1:
              activity.push('sleep');
              break;
            case 2:
              activity.push('hobby');
              break;
            case 3:
              activity.push('work');
              break;
            case 4:
              activity.push('finances');
              break;
            case 5:
              activity.push('family');
              break;
            case 6:
              activity.push('exercise');
              break;
            case 7:
              activity.push('health');
              break;
          }
        }
      }
    }

    this.setState({ activity: activity, content: content })
  }

  createExerciseDetail() {
    if (this.state.activityNext == 0) {
      return (
        <ScrollView
          style={styles.exerciseScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.exerciseEmptyBox}>
            <TextInput
              style={styles.exerciseEmptyInput}
              onChangeText={(text) => {
                var content = this.state.content;
                content[0] = text;
                this.setState({ content: content })
              }}
              placeholder={'Start Writing'}
              multiline={true}
            />
          </View>
        </ScrollView>
      )
    } else {
      return (
        <ScrollView
          style={styles.exerciseScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.activity.map((l, i) => (
            this.createDetailInput(l, i)
          ))}
        </ScrollView>
      )
    }
  }

  createDetailInput(l, i) {
    return (
      <View style={styles.exerciseBox}>
        {this.getActivity(l)}
        <TextInput
          style={styles.exerciseInput}
          onChangeText={(text) => {
            var content = this.state.content;
            content[i] = text;
            this.setState({ content: content })
          }}
          placeholder={'Start Writing'}
          multiline={true}
        />
      </View>
    )
  }

  getActivity(l) {
    if (global.language == "Kor") {
      switch (l) {
        case 'relationship':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Kor/relationship.png')}
            />
          )
        case 'sleep':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Kor/sleep.png')}
            />
          )
        case 'hobby':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Kor/hobby.png')}
            />
          )
        case 'work':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Kor/work.png')}
            />
          )
        case 'finances':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Kor/finances.png')}
            />
          )
        case 'family':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Kor/family.png')}
            />
          )
        case 'exercise':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Kor/exercise.png')}
            />
          )
        case 'health':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Kor/health.png')}
            />
          )
      }
    } else {
      switch (l) {
        case 'relationship':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Eng/relationship.png')}
            />
          )
        case 'sleep':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Eng/sleep.png')}
            />
          )
        case 'hobby':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Eng/hobby.png')}
            />
          )
        case 'work':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Eng/work.png')}
            />
          )
        case 'finances':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Eng/finances.png')}
            />
          )
        case 'family':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Eng/family.png')}
            />
          )
        case 'exercise':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Eng/exercise.png')}
            />
          )
        case 'health':
          return (
            <ImageBackground
              style={styles.exerciseImage}
              source={require('../../assets/activities/Eng/health.png')}
            />
          )
      }
    }

  }

  createButtons(type) {
    if (type == 'initial') {
      return (
        <View style={styles.wordBody}>
          <View style={styles.wordCol}>
            <View style={styles.wordBlank} />
            <Animated.View style={{ opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 0, false)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <View style={styles.wordCenter}>
                    <View style={styles.wordBlank} />
                    <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[0]}</Text>
                    <View style={styles.wordBlank} />
                  </View>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <View style={this.state.wordSelected[0] == 0 ? styles.wordCenter : styles.wordCenterSingle}>
                    <View style={styles.wordBlank} />
                    {global.language == "Kor" ?
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextKor : styles.wordTextSelectedKor}>{this.state.wordSpace[0]}</Text>
                      :
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextEng : styles.wordTextSelectedEng}>{this.state.wordSpace[0]}</Text>
                    }
                    <View style={styles.wordBlank} />
                  </View>
                </View>
              }
            </Animated.View>
            <View style={styles.wordBlank} />
          </View>
          <View style={styles.wordCol}>
            <Animated.View style={{ opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 1, false)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <View style={styles.wordCenter}>
                    <View style={styles.wordBlank} />
                    <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[1]}</Text>
                    <View style={styles.wordBlank} />
                  </View>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <View style={this.state.wordSelected[1] == 0 ? styles.wordCenter : styles.wordCenterSingle}>
                    <View style={styles.wordBlank} />
                    {global.language == "Kor" ?
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextKor : styles.wordTextSelectedKor}>{this.state.wordSpace[1]}</Text>
                      :
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextEng : styles.wordTextSelectedEng}>{this.state.wordSpace[1]}</Text>
                    }
                    <View style={styles.wordBlank} />
                  </View>
                </View>
              }
            </Animated.View>
            <View style={styles.wordBlank} />
            <Animated.View style={{ opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 2, false)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <View style={styles.wordCenter}>
                    <View style={styles.wordBlank} />
                    <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[2]}</Text>
                    <View style={styles.wordBlank} />
                  </View>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <View style={this.state.wordSelected[2] == 0 ? styles.wordCenter : styles.wordCenterSingle}>
                    <View style={styles.wordBlank} />
                    {global.language == "Kor" ?
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextKor : styles.wordTextSelectedKor}>{this.state.wordSpace[2]}</Text>
                      :
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextEng : styles.wordTextSelectedEng}>{this.state.wordSpace[2]}</Text>
                    }
                    <View style={styles.wordBlank} />
                  </View>
                </View>
              }
            </Animated.View>
          </View>
          <View style={{ marginTop: 20 }} />
          <View style={styles.wordCol}>
            <View style={styles.wordBigBlank} />
            <Animated.View style={{ opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 3, false)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <View style={styles.wordCenter}>
                    <View style={styles.wordBlank} />
                    <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[3]}</Text>
                    <View style={styles.wordBlank} />
                  </View>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <View style={this.state.wordSelected[3] == 0 ? styles.wordCenter : styles.wordCenterSingle}>
                    <View style={styles.wordBlank} />
                    {global.language == "Kor" ?
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextKor : styles.wordTextSelectedKor}>{this.state.wordSpace[3]}</Text>
                      :
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextEng : styles.wordTextSelectedEng}>{this.state.wordSpace[3]}</Text>
                    }
                    <View style={styles.wordBlank} />
                  </View>
                </View>
              }
            </Animated.View>
            <View style={styles.wordBigBlank} />
            <Animated.View style={{ opacity: this.state.fade[0], flex: 2 }}>
              {this.state.wordNext == 0 ?
                <TouchableOpacity
                  style={styles.wordSpace}
                  onPress={() => {
                    this.toggleSelected('word', 4, false)
                    this.fadeOut();
                    setTimeout(function () {
                      this.createList()
                      this.fadeIn();
                    }.bind(this), 800);
                  }}
                >
                  <View style={styles.wordCenter}>
                    <View style={styles.wordBlank} />
                    <Text style={global.language == "Kor" ? styles.wordTextKor : styles.wordTextEng}>{this.state.wordSpace[4]}</Text>
                    <View style={styles.wordBlank} />
                  </View>
                </TouchableOpacity>
                :
                <View style={styles.wordSpace}>
                  <View style={this.state.wordSelected[4] == 0 ? styles.wordCenter : styles.wordCenterSingle}>
                    <View style={styles.wordBlank} />
                    {global.language == "Kor" ?
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextKor : styles.wordTextSelectedKor}>{this.state.wordSpace[4]}</Text>
                      :
                      <Text style={this.state.wordSelected[0] == 0 ? styles.wordTextEng : styles.wordTextSelectedEng}>{this.state.wordSpace[4]}</Text>
                    }
                    <View style={styles.wordBlank} />
                  </View>
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
            {this.createWordButton(5)}
            {this.createWordButton(6)}
            <View style={styles.wordBlank} />
          </View>
          <View style={styles.wordCol}>
            {this.createWordButton(4)}
            {this.createWordButton(0)}
            {this.createWordButton(7)}
          </View>
          <View style={styles.wordCol}>
            <View style={styles.wordBlank} />
            {this.createWordButton(3)}
            {this.createWordButton(1)}
            <View style={styles.wordBlank} />
          </View>
          <View style={styles.wordCol}>
            {this.createWordButton(11)}
            {this.createWordButton(2)}
            {this.createWordButton(8)}
          </View>
          <View style={styles.wordCol}>
            <View style={styles.wordBlank} />
            {this.createWordButton(10)}
            {this.createWordButton(9)}
            <View style={styles.wordBlank} />
          </View>
        </View>
      )
    } else if (type == 'state') {
      return (
        <View style={styles.wordBody}>
          <View style={styles.wordCol}>
            {this.createStateButton(4)}
            {this.createStateButton(5)}
          </View>
          <View style={styles.wordCol}>
            {this.createStateButton(0)}
            {this.createStateButton(1)}
          </View>
          <View style={styles.wordCol}>
            {this.createStateButton(3)}
            {this.createStateButton(2)}
          </View>
        </View>
      )
    } else if (type == 'exercise' && global.language == "Kor") {
      return (
        <View style={styles.wordBody}>
          <View style={styles.wordCol}>
            <Animated.View style={{ opacity: this.state.fade[1], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 0)
                }}>
                {this.state.activitySelected[0] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/relationship.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/relationshipSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[2], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 1)
                }}>
                {this.state.activitySelected[1] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/sleep.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/sleepSelect.png')}
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
                  this.toggleSelected('activity', 2)
                }}>
                {this.state.activitySelected[2] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/hobby.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/hobbySelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[3], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 3)
                }}>
                {this.state.activitySelected[3] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/work.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/workSelect.png')}
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
                  this.toggleSelected('activity', 4)
                }}>
                {this.state.activitySelected[4] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/finances.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/financesSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[4], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 5)
                }}>
                {this.state.activitySelected[5] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/family.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/familySelect.png')}
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
                  this.toggleSelected('activity', 6)
                }}>
                {this.state.activitySelected[6] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/exercise.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/exerciseSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[5], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 7)
                }}>
                {this.state.activitySelected[7] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/health.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Kor/healthSelect.png')}
                  />
                }
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
                  this.toggleSelected('activity', 0)
                }}>
                {this.state.activitySelected[0] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/relationship.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/relationshipSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[2], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 1)
                }}>
                {this.state.activitySelected[1] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/sleep.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/sleepSelect.png')}
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
                  this.toggleSelected('activity', 2)
                }}>
                {this.state.activitySelected[2] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/hobby.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/hobbySelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[3], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 3)
                }}>
                {this.state.activitySelected[3] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/work.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/workSelect.png')}
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
                  this.toggleSelected('activity', 4)
                }}>
                {this.state.activitySelected[4] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/finances.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/financesSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[4], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 5)
                }}>
                {this.state.activitySelected[5] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/family.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/familySelect.png')}
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
                  this.toggleSelected('activity', 6)
                }}>
                {this.state.activitySelected[6] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/exercise.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/exerciseSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ opacity: this.state.fade[5], flex: 1, margin: 7, }}>
              <TouchableOpacity
                style={styles.wordSpace}
                onPress={() => {
                  this.toggleSelected('activity', 7)
                }}>
                {this.state.activitySelected[7] == 0 ?
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/health.png')}
                  />
                  :
                  <Image
                    style={styles.face}
                    source={require('../../assets/activities/Eng/healthSelect.png')}
                  />
                }
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      )
    }
  }

  render() {

    if (this.state.step == 11) {
      setTimeout(function () {
        this.props.navigation.navigate('Menu', { screen: 'Home' })
      }.bind(this), 1500);
    }

    if (this.state.load) {
      return (
        <View style={styles.container}>
          <LinearGradient
            // Background Linear Gradient
            colors={['rgba(24, 0, 169, 0.05)', 'rgba(111, 230, 255, 0.05)', 'rgba(218, 218, 218, 0.05)',]}
            start={[0.0, 0.0]}
            end={[0.8, 1.0]}
            style={styles.background}
          >
            {this.state.step == 0 && // Emotion Initial Screen
              <View style={{ flex: 1 }}>
                <View style={styles.wordTop}>
                  <View style={styles.progressBar}>
                    {this.state.progress.map((l, i) => (
                      this.createProgressBar(l, i)
                    ))}
                  </View>
                  <View style={styles.topBar}>
                    <Text style={styles.date}>{this.state.today}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('HomeStack')
                      }}
                    >
                      <Image
                        style={{ width: 15, height: 15, }}
                        source={require('../../assets/icon/close_full.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Animated.View style={{ opacity: this.state.fade[0], flex: 9 }}>
                    {this.state.version == 'Eng' ?
                      <Text style={styles.questionEng}>How do you feel today?</Text>
                      :
                      <Text style={styles.questionKor}>????????? ????????? ??????????</Text>
                    }
                  </Animated.View>
                </View>
                {this.createButtons('initial')}
                <View style={styles.wordBottom}>
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
                  <View style={styles.topBar}>
                    <Text style={styles.date}>{this.state.today}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('HomeStack')
                      }}
                    >
                      <Image
                        style={{ width: 15, height: 15, }}
                        source={require('../../assets/icon/close_full.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Animated.View style={{ opacity: this.state.fade[0], flex: 9 }}>
                    {this.state.version == 'Eng' ?
                      <Text style={styles.questionEng}>How do you feel today?</Text>
                      :
                      <Text style={styles.questionKor}>????????? ????????? ??????????</Text>
                    }
                  </Animated.View>
                </View>
                {this.createButtons('emotion')}
                <View style={styles.wordBottom}>
                  {this.state.reloadFlag ? 
                    <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                      <TouchableOpacity
                        onPress={async () => {
                          this.setState({ wordNext: 0, reload: this.state.reload + 1, reloadFlag: false });
                          this.fadeOut();
                          setTimeout(function () {
                            this.changeList('emotion');
                            this.setState({ reloadFlag: true })
                            this.fadeIn();
                          }.bind(this), 800);
                        }}
                      >
                        <Image
                          style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15 }}
                          source={require('../../assets/icon/shuffle.png')}
                        />
                      </TouchableOpacity>
                    </Animated.View>
                  :
                    <View style={styles.wordBlank} />
                  }
                  <View style={styles.wordBlank} />
                  {this.state.wordNext == 0 ?
                    <View style={styles.wordBlank} />
                    :
                    <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                      <TouchableOpacity
                        style={styles.nextButton}
                        onPress={async () => {
                          this.setState({ wordNext: 0, reload: 0, reloadFlag: false });
                          this.fadeOut();
                          setTimeout(function () {
                            this.createList();
                            this.setState({ reloadFlag: true })
                            this.fadeIn();
                          }.bind(this), 800);
                        }}
                      >
                        <Image
                          style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15 }}
                          source={require('../../assets/icon/next.png')}
                        />
                      </TouchableOpacity>
                    </Animated.View>
                  }
                </View>
              </View>
            }
            {(this.state.step >= 5 && this.state.step < 9) && // State Screen
              <View style={{ flex: 1 }}>
                <View style={styles.wordTop}>
                  <View style={styles.progressBar}>
                    {this.state.progress.map((l, i) => (
                      this.createProgressBar(l, i)
                    ))}
                  </View>
                  <View style={styles.topBar}>
                    <Text style={styles.date}>{this.state.today}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('HomeStack')
                      }}
                    >
                      <Image
                        style={{ width: 15, height: 15, }}
                        source={require('../../assets/icon/close_full.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Animated.View style={{ opacity: this.state.fade[0], flex: 9 }}>
                    {this.state.version == 'Eng' ?
                      <Text style={styles.questionEng}>How do you feel today?</Text>
                      :
                      <Text style={styles.questionKor}>????????? ????????? ??????????</Text>
                    }
                  </Animated.View>
                </View>
                {this.createButtons('state')}
                <View style={styles.wordBottom}>
                  {this.state.reloadFlag ? 
                    <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                      <TouchableOpacity
                        style={styles.nextButton}
                        onPress={async () => {
                          this.setState({ stateNext: 0, reload: this.state.reload + 1, reloadFlag: false });
                          this.fadeOut();
                          setTimeout(function () {
                            this.changeList('state');
                            this.setState({ reloadFlag: true })
                            this.fadeIn();
                          }.bind(this), 800);
                        }}
                      >
                        <Image
                          style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15 }}
                          source={require('../../assets/icon/shuffle.png')}
                        />
                      </TouchableOpacity>
                    </Animated.View>
                  :
                    <View style={styles.wordBlank} />
                  }
                  <View style={styles.wordBlank} />
                  {this.state.stateNext == 0 ?
                    <View style={styles.wordBlank} />
                    :
                    <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                      <TouchableOpacity
                        onPress={async () => {
                          this.setState({ stateNext: 0, reload: 0, reloadFlag: false });
                          this.fadeOut();
                          setTimeout(function () {
                            this.createList();
                            this.setState({ reloadFlag: true })
                            this.fadeIn();
                          }.bind(this), 800);
                        }}
                      >
                        <Image
                          style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15 }}
                          source={require('../../assets/icon/next.png')}
                        />
                      </TouchableOpacity>
                    </Animated.View>
                  }
                </View>
              </View>
            }
            {this.state.step == 9 && // Exercise Screen
              <View style={{ flex: 1 }}>
                <View style={styles.wordTop}>
                  <View style={styles.progressBar}>
                    {this.state.progress.map((l, i) => (
                      this.createProgressBar(l, i)
                    ))}
                  </View>
                  <View style={styles.topBar}>
                    <Text style={styles.date}>{this.state.today}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('HomeStack')
                      }}
                    >
                      <Image
                        style={{ width: 15, height: 15, }}
                        source={require('../../assets/icon/close_full.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Animated.View style={{ opacity: this.state.fade[0], flex: 9 }}>
                    {this.state.version == 'Eng' ?
                      <Text style={styles.questionEng}>What made you feel this way?</Text>
                      :
                      <Text style={styles.questionKor}>?????? ????????? ?????? ?????? ?????????????</Text>
                    }
                  </Animated.View>
                </View>
                {this.createButtons('exercise')}
                <View style={styles.wordBottom}>
                  <View style={styles.wordBlank} />
                  <View style={styles.wordBlank} />
                  {this.state.activityFlag ?
                    <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                      <TouchableOpacity
                        onPress={async () => {
                          this.setState({ activityFlag: false })
                          this.createExerciseList();
                          this.fadeOut();
                          setTimeout(function () {
                            this.increaseProgress();
                            this.setState({ step: this.state.step + 1, activityFlag : true });
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
                  :
                    <View style={styles.wordBlank} />
                  }
                </View>
              </View>
            }
            {this.state.step == 10 && // Exercise Detail Screen
              <View style={{ flex: 1 }}>
                <View style={styles.wordTop}>
                  <View style={styles.progressBar}>
                    {this.state.progress.map((l, i) => (
                      this.createProgressBar(l, i)
                    ))}
                  </View>
                  <View style={styles.topBar}>
                    <Text style={styles.date}>{this.state.today}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('HomeStack')
                      }}
                    >
                      <Image
                        style={{ width: 15, height: 15, }}
                        source={require('../../assets/icon/close_full.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Animated.View style={{ opacity: this.state.fade[0], flex: 9 }}>
                    {this.state.version == 'Eng' ?
                      <Text style={styles.questionEng}>What made you feel this way?</Text>
                      :
                      <Text style={styles.questionKor}>?????? ????????? ?????? ?????? ?????????????</Text>
                    }
                  </Animated.View>
                </View>
                <Animated.View style={{ opacity: this.state.fade[0], flex: 3 }}>
                  {this.createExerciseDetail()}
                </Animated.View>
                {this.state.keyboard ?
                  <View />
                  :
                  <View style={styles.wordBottom}>
                    <View style={styles.wordBlank} />
                    <View style={styles.wordBlank} />
                    {this.state.activityFlag ?
                      <Animated.View style={[styles.nextButton, { opacity: this.state.fade[0] }]}>
                        <TouchableOpacity
                          onPress={async () => {
                            this.setState({ activityFlag: false });
                            this.fadeOut();
                            setTimeout(function () {
                              this.increaseProgress();
                              this.setState({ step: this.state.step + 1 });
                              this.sendDataToServer();
                              this.fadeIn();
                            }.bind(this), 800);
                          }}
                        >
                          <Image
                            style={{ width: Dimensions.get('window').width * 0.15, height: Dimensions.get('window').width * 0.15 }}
                            source={require('../../assets/icon/next.png')}
                          />
                        </TouchableOpacity>
                      </Animated.View>
                    :
                      <View style={styles.wordBlank} />
                    }
                  </View>
                }
              </View>
            }
            {this.state.step == 11 && // Done Screen
              <View style={{ flex: 1 }}>
                <View style={styles.wordTop}>
                  <View style={styles.progressBar}>
                    {this.state.progress.map((l, i) => (
                      this.createProgressBar(l, i)
                    ))}
                  </View>
                  <View style={styles.topBar}>
                    <Text style={styles.date}>{this.state.today}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('HomeStack');
                      }}
                    >
                      <Image
                        style={{ width: 15, height: 15, }}
                        source={require('../../assets/icon/complete.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Animated.View style={{ opacity: this.state.fade[0], flex: 9 }}>
                    {this.state.version == 'Eng' ?
                      <Text style={styles.questionEng}>Well done!{'\n'}You have completed today's reflection.</Text>
                      :
                      <Text style={styles.questionKor}>Well done!{'\n'}????????? ????????? ?????????????????????.</Text>
                    }
                  </Animated.View>
                </View>
                <Animated.View style={{ opacity: this.state.fade[0], flex: 3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => this.setState({ step: this.state.step + 1 })}
                  >
                    <Image
                      style={{ width: '70%', height: '70%', resizeMode: 'contain', }}
                      source={require('../../assets/icon/check.png')}
                    />
                  </TouchableOpacity>
                </Animated.View>
                {this.state.keyboard ?
                  <View />
                  :
                  <View style={styles.wordBottom}>
                    <View style={styles.wordBlank} />
                    <View style={styles.wordBlank} />
                  </View>
                }
              </View>
            }
          </LinearGradient>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
        </View>
      );
    }
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
    paddingTop: 20,
  },
  wordCol: {
    flex: 1,
    flexDirection: 'row',
  },
  progressBar: {
    flex: 1,
    height: 10,
    flexDirection: 'row',
    paddingTop: 30,
    paddingHorizontal: Dimensions.get('window').width * 0.02
  },
  progress: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: 2,
  },
  progressFill: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: '#FFF',
    margin: 2,
  },
  progressRight: {
    flex: 1,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: 2,
    marginLeft: 0,
  },
  progressRightFill: {
    flex: 1,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: '#FFF',
    margin: 2,
    marginLeft: 0,
  },
  progressLeft: {
    flex: 1,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: 2,
    marginRight: 0,
  },
  progressLeftFill: {
    flex: 1,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: '#FFF',
    margin: 2,
    marginRight: 0,
  },
  progressMiddle: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: 2,
    marginHorizontal: 0,
  },
  progressMiddleFill: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 2,
    marginHorizontal: 0,
  },
  topBar: {
    flex: 5,
    flexDirection: 'row',
    paddingHorizontal: Dimensions.get('window').width * 0.02,
    alignItems: 'center'
  },
  date: {
    width: Dimensions.get('window').width * 0.96 - 35,
    textAlignVertical: 'center',
    color: '#FFF',
    fontSize: 15,
  },
  questionEng: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    textAlignVertical: 'center',
    fontFamily: 'HelveticaM',
  },
  questionKor: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    textAlignVertical: 'center',
    fontFamily: 'NotoM',
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
  face: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    margin: 10,
    borderRadius: 500,
    opacity: 0.99,

    color: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  wordText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
  },
  wordTextSelected: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
  },
  wordTextEng: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
    fontFamily: 'HelveticaR',
    margin: 10,
  },
  wordTextSelectedEng: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'HelveticaR',
    margin: 10,
  },
  wordTextKor: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
    fontFamily: 'NotoR',
    margin: 10,
  },
  wordTextSelectedKor: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'NotoR',
    margin: 10,
  },
  wordCenterLong: {
    width: Dimensions.get('window').width * 0.25 + 10,
    height: Dimensions.get('window').width * 0.25 + 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: (Dimensions.get('window').width * 0.25 + 10) / 2,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 10,
  },
  wordCenter: {
    width: Dimensions.get('window').width * 0.25 + 10,
    height: Dimensions.get('window').width * 0.25 + 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: (Dimensions.get('window').width * 0.25 + 10) / 2,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#000",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  wordCenterSingle: {
    width: Dimensions.get('window').width * 0.25 + 10,
    height: Dimensions.get('window').width * 0.25 + 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: (Dimensions.get('window').width * 0.25 + 10) / 2,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(0,9,31,0.6)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  wordCenterDouble: {
    width: Dimensions.get('window').width * 0.25 + 10,
    height: Dimensions.get('window').width * 0.25 + 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: (Dimensions.get('window').width * 0.25 + 10) / 2,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(0,9,31,0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  wordOutLong: {
    width: Dimensions.get('window').width * 0.25 + 10,
    height: Dimensions.get('window').width * 0.25 + 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: (Dimensions.get('window').width * 0.25 + 10) / 2,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,

    elevation: 1,
  },
  wordOut: {
    width: Dimensions.get('window').width * 0.25 + 10,
    height: Dimensions.get('window').width * 0.25 + 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: (Dimensions.get('window').width * 0.25 + 10) / 2,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#666",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  wordOutSingle: {
    width: Dimensions.get('window').width * 0.25 + 10,
    height: Dimensions.get('window').width * 0.25 + 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: (Dimensions.get('window').width * 0.25 + 10) / 2,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(0, 9, 31, 0.6)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  wordOutDouble: {
    width: Dimensions.get('window').width * 0.25 + 10,
    height: Dimensions.get('window').width * 0.25 + 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: (Dimensions.get('window').width * 0.25 + 10) / 2,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(0, 9, 31, 0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  stateLong: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: Dimensions.get('window').width * 0.16,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  state: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: Dimensions.get('window').width * 0.16,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#000",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  stateSingle: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: Dimensions.get('window').width * 0.16,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(0, 9, 31, 0.6)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  stateDouble: {
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.32,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: Dimensions.get('window').width * 0.16,
    opacity: 0.99,
    overflow: 'hidden',

    color: "#FFF",
    backgroundColor: "rgba(0, 9, 31, 0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 30,

    elevation: 10,
  },
  exerciseScroll: {
  },
  exerciseBox: {
    width: Dimensions.get('window').width * 0.7,
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

    elevation: 5,
  },
  exerciseEmptyBox: {
    width: Dimensions.get('window').width - 40,
    margin: 10,
    padding: 20,
    borderRadius: 30,

    backgroundColor: "#FFF",

  },
  exerciseImage: {
    padding: 10,
    marginTop: Dimensions.get('window').width * 0.04,
    marginLeft: Dimensions.get('window').width * 0.04,
    width: Dimensions.get('window').height * 0.13,
    height: Dimensions.get('window').height * 0.13,
    resizeMode: 'contain',
    position: 'absolute',
  },
  exerciseInput: {
    flex: 1,
    fontSize: 20,
    marginTop: Dimensions.get('window').height * 0.17,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  exerciseEmptyInput: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});