import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { useLinkProps } from '@react-navigation/native';

// const setUserLoggedIn = (props) => {
const setUserLoggedIn = () => {
  const [phone, onChangePhoneNumber] = React.useState(null);
  const [number, onChangeOTP] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhoneNumber}
        value={phone}
        placeholder="phone number"
        keyboardType="numeric"
      />
      <View>
      <Button
      title="send otp"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin/'+phone, {method: 'post'})}
     />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeOTP}
        value={number}
        placeholder="one time passcode"
        keyboardType="numeric"

      />
      <View>
      <Button
      title="Log In"
      // onPress={() => {props.setUserLoggedIn(true)} } 

      onPress={() => {
        fetch('https://dev.stedi.me/twofactorlogin' ,{
          method: 'post',
          body: JSON.stringify({
            phoneNumber: phone,
            oneTimePassword: number
          })
        })
      // .then((response) => console.log(response.text()));
      .then((response) => {
        //console.log(response.text());
        // console.log(result);

        if(response.status == 200){
          {props.setUserLoggedIn(true)}
        } 
        else {
          alert('Please check your login information.');
        }
      });
      
      // .then((result) => {
      //   //console.log(response.text());
      //   console.log(result);

      //   if(result.status() == 200){
      //     {props.setUserLoggedIn(true)}
      //   } 
      //   else {
      //     alert('Please check your login information.');
      //   }
      // });
      }
    } 
  />  
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default setUserLoggedIn;

// export default function SettingsScreen() {
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       paddingHorizontal: 10,
//     },
//     message: {
//       textAlign: 'center',

//     }
  
//   })
//   return(
//     <View style={styles.container}>
//       <Text style={styles.message}>This is the settings page</Text>
//     </View>
//   )

// }