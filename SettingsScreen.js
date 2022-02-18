import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const UselessTextInput = () => {
  const [text, onChangePhoneNumber] = React.useState(null);
  const [number, onChangeOTP] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhoneNumber}
        value={text}
        placeholder="phone number"
        keyboardType="numeric"
      />
      <View>
      <Button
      title="Log In"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeOTP}
        value={number}
        placeholder="one time passcode"
        keyboardType="numeric"
      />
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

export default UselessTextInput;

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