import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
export default function CustomButton(props) {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    onPress={props.customClick}>
      <LinearGradient
        colors={['#AC1AF0', '#F62E8E']}
        start={{ x: 1.1, y: 0.4 }}
        end={{ x: 0, y: 0.7 }}
        locations={[0.2, 0.9, 1]}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    width: 270,
    paddingVertical: 12, // Adjust as needed
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: responsiveScreenFontSize(2.4),
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
});
