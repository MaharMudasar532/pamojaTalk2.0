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
    backgroundColor: '#F5F5F5',
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtlast: {
    
    fontSize: responsiveScreenFontSize(1.9),
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: '5%'
  },
  txtlast1: {
    color: '#F62E8E',
    fontWeight: 'bold'
  },
  txtf: {
    color: '#626262',
    marginLeft: '2%',
    fontSize: responsiveScreenFontSize(1.6),
  },
  txts: {
    color: '#676767',
    fontSize: responsiveScreenFontSize(1.8),
    marginRight: '3%',
    marginTop: '20%',
    alignSelf: 'center'
  },
  underline: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    lineHeight: 20
  },
  btn1: {
    borderRadius: 4,
    borderWidth: 2,
    height: 18,
    width: 18,
    marginTop: 4,
    borderColor: '#F62E8E'
  }
});

export default STYLES;
