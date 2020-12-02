import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class EntriesScreen extends Component {

    constructor(props) {
        super(props);
        console.log("[ EntriesScreen.js ]");
    }

    state = {
        name: "",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.notice}>
                    EntriesScreen
                </Text>
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
});