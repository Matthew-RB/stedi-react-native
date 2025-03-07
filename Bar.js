import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import AppName from "./AppName";
import Setting from "./Setting";

function Bar(props) {
    return(
        <View style={styles.bar}>
            <AppName />
            <Setting setUserLoggedIn={props.setUserLoggedIn} userEmail={props.userEmail}/>  
        </View>
    )
  }

export default Bar

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '13%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})