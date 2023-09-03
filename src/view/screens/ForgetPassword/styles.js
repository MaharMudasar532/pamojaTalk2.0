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
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(15),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtlast: {
    
    fontSize: responsiveScreenFontSize(1.9),
    marginTop: '110%',
    marginBotton: '5%',
    alignSelf: 'center'
  },

  txt: {
    color: '#FF4B26'
  },
  txtf: {
    color: '#626262',
    fontSize: responsiveScreenFontSize(1.6),
  },
  txts: {
    color: '#676767',
    fontSize: responsiveScreenFontSize(1.8),
    marginRight: '3%',
    marginTop: '30%',
    alignSelf: 'center'
  },
  underline: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 20
  }
});

export default STYLES;
