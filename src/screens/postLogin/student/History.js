import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const History = () => {
  return (
    <View style={styles.container}>
      <Text>Basic screen History</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default History;
