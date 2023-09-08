import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Appearance } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Btnnext from '../svg/btnnext.svg';


import { useSelector, useDispatch } from 'react-redux';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

export default function Main_screens(props) {
    const navigation = useNavigation()

    const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

    const {
        darkbg,
        lightbg,
        double,
        solid,
        firstdark,
        seconddark,
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
    return (
        <View>
            <Text style={{
                width: responsiveScreenWidth(80), height: 100,
                fontSize: responsiveScreenFontSize(5),
                color: isDarkMode ? lightbg : darkbg,
                fontWeight: 'bold',
            }}>
                {props.txt1}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: isDarkMode ? lightbg : darkbg,
                    fontSize: responsiveScreenFontSize(3.5)
                }}>
                    {props.txt2}
                </Text>
                <Btnnext />
            </View>
        </View>
    );
}