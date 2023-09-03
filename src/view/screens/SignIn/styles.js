import { StyleSheet } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
const STYLES = StyleSheet.create({
  container: {
    flex: 1,
 
  },

  textInputContainer: {
    // backgroundColor:'pink',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    margin: 10,
   
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },

  icon: {
    marginHorizontal: 10,
    color: 'gray', // Customize the icon color as needed
  },

  textInput: {
    flex: 1,
    marginHorizontal: '2%'
  },
  btnv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginHorizontal: '12%'
  },
  btn: {
   
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtlast: {
    fontSize: responsiveScreenFontSize(1.9),
    alignSelf: 'center',
    marginTop: '30%',
    marginBottom: '5%'
  },
  txtlast1: {
    color: '#F62E8E',
    fontWeight: 'bold'
  },
  txtf: {
   
    fontSize: responsiveScreenFontSize(1.8),
    marginRight: '3%',
    alignSelf: 'flex-end'
  },
  txts: {
    color: '#676767',
    fontSize: responsiveScreenFontSize(1.8),
    marginRight: '3%',
    marginTop: '30%',
    alignSelf: 'center'
  }
});

export default STYLES;
