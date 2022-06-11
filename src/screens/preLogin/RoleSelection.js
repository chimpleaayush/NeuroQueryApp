
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { Color } from '../../asset';
const RoleSelection = ({navigation}) => {
  const navigateToLogin=()=>{
    navigation.navigate('Login')
  }
  return (
    <ImageBackground source={null} style={styles.container}>
          <Text style={styles.login}>Log/Register in As</Text>
        <TouchableOpacity style={styles.button}  onPress={navigateToLogin}>
          <Text style={styles.text}>Student</Text>
        </TouchableOpacity>
      

      <TouchableOpacity style={styles.button}  onPress={navigateToLogin}>
          <Text style={styles.text}>Mentor</Text>
        </TouchableOpacity>

        {/* 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 */}
      
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text:{
    fontSize: 16,
    fontWeight:'bold',
    color: Color.blueText,
  },
  login:{fontSize: 24,
    fontWeight:'bold',},
  button:{
backgroundColor: Color.bgWhite,
paddingHorizontal:20,
paddingVertical:10,
borderRadius: 5
  }
  
});
export default RoleSelection;
