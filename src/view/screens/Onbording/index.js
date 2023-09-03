import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Appearance } from 'react-native';
import { appImages } from '../../../assets/utilities';
import styles from './styles';

import { useSelector, useDispatch } from 'react-redux';
function App({ navigation }) {

    const {
        darkbg,
        lightbg,
    } = useSelector(state => state.userReducer);
    const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setIsDarkMode(colorScheme === 'dark');
        });

        return () => {
            subscription.remove();
        };
    }, []);

    useEffect(() => {
        // This code will run after the component has rendered.
        const timerId = setTimeout(() => {
            navigation.navigate('Onbording_secound')
        }, 5000);

        // Cleanup function to clear the timeout if the component unmounts or if dependencies change.
        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <View style={[styles.bg, { backgroundColor: isDarkMode ? darkbg : lightbg }]}>
            <Image source={appImages.logo1} style={styles.img} />
        </View>
    );
}

export default App;
