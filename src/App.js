/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import done from '../assets/done.png';
import alarm from '../assets/alarm.png';
import trash from '../assets/trash.png';
import ItemFlatList from './ItemFlatList';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');





export default class App extends Component {

    render() {
        const dataList = [
            {
                name: 'Linh 1',
                age: 19
            },
            
        ]
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <View style={{width, height: 44}} />
                    <Text style={{fontFamily: 'Avenir', fontSize: 20}}>TO DO APP</Text>
                    <View style={styles.addView}>
                        <TextInput style={styles.textInput} />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width, height: 10}} />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FlatList style={{ flex: 1, width }}
                        data={dataList}
                        renderItem={({ item }) => <ItemFlatList name={item.name} />}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerView: {
        width,
        height: Platform.select({
            ios: 130,
            android: 90
        }),
        backgroundColor: 'white',
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.5,
        alignItems: 'center'
    },
    addView: {
        width: width - 20,
        height: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        
        // borderColor: '#f7f7f7',
        // backgroundColor: '#f7f7f7',
        // borderWidth: 1,
        // borderRadius: 8
    },
    textInput: {
        height: 36,
        width: width - 90,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 18,
        paddingStart: 10,
        backgroundColor: 'white'
    },
    button: { width: 50, height: 36, justifyContent: 'center', alignItems: 'center' },
    buttonText: { color: '#4286f4', fontFamily: 'Avenir', fontSize: 18 }
});
