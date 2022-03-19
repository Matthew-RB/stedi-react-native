import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

const Icons = () => {
  return (
    <View style={styles.icons}>
      <Card syle={styles.card}>
        <Image source={require('./image/ImproveBalance.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image source={require('./image/LearnAboutBalance.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image source={require('./image/Profile.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image source={require('./image/StatsandImprovement.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image source={require('./image/STEDITimer.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image source={require('./image/Tutorial.png')}></Image>
      </Card>
    </View>
  );
};

export default Icons;

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    height: '85%'
  },
});
