import React from "react";
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

{/* style={styles.input} */}

function Setting(props) {
    return(
      <View style={styles.input}>
      <Text style={styles.input}>
        Welcome: {props.userEmail}
      </Text> 

      <Button
      title="Log Out"
      onPress={() => props.setUserLoggedIn(false)}
    />
      </View>
    )
  }

  const styles = StyleSheet.create({
    input: {
      color: 'white',
      padding: -5,
    },
  });


export default Setting;