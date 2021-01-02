import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        console.log("[ LoginScreen.js ]");
    }

    state = {
        name: "",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.notice}>
                    이름을 입력해주세요
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({name : text})}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Main', {name : this.state.name})}
                >
                    <Text style={styles.startButton}>
                        시작하기
                    </Text>
                </TouchableOpacity>
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
    notice: {
        marginBottom: 30,
        fontSize: 25,
    },
    input: {
        borderWidth:2,
        width: 200,
        marginBottom: 30,
        fontSize: 30,
    },
    startButton: {
        borderWidth: 1,
        borderRadius: 50,
        padding: 30,
        fontSize: 30,
    }
});