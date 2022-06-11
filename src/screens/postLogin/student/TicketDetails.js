import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const TicketDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Basic screen TicketDetails</Text>
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
export default TicketDetails;
