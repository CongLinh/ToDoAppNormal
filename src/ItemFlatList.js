

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import done from '../assets/done.png';
import alarm from '../assets/alarm.png';
import trash from '../assets/trash.png';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');




export default class ItemFlatList extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            isDone: false
        }
    }
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <View style={{ width: 10, height: 10 }} />
                <View style={itemFlatListStyles.container}>
                    <View style={itemFlatListStyles.alarmAction}>
                        <TouchableOpacity onPress={() => {this.setState({...this.state, isDone: !this.state.isDone})}}>
                            {
                                this.state.isDone 
                                ?
                                <Image source={done} style={{ width: 20, height: 20}}/>
                                :
                                <Image source={alarm} style={{ width: 20, height: 20}}/>

                            }
                        </TouchableOpacity>
                        <Text style={{fontSize: 16, paddingStart: 10}}>{this.props.name}</Text>
                    </View>
                    <TouchableOpacity style={itemFlatListStyles.deleteButton}>
                        <Image source={trash} style={{ width: 20, height: 20, padding: 10}}/>
                    </TouchableOpacity>
                </View>
                <View style={{ width: 10, height: 10 }} />
            </View>

        );
    }
}

const itemFlatListStyles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        borderWidth: 1, 
        borderColor: '#cecece', 
        borderRadius: 10, 
        justifyContent: 'space-around', 
        alignItems: 'center',
        width: width - 20,
    },
    deleteButton: {
        alignItems: 'center', 
        width: 40, 
        height: 50, 
        justifyContent: 'center'
    },
    alarmAction: { 
        flex: 1, 
        paddingStart: 10, 
        height: 50, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center' 
    }

});