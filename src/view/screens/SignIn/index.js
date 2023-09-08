import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, Appearance } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSignin, statusCodes, GoogleAuth } from '@react-native-google-signin/google-signin';

import Main_screens from '../../../assets/Custom/Main_screens';
import { StatusBar } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";


import { useSelector, useDispatch } from 'react-redux';

import Eye from '../../../assets/svg/eye.svg';
import Lock from '../../../assets/svg/lock.svg';
import User from '../../../assets/svg/User.svg';
import F from '../../../assets/svg/f.svg';
import G from '../../../assets/svg/g.svg';
import A from '../../../assets/svg/a.svg';

import WA from '../../../assets/svg/wa.svg';

export default function Validations({ navigation }) {

    const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

    const {
        darkbg,
        lightbg,
        purple,
        lightgray,
        darkgray,


        doubledark,
        soliddark,
        darkmodetext,
        isdarkmode,
        Colors,
    } = useSelector(state => state.userReducer);

    const { bgColor, pink, BlackOrPurple, lightGreyHeading, btnTxt, headingColor, inputBorderCol, inputPlacCol, greyOrDark } = Colors;

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setIsDarkMode(colorScheme === 'dark');
        });

        return () => {
            subscription.remove();
        };
    }, []);
    // ________________________GOOGLE____________________________
    const googlelogin = async () => {
        signOut()
        try {
            GoogleSignin.configure()
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('user info', userInfo)
            console.log('user info', userInfo.user.familyName)
            console.log('user info', userInfo.user.givenName)
            console.log('user info', userInfo.user.email)
            console.log('user info', userInfo.user.photo)

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log(error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log(error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error)
            } else {
                // some other error happened
                console.log(error)
            }
        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            //   this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };






    const ValidationsSchema = Yup.object().shape({
        email: Yup.string().email('Please enter valid email').required('Email Address is Required'),
        password: Yup.string()
            .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
            .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
            .matches(/\d/, 'Password must have a number')
            .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    });

    const [showPassword, setShowPassword] = useState(false);

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? darkbg : lightbg, }]}>
            <StatusBar hidden={true} />

            <View style={{ marginHorizontal: '7%', marginTop: '10%', }}>
                <Main_screens
                    txt1="Welcome Back!"
                    txt2="Sign In"
                />
                <Formik
                    validationSchema={ValidationsSchema}
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={values => console.log(values)}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                    }) => (
                        <>
                            <View style={[styles.textInputContainer,
                            {
                                backgroundColor: isDarkMode ? darkgray : lightbg,
                                borderColor: isDarkMode ? darkgray : '#C4C4C4',
                            }]}>
                                <User style={{ marginLeft: '3%' }} />
                                <TextInput
                                    name="email"
                                    placeholder="Username or Email"
                                    placeholderTextColor={isDarkMode ? lightbg : '#676767'}
                                    style={styles.textInput}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                            </View>
                            {errors.email && (
                                <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                            )}
                            <View style={[styles.textInputContainer,
                            {
                                backgroundColor: isDarkMode ? darkgray : lightbg,
                                borderColor: isDarkMode ? darkgray : '#C4C4C4',
                            }]}>
                                <Lock style={{ marginLeft: '3%' }} />
                                <TextInput
                                    name="password"
                                    placeholder="Password"
                                    placeholderTextColor={isDarkMode ? lightbg : '#676767'}
                                    style={styles.textInput}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.iconContainer}
                                >
                                    {showPassword ?
                                        <MaterialCommunityIcons
                                            name={'eye-off'}
                                            size={23}
                                            color={'#CCCCCC'}
                                            style={{ marginRight: '3%' }}
                                        />
                                        : <Eye style={{ marginRight: '3%' }} />}
                                </TouchableOpacity>
                            </View>
                            {errors.password && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.password}
                                </Text>
                            )}
                            {/* <Button
                                onPress={handleSubmit}
                                title="SUBMIT"
                                disabled={!isValid}
                            /> */}
                        </>
                    )}
                </Formik>
                <Text
                    onPress={() => { navigation.navigate('ForgetPassword') }}
                    style={[styles.txtf, { color: isDarkMode ? lightbg : '#0D0D0D', }]}>Forgot Password?</Text>

                <Text style={styles.txts}>sign in with</Text>


                <View style={styles.btnv}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { googlelogin() }}
                        style={[styles.btn, { backgroundColor: isDarkMode ? darkgray : lightgray }]}>
                        <G />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={[styles.btn, { backgroundColor: isDarkMode ? darkgray : lightgray }]}>
                        {isDarkMode ?
                            <WA /> :
                            <A />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={[styles.btn, { backgroundColor: isDarkMode ? darkgray : lightgray }]}>
                        <F />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.txtlast, { color: isDarkMode ? '#FFFFFF' : '#181818' }]}>Don’t have an account?<Text
                    style={styles.txtlast1}
                    onPress={() => { navigation.navigate('SignUp') }}> Sign up</Text></Text>



            </View>
        </ScrollView>
    );
}
