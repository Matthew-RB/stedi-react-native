import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { useLinkProps } from '@react-navigation/native';

// const setUserLoggedIn = (props) => {
const LoggedIn = (props) => {
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
      title="Login"
      style={styles.btn}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoggedIn;

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