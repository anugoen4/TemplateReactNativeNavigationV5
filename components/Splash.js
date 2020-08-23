import React from 'react'
import {View, 
    TouchableOpacity,
    Text, Button, StyleSheet, Dimensions, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'


const Splash = ({navigation}) => {
    return (
        <View style = {styles.container} >
            <View style = {styles.header}>
                <Animatable.Image 
                    animation = "bounceIn"
                    duration = "1500"
                     source = {{
                        uri : 'https://raw.githubusercontent.com/itzpradip/react-navigation-v5-mix/master/assets/logo.png'
                    }}
                    style = {styles.logo}
                    resizeMode = 'stretch'
                />
            </View>
            <Animatable.View style = {styles.footer}
                animation = "fadeInUpBig">
                <Text style = {styles.title} >Stay Connected</Text>
                <Text style = {styles.text} >Sign In</Text>
                <View style = {styles.button}>
                    <TouchableOpacity onPress = {() => {navigation.navigate('SignIn')}}>
                        <LinearGradient
                            colors = {['#08d4c4', '#01ab9d']}
                            style = {styles.signIn}
                        >
                            
                        < Text style = {styles.textSign}> Get Started </Text>
                        
                        <MaterialIcons
                            name = "navigate-next"
                            color = "#fff"
                            size = {24}
                         />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default Splash;

const {height} = Dimensions.get('screen')
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    text: {
        color : 'grey',
        marginTop: 5
    },
    title: {
        color : '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button : {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn : {
        width : 150,
        height: 40,
        justifyContent: 'center',
        alignItems :'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign : {
        color : 'white',
        fontWeight : 'bold',
    }
})