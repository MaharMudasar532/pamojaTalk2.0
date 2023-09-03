import 'react-native-gesture-handler';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Provider } from 'react-redux';
import { Store } from './src/assets/redux/store';
import { useSelector, useDispatch } from 'react-redux';

import Onbording from './src/view/screens/Onbording/index';
import Onbording_secound from './src/view/screens/Onbording_secound/index';
import Swiper from './src/view/screens/Swiper/index';
import SignIn from './src/view/screens/SignIn/index';
import SignUp from './src/view/screens/SignUp/index';
import ForgetPassword from './src/view/screens/ForgetPassword/index';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
LogBox.ignoreAllLogs();



import {
  StyleSheet,
  Text,
  View, Image, ImageBackground,
  TextInput,
  TouchableOpacity,
  LogBox,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';



// import B1 from './src/assets/svg/b1.svg'


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onbording"
          component={Onbording}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onbording_secound"
          component={Onbording_secound}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Swiper"
          component={Swiper}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default App;
