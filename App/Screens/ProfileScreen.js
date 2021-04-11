import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, Text, ScrollView, Keyboard, TouchableOpacity} from 'react-native';


import Inputs from "../Classes/InputClass";
import colors from "../config/colors";



function ProfileScreen({ navigation, route }) {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
            <ImageBackground source ={require("../assets/background1.jpg") } style = {styles.background}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>What's on your mind today, Tim?</Text>
                        {/*<View style={styles.textInputContainer}>
                            <TextInput placeholder="Type something" multiline = {true} numberOfLines = {4}></TextInput>
                        </View>*/}

                        <Inputs></Inputs>

                    </View>
                    <View style={styles.profileBottom}>
                        <TouchableOpacity style = {styles.memoriesButton} onPress={() => navigation.navigate('Memories')}>
                            <Text style = {styles.memoriesButtonText}> My Memories </Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        </ScrollView>
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
        height:"50%",
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(204, 242, 211, 0.3)',
        borderBottomWidth: 5,
        borderColor: "black"
    },
    inputText: {
        opacity: 1,
        fontSize: 25,
        color: "white",
        fontFamily: "papyrus",
        fontWeight: "bold",
        textAlign: "center"
    },
    textInputContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        alignContent: "flex-start",
        alignItems: "baseline"

    },
    profileBottom: {
        width: "100%",
        height: "50%",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        
    },
    memoriesButton: {
        backgroundColor: "#faffd6",
        padding: 10,
        margin: 15,
        width: 120,
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 5,

    },
    memoriesButtonText: {

    }
})

export default ProfileScreen;