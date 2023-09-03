import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, Appearance } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import Main_screens from '../../../assets/Custom/Main_screens';
import { StatusBar } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import Eye from '../../../assets/svg/eye.svg';
import Lock from '../../../assets/svg/lock.svg';
import User from '../../../assets/svg/User.svg';
import F from '../../../assets/svg/f.svg';
import G from '../../../assets/svg/g.svg';
import A from '../../../assets/svg/a.svg';
import Mail from '../../../assets/svg/Mail.svg';


import { useSelector, useDispatch } from 'react-redux';

export default function Validations({navigation}) {

    const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

    const {
        darkbg,
        lightbg,
        purple,
        pink,
        lightgray,
        darkgray,


        doubledark,
        soliddark,
        darkmodetext,
        isdarkmode,
    } = useSelector(state => state.userReducer);

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setIsDarkMode(colorScheme === 'dark');
        });

        return () => {
            subscription.remove();
        };
    }, []);
    const ValidationsSchema = Yup.object().shape({
        email: Yup.string().email('Please enter valid email').required('Email Address is Required'),

    });

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? darkbg : lightbg, }]}>

            <StatusBar hidden={true} />

            <View style={{ marginHorizontal: '7%', marginTop: '10%', }}>
                <Main_screens
                    txt1="Forgot      password?"
                    txt2="Send Code"
                />
                <Formik
                    validationSchema={ValidationsSchema}
                    initialValues={{
                        email: '',
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
                                    placeholderTextColor={isDarkMode?lightbg:'#676767'}
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

                        </>
                    )}
                </Formik>
                <Text style={styles.txt}>* <Text style={styles.txtf}>
                    We will send you a message to set or reset your new password
                </Text>
                </Text>

                <Text style={[styles.txtlast,{color:isDarkMode?'#676767': '#181818',}]} 
                onPress={() => { navigation.goBack() }}>Back
                </Text>



            </View>
        </ScrollView>
    );
}
