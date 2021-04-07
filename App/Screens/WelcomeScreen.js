import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Image, Platform, Button, Text, TouchableOpacity } from 'react-native';


import colors from "../config/colors";



TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title, backgroundColor }) => (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            appStyles.appButtonContainer,
            backgroundColor && { backgroundColor }]}>

        <Text style={appStyles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

function WelcomeScreen({ navigation }) {

    return (
            <ImageBackground source ={require("../assets/background1.jpg") } style = {styles.background}>
                <Image resizeMode="contain" source ={require("../assets/logo.png")} style={styles.logo}/>
                
                <Text style={styles.loginText}>My Thoughts</Text>

                <View style={styles.buttonContainer}>
                    <View style={styles.loginButton}>
                        <AppButton title= "Login" backgroundColor="#8aceff" onPress={() => navigation.navigate('Profile')}/>
                    </View>
                </View>
            </ImageBackground>
    );
}

const appStyles = StyleSheet.create({
    appButtonContainer : {
        elevation: 8,
        backgroundColor: colors.primary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        width: "60%"
    },
    appButtonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        fontFamily: "Verdana",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer:
    {
        height: "30%",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        padding: 5,
    },
    logo: {
        width: 300,
        height: 100,
        position: "absolute",
        top: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
    },
    loginText: Platform.OS === 'android' ? {
        fontFamily: "Papyrus",
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center",
        elevation: 2,
        flex: 1,
        paddingTop: "50%",
        
    } : {
        fontFamily: "Papyrus",
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: -5,
            height: 15,
        },
        shadowOpacity: 0.85,
        shadowRadius: 2.84,
        alignSelf: "center",
        flex: 1,
        paddingTop: "50%",
    },
})

export default WelcomeScreen;