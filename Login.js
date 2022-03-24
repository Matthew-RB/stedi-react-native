import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Alert, Text, TouchableOpacity, View } from 'react-native';
import {Button} from 'react-native-elements'
import { Accelerometer } from 'expo-sensors';
import { useLinkProps } from '@react-navigation/native';

// const setUserLoggedIn = (props) => {
const LoggedIn = (props) => {
  const [phone, onChangePhoneNumber] = React.useState(null);
  const [number, onChangeOTP] = React.useState(null);

  return (
    <SafeAreaView style={styles.page}>
      <Text 
      style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhoneNumber}
        value={phone}
        placeholder="phone number"
        keyboardType="numeric"
      />

      <View style={styles.container}>
      <Button style={styles.btn}
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
      <View style={styles.container}>
      <Button style={styles.btn}
      title="Login"
      //onPress={() => {props.setUserLoggedIn(true)}} 
       onPress={() => {
          fetch('https://dev.stedi.me/twofactorlogin' ,{method: 'POST',
          body: JSON.stringify({
            phoneNumber: phone,
            oneTimePassword: number
          })})

          .then((response) => { //{return response.status})
           const statuscode = response.status
           const data = response.text()
           return Promise.all([statuscode, data])
          })
          .then(([response, data])  =>{
              if(response == 200){
                props.setUserLoggedIn(true)
                console.log(data)
                //.then((response) => { result}
                fetch('https://dev.stedi.me/validate/'+data)
                .then((emailResponse)=> {
                  const useradress = emailResponse.text()
                  return useradress
                })
                .then((email)=>{
                  console.log(email)
                  props.setuserEmail(email)
                })
              }
              else{
                alert('Please check your login information.');
              }
            });
          }
        }
  />  
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  input: {
    alignItems: 'center',
    height: 45,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  btn: {
    //flexDirection: "row",
    alignItems: 'center',
    width: 90,
    height: 40,
    },
  text: {
    alignItems: 'center',
    paddingTop: 150,
    color: 'black',
    fontWeight: '600',
    fontSize: 30,
    textAlign: 'center'
    },

});

export default LoggedIn;
