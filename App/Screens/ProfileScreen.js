import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Inputs from "../Classes/InputClass";
import colors from "../config/colors";
import { TextInput } from 'react-native-gesture-handler';



function ProfileScreen({ navigation, route }) {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground source ={require("../assets/background1.jpg") } style = {styles.background}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>What's on your mind today, Tim?</Text>
                    {/*<View style={styles.textInputContainer}>
                        <TextInput placeholder="Type something" multiline = {true} numberOfLines = {4}></TextInput>
                    </View>*/}

                    <Inputs></Inputs>
                </View>
        </ImageBackground>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"

    },
    inputContainer: {
        width: "100%",
        height:"30%",
        justifyContent: "center",
        alignItems: "center"
    },
    inputText: {
        opacity: 1,
        fontSize: 25,
        color: "white",
        fontFamily: "papyrus",
        fontWeight: "bold"
    },
    textInputContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        alignContent: "flex-start",
        alignItems: "baseline"

    }
})

export default ProfileScreen;