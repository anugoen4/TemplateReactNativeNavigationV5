import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import Splash from './Splash'
import SignIn from './signIn'
import SignUp from './signUp'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode = 'none'>
        <RootStack.Screen name = 'Splash' component = {Splash} />
        <RootStack.Screen name = 'SignIn' component = {SignIn} />
        <RootStack.Screen name = 'SignUp' component = {SignUp} />
    </RootStack.Navigator>
)


export default RootStackScreen;