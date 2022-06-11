import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const Tickets = () => {
  return (
    <View style={styles.container}>
      <Text>Basic screen Tickets</Text>
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
export default Tickets;
