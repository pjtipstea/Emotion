import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      load: false,
      count: 0,      
      step: 0,
      progress: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      user: [],
      name: "",
      gender: "",
      age: "",
      V: 0,
      A: 0,
      D: 0,
      selected: [],
      wordSpace: [
        'Good', 'Neutral', 'Awful', 'Great',
        'Bad', '', '', '',
        '', '', '', '',
        '', '', '', '',
        '', ''
      ],
      stateSpace: [
        '', '',
        '', '',
        '', '',
        '', '',
        '', '',
      ],
      totalList: [],
      emotion: [
        { word: "Great", V: 0.949, A: 0.243, D: 0.423, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "Good", V: 0.438, A: -0.132, D: 0.034, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "Neutral", V: -0.031, A: -0.316, D: -0.143, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "Bad", V: -0.2, A: -0.3, D: -0.14, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "Awful", V: -0.702, A: 0.173, D: -0.558, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "accepted", V: 0.347, A: -0.214, D: 0.065, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "active", V: 0.347, A: 0.23, D: 0.231, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "admiration", V: 0.469, A: 0.083, D: 0.226, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "adoration", V: 0.385, A: 0.199, D: 0.208, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "affection", V: 0.398, A: 0.059, D: 0.196, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "afraid", V: -0.49, A: 0.275, D: -0.255, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "aggressive", V: -0.375, A: 0.449, D: 0.148, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "alarmed", V: -0.259, A: 0.382, D: 0.198, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "aloof", V: -0.311, A: -0.077, D: -0.198, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "amazed", V: 0.296, A: 0.279, D: 0.033, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "amusement", V: 0.429, A: 0.337, D: 0.303, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "angry", V: -0.378, A: 0.33, D: 0.104, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "annoyed", V: -0.396, A: 0.283, D: -0.155, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "in anticipation", V: 0.198, A: 0.039, D: 0.211, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "anxious", V: -0.219, A: 0.375, D: -0.066, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "apathetic", V: -0.312, A: -0.208, D: -0.167, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "appalled", V: -0.306, A: 0.292, D: 0.062, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "aroused", V: 0.208, A: 0.452, D: 0.167, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "ashamed", V: -0.344, A: 0.088, D: -0.272, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "assertive", V: 0.219, A: -0.088, D: 0.27, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "astonished", V: 0.01, A: 0.275, D: 0.074, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "attraction", V: 0.406, A: 0.274, D: 0.212, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "in awe", V: -0.031, A: 0.24, D: -0.2, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "awful", V: -0.439, A: 0.286, D: -0.05, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "awkward", V: -0.204, A: 0.15, D: -0.142, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "bad", V: -0.375, A: 0.125, D: -0.127, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "betrayed", V: -0.378, A: 0.269, D: -0.192, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "bitter", V: -0.282, A: 0.127, D: -0.089, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "blame", V: -0.385, A: 0.14, D: -0.191, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "blue", V: 0.146, A: -0.363, D: -0.209, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "bored", V: -0.347, A: -0.333, D: -0.304, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "boring", V: -0.306, A: -0.283, D: -0.375, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "busy", V: -0.098, A: 0, D: -0.026, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "calm", V: 0.375, A: -0.4, D: -0.218, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "cared for", V: 0.229, A: -0.13, D: 0, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "chaotic", V: -0.385, A: 0.347, D: -0.058, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "cheerful", V: 0.49, A: 0.22, D: 0.196, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "chill", V: 0.337, A: -0.294, D: -0.018, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "clingy", V: -0.276, A: -0.04, D: -0.13, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "collected", V: 0.07, A: -0.098, D: 0.088, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "comfortable", V: 0.427, A: -0.337, D: -0.027, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "companionship", V: 0.333, A: -0.062, D: 0.292, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "compassion", V: 0.235, A: -0.242, D: 0.009, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "concentration", V: 0.235, A: 0, D: 0.222, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "concerned", V: -0.208, A: 0.198, D: -0.15, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "confident", V: 0.265, A: -0.176, D: 0.223, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "confused", V: -0.245, A: 0.167, D: -0.223, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "contempt", V: -0.294, A: 0.135, D: -0.104, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "content", V: 0.264, A: -0.204, D: 0.059, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "in control", V: 0.229, A: -0.148, D: 0.308, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "cool", V: 0.385, A: 0.04, D: 0.281, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "courageous", V: 0.418, A: 0.087, D: 0.379, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "craving", V: 0.01, A: 0.255, D: 0.136, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "creative", V: 0.417, A: 0.018, D: 0.288, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "critical", V: -0.188, A: 0.302, D: 0.045, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "crying", V: -0.367, A: 0.127, D: -0.245, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "curious", V: 0.135, A: 0.1, D: -0.017, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "death", V: -0.469, A: 0.22, D: -0.028, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "depressed", V: -0.476, A: -0.055, D: -0.364, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "desirable", V: 0.24, A: 0.235, D: 0.25, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "despair", V: -0.385, A: 0.294, D: -0.255, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "desperate", V: -0.417, A: 0.342, D: -0.163, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "detest", V: -0.417, A: 0.3, D: -0.008, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "devastated", V: -0.41, A: 0.404, D: -0.028, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "disappointed", V: -0.429, A: -0.028, D: -0.259, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "disapproving", V: -0.255, A: 0.125, D: -0.048, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "discouraged", V: -0.28, A: -0.196, D: -0.41, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "disgust", V: -0.448, A: 0.275, D: -0.183, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "disgusted", V: -0.449, A: 0.273, D: -0.226, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "dismayed", V: -0.335, A: 0.235, D: -0.111, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "dismissive", V: -0.312, A: 0.041, D: -0.07, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "disrespect", V: -0.438, A: 0.137, D: -0.198, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "dissatisfied", V: -0.458, A: 0.061, D: -0.209, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "distant", V: -0.271, A: -0.176, D: -0.231, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "distracted", V: -0.306, A: -0.108, D: -0.287, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "disturbed", V: -0.375, A: 0.37, D: -0.195, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "down", V: -0.292, A: -0.17, D: -0.236, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "downhearted", V: -0.381, A: -0.039, D: -0.245, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "dread", V: -0.347, A: 0.292, D: -0.132, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "eager", V: 0.021, A: 0.312, D: -0.194, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "easygoing", V: 0.323, A: -0.224, D: 0.038, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "embarrassed", V: -0.316, A: 0.06, D: -0.254, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "empty", V: -0.312, A: -0.317, D: -0.419, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "energetic", V: 0.347, A: 0.368, D: 0.402, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "enjoy", V: 0.459, A: 0.225, D: 0.25, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "enthusiasm", V: 0.438, A: 0.316, D: 0.298, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "envy", V: -0.26, A: 0.204, D: -0.073, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "excellent", V: 0.47, A: 0.087, D: 0.37, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "excitement", V: 0.396, A: 0.184, D: 0.231, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "excluded", V: -0.439, A: 0.04, D: -0.366, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "exposed", V: -0.029, A: 0.161, D: 0.009, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "failure", V: -0.333, A: 0.075, D: -0.361, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "fair", V: 0.312, A: 0.057, D: 0.143, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "family", V: 0.468, A: -0.117, D: 0.143, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "fearful", V: -0.417, A: -0.018, D: -0.222, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "fidgety", V: -0.271, A: 0.286, D: -0.149, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "fragile", V: -0.198, A: -0.337, D: -0.374, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "free", V: 0.396, A: 0, D: 0.044, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "friend", V: 0.406, A: -0.087, D: 0.073, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "friendly", V: 0.417, A: -0.102, D: 0.098, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "frightened", V: -0.347, A: 0.317, D: -0.245, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "frustration", V: -0.44, A: 0.23, D: -0.22, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "furious", V: -0.438, A: 0.453, D: 0.098, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "gloomy", V: -0.393, A: -0.09, D: -0.213, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "good", V: 0.438, A: -0.132, D: 0.034, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "grateful", V: 0.458, A: -0.147, D: 0.06, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "gratitude", V: 0.385, A: -0.059, D: 0.11, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "great", V: 0.458, A: 0.165, D: 0.31, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "grief", V: -0.43, A: 0.14, D: -0.026, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "guilt", V: -0.292, A: 0.067, D: -0.294, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "happy", V: 0.5, A: 0.235, D: 0.272, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "harsh", V: -0.25, A: 0.15, D: 0.123, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "hate", V: -0.469, A: 0.302, D: -0.07, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "helpful", V: 0.316, A: -0.163, D: 0.205, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "helpless", V: -0.396, A: -0.08, D: -0.286, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "hesitant", V: -0.167, A: 0.042, D: -0.179, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "hope", V: 0.427, A: -0.183, D: 0.239, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "hopeful", V: 0.447, A: -0.143, D: 0.127, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "hopeless", V: -0.406, A: -0.202, D: -0.388, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "horrified", V: -0.46, A: 0.385, D: -0.132, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "horror", V: -0.385, A: 0.35, D: -0.062, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "hostile", V: -0.312, A: 0.377, D: -0.026, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "humiliation", V: -0.452, A: 0.212, D: -0.19, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "hurt", V: -0.438, A: 0.273, D: -0.209, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "inadequate", V: -0.378, A: -0.05, D: -0.277, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "indecisive", V: -0.229, A: -0.08, D: -0.31, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "indifferent", V: -0.104, A: -0.343, D: -0.25, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "indignant", V: -0.24, A: 0.1, D: -0.077, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "inferior", V: -0.24, A: -0.246, D: -0.394, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "infuriated", V: -0.427, A: 0.43, D: 0.01, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "inquisitive", V: -0.199, A: 0.137, D: 0.115, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "insecure", V: -0.386, A: 0.038, D: -0.368, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "insignificant", V: -0.417, A: -0.194, D: -0.386, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "inspired", V: 0.467, A: 0.202, D: 0.236, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "interested", V: 0.25, A: 0.029, D: 0.225, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "interesting", V: 0.427, A: 0.226, D: 0.231, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "intimate", V: 0.224, A: 0.098, D: -0.107, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "irritable", V: -0.388, A: 0.452, D: -0.038, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "irritated", V: -0.29, A: 0.316, D: -0.219, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "irritation", V: -0.427, A: 0.333, D: -0.004, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "isolated", V: -0.279, A: -0.144, D: -0.245, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "jealous", V: -0.327, A: 0.355, D: -0.155, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "jittery", V: -0.156, A: 0.356, D: -0.245, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "joyful", V: 0.49, A: 0.24, D: 0.167, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "lazy", V: -0.108, A: -0.236, D: -0.404, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "liking", V: 0.463, A: 0.104, D: 0.089, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "lonely", V: -0.25, A: -0.274, D: -0.262, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "longing", V: 0.104, A: -0.066, D: 0.06, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "love", V: 0.5, A: 0.019, D: 0.173, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "loved", V: 0.427, A: -0.048, D: 0.082, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "loving", V: 0.448, A: 0.112, D: 0.136, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "mad", V: -0.281, A: 0.373, D: -0.223, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "meaning", V: 0.163, A: -0.105, D: 0.125, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "meaningful", V: 0.27, A: 0, D: 0.302, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "misery", V: -0.354, A: -0.122, D: -0.342, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "moody", V: -0.255, A: 0.311, D: 0.095, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "motivation", V: 0.354, A: 0.284, D: 0.302, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "mournful", V: -0.32, A: -0.059, D: -0.312, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "nasty", V: -0.385, A: 0.12, D: -0.236, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "nausea", V: -0.396, A: 0.281, D: -0.227, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "need", V: 0.01, A: 0.074, D: -0.3, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "needed", V: 0.177, A: -0.158, D: 0.179, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "negative", V: -0.398, A: 0.027, D: -0.324, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "nervous", V: -0.265, A: 0.32, D: -0.287, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "neutral", V: -0.031, A: -0.316, D: -0.143, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "nostalgic", V: -0.042, A: -0.149, D: -0.316, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "numb", V: -0.392, A: -0.08, D: -0.148, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "optimism", V: 0.449, A: 0.065, D: 0.314, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "optimistic", V: 0.479, A: 0.08, D: 0.321, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "outgoing", V: 0.15, A: -0.028, D: 0.038, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "overwhelmed", V: -0.159, A: 0.18, D: -0.152, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "pain", V: -0.488, A: 0.265, D: -0.105, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "painful", V: -0.45, A: 0.242, D: -0.17, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "panic", V: -0.438, A: 0.438, D: -0.1, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "panicky", V: -0.216, A: 0.462, D: -0.107, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "peace", V: 0.439, A: -0.344, D: 0.113, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "peaceful", V: 0.367, A: -0.392, D: 0.069, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "perplexed", V: -0.188, A: 0.205, D: -0.182, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "persecute", V: -0.219, A: 0.373, D: 0.009, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "pessimistic", V: -0.412, A: -0.106, D: -0.264, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "playful", V: 0.392, A: 0.188, D: -0.037, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "pleasant", V: 0.439, A: -0.19, D: 0.173, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "pleasure", V: 0.439, A: 0.24, D: 0.182, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "positive", V: 0.459, A: 0.01, D: 0.355, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "powerful", V: 0.365, A: 0.33, D: 0.491, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "powerless", V: -0.375, A: 0, D: -0.172, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "pride", V: 0.229, A: 0.134, D: 0.348, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "proud", V: 0.406, A: 0.2, D: 0.373, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "provoked", V: -0.229, A: 0.176, D: 0.028, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "punished", V: -0.323, A: 0.235, D: -0.019, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "quiet", V: 0.292, A: -0.395, D: -0.069, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "rage", V: -0.418, A: 0.388, D: 0.158, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "rejected", V: -0.398, A: -0.02, D: -0.25, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "relaxed", V: 0.365, A: -0.41, D: -0.118, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "reliable", V: 0.412, A: -0.259, D: 0.375, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "relief", V: 0.344, A: -0.222, D: -0.019, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "resentful", V: -0.38, A: 0.108, D: -0.176, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "reserved", V: 0.094, A: -0.184, D: 0.083, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "respected", V: 0.408, A: -0.059, D: 0.353, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "rested", V: 0.292, A: -0.265, D: -0.038, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "restless", V: -0.281, A: 0.31, D: -0.196, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "revulsion", V: -0.396, A: 0.265, D: -0.157, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "ridiculed", V: -0.388, A: 0.306, D: -0.288, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "romantic", V: 0.436, A: 0.031, D: 0.098, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "rude", V: -0.439, A: 0.321, D: -0.098, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "sad", V: -0.275, A: -0.167, D: -0.351, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "safe", V: 0.398, A: -0.194, D: 0.259, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "satisfied", V: 0.459, A: 0.01, D: 0.185, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "scared", V: -0.354, A: 0.328, D: -0.315, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "secure", V: 0.344, A: -0.12, D: 0.414, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "security", V: 0.337, A: -0.14, D: 0.321, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "selfish", V: -0.439, A: 0.137, D: -0.005, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "sensitive", V: 0.214, A: -0.074, D: -0.246, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "shaking", V: -0.225, A: 0.349, D: -0.245, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "shamed", V: -0.365, A: 0.067, D: -0.282, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "shameful", V: -0.46, A: 0.18, D: -0.236, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "shock", V: -0.214, A: 0.321, D: -0.047, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "shy", V: -0.22, A: -0.347, D: -0.368, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "sick", V: -0.396, A: -0.069, D: -0.364, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "skeptical", V: -0.293, A: 0, D: -0.048, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "sleepy", V: 0.104, A: -0.375, D: -0.25, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "slow", V: -0.143, A: -0.427, D: -0.369, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "sociable", V: 0.354, A: -0.041, D: 0.127, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "startled", V: -0.167, A: 0.365, D: 0.026, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "steady", V: 0.18, A: -0.314, D: 0.263, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "strained", V: -0.378, A: 0.156, D: 0.08, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "stressed", V: -0.333, A: 0.24, D: 0.002, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "successful", V: 0.449, A: 0.224, D: 0.438, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "supported", V: 0.353, A: -0.092, D: 0.113, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "supportive", V: 0.375, A: -0.08, D: 0.135, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "surprised", V: 0.375, A: 0.375, D: 0.062, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "talented", V: 0.439, A: 0.135, D: 0.438, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "talkative", V: 0.062, A: 0.173, D: 0.035, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "tense", V: -0.104, A: -0.061, D: 0.155, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "tension", V: -0.196, A: 0.31, D: 0.029, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "terrorified", V: -0.431, A: 0.402, D: -0.085, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "thankful", V: 0.469, A: -0.156, D: 0.214, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "thorough", V: -0.033, A: -0.15, D: 0.058, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "threatened", V: -0.365, A: 0.365, D: 0.167, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "tired", V: -0.375, A: -0.183, D: -0.309, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "trembling", V: -0.323, A: 0.324, D: -0.176, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "trusting", V: 0.357, A: 0.008, D: 0.25, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "trustworthy", V: 0.469, A: -0.185, D: 0.324, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "truthful", V: 0.208, A: -0.033, D: 0.307, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "turmoil", V: -0.302, A: 0.388, D: -0.083, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "uncomfortable", V: -0.312, A: 0.11, D: -0.286, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "understood", V: 0.28, A: -0.059, D: 0.186, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "uneasy", V: -0.385, A: 0.098, D: -0.151, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "unforgiving", V: -0.094, A: 0.13, D: 0.293, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "unselfish", V: 0.115, A: -0.147, D: -0.123, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "upset", V: -0.429, A: 0.18, D: -0.17, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "useful", V: 0.333, A: -0.089, D: 0.226, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "useless", V: -0.448, A: -0.158, D: -0.316, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "valuable", V: 0.399, A: 0.047, D: 0.298, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "victimized", V: -0.385, A: 0.176, D: -0.298, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "violated", V: -0.439, A: 0.47, D: 0.019, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "vulnerable", V: -0.302, A: -0.01, D: -0.255, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "want", V: 0.171, A: 0.142, D: 0.098, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "in wanting", V: 0.26, A: -0.067, D: 0.093, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "weak", V: -0.32, A: -0.259, D: -0.455, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "withdrawn", V: -0.318, A: -0.132, D: -0.279, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "worried", V: -0.406, A: 0.324, D: -0.105, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "of worth", V: 0.372, A: 0.01, D: 0.389, frequency: 0, simple: [], average: 0, combine: 0, result: 0 },
        { word: "worthless", V: -0.417, A: -0.08, D: -0.347, frequency: 0, simple: [], average: 0, combine: 0, result: 0 }
      ],
      initialState: [
        { word: "I have little interest or pleasure in doing things", V: 0.311, A: 0.731, D: 0.593, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel down, depressed or hopeless", V: -1.174, A: -0.427, D: -0.988, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have trouble falling or staying asleep, sleeping too much", V: -0.271, A: -0.558, D: -0.559, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel tired or have little energy", V: -0.222, A: -0.051, D: -0.211, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have poor appetite or am overeating", V: -0.771, A: -0.252, D: -0.673, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I'm feeling bad about myself, feeling like a failure, letting others down", V: -1, A: 0.03, D: -0.724, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have trouble concentrating", V: -0.041, A: 0.392, D: -0.009, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel slow or fidgety", V: -0.414, A: -0.141, D: -0.518, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel nervous, anxious or on edge", V: -0.484, A: 0.695, D: -0.353, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I'm not being able to stop or control worrying", V: -0.406, A: 0.324, D: -0.105, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I'm worrying too much about different things", V: -0.406, A: 0.324, D: -0.105, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have trouble relaxing", V: 0.404, A: 2.519, D: 1.543, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I am being restless that it is hard to sit still", V: -0.552, A: 0.596, D: -0.345, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I become easily annoyed or irritable", V: -0.686, A: 0.599, D: -0.374, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel afraid as if something awful might happen", V: -1.652, A: 0.899, D: -0.877, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "My relationships with others meet my expectations.", V: 1.097, A: 0.56, D: 0.827, question: "LSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have enough people who I can ask for help when needed.", V: 1.45, A: 0.468, D: 0.94, question: "LSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I am happy with current relationships with my friends and others around me", V: 1.45, A: 0.468, D: 0.94, question: "LSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 }
      ],
      state: [
        { word: "I have little interest or pleasure in doing things", V: 0.311, A: 0.731, D: 0.593, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel down, depressed or hopeless", V: -1.174, A: -0.427, D: -0.988, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have trouble falling or staying asleep, sleeping too much", V: -0.271, A: -0.558, D: -0.559, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel tired or have little energy", V: -0.222, A: -0.051, D: -0.211, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have poor appetite or am overeating", V: -0.771, A: -0.252, D: -0.673, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I'm feeling bad about myself, feeling like a failure, letting others down", V: -1, A: 0.03, D: -0.724, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have trouble concentrating", V: -0.041, A: 0.392, D: -0.009, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel slow or fidgety", V: -0.414, A: -0.141, D: -0.518, question: "PHQ", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel nervous, anxious or on edge", V: -0.484, A: 0.695, D: -0.353, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I'm not being able to stop or control worrying", V: -0.406, A: 0.324, D: -0.105, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I'm worrying too much about different things", V: -0.406, A: 0.324, D: -0.105, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have trouble relaxing", V: 0.404, A: 2.519, D: 1.543, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I am being restless that it is hard to sit still", V: -0.552, A: 0.596, D: -0.345, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I become easily annoyed or irritable", V: -0.686, A: 0.599, D: -0.374, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I feel afraid as if something awful might happen", V: -1.652, A: 0.899, D: -0.877, question: "GAD", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "My relationships with others meet my expectations.", V: 1.097, A: 0.56, D: 0.827, question: "LSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I have enough people who I can ask for help when needed.", V: 1.45, A: 0.468, D: 0.94, question: "LSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I am happy with current relationships with my friends and others around me", V: 1.45, A: 0.468, D: 0.94, question: "LSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 1 },
        { word: "I am satisfied with myself", V: 0.459, A: 0.01, D: 0.185, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I think I am no good at all", V: -0.313, A: 0.757, D: 0.339, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have a number of good qualities", V: 1.303, A: 0.078, D: 0.592, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am able to do things as well as most other people", V: 1.303, A: 0.078, D: 0.592, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel I do not have much to be proud of", V: 0.094, A: 0.3, D: 0.127, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel useless at times", V: -0.448, A: -0.158, D: -0.316, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that I am a person of worth, at least on an equal plane with others", V: 1.316, A: 0.627, D: 1.145, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I wish I could have more respect for myself", V: 0.092, A: 0.559, D: 0.147, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I take a positive attitude towards myself", V: 0.459, A: 0.01, D: 0.355, question: "ROS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Morning is when I feel the best.", V: 0.438, A: -0.132, D: 0.034, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have crying spells or feel like it.", V: -0.642, A: -0.04, D: -0.596, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have trouble sleeping at night.", V: 0.021, A: 0.692, D: 0.441, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I eat as much as I used to.", V: 0.439, A: 0.24, D: 0.182, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I notice that I am losing weight.", V: -0.32, A: -0.259, D: -0.455, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "My heart beats faster than usual.", V: -0.89, A: 1.019, D: -0.458, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I get tired for no reason.", V: -0.265, A: 0.32, D: -0.287, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻My mind is as clear as it used to be.", V: 0.745, A: 0.333, D: 0.723, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I find it easy to do the things I used to.", V: 0.659, A: 0.32, D: 0.652, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I am more irritable than usual.", V: -0.388, A: 0.452, D: -0.038, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I find it easy to make decisions.", V: 0.229, A: -0.148, D: 0.308, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I feel that I am useful and needed.", V: 0.51, A: -0.247, D: 0.405, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I feel that others would be better off if I were dead.", V: -0.469, A: 0.22, D: -0.028, question: "SDS", priority: 1, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Satisfied with myself", V: 0.459, A: 0.01, D: 0.185, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I wish I could be as happy as others seem to be", V: -0.26, A: 0.469, D: 0.155, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am a failure", V: -0.333, A: 0.075, D: -0.361, question: "TAI, BCSS, ROS, BDIneg, PHQ", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that difficulties are piling up so that I cannot overcome them", V: -0.492, A: 0.42, D: -0.15, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I worry too much over something that really doesn't matter", V: -0.406, A: 0.324, D: -0.105, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have disturbing thoughts", V: -0.47, A: 2.424, D: 0.714, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I lack self-confidence", V: 0.235, A: 0.676, D: 0.277, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I make decisions easily", V: 0.729, A: 0.58, D: 0.81, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Some unimportant thought runs through my mind and bothers me", V: 0.781, A: 0.19, D: 0.696, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I take disappointments so keenly that I can't put them out of my mind", V: -0.429, A: -0.028, D: -0.259, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am a steady person", V: 0.18, A: -0.314, D: 0.263, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get in a state of tension or turmoil as I think over my recent concerns and interests", V: -0.706, A: 0.896, D: -0.204, question: "TAI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy my favourite TV or radio programme", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy being with my family or close friends", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I find pleasure in my hobbies and pastimes", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy my favourite meal", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy a warm bath or refreshing shower", V: 1.19, A: 0.2, D: 0.394, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I find pleasure in the scent of flowers or smell of a fresh sea breeze or freshly baked bread", V: 1.712, A: -0.279, D: 0.327, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy seeing other people's smiling faces", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy looking smart when I have made an effort with my appearance", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy reading a book, magazine or newspaper", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy a cupt of tea or coffee or my favourite drink", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I find pleasure in small things", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I enjoy a beautiful landscape or view", V: 0.898, A: 0.465, D: 0.432, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get pleasure from helping others", V: 0.439, A: 0.24, D: 0.182, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel pleasure when I receive praise from other people", V: 0.439, A: 0.24, D: 0.182, question: "SHAPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I do not feel sad.", V: 0.775, A: 0.667, D: 0.851, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am not particularly discouraged about the future.", V: 0.78, A: 0.696, D: 0.91, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel I have failed more than the average person.", V: -0.333, A: 0.075, D: -0.361, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get as much satisfaction out of things as I used to.", V: 0.459, A: 0.01, D: 0.185, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't enjoy things the way I used to.", V: 0.143, A: 1.025, D: 0.883, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel guilt a good part of the time.", V: -0.292, A: 0.067, D: -0.294, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't feel I am being punished.", V: 0.792, A: 0.433, D: 0.794, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't feel disappointed in myself.", V: 0.929, A: 0.528, D: 0.759, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't feel I am any worse than anybody else.", V: 0.438, A: -0.132, D: 0.034, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't have any thoughts of killing myself.", V: 1.233, A: 0.076, D: 0.587, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't cry any more than usual.", V: 1.642, A: 1.04, D: 1.596, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am no more irritated by things than I ever was.", V: 0.79, A: 0.184, D: 0.719, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have not lost interest in other people.", V: 0.25, A: 0.029, D: 0.225, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I make decisions about as well as I ever could.", V: 0.494, A: -0.324, D: 0.531, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I can work about as well as before.", V: 0.354, A: 0.284, D: 0.302, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I can sleep as well as usual.", V: 0.104, A: -0.375, D: -0.25, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't get more tired than usual.", V: 0.875, A: 0.683, D: 0.809, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "My appetite is no worse than usual.", V: 0.896, A: 0.569, D: 0.864, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I haven't lost much weight, if any, lately. ", V: 0.896, A: 0.569, D: 0.864, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't feel that I look any worse than I used to.", V: 0.671, A: 0.098, D: 0.435, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am no more worried about my health than usual.", V: 0.906, A: 0.176, D: 0.605, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have not noticed any recent change in my interest in sex.", V: 0.647, A: 0.692, D: 0.349, question: "BDI", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel upset because of something that happened unexpectedly", V: -0.643, A: 0.501, D: -0.217, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that that I am  unable to control the important things in Ir life", V: -0.771, A: -0.08, D: -0.458, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel nervous and ?쐓tressed??", V: -0.598, A: 0.56, D: -0.285, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel confident about my ability to handle my personal problems", V: 0.494, A: -0.324, D: 0.531, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that things were going my way", V: 0.493, A: -0.352, D: 0.367, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I can not cope with all the things that I have to do", V: -0.159, A: 0.18, D: -0.152, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am able to control irritations in my life", V: 0.493, A: -0.352, D: 0.367, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that I am on top of things", V: 0.888, A: 0.172, D: 0.96, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am angered because of things that are outside of my control", V: -0.503, A: 0.898, D: 0.01, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that difficulties are piling up so high that I could not overcome them", V: 0.404, A: 1, D: 0.636, question: "PSS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I become anxious if I have to write in front of other people.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I become self-conscious when using public toilets.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I can suddenly become aware of my own voice and of others listening to me.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get nervous that people are staring at me as I walk down the street.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I fear I may blush when I am with others.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel self-conscious if I have to enter a room where others are already seated.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I worry about shaking or trembling when I?셫 watched by other people.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I would get tense if I had to sit facing other people on a bus or a train.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get panicky that others might see me faint or be sick or ill.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I would find it difficult to drink something if in a group of people.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "It would make me feel self-conscious to eat in front of a stranger at a restaurant.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am worried people will think my behavior odd.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I would get tense if I had to carry a tray across a crowded cafeteria.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I worry I?셪l lose control of myself in front of other people.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I worry I might do something to attract the attention of other people.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "When in an elevator, I am tense if people look at me.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I can feel conspicuous standing in a line.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I can get tense when I speak in front of other people.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I worry my head will shake or nod in front of others.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel awkward and tense if I know people are watching me.", V: -0.219, A: 0.375, D: -0.066, question: "SPS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am interested in things.", V: -0.062, A: 0.263, D: 0.108, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get things done during the day.", V: 1.166, A: 0.992, D: 0.969, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Getting things started on my own is important to me.", V: 1.166, A: 0.992, D: 0.969, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am interested in having new experiences.", V: 1.062, A: 0.737, D: 0.892, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am interested in learning new things", V: 1.062, A: 0.737, D: 0.892, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I put little effort into anything.", V: -0.166, A: 0.008, D: 0.031, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I approach life with intensity.", V: 1.166, A: 0.992, D: 0.969, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Seeing a job through to the end is important to me.", V: 1.166, A: 0.992, D: 0.969, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I spend time doing things that interest me.", V: 1.416, A: 1.021, D: 1.194, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Someone has to tell me what to do each day.", V: 1.083, A: 1.356, D: 0.859, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am less concerned about my problems than I should be.", V: 1.062, A: 1.179, D: 0.942, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have friends.", V: -0.25, A: -0.274, D: -0.262, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Getting together with friends is important to me.", V: 1.097, A: 0.56, D: 0.827, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "When something good happens, I get excited. ", V: 1.208, A: 0.892, D: 0.898, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have an accurate understanding of my problems.", V: 1.306, A: 0.384, D: 1.198, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Getting things done during the day is important to me.", V: 1.166, A: 0.992, D: 0.969, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have initiative.", V: 1.166, A: 0.992, D: 0.969, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have motivation.", V: 1.166, A: 0.992, D: 0.969, question: "AES", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that I am ?쐇n tune??with the people around me", V: 0.75, A: 0.774, D: 0.762, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that I lack companionship", V: -0.083, A: 0.288, D: -0.054, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that there is no one I can turn to", V: -0.103, A: 0.318, D: 0.125, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel lonely", V: -0.25, A: -0.274, D: -0.262, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel part of a group of friends", V: 1.097, A: 0.56, D: 0.827, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that I have a lot in common with the people around me", V: 1.097, A: 0.56, D: 0.827, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that I am no longer close to anyone", V: 0.75, A: 0.774, D: 0.762, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that my interests and ideas are not shared by those around me", V: 0.75, A: 0.774, D: 0.762, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel outgoing and friendly", V: 1.317, A: 0.644, D: 0.898, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel close to people", V: 1.097, A: 0.56, D: 0.827, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel left out", V: 1.427, A: 0.89, D: 1.233, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that my relationships with others are not meaningful", V: -0.097, A: 0.44, D: 0.173, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that no one really knows me well", V: 0.529, A: 0.37, D: 0.483, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel isolated from others", V: -0.279, A: -0.144, D: -0.245, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that I can find companionship when I want to", V: 1.43, A: 0.498, D: 1.119, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that there are people who really understand me", V: 1.097, A: 0.56, D: 0.827, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel shy", V: -0.22, A: -0.347, D: -0.368, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that people are around me but not with me", V: -0.529, A: -0.418, D: -0.507, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that there are people I can talk to", V: 1.097, A: 0.56, D: 0.827, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel that there are people I can turn to", V: 1.45, A: 0.468, D: 0.94, question: "LS", priority: 2, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am unloved", V: 0.5, A: 0.5, D: 0.5, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am worthless", V: -0.188, A: 0.863, D: -0.034, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am weak", V: -0.32, A: -0.259, D: -0.455, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am vulnerable", V: -0.302, A: -0.01, D: -0.255, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am bad", V: -0.375, A: 0.125, D: -0.127, question: "BCSS, PHQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am respected", V: 0.408, A: -0.059, D: 0.353, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am valuable", V: 0.399, A: 0.047, D: 0.298, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am talented", V: 0.439, A: 0.135, D: 0.438, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am successful", V: 0.449, A: 0.224, D: 0.438, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am good", V: 0.438, A: -0.132, D: 0.034, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am interesting", V: 0.427, A: 0.226, D: 0.231, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are hostile", V: -0.312, A: 0.377, D: -0.026, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are harsh", V: -0.25, A: 0.15, D: 0.123, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are unforgiving", V: -0.094, A: 0.13, D: 0.293, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are bad", V: -0.375, A: 0.125, D: -0.127, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are devious", V: -0.375, A: 0.125, D: -0.127, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are nasty", V: -0.385, A: 0.12, D: -0.236, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are fair", V: 0.312, A: 0.057, D: 0.143, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are good", V: 0.438, A: -0.132, D: 0.034, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are trustworthy", V: 0.469, A: -0.185, D: 0.324, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are accepting", V: 0.347, A: -0.214, D: 0.065, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are supportive", V: 0.375, A: -0.08, D: 0.135, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Others are truthful", V: 0.208, A: -0.033, D: 0.307, question: "BCSS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I take time getting to know people", V: 0.333, A: -0.062, D: 0.292, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I rely on others to help me make decisions in life", V: -0.229, A: -0.08, D: -0.31, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "People let me down a lot", V: -0.429, A: -0.028, D: -0.259, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I miss the company of others when I'm lonely", V: -0.425, A: -0.484, D: -0.447, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "It's best not to get too emotionally close to other people", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I worry a lot if people I live with arrive back later than expected.", V: -0.302, A: 0.258, D: -0.045, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I usually rely on advice from others when I've got a problem.", V: -0.229, A: -0.08, D: -0.31, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel uncomfortable when people get too close to me.", V: -0.529, A: -0.418, D: -0.507, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "People close to me often get on my nerves.", V: -0.29, A: 0.316, D: -0.219, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel people are against me", V: -0.398, A: -0.02, D: -0.25, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I worry about things happening to close family and friends", V: -0.625, A: 0.699, D: -0.171, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I often get into arguments.", V: -0.29, A: 0.316, D: -0.219, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I'm clingy with others.", V: -0.266, A: 0.034, D: -0.43, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I look forward to spending time on my own.", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I like making decisions on my own.", V: 0.479, A: 0.306, D: 0.548, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get anxious when people close to me are away.", V: -0.115, A: 0.309, D: -0.006, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel uneasy when others confide in me.", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I find it hard to trust others.", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Having people around me can be a nuisance.", V: -0.54, A: 0.042, D: -0.481, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel people haven't done enough for me.", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "It's important to have people around me a lot of the time.", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I find it difficult to confide in people.", V: -0.25, A: -0.274, D: -0.262, question: "VASQ", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "My symptoms have disrupted my work/ school work", V: -0.396, A: -0.069, D: -0.364, question: "DS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "My symptoms have disrupted my social life/ leisure activities", V: -0.396, A: -0.069, D: -0.364, question: "DS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "My symptoms have disrupted my family life/ home responsibilities", V: -0.396, A: -0.069, D: -0.364, question: "DS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "In most ways, my life is close to ideal", V: 0.264, A: -0.204, D: 0.059, question: "SLS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "The conditions of my life are excellent", V: 0.264, A: -0.204, D: 0.059, question: "SLS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am satisfied with my life", V: 0.264, A: -0.204, D: 0.059, question: "SLS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "So far I have gotten the important things I want in life", V: 0.264, A: -0.204, D: 0.059, question: "SLS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "If I could live my life over, I would change almost nothing", V: 0.264, A: -0.204, D: 0.059, question: "SLS", priority: 3, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Makes lists", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Sceptical", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Bored by time lonely", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Accepts things as they are", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Keeps a clean room", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "thinks robotic is an insult", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "energetic", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "prefer to make multiple choice test", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "chaotic", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "easily hurt", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "works best in groups", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "focused on the present", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "plans far ahead", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "wants people's respect", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "gets worn out by parties", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "fits in", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "keeps options open", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "wants to be good at fixing things", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "talks more", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "when describing an event, will tell people what happened", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "gets work done right away", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "follows the heart", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "stays at home", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "wants the big picture", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "improvises", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "bases morality on justice", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "finds it difficult to yell very loudly", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "theoretical", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "works hard", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "uncomfortable with emotions", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "likes to perform in front of other people", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "liks to know who, what, when", V: -0.031, A: -0.316, D: -0.143, question: "MBTI", priority: 4, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Calm", V: 0.375, A: -0.4, D: -0.218, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Secure", V: 0.344, A: -0.12, D: 0.414, question: "SAI, TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Tense", V: -0.104, A: -0.061, D: 0.155, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Strained", V: -0.378, A: 0.156, D: 0.08, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "At ease", V: 0.365, A: -0.41, D: -0.118, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Upset", V: -0.429, A: 0.18, D: -0.17, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Worrying over possible misfortunes", V: -0.406, A: 0.324, D: -0.105, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Satisfied", V: 0.459, A: 0.01, D: 0.185, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Frightened", V: -0.347, A: 0.317, D: -0.245, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Comfortable", V: 0.427, A: -0.337, D: -0.027, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Self-confident", V: 0.265, A: -0.176, D: 0.223, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Nervous", V: -0.265, A: 0.32, D: -0.287, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Jittery", V: -0.156, A: 0.356, D: -0.245, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Indecisive", V: -0.229, A: -0.08, D: -0.31, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Relaxed", V: 0.365, A: -0.41, D: -0.118, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Content", V: 0.264, A: -0.204, D: 0.059, question: "SAI, TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Worried", V: -0.406, A: 0.324, D: -0.105, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Confused", V: -0.245, A: 0.167, D: -0.223, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Steady", V: 0.18, A: -0.314, D: 0.263, question: "SAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Pleasant", V: 0.439, A: -0.19, D: 0.173, question: "SAI, TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Nervous and restless", V: -0.546, A: 0.63, D: -0.483, question: "TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Rested", V: 0.292, A: -0.265, D: -0.038, question: "TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am 'calm, cool and collected'", V: 0.83, A: -0.458, D: 0.151, question: "TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Happy", V: 0.5, A: 0.235, D: 0.272, question: "TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Inadequate", V: -0.378, A: -0.05, D: -0.277, question: "TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "Content", V: 0.264, A: -0.204, D: 0.059, question: "TAI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel sad", V: -0.275, A: -0.167, D: -0.351, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am sad all the time and I can't snap out of it.", V: -0.275, A: -0.167, D: -0.351, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am so sad and unhappy that I can't stand it.", V: -0.275, A: -0.167, D: -0.351, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel discouraged about the future.", V: -0.686, A: -0.398, D: -0.798, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel I have nothing to look forward to.", V: -0.406, A: -0.202, D: -0.388, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel the future is hopeless and that things cannot improve.", V: -0.686, A: -0.398, D: -0.798, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "As I look back on my life, all I can see is a lot of failures", V: -0.333, A: 0.075, D: -0.361, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel I am a complete failure as a person", V: -0.333, A: 0.075, D: -0.361, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't get real satisfaction out of anything anymore.", V: 0.041, A: 0.49, D: 0.315, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am dissatisfied or bored with everything", V: -0.204, A: 0.692, D: 0.579, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't feel particularly guilt", V: 0.792, A: 0.433, D: 0.794, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel quite guilt most of the time.", V: -0.292, A: 0.067, D: -0.294, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel guilt all of the time.", V: -0.292, A: 0.067, D: -0.294, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I expect to be punished.", V: -0.323, A: 0.235, D: -0.019, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel I am being punished.", V: -0.323, A: 0.235, D: -0.019, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel I may be punished.", V: -0.323, A: 0.235, D: -0.019, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am disgusted with myself.", V: -0.449, A: 0.273, D: -0.226, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I hate myself.", V: -0.918, A: 0.575, D: -0.296, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am disappointed in myself.", V: -0.918, A: 0.575, D: -0.296, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am critical of myself for my weaknesses or mistakes.", V: -0.126, A: 0.934, D: 0.511, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I blame myself for everything bad that happens.", V: -0.667, A: 0.192, D: -0.421, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I blame myself all the time for my faults.", V: -0.667, A: 0.192, D: -0.421, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have thoughts of killing myself, but I would not carry them out. ", V: -0.469, A: 0.22, D: -0.028, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I would kill myself if I had the chance.", V: -0.469, A: 0.22, D: -0.028, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I would like to kill myself.", V: -0.469, A: 0.22, D: -0.028, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I cry more now than I used to.", V: -0.642, A: -0.04, D: -0.596, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I cry all the time now.", V: -0.642, A: -0.04, D: -0.596, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I used to be able to cry, but now I can't cry even though I want to. ", V: -0.642, A: -0.04, D: -0.596, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am slightly more irritated now than usual.", V: -0.29, A: 0.316, D: -0.219, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am quite annoyed or irritated a good deal of the time.", V: -0.686, A: 0.599, D: -0.374, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel irritated all the time.", V: -0.686, A: 0.599, D: -0.374, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am less interested in other people than I used to be.", V: 0.25, A: 0.471, D: 0.275, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have lost all of my interest in other people.", V: 0.25, A: 0.471, D: 0.275, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have lost most of my interest in other people.", V: 0.25, A: 0.471, D: 0.275, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I put off making decisions more than I used to.", V: 0.271, A: 0.648, D: 0.192, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have greater difficulty in making decisions more than I used to.", V: 0.271, A: 0.648, D: 0.192, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I can't make decisions at all anymore.", V: -0.125, A: 0.568, D: -0.094, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "It takes an extra effort to get started at doing something.", V: 0.146, A: 0.216, D: 0.198, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I can't do any work at all.", V: 0.146, A: 0.216, D: 0.198, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have to push myself very hard to do anything.", V: 0.146, A: 0.216, D: 0.198, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I don't sleep as well as I used to.", V: 1.271, A: 1.558, D: 1.559, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.", V: 1.271, A: 1.558, D: 1.559, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I wake up several hours earlier than I used to and cannot get back to sleep.", V: 1.271, A: 1.558, D: 1.559, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get tired more easily than I used to.", V: -0.375, A: -0.183, D: -0.309, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I get tired from doing almost anything.", V: -0.375, A: -0.183, D: -0.309, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am too tired to do anything.", V: -0.375, A: -0.183, D: -0.309, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "My appetite is not as good as it used to be.", V: -0.396, A: -0.069, D: -0.364, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have no appetite at all anymore.", V: -0.396, A: -0.069, D: -0.364, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "My appetite is much worse now.", V: -0.396, A: -0.069, D: -0.364, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have lost more than ten pounds.", V: -0.396, A: -0.069, D: -0.364, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have lost more than fifteen pounds.", V: -0.396, A: -0.069, D: -0.364, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have lost more than five pounds.", V: -0.396, A: -0.069, D: -0.364, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am worried that I am looking old or unattractive.", V: 0.094, A: 0.226, D: 0.288, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel there are permanent changes in my appearance that make me look unattractive", V: 0.094, A: 0.226, D: 0.288, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I believe that I look ugly.", V: 0.094, A: 0.226, D: 0.288, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am worried about physical problems like aches, pains, upset stomach, or constipation", V: -0.406, A: 0.324, D: -0.105, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am very worried about physical problems and it's hard to think of much else.", V: -0.406, A: 0.324, D: -0.105, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am so worried about my physical problems that I cannot think of anything else.", V: -0.406, A: 0.324, D: -0.105, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I am less interested in sex than I used to be.", V: 0.353, A: 0.308, D: 0.651, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have almost no interest in sex.", V: 0.353, A: 0.308, D: 0.651, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have lost interest in sex completely.", V: 0.353, A: 0.308, D: 0.651, question: "BDI", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I feel down hearted and blue.", V: -0.656, A: -0.206, D: -0.596, question: "SDS", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I still enjoy sex.", V: 0.647, A: 0.692, D: 0.349, question: "SDS", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "I have trouble with constipation..", V: -0.396, A: -0.069, D: -0.364, question: "SDS", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I am restless and can?셳 keep still.", V: -0.552, A: 0.596, D: -0.345, question: "SDS", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I feel hopeful about the future.", V: 0.447, A: -0.143, D: 0.127, question: "SDS", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻My life is pretty full.", V: 0.723, A: -0.194, D: 0.244, question: "SDS", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 },
        { word: "혻I still enjoy the things I used to do.", V: 0.898, A: 0.465, D: 0.432, question: "SDS", priority: 5, frequency: 0, simple: [], average: 0, combine: 0, result: 0, initial: 0 }
      ],
      activity: '',
      content: '',
    }

    this.getNumFromServer();
  }

  getNumFromServer() {
    const url = 'http://samuel1226.dothome.co.kr/scribble/getNum.php'

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
    const url = 'http://samuel1226.dothome.co.kr/scribble/addData.php'

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

  createList(i, sequence) {
    console.log("\n");

    this.increaseProgress()

    var count = this.state.count + 1;
    var step = this.state.step + 1;
    this.setState({ count : count });
    this.setState({ step: step });

    var index;

    if (count <= 8) {
      // Finding selected emotion information
      index = this.state.emotion.find((element) => {
        if (element.word == i) {
          element.frequency = -1;
          return element;
        }
      })
    } else {
      // Finding selected state information
      index = this.state.state.find((element) => {
        if (element.word == i) {
          element.frequency = -1;
          return element;
        }
      })
    }

    var selectedInfo = {
      word: index.word,
      V: index.V,
      A: index.A,
      D: index.D,
      sequence: sequence,
      similarity: index.result,
    };

    var V;
    var A;
    var D;

    // Push word to selected array
    this.state.selected.push(selectedInfo);

    // Calculate standard matrix
    V = (this.state.V * (count - 4) + index.V) / (count - 3);
    A = (this.state.A * (count - 4) + index.A) / (count - 3);
    D = (this.state.D * (count - 4) + index.D) / (count - 3);

    // Initial matrix
    this.setState({ V: V, A: A, D: D });

    let tmp;

    if (count < 8) {
      tmp = this.state.emotion;
    } else {
      tmp = this.state.state;
    }

    // Calculate similarity
    tmp.map((item) => {
      if (item.frequency >= 0 && item.frequency < 3) {
        if (item.word != index.word) {
          // Combine matrix
          item.combine = (V * item.V + A * item.A + D * item.D) /
            Math.sqrt(Math.pow(V, 2) + Math.pow(A, 2) + Math.pow(D, 2)) /
            Math.sqrt(Math.pow(item.V, 2) + Math.pow(item.A, 2) + Math.pow(item.D, 2));

          if (count == 4) {
            item.simple = item.combine;
            item.average = item.combine;
            item.result = item.combine;
          } else if (count > 4) {
            // Simple, Average matrix
            var simple = [];
            var simpleMax = -1;
            var average = 0;

            for (var i = 0; i < count - 3; i++) {
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
            item.average = average / (count - 3);

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

    if (count < 8) {
      // Making 18 size word list
      for (var i = 0; i < 18; i++) {
        var duplicate = -1;
        if (i < 4) {
          for (var j = 0; j < 4; j++) {
            if (tmp[i].word == this.state.wordSpace[j]) {
              duplicate = j;
              break;
            }
          }
        } else if (i >= 4) {
          for (var j = 4; j < 18; j++) {
            if (tmp[i].word == this.state.wordSpace[j]) {
              duplicate = j;
              break;
            }
          }
        }

        check.push(duplicate);

        var set = [];
        set.push(tmp[i].word);
        set.push(tmp[i].result);

        tmpList.push(set);
        tmp[i].frequency++;
      }

      for (var i = 0; i < 18; i++) {
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
    } else {
      // Making 10 size word list
      for (var i = 0; i < 10; i++) {
        var duplicate = -1;
        if (i < 4) {
          for (var j = 0; j < 6; j++) {
            if (tmp[i].word == this.state.stateSpace[j]) {
              duplicate = j;
              break;
            }
          }
        } else if (i >= 4) {
          for (var j = 4; j < 10; j++) {
            if (tmp[i].word == this.state.stateSpace[j]) {
              duplicate = j;
              break;
            }
          }
        }

        check.push(duplicate);
        var set = [];
        set.push(tmp[i].word);
        set.push(tmp[i].result);

        tmpList.push(set);
        tmp[i].frequency++;
      }

      for (var i = 0; i < 10; i++) {
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
    }

  }

  increaseProgress() {
    var progress = this.state.progress;

    progress[this.state.count] = 1;

    this.setState({ progress: progress })
  }

  decreaseProgress() {
    var progress = this.state.progress;

    progress[this.state.count - 1] = 0;

    this.setState({ progress: progress })
  }

  createProgressBar(l, i) {
    if (i == 0) {
      if (l == 0) {
        return (
          <View style={styles.progressStart} />
        )
      } else {
        return (
          <View style={styles.progressStartFill} />
        )
      }
    } else if (i == 11) {
      if (l == 0) {
        return (
          <View style={styles.progressEnd} />
        )
      } else {
        return (
          <View style={styles.progressEndFill} />
        )
      }
    } else {
      if (l == 0) {
        return (
          <View style={styles.progressMiddle} />
        )
      } else {
        return (
          <View style={styles.progressMiddleFill} />
        )
      }
    }
  }

  getActivity() {
    switch(this.state.activity) {
      case 'exercise':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/exercise.png')}
          />
        )
      case 'family':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/family.png')}
          />
        )
      case 'finances':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/finances.png')}
          />
        )
      case 'friends':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/friends.png')}
          />
        )
      case 'health':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/health.png')}
          />
        )
      case 'hobbies':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/hobbies.png')}
          />
        )
      case 'location':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/location.png')}
          />
        )
      case 'relationships':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/relationships.png')}
          />
        )
      case 'sleep':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/sleep.png')}
          />
        )
      case 'work':
        return (
          <ImageBackground
            style={styles.exerciseImage}
            source={require('../assets/activities/work.png')}
          />
        )
    }
  }

  render() {

    if (this.state.count == 12) {
      this.sendDataToServer();
      this.props.navigation.navigate('Menu', { screen: 'Home' })
    }
/*
    console.log(this.state.num);
    console.log(this.state.count);
    console.log(this.state.selected);
    console.log(this.state.totalList);
    */
    
    if (this.state.load) {
      return (
        <View style={styles.container}>
          {this.state.count == 0 && // Initial Screen - Name
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Text style={styles.notice}>
                  What is your name?
                </Text>
              </View>
              <View style={styles.wordBody}>
                <View style={styles.wordCol}>
                  <TextInput
                    style={styles.nameInput}
                    onChangeText={(text) => this.setState({name : text})}
                    placeholder={'Write your name here'}
                  />
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
                {this.state.name == '' ?
                  <View style={styles.wordBlank} />
                  :
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-circle"
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
                <Text style={styles.notice}>
                  What is your gender?
              </Text>
              </View>
              <View style={styles.wordBody}>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ gender : 'Male' })
                    }}
                  >
                    <Text style={this.state.gender == 'Male' ? styles.genderSelectFill : styles.genderSelect}>
                      Male
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ gender : 'Female' })
                    }}
                  >
                    <Text style={this.state.gender == 'Female' ? styles.genderSelectFill : styles.genderSelect}>
                      Female
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                  <View style={styles.wordBlank}/>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ gender : 'Anonymous' })
                    }}
                  >
                    <Text style={this.state.gender == 'Anonymous' ? styles.genderSelectFill : styles.genderSelect}>
                      Anonymous
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.wordBlank}/>
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
                {this.state.gender == '' ?
                  <View style={styles.wordBlank} />
                  :
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-circle"
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
                <Text style={styles.notice}>
                  How old are you?
              </Text>
              </View>
              <View style={styles.wordBody}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={styles.wordCol}>
                    <TextInput
                      style={styles.ageInput}
                      onChangeText={(text) => this.setState({ age : text })}
                      placeholder={'25'}
                      maxLength={3}
                      keyboardType='numeric'
                    />
                  </View>
                  <View style={styles.wordCol}>
                    <Text style={styles.ageText}>years old</Text>
                  </View>
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
                {this.state.age == '' ?
                  <View style={styles.wordBlank} />
                  :
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-circle"
                      size={Dimensions.get('window').width * 0.2}
                      color="black"
                    />
                  </TouchableOpacity>
                }
              </View>
            </View>
          }
          {this.state.count == 3 && // Emotion Initial Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Text style={styles.notice}>
                  How do you feel today?
                </Text>
              </View>
              <View style={styles.wordBody}>
                <View style={styles.wordCol}>
                  <View style={styles.wordBlank} />
                  <TouchableOpacity
                    onPress={() => {
                      this.createList('Good', 0)
                    }}
                    style={{ flex: 1 }}
                  >
                    <Image
                      style={styles.face}
                      source={require('../assets/face/good.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.wordBlank} />
                </View>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    onPress={() => {
                      this.createList('Neutral', 0)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                    style={{ flex: 1 }}
                  >
                    <Image
                      style={styles.face}
                      source={require('../assets/face/neutral.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.wordBlank} />
                  <TouchableOpacity
                    onPress={() => {
                      this.createList('Awful', 0)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                    style={{ flex: 1 }}
                  >
                    <Image
                      style={styles.face}
                      source={require('../assets/face/awful.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }} />
                <View style={styles.wordCol}>
                  <View style={styles.wordBlank} />
                  <TouchableOpacity
                    onPress={() => {
                      this.createList('Great', 0)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                    style={{ flex: 3 }}
                  >
                    <Image
                      style={styles.face}
                      source={require('../assets/face/great.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.wordBlank} />
                  <TouchableOpacity
                    onPress={() => {
                      this.createList('Bad', 0)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                    style={{ flex: 3 }}
                  >
                    <Image
                      style={styles.face}
                      source={require('../assets/face/bad.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.wordBlank} />
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
              </View>
            </View>
          }
          {(this.state.count >= 4 && this.state.count < 8) && // Emotion Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Text style={styles.notice}>
                  How do you feel today?
                </Text>
              </View>
              <View style={styles.wordBody}>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[17][0], 17)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordOut}>{this.state.wordSpace[17][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[13][0], 13)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[13][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[4][0], 4)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[4][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[14][0], 14)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordOut}>{this.state.wordSpace[14][0]}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                  <View style={styles.wordBlank} />
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[12][0], 12)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[12][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[0][0], 0)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordCenter}>{this.state.wordSpace[0][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[5][0], 5)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[5][0]}</Text>
                  </TouchableOpacity>
                  <View style={styles.wordBlank} />
                </View>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[11][0], 11)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[11][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[3][0], 3)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordCenter}>{this.state.wordSpace[3][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[1][0], 1)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordCenter}>{this.state.wordSpace[1][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[6][0], 6)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[6][0]}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                  <View style={styles.wordBlank} />
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[10][0], 10)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[10][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[2][0], 2)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordCenter}>{this.state.wordSpace[2][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[7][0], 7)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[7][0]}</Text>
                  </TouchableOpacity>
                  <View style={styles.wordBlank} />
                </View>
                <View style={styles.wordCol}>
                <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[16][0], 16)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordOut}>{this.state.wordSpace[16][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[9][0], 9)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[9][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[8][0], 8)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordMiddle}>{this.state.wordSpace[8][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.wordSpace[15][0], 15)
                      this.setState({ count : this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <Text style={styles.wordOut}>{this.state.wordSpace[15][0]}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
              </View>
            </View>
          }
          {(this.state.count >= 8 && this.state.count < 10) && // State Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Text style={styles.notice}>
                  How do you feel today?
                </Text>
              </View>
              <View style={styles.wordBody}>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[8][0], 8)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateOut}>{this.state.stateSpace[8][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[9][0], 9)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateOut}>{this.state.stateSpace[9][0]}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[4][0], 4)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateMiddle}>{this.state.stateSpace[4][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[5][0], 5)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateMiddle}>{this.state.stateSpace[5][0]}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[0][0], 0)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateCenter}>{this.state.stateSpace[0][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[1][0], 1)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateCenter}>{this.state.stateSpace[1][0]}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[2][0], 2)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateMiddle}>{this.state.stateSpace[2][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[3][0], 3)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateMiddle}>{this.state.stateSpace[3][0]}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[6][0], 6)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateOut}>{this.state.stateSpace[6][0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.createList(this.state.stateSpace[7][0], 7)
                      this.setState({ count : this.state.count + 1 })
                    }} 
                  >
                    <Text style={styles.stateOut}>{this.state.stateSpace[7][0]}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
              </View>
            </View>
          }
          {this.state.count == 10 && // Exercise Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Text style={styles.notice}>
                  Would you like to describe what made you feel this way?
                </Text>
              </View>
              <View style={styles.wordBody}>
                <View style={styles.wordCol}>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'exercise' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress();
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/exercise.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'family' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/family.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'finances' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/finances.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'friends' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/friends.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'health' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/health.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'hobbies' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/hobbies.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'location' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/location.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'relationships' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/relationships.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.wordCol}>
                <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'sleep' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/sleep.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.wordSpace}
                    onPress={() => {
                      this.setState({ activity: 'work' })
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}>
                    <Image
                      style={styles.face}
                      source={require('../assets/activities/work.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
              </View>
            </View>
          }
          {this.state.count == 11 && // Exercise Detail Screen
            <View style={{ flex: 1 }}>
              <View style={styles.wordTop}>
                <View style={styles.progressBar}>
                  {this.state.progress.map((l, i) => (
                    this.createProgressBar(l, i)
                  ))}
                </View>
                <Text style={styles.notice}>
                  Please write the reasons why you chose this activity
                </Text>
              </View>
              <View style={styles.wordBody}>
                <View style={styles.exerciseBox}>
                  {this.getActivity()}
                  <TextInput
                    style={styles.exerciseInput}
                    onChangeText={(text) => this.setState({ content : text })}
                    placeholder={'Start Writing'}
                    multiline={true}
                  />
                </View>
              </View>
              <View style={styles.wordBottom}>
                <View style={styles.wordBlank} />
                <View style={styles.wordBlank} />
                {this.state.content == '' ?
                  <View style={styles.wordBlank} />
                  :
                  <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                      this.setState({ count: this.state.count + 1 })
                      this.increaseProgress()
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-circle"
                      size={Dimensions.get('window').width * 0.2}
                      color="black"
                    />
                  </TouchableOpacity>
                }
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
    backgroundColor: '#fff',
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
  },
  progressStart: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#DDD',
  },
  progressStartFill: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#000',
  },
  progressMiddle: {
    flex: 1,
    backgroundColor: '#DDD',
  },
  progressMiddleFill: {
    flex: 1,
    backgroundColor: '#000',
  },
  progressEnd: {
    flex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#DDD',
  },
  progressEndFill: {
    flex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#000',
  },
  notice: {
    flex: 5,
    padding: 10,
    fontSize: 30,
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
  faceSpace: {
    flex: 1,
  },
  face: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  wordSelect: {
    width: Dimensions.get('window').width * 0.2 - 10,
    height: Dimensions.get('window').width * 0.2 - 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 1,

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
  wordMiddle: {
    width: Dimensions.get('window').width * 0.25 - 10,
    height: Dimensions.get('window').width * 0.25 - 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 0.8,

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
  wordOut: {
    width: Dimensions.get('window').width * 0.25 - 10,
    height: Dimensions.get('window').width * 0.25 - 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    opacity: 0.5,

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
  stateSelect: {
    width: Dimensions.get('window').width * 0.5 - 15,
    height: Dimensions.get('window').height * 0.15 - 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    opacity: 1,

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
  stateCenter: {
    width: Dimensions.get('window').width * 0.5 - 15,
    height: Dimensions.get('window').height * 0.113,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    opacity: 0.99,

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
  stateMiddle: {
    width: Dimensions.get('window').width * 0.5 - 15,
    height: Dimensions.get('window').height * 0.113,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    opacity: 0.8,

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
  stateOut: {
    width: Dimensions.get('window').width * 0.5 - 15,
    height: Dimensions.get('window').height * 0.113,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    opacity: 0.5,

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
    marginTop: Dimensions.get('window').height * 0.13 + 10,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});