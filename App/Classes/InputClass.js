import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from "../config/colors";
import { FlatList } from 'react-native-gesture-handler';

class Inputs extends Component {
   
   constructor(props) {
      super(props);

      this.state = {
         message: '',
         date: '',
         savedMessage: '',
         messageArray: [],
      };

      this.getData();
   }

   handleMessage = (text) => {
      this.setState({ message: text })
   }

   onSubmitMessage = async () => {
      try {
         await this.setState(state => {
            this.state.messageArray.push(state.message);
         })
         await AsyncStorage.setItem('messageArray', JSON.stringify({messageArray: this.state.messageArray}));
         console.log(this.state.message + " was added to the array");
      } catch(err) {
         console.log(err)
      }
   }

   onCheckContent = async () => {
      try {
         this.state.messageArray.map(item => (console.log(item)));
      } catch(err) {
         console.log(err)
      }
   }
   onClearContent = async () => {
      console.log("Clearing Content");
      AsyncStorage.clear();
   }

   getData = async () => {
      try {


        //const value = await AsyncStorage.getItem('savedMessage');
         const savedmessage = await AsyncStorage.getItem('messageArray');
         const savedMessage = JSON.parse(savedmessage);

        if (savedMessage !== null) {
            this.setState({
               ...savedMessage
            })
            console.log("Sucess!" + this.state.messageArray[0]);
        }
      } catch (err) {
        // Error retrieving data
      }
    };

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
            <View style= {styles.buttonContainer}> 
               <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                     () => this.onSubmitMessage(this.state.message)
                  }>
                  <Text style = {styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style = {styles.checkContentButton}
                  onPress = {this.onCheckContent}>
                  <Text style = {styles.submitButtonText}> Check Content </Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style = {styles.checkContentButton}
                  onPress = {this.onClearContent}>
                  <Text style = {styles.submitButtonText}> Clear Content </Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   buttonContainer: {
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
      width: "100%"
   },
   checkContentButton: {
      backgroundColor: "#faffd6",
      padding: 10,
      margin: 15,
      width: 150,
      alignContent: "center",
      alignItems: "center",
      borderRadius: 10,
      elevation: 5,
   },
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
      elevation: 5,
   },
   submitButtonText:{
      color: 'black'
   },
   listContainer: {
      backgroundColor: "white",
      width: 100,
      height: 100,
   }
})