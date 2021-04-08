import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import App from '../../App';

const AppButton = ({ onPress, title, backgroundColor }) => (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            appStyles.appButtonContainer,
            backgroundColor && { backgroundColor }]}>

        <Text style={appStyles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

function MemoriesScreen({navigation}) {
    return (
        <ImageBackground source ={require("../assets/background1.jpg") } style = {styles.background}>
            <View style = {styles.topButtonContainer}>
                <AppButton title="Go Back" onPress={() => navigation.navigate('Profile')}></AppButton>
            </View>
            <View style = {styles.memoriesWall}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    memoriesWall: {
        width: "90%",
        height: "80%",
        backgroundColor: 'rgba(204, 242, 211, 0.3)',
        borderColor: "black",
        borderRadius: 25,
        borderWidth: 5,
    },
    topButtonContainer: {
        width: "95%",
        height: "10%",
        alignContent: "flex-start",
        flexDirection: "row",
        alignItems: "flex-start"
    }
})

const appStyles = StyleSheet.create({
    appButtonContainer : {
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,

    },
    appButtonText: {
        fontSize: 10,
        color: "#000",
        fontWeight: "bold",
        fontFamily: "Verdana",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})
export default MemoriesScreen;