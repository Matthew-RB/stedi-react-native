import React from "react";
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Setting(props) {
    return(
      <View>
      <Text>Welcome: {props.userEmail}</Text>
      <Button
      title="Log Out"
      onPress={() => props.setUserLoggedIn(false)}
    />
      </View>
    )
  }

export default Setting;