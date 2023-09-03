import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
const STYLES = StyleSheet.create({
    container: {
        flex: 1,
    },
    v: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '7%',
        width: '15%'
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '0%',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'pink'
    },
    button: {
        paddingHorizontal: '5%',
        width: '100%',
        alignSelf: 'center',
    },
    buttonTextTop: {
        color: 'white',
        marginHorizontal: '15%',
        fontSize: responsiveScreenFontSize(3.5),
        textAlign: 'center',
        // fontWeight: 'bold',
        marginTop: '50%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    paginationStyle: {
        bottom: '30%', // Adjust this value to center the pagination dots vertically.
    },
    txt: {
        color: 'white',
        fontSize: responsiveScreenFontSize(1.7),
    },
    btn: {
        alignSelf: 'flex-end',
        marginHorizontal: '10%',
        marginBottom: '5%',
        marginTop: '20%'
    }
})

export default STYLES; 