import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class MeteorsScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground source={require("../assets/meteor_bg.jpg")} style={styles.backgroundImg}>

                    <View style={styles.titleBar}>
                        <Text style={styles.titleT}>Meteors!</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImg:{
        flex:1,
        resizeMode: 'cover',

    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleT: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Algerian',
        textAlign: 'center'
    },
})