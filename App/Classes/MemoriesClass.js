import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from "../config/colors";

class MemoriesClass extends Component {

    state = {
      messageArray: [],
    }
   constructor(props) {
      super(props);
      this.getData();
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
         
         <View syle = {styles.listContainer} >{
            this.state.messageArray.map(item => (
               <View style={styles.memoriesContainer}>
                  <Text key={item} syle = {styles.listContainer}>{item}</Text>
               </View>
            ))}
         </View >
      )
   }
}
export default MemoriesClass

const styles = StyleSheet.create({
   memoriesContainer: {
      borderColor: "black",
      borderWidth: 3,
      borderRadius: 10,
      padding: 10,
      marginTop: 5,
   }
})