import { StyleSheet, Dimensions, Platform } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    headerView: {
        width,
        height: Platform.select({
            ios: 94,
            android: 50
        }),
        backgroundColor: 'green'
    }
});