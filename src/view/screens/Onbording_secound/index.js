import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Appearance } from 'react-native';
import { appImages } from '../../../assets/utilities';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

function App({ navigation }) {
    useEffect(() => {
        // This code will run after the component has rendered.
        const timerId = setTimeout(() => {
            navigation.navigate('Swiper')
        }, 5000);

        // Cleanup function to clear the timeout if the component unmounts or if dependencies change.
        return () => {
            clearTimeout(timerId);
        };
    }, []);
    return (
        <View style={styles.bg}>
            <LinearGradient
                colors={['#AC1AF0', '#F62E8E']}
                style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center'
                }}
                start={{ x: 1.1, y: 0.4 }} // Right top
                end={{ x: 0, y: 0.7 }}   // Left bottom
                locations={[0.2, 0.9, 1]} // Color stop positions
            >
                <Image source={appImages.logo2} style={styles.img} />
            </LinearGradient>
        </View>
    );
}

export default App;
