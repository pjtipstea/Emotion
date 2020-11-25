import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Main extends Component {

    constructor(props) {
        super(props);
        console.log("[ MainScreen.js ]");

        this.state = {
            name: props.route.params.name,
            count: 0,
            load: false,
            step: 1,
            matrix: [0, 0, 0],
            selected : [],
            wordSpace: [
              '', '', 'great', '', '',
              '', '', '', '', '',
              'good', '', '', '', 'okay',
              '', '', '', '', '',
              '', 'bad', '', 'awful', ''
            ],
            emotion : [
              {word:"great",V:0.958,A:0.184,D:0.483,frequency:0,matrix:0},
              {word:"good",V:0.438,A:-0.132,D:0.034,frequency:0,matrix:0},
              {word:"okay",V:-0.031,A:-0.316,D:-0.143,frequency:0,matrix:0},
              {word:"bad",V:-0.2,A:-0.3,D:-0.14,frequency:0,matrix:0},
              {word:"awful",V:-0.702,A:0.173,D:-0.558,frequency:0,matrix:0},
              {word:"accept",V:0.347,A:-0.214,D:0.065,frequency:0,matrix:0},
              {word:"active",V:0.347,A:0.23,D:0.231,frequency:0,matrix:0},
              {word:"admiration",V:0.469,A:0.083,D:0.226,frequency:0,matrix:0},
              {word:"adoration",V:0.385,A:0.199,D:0.208,frequency:0,matrix:0},
              {word:"affection",V:0.398,A:0.059,D:0.196,frequency:0,matrix:0},
              {word:"afraid",V:-0.49,A:0.275,D:-0.255,frequency:0,matrix:0},
              {word:"aggression",V:-0.406,A:0.429,D:0.033,frequency:0,matrix:0},
              {word:"aggressive",V:-0.375,A:0.449,D:0.148,frequency:0,matrix:0},
              {word:"alarm",V:-0.259,A:0.382,D:0.198,frequency:0,matrix:0},
              {word:"aloof",V:-0.311,A:-0.077,D:-0.198,frequency:0,matrix:0},
              {word:"amazed",V:0.296,A:0.279,D:0.033,frequency:0,matrix:0},
              {word:"amused",V:0.442,A:0.347,D:0.096,frequency:0,matrix:0},
              {word:"amusement",V:0.429,A:0.337,D:0.303,frequency:0,matrix:0},
              {word:"anger",V:-0.333,A:0.365,D:0.157,frequency:0,matrix:0},
              {word:"angered",V:-0.49,A:0.36,D:0.047,frequency:0,matrix:0},
              {word:"angry",V:-0.378,A:0.33,D:0.104,frequency:0,matrix:0},
              {word:"annoyed",V:-0.396,A:0.283,D:-0.155,frequency:0,matrix:0},
              {word:"anticipation",V:0.198,A:0.039,D:0.211,frequency:0,matrix:0},
              {word:"anxiety",V:-0.354,A:0.365,D:-0.158,frequency:0,matrix:0},
              {word:"anxious",V:-0.219,A:0.375,D:-0.066,frequency:0,matrix:0},
              {word:"apathetic",V:-0.312,A:-0.208,D:-0.167,frequency:0,matrix:0},
              {word:"apathy",V:-0.316,A:-0.288,D:-0.296,frequency:0,matrix:0},
              {word:"appalled",V:-0.306,A:0.292,D:0.062,frequency:0,matrix:0},
              {word:"appearance",V:0.169,A:-0.01,D:0.034,frequency:0,matrix:0},
              {word:"aroused",V:0.208,A:0.452,D:0.167,frequency:0,matrix:0},
              {word:"ashamed",V:-0.344,A:0.088,D:-0.272,frequency:0,matrix:0},
              {word:"assertive",V:0.219,A:-0.088,D:0.27,frequency:0,matrix:0},
              {word:"astonished",V:0.01,A:0.275,D:0.074,frequency:0,matrix:0},
              {word:"attraction",V:0.406,A:0.274,D:0.212,frequency:0,matrix:0},
              {word:"awe",V:-0.031,A:0.24,D:-0.2,frequency:0,matrix:0},
              {word:"awful",V:-0.439,A:0.286,D:-0.05,frequency:0,matrix:0},
              {word:"awkward",V:-0.204,A:0.15,D:-0.142,frequency:0,matrix:0},
              {word:"betrayed",V:-0.378,A:0.269,D:-0.192,frequency:0,matrix:0},
              {word:"bitter",V:-0.282,A:0.127,D:-0.089,frequency:0,matrix:0},
              {word:"blame",V:-0.385,A:0.14,D:-0.191,frequency:0,matrix:0},
              {word:"blue",V:0.146,A:-0.363,D:-0.209,frequency:0,matrix:0},
              {word:"bored",V:-0.347,A:-0.333,D:-0.304,frequency:0,matrix:0},
              {word:"boring",V:-0.306,A:-0.283,D:-0.375,frequency:0,matrix:0},
              {word:"busy",V:-0.098,A:0,D:-0.026,frequency:0,matrix:0},
              {word:"calm",V:0.375,A:-0.4,D:-0.218,frequency:0,matrix:0},
              {word:"care",V:0.229,A:-0.13,D:0,frequency:0,matrix:0},
              {word:"chaotic",V:-0.385,A:0.347,D:-0.058,frequency:0,matrix:0},
              {word:"cheeky",V:-0.066,A:0.179,D:-0.09,frequency:0,matrix:0},
              {word:"cheerful",V:0.49,A:0.22,D:0.196,frequency:0,matrix:0},
              {word:"chill",V:0.337,A:-0.294,D:-0.018,frequency:0,matrix:0},
              {word:"clingy",V:-0.276,A:-0.04,D:-0.13,frequency:0,matrix:0},
              {word:"collected",V:0.07,A:-0.098,D:0.088,frequency:0,matrix:0},
              {word:"comfortable",V:0.427,A:-0.337,D:-0.027,frequency:0,matrix:0},
              {word:"companionship",V:0.333,A:-0.062,D:0.292,frequency:0,matrix:0},
              {word:"compassion",V:0.235,A:-0.242,D:0.009,frequency:0,matrix:0},
              {word:"concentration",V:0.235,A:0,D:0.222,frequency:0,matrix:0},
              {word:"concerned",V:-0.208,A:0.198,D:-0.15,frequency:0,matrix:0},
              {word:"confident",V:0.265,A:-0.176,D:0.223,frequency:0,matrix:0},
              {word:"confusion",V:-0.245,A:0.167,D:-0.223,frequency:0,matrix:0},
              {word:"conspicuous",V:-0.021,A:0.02,D:0.096,frequency:0,matrix:0},
              {word:"contempt",V:-0.294,A:0.135,D:-0.104,frequency:0,matrix:0},
              {word:"content",V:0.264,A:-0.204,D:0.059,frequency:0,matrix:0},
              {word:"control",V:0.229,A:-0.148,D:0.308,frequency:0,matrix:0},
              {word:"cool",V:0.385,A:0.04,D:0.281,frequency:0,matrix:0},
              {word:"courageous",V:0.418,A:0.087,D:0.379,frequency:0,matrix:0},
              {word:"craving",V:0.01,A:0.255,D:0.136,frequency:0,matrix:0},
              {word:"creative",V:0.417,A:0.018,D:0.288,frequency:0,matrix:0},
              {word:"critical",V:-0.188,A:0.302,D:0.045,frequency:0,matrix:0},
              {word:"cry",V:-0.367,A:0.127,D:-0.245,frequency:0,matrix:0},
              {word:"curious",V:0.135,A:0.1,D:-0.017,frequency:0,matrix:0},
              {word:"death",V:-0.469,A:0.22,D:-0.028,frequency:0,matrix:0},
              {word:"depressed",V:-0.476,A:-0.055,D:-0.364,frequency:0,matrix:0},
              {word:"desirable",V:0.24,A:0.235,D:0.25,frequency:0,matrix:0},
              {word:"despair",V:-0.385,A:0.294,D:-0.255,frequency:0,matrix:0},
              {word:"desperate",V:-0.417,A:0.342,D:-0.163,frequency:0,matrix:0},
              {word:"detest",V:-0.417,A:0.3,D:-0.008,frequency:0,matrix:0},
              {word:"devastation",V:-0.41,A:0.404,D:-0.028,frequency:0,matrix:0},
              {word:"devious",V:-0.25,A:0.019,D:-0.241,frequency:0,matrix:0},
              {word:"disappointed",V:-0.429,A:-0.028,D:-0.259,frequency:0,matrix:0},
              {word:"disapproving",V:-0.255,A:0.125,D:-0.048,frequency:0,matrix:0},
              {word:"discouraged",V:-0.28,A:-0.196,D:-0.41,frequency:0,matrix:0},
              {word:"disgust",V:-0.448,A:0.275,D:-0.183,frequency:0,matrix:0},
              {word:"disgusted",V:-0.449,A:0.273,D:-0.226,frequency:0,matrix:0},
              {word:"dismayed",V:-0.335,A:0.235,D:-0.111,frequency:0,matrix:0},
              {word:"dismissive",V:-0.312,A:0.041,D:-0.07,frequency:0,matrix:0},
              {word:"disrespect",V:-0.438,A:0.137,D:-0.198,frequency:0,matrix:0},
              {word:"dissatisfied",V:-0.458,A:0.061,D:-0.209,frequency:0,matrix:0},
              {word:"distant",V:-0.271,A:-0.176,D:-0.231,frequency:0,matrix:0},
              {word:"distracted",V:-0.306,A:-0.108,D:-0.287,frequency:0,matrix:0},
              {word:"disturbed",V:-0.375,A:0.37,D:-0.195,frequency:0,matrix:0},
              {word:"down",V:-0.292,A:-0.17,D:-0.236,frequency:0,matrix:0},
              {word:"downhearted",V:-0.381,A:-0.039,D:-0.245,frequency:0,matrix:0},
              {word:"dread",V:-0.347,A:0.292,D:-0.132,frequency:0,matrix:0},
              {word:"eager",V:0.021,A:0.312,D:-0.194,frequency:0,matrix:0},
              {word:"easygoing",V:0.323,A:-0.224,D:0.038,frequency:0,matrix:0},
              {word:"embarrassed",V:-0.316,A:0.06,D:-0.254,frequency:0,matrix:0},
              {word:"embarrassment",V:-0.357,A:0.185,D:-0.274,frequency:0,matrix:0},
              {word:"empty",V:-0.312,A:-0.317,D:-0.419,frequency:0,matrix:0},
              {word:"energetic",V:0.347,A:0.368,D:0.402,frequency:0,matrix:0},
              {word:"energy",V:0.444,A:0.225,D:0.368,frequency:0,matrix:0},
              {word:"enjoy",V:0.459,A:0.225,D:0.25,frequency:0,matrix:0},
              {word:"enthusiasm",V:0.438,A:0.316,D:0.298,frequency:0,matrix:0},
              {word:"enthusiastic",V:0.385,A:0.368,D:0.348,frequency:0,matrix:0},
              {word:"entrance",V:0.198,A:-0.107,D:0.026,frequency:0,matrix:0},
              {word:"envious",V:-0.39,A:0.254,D:-0.159,frequency:0,matrix:0},
              {word:"envy",V:-0.26,A:0.204,D:-0.073,frequency:0,matrix:0},
              {word:"excellent",V:0.47,A:0.087,D:0.37,frequency:0,matrix:0},
              {word:"excited",V:0.408,A:0.431,D:0.209,frequency:0,matrix:0},
              {word:"excitement",V:0.396,A:0.184,D:0.231,frequency:0,matrix:0},
              {word:"excluded",V:-0.439,A:0.04,D:-0.366,frequency:0,matrix:0},
              {word:"exposed",V:-0.029,A:0.161,D:0.009,frequency:0,matrix:0},
              {word:"failure",V:-0.333,A:0.075,D:-0.361,frequency:0,matrix:0},
              {word:"fair",V:0.312,A:0.057,D:0.143,frequency:0,matrix:0},
              {word:"family",V:0.468,A:-0.117,D:0.143,frequency:0,matrix:0},
              {word:"fear",V:-0.427,A:0.34,D:-0.207,frequency:0,matrix:0},
              {word:"feared",V:-0.26,A:0.233,D:0.009,frequency:0,matrix:0},
              {word:"fearful",V:-0.417,A:-0.018,D:-0.222,frequency:0,matrix:0},
              {word:"fidgety",V:-0.271,A:0.286,D:-0.149,frequency:0,matrix:0},
              {word:"food",V:0.388,A:-0.176,D:0.027,frequency:0,matrix:0},
              {word:"fragile",V:-0.198,A:-0.337,D:-0.374,frequency:0,matrix:0},
              {word:"free",V:0.396,A:0,D:0.044,frequency:0,matrix:0},
              {word:"friend",V:0.406,A:-0.087,D:0.073,frequency:0,matrix:0},
              {word:"friendly",V:0.417,A:-0.102,D:0.098,frequency:0,matrix:0},
              {word:"frightened",V:-0.347,A:0.317,D:-0.245,frequency:0,matrix:0},
              {word:"frustrated",V:-0.42,A:0.151,D:-0.245,frequency:0,matrix:0},
              {word:"frustration",V:-0.44,A:0.23,D:-0.22,frequency:0,matrix:0},
              {word:"furious",V:-0.438,A:0.453,D:0.098,frequency:0,matrix:0},
              {word:"gloomy",V:-0.393,A:-0.09,D:-0.213,frequency:0,matrix:0},
              {word:"grateful",V:0.458,A:-0.147,D:0.06,frequency:0,matrix:0},
              {word:"gratitude",V:0.385,A:-0.059,D:0.11,frequency:0,matrix:0},
              {word:"grief",V:-0.43,A:0.14,D:-0.026,frequency:0,matrix:0},
              {word:"guilt",V:-0.292,A:0.067,D:-0.294,frequency:0,matrix:0},
              {word:"guilty",V:-0.365,A:0.27,D:-0.148,frequency:0,matrix:0},
              {word:"happiness",V:0.46,A:0.232,D:0.35,frequency:0,matrix:0},
              {word:"happy",V:0.5,A:0.235,D:0.272,frequency:0,matrix:0},
              {word:"harsh",V:-0.25,A:0.15,D:0.123,frequency:0,matrix:0},
              {word:"hate",V:-0.469,A:0.302,D:-0.07,frequency:0,matrix:0},
              {word:"helpful",V:0.316,A:-0.163,D:0.205,frequency:0,matrix:0},
              {word:"helpless",V:-0.396,A:-0.08,D:-0.286,frequency:0,matrix:0},
              {word:"hesitant",V:-0.167,A:0.042,D:-0.179,frequency:0,matrix:0},
              {word:"hobby",V:0.327,A:0.06,D:-0.029,frequency:0,matrix:0},
              {word:"hope",V:0.427,A:-0.183,D:0.239,frequency:0,matrix:0},
              {word:"hopeful",V:0.447,A:-0.143,D:0.127,frequency:0,matrix:0},
              {word:"hopeless",V:-0.406,A:-0.202,D:-0.388,frequency:0,matrix:0},
              {word:"horrified",V:-0.46,A:0.385,D:-0.132,frequency:0,matrix:0},
              {word:"horror",V:-0.385,A:0.35,D:-0.062,frequency:0,matrix:0},
              {word:"hostile",V:-0.312,A:0.377,D:-0.026,frequency:0,matrix:0},
              {word:"humiliation",V:-0.452,A:0.212,D:-0.19,frequency:0,matrix:0},
              {word:"hurt",V:-0.438,A:0.273,D:-0.209,frequency:0,matrix:0},
              {word:"inadequate",V:-0.378,A:-0.05,D:-0.277,frequency:0,matrix:0},
              {word:"indecisive",V:-0.229,A:-0.08,D:-0.31,frequency:0,matrix:0},
              {word:"indifferent",V:-0.104,A:-0.343,D:-0.25,frequency:0,matrix:0},
              {word:"indignant",V:-0.24,A:0.1,D:-0.077,frequency:0,matrix:0},
              {word:"inferior",V:-0.24,A:-0.246,D:-0.394,frequency:0,matrix:0},
              {word:"infuriated",V:-0.427,A:0.43,D:0.01,frequency:0,matrix:0},
              {word:"initiative",V:0.333,A:0.115,D:0.268,frequency:0,matrix:0},
              {word:"inquisitive",V:-0.199,A:0.137,D:0.115,frequency:0,matrix:0},
              {word:"insecure",V:-0.386,A:0.038,D:-0.368,frequency:0,matrix:0},
              {word:"insignificant",V:-0.417,A:-0.194,D:-0.386,frequency:0,matrix:0},
              {word:"inspired",V:0.467,A:0.202,D:0.236,frequency:0,matrix:0},
              {word:"interest",V:0.28,A:0.167,D:0.118,frequency:0,matrix:0},
              {word:"interested",V:0.25,A:0.029,D:0.225,frequency:0,matrix:0},
              {word:"interesting",V:0.427,A:0.226,D:0.231,frequency:0,matrix:0},
              {word:"intimate",V:0.224,A:0.098,D:-0.107,frequency:0,matrix:0},
              {word:"irritable",V:-0.388,A:0.452,D:-0.038,frequency:0,matrix:0},
              {word:"irritated",V:-0.29,A:0.316,D:-0.219,frequency:0,matrix:0},
              {word:"irritation",V:-0.427,A:0.333,D:-0.004,frequency:0,matrix:0},
              {word:"isolated",V:-0.279,A:-0.144,D:-0.245,frequency:0,matrix:0},
              {word:"jealous",V:-0.327,A:0.355,D:-0.155,frequency:0,matrix:0},
              {word:"jittery",V:-0.156,A:0.356,D:-0.245,frequency:0,matrix:0},
              {word:"joy",V:0.48,A:0.324,D:0.294,frequency:0,matrix:0},
              {word:"joyful",V:0.49,A:0.24,D:0.167,frequency:0,matrix:0},
              {word:"lazy",V:-0.108,A:-0.236,D:-0.404,frequency:0,matrix:0},
              {word:"liking",V:0.463,A:0.104,D:0.089,frequency:0,matrix:0},
              {word:"lonely",V:-0.25,A:-0.274,D:-0.262,frequency:0,matrix:0},
              {word:"longing",V:0.104,A:-0.066,D:0.06,frequency:0,matrix:0},
              {word:"love",V:0.5,A:0.019,D:0.173,frequency:0,matrix:0},
              {word:"loved",V:0.427,A:-0.048,D:0.082,frequency:0,matrix:0},
              {word:"loving",V:0.448,A:0.112,D:0.136,frequency:0,matrix:0},
              {word:"mad",V:-0.281,A:0.373,D:-0.223,frequency:0,matrix:0},
              {word:"meaning",V:0.163,A:-0.105,D:0.125,frequency:0,matrix:0},
              {word:"meaningful",V:0.27,A:0,D:0.302,frequency:0,matrix:0},
              {word:"misery",V:-0.354,A:-0.122,D:-0.342,frequency:0,matrix:0},
              {word:"moody",V:-0.255,A:0.311,D:0.095,frequency:0,matrix:0},
              {word:"motivation",V:0.354,A:0.284,D:0.302,frequency:0,matrix:0},
              {word:"mournful",V:-0.32,A:-0.059,D:-0.312,frequency:0,matrix:0},
              {word:"nasty",V:-0.385,A:0.12,D:-0.236,frequency:0,matrix:0},
              {word:"nausea",V:-0.396,A:0.281,D:-0.227,frequency:0,matrix:0},
              {word:"need",V:0.01,A:0.074,D:-0.3,frequency:0,matrix:0},
              {word:"needed",V:0.177,A:-0.158,D:0.179,frequency:0,matrix:0},
              {word:"negative",V:-0.398,A:0.027,D:-0.324,frequency:0,matrix:0},
              {word:"nervous",V:-0.265,A:0.32,D:-0.287,frequency:0,matrix:0},
              {word:"neutral",V:-0.031,A:-0.316,D:-0.143,frequency:0,matrix:0},
              {word:"nostalgic",V:-0.042,A:-0.149,D:-0.316,frequency:0,matrix:0},
              {word:"numb",V:-0.392,A:-0.08,D:-0.148,frequency:0,matrix:0},
              {word:"optimism",V:0.449,A:0.065,D:0.314,frequency:0,matrix:0},
              {word:"optimistic",V:0.479,A:0.08,D:0.321,frequency:0,matrix:0},
              {word:"outgoing",V:0.15,A:-0.028,D:0.038,frequency:0,matrix:0},
              {word:"overwhelmed",V:-0.159,A:0.18,D:-0.152,frequency:0,matrix:0},
              {word:"pain",V:-0.488,A:0.265,D:-0.105,frequency:0,matrix:0},
              {word:"painful",V:-0.45,A:0.242,D:-0.17,frequency:0,matrix:0},
              {word:"panic",V:-0.438,A:0.438,D:-0.1,frequency:0,matrix:0},
              {word:"panicky",V:-0.216,A:0.462,D:-0.107,frequency:0,matrix:0},
              {word:"peace",V:0.439,A:-0.344,D:0.113,frequency:0,matrix:0},
              {word:"peaceful",V:0.367,A:-0.392,D:0.069,frequency:0,matrix:0},
              {word:"people",V:0.104,A:-0.1,D:0,frequency:0,matrix:0},
              {word:"perplexed",V:-0.188,A:0.205,D:-0.182,frequency:0,matrix:0},
              {word:"persecute",V:-0.219,A:0.373,D:0.009,frequency:0,matrix:0},
              {word:"pessimistic",V:-0.412,A:-0.106,D:-0.264,frequency:0,matrix:0},
              {word:"playful",V:0.392,A:0.188,D:-0.037,frequency:0,matrix:0},
              {word:"pleasant",V:0.439,A:-0.19,D:0.173,frequency:0,matrix:0},
              {word:"pleasure",V:0.439,A:0.24,D:0.182,frequency:0,matrix:0},
              {word:"positive",V:0.459,A:0.01,D:0.355,frequency:0,matrix:0},
              {word:"powerful",V:0.365,A:0.33,D:0.491,frequency:0,matrix:0},
              {word:"powerless",V:-0.375,A:0,D:-0.172,frequency:0,matrix:0},
              {word:"pride",V:0.229,A:0.134,D:0.348,frequency:0,matrix:0},
              {word:"proud",V:0.406,A:0.2,D:0.373,frequency:0,matrix:0},
              {word:"provoked",V:-0.229,A:0.176,D:0.028,frequency:0,matrix:0},
              {word:"punished",V:-0.323,A:0.235,D:-0.019,frequency:0,matrix:0},
              {word:"quiet",V:0.292,A:-0.395,D:-0.069,frequency:0,matrix:0},
              {word:"rage",V:-0.418,A:0.388,D:0.158,frequency:0,matrix:0},
              {word:"rejected",V:-0.398,A:-0.02,D:-0.25,frequency:0,matrix:0},
              {word:"relax",V:0.427,A:-0.25,D:-0.125,frequency:0,matrix:0},
              {word:"relaxation",V:0.373,A:-0.339,D:-0.119,frequency:0,matrix:0},
              {word:"relaxed",V:0.365,A:-0.41,D:-0.118,frequency:0,matrix:0},
              {word:"reliable",V:0.412,A:-0.259,D:0.375,frequency:0,matrix:0},
              {word:"relief",V:0.344,A:-0.222,D:-0.019,frequency:0,matrix:0},
              {word:"relieved",V:0.396,A:-0.186,D:-0.109,frequency:0,matrix:0},
              {word:"resentful",V:-0.38,A:0.108,D:-0.176,frequency:0,matrix:0},
              {word:"reserved",V:0.094,A:-0.184,D:0.083,frequency:0,matrix:0},
              {word:"respect",V:0.427,A:-0.156,D:0.258,frequency:0,matrix:0},
              {word:"respected",V:0.408,A:-0.059,D:0.353,frequency:0,matrix:0},
              {word:"rest",V:0.407,A:-0.333,D:-0.2,frequency:0,matrix:0},
              {word:"rested",V:0.292,A:-0.265,D:-0.038,frequency:0,matrix:0},
              {word:"restless",V:-0.281,A:0.31,D:-0.196,frequency:0,matrix:0},
              {word:"revulsion",V:-0.396,A:0.265,D:-0.157,frequency:0,matrix:0},
              {word:"ridiculed",V:-0.388,A:0.306,D:-0.288,frequency:0,matrix:0},
              {word:"romantic",V:0.436,A:0.031,D:0.098,frequency:0,matrix:0},
              {word:"rude",V:-0.439,A:0.321,D:-0.098,frequency:0,matrix:0},
              {word:"sad",V:-0.275,A:-0.167,D:-0.351,frequency:0,matrix:0},
              {word:"sadness",V:-0.448,A:-0.212,D:-0.336,frequency:0,matrix:0},
              {word:"safe",V:0.398,A:-0.194,D:0.259,frequency:0,matrix:0},
              {word:"satisfied",V:0.459,A:0.01,D:0.185,frequency:0,matrix:0},
              {word:"savor",V:0.327,A:0.052,D:0.026,frequency:0,matrix:0},
              {word:"scare",V:-0.378,A:0.41,D:-0.236,frequency:0,matrix:0},
              {word:"scared",V:-0.354,A:0.328,D:-0.315,frequency:0,matrix:0},
              {word:"scary",V:-0.438,A:0.452,D:0.028,frequency:0,matrix:0},
              {word:"secure",V:0.344,A:-0.12,D:0.414,frequency:0,matrix:0},
              {word:"security",V:0.337,A:-0.14,D:0.321,frequency:0,matrix:0},
              {word:"selfish",V:-0.439,A:0.137,D:-0.005,frequency:0,matrix:0},
              {word:"sensitive",V:0.214,A:-0.074,D:-0.246,frequency:0,matrix:0},
              {word:"shaking",V:-0.225,A:0.349,D:-0.245,frequency:0,matrix:0},
              {word:"shaky",V:-0.24,A:0.234,D:-0.277,frequency:0,matrix:0},
              {word:"shamed",V:-0.365,A:0.067,D:-0.282,frequency:0,matrix:0},
              {word:"shameful",V:-0.46,A:0.18,D:-0.236,frequency:0,matrix:0},
              {word:"shock",V:-0.214,A:0.321,D:-0.047,frequency:0,matrix:0},
              {word:"shocked",V:-0.208,A:0.273,D:-0.125,frequency:0,matrix:0},
              {word:"shy",V:-0.22,A:-0.347,D:-0.368,frequency:0,matrix:0},
              {word:"sick",V:-0.396,A:-0.069,D:-0.364,frequency:0,matrix:0},
              {word:"skeptical",V:-0.293,A:0,D:-0.048,frequency:0,matrix:0},
              {word:"sleep",V:0.219,A:-0.41,D:-0.161,frequency:0,matrix:0},
              {word:"sleepy",V:0.104,A:-0.375,D:-0.25,frequency:0,matrix:0},
              {word:"slow",V:-0.143,A:-0.427,D:-0.369,frequency:0,matrix:0},
              {word:"sociable",V:0.354,A:-0.041,D:0.127,frequency:0,matrix:0},
              {word:"startled",V:-0.167,A:0.365,D:0.026,frequency:0,matrix:0},
              {word:"steady",V:0.18,A:-0.314,D:0.263,frequency:0,matrix:0},
              {word:"strained",V:-0.378,A:0.156,D:0.08,frequency:0,matrix:0},
              {word:"stress",V:-0.327,A:0.343,D:-0.183,frequency:0,matrix:0},
              {word:"stressed",V:-0.333,A:0.24,D:0.002,frequency:0,matrix:0},
              {word:"successful",V:0.449,A:0.224,D:0.438,frequency:0,matrix:0},
              {word:"supported",V:0.353,A:-0.092,D:0.113,frequency:0,matrix:0},
              {word:"supportive",V:0.375,A:-0.08,D:0.135,frequency:0,matrix:0},
              {word:"surprise",V:0.375,A:0.375,D:0.062,frequency:0,matrix:0},
              {word:"surprised",V:0.284,A:0.355,D:0.039,frequency:0,matrix:0},
              {word:"talented",V:0.439,A:0.135,D:0.438,frequency:0,matrix:0},
              {word:"talkative",V:0.062,A:0.173,D:0.035,frequency:0,matrix:0},
              {word:"tense",V:-0.104,A:-0.061,D:0.155,frequency:0,matrix:0},
              {word:"tension",V:-0.196,A:0.31,D:0.029,frequency:0,matrix:0},
              {word:"terror",V:-0.431,A:0.402,D:-0.085,frequency:0,matrix:0},
              {word:"thankful",V:0.469,A:-0.156,D:0.214,frequency:0,matrix:0},
              {word:"thorough",V:-0.033,A:-0.15,D:0.058,frequency:0,matrix:0},
              {word:"threat",V:-0.365,A:0.365,D:0.167,frequency:0,matrix:0},
              {word:"tired",V:-0.375,A:-0.183,D:-0.309,frequency:0,matrix:0},
              {word:"trembling",V:-0.323,A:0.324,D:-0.176,frequency:0,matrix:0},
              {word:"trusting",V:0.357,A:0.008,D:0.25,frequency:0,matrix:0},
              {word:"trustworthy",V:0.469,A:-0.185,D:0.324,frequency:0,matrix:0},
              {word:"truthful",V:0.208,A:-0.033,D:0.307,frequency:0,matrix:0},
              {word:"turmoil",V:-0.302,A:0.388,D:-0.083,frequency:0,matrix:0},
              {word:"uncomfortable",V:-0.312,A:0.11,D:-0.286,frequency:0,matrix:0},
              {word:"understood",V:0.28,A:-0.059,D:0.186,frequency:0,matrix:0},
              {word:"uneasy",V:-0.385,A:0.098,D:-0.151,frequency:0,matrix:0},
              {word:"unforgiving",V:-0.094,A:0.13,D:0.293,frequency:0,matrix:0},
              {word:"unselfish",V:0.115,A:-0.147,D:-0.123,frequency:0,matrix:0},
              {word:"upset",V:-0.429,A:0.18,D:-0.17,frequency:0,matrix:0},
              {word:"useful",V:0.333,A:-0.089,D:0.226,frequency:0,matrix:0},
              {word:"useless",V:-0.448,A:-0.158,D:-0.316,frequency:0,matrix:0},
              {word:"valuable",V:0.399,A:0.047,D:0.298,frequency:0,matrix:0},
              {word:"victim",V:-0.385,A:0.176,D:-0.298,frequency:0,matrix:0},
              {word:"violate",V:-0.439,A:0.47,D:0.019,frequency:0,matrix:0},
              {word:"vulnerable",V:-0.302,A:-0.01,D:-0.255,frequency:0,matrix:0},
              {word:"want",V:0.171,A:0.142,D:0.098,frequency:0,matrix:0},
              {word:"wanting",V:0.26,A:-0.067,D:0.093,frequency:0,matrix:0},
              {word:"weak",V:-0.32,A:-0.259,D:-0.455,frequency:0,matrix:0},
              {word:"weakly",V:-0.23,A:-0.245,D:-0.389,frequency:0,matrix:0},
              {word:"withdrawn",V:-0.318,A:-0.132,D:-0.279,frequency:0,matrix:0},
              {word:"worried",V:-0.406,A:0.324,D:-0.105,frequency:0,matrix:0},
              {word:"worry",V:-0.255,A:0.276,D:-0.233,frequency:0,matrix:0},
              {word:"worth",V:0.372,A:0.01,D:0.389,frequency:0,matrix:0},
              {word:"worthless",V:-0.417,A:-0.08,D:-0.347,frequency:0,matrix:0}
            ]
        }
    }

    getDataFromServer() {
        const url = 'http://samuel1226.dothome.co.kr/emotionsurvey/getData.php'

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
              this.setState({ count : responseInJson.count });
              this.setState({ load : true });
            })
            .catch((e) => console.log(e))
            .finally(() => {
            })
    }

    sendDataToServer() {
        const url = 'http://samuel1226.dothome.co.kr/emotionsurvey/addData.php'

        let data = {
            data : [
                {
                step: 1,
                tree: "1",
                node: "2",
                value: 100,
                name: "yoon"
                },
                {
                    step: 1,
                    tree: "2",
                    node: "3",
                    value: 80,
                    name: "yoon Ha"
                }
            ]
        }

        try {
            fetch(url, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({data}),
            })
            .then((response) => response.json())
            .then((responseInJson) => {
              console.log(responseInJson);
            })
          } catch (e) {
            console.warn('fetch failed', e, url);
          }
    }

    createList(i) {
      if (this.state.wordSpace[i] != '') {
        var index = this.state.emotion.find((element)=> {
          return element.word === this.state.wordSpace[i];
        })
        console.log(index);
        console.log(this.state.wordSpace[i]);
      }
        
    }

    render() {

        return (
            <View style={styles.container}>
              <View style={styles.wordCol}/>
              <View style={styles.wordCol}>
                <TouchableOpacity onPress={() => this.createList(0)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(1)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(2)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(3)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[3]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(4)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[4]}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wordCol}>
                <TouchableOpacity onPress={() => this.createList(5)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[5]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(6)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[6]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(7)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[7]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(8)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[8]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(9)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[9]}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wordCol}>
                <TouchableOpacity onPress={() => this.createList(10)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[10]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(11)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[11]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(12)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[12]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(13)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[13]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(14)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[14]}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wordCol}>
                <TouchableOpacity onPress={() => this.createList(15)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[15]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(16)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[16]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(17)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[17]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(18)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[18]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(19)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[19]}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wordCol}>
                <TouchableOpacity onPress={() => this.createList(20)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[20]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(21)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[21]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(22)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[22]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(23)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[23]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createList(24)} style={styles.wordSpace}>
                  <Text style={styles.word}>{this.state.wordSpace[24]}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wordCol}/>
            </View>
        );        
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wordCol: {
      flex: 1,
      flexDirection:'row',
    },
    wordSpace: {
      flex: 1,
    },
    word: {
      flex: 1,
      textAlign:'center',
      textAlignVertical: 'center',
    }
});