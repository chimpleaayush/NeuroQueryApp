import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Basic screen Profile</Text>
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
export default Profile;
