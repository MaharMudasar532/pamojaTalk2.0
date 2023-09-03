import React, { useRef, useState } from 'react';
import { View, Image, StatusBar, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import { appImages } from '../../../assets/utilities';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../assets/Custom/Custom_Button';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


const images = [
    appImages.bg1, // Replace with your image paths
    appImages.bg2,
    appImages.bg3,
];

const slideTexts = [
    'Discover Your Digital Marketplace',
    'Shop Together, Share Together',
    'Your Style, Your Story, Your Store',
];

function App({navigation}) {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        // Go to the next slide
        swiperRef.current.scrollBy(1);
    };

    const onIndexChanged = (index) => {
        setCurrentSlide(index);
        console.log('index--->', index)
        if (index == 3)
            navigation.navigate('SignIn')
    };

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={true}
            // backgroundColor="gray" 
            />
            <Swiper
                style={styles.wrapper}
                loop={false}
                ref={swiperRef}
                // paginationStyle={styles.paginationStyle}
                showsPagination={false}
                onIndexChanged={onIndexChanged}
            >
                {images.map((image, index) => (
                    <View style={styles.slide} key={index}>
                        <ImageBackground source={image} style={styles.image} resizeMode="stretch">
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonTextTop}>{slideTexts[currentSlide]}</Text>
                                <View style={styles.v}>

                                    <MaterialIcons name={'lens'} size={5} color={'#FFFFFF'} />
                                    {currentSlide == 0 ?
                                        <MaterialIcons name={'radio-button-on'} size={9} color={'#FFFFFF'}  />
                                        :
                                        <MaterialIcons name={'lens'} size={5} color={'#FFFFFF'} />
                                    }
                                    {currentSlide == 1 ?
                                        <MaterialIcons name={'radio-button-on'} size={9} color={'#FFFFFF'} />
                                        :
                                        <MaterialIcons name={'lens'} size={5} color={'#FFFFFF'} />
                                    }
                                    {currentSlide == 2 ?
                                        <MaterialIcons name={'radio-button-on'} size={9} color={'#FFFFFF'} />
                                        :
                                        <MaterialIcons name={'lens'} size={5} color={'#FFFFFF'} />
                                    }

                                </View>
                                <CustomButton
                                    title="Next"
                                    load={false}
                                    customClick={() => {
                                        goToNextSlide()
                                    }}
                                />
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { navigation.navigate('SignIn') }}
                                    style={styles.btn}
                                >
                                    <Text style={styles.txt}>Skip</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </Swiper>

        </View>
    );
};

export default App;
