import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import colors from "../config/colors";

class Inputs extends Component {

   state = {
      message: '',
   }

   handleMessage = (text) => {
      this.setState({ message: text })
   }

   submitMessage = (message) => {
      alert('email: ' + message)
   }

   render() {
      return (
         <View style = {styles.container}>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "What's on your mind today, Tim?"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               multiline
               numberOfLines={5} 
               onChangeText = {this.handleMessage}
               />
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submitMessage(this.state.message)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      alignItems: "flex-end"
   },
   input: {
      margin: 15,
      padding: 5,
      height: 40,
      borderColor: "black",
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: "#faffd6",
      padding: 10,
      margin: 15,
      width: 80,
      alignContent: "center",
      alignItems: "center",
      borderRadius: 10,
   },
   submitButtonText:{
      color: 'black'
   }
})