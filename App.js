import React , {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer,
   DarkTheme as NavigationDarkTheme,
   DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './components/MainTabScreen'
import {DrawerContent} from './components/DrawContent';
import {AsyncStorage} from 'react-native';
import Support from './components/Support'
import Settings from './components/Settings'
import BookMarks from './components/BookMarks'
import RootStackScreen from './components/RootStack'
import { ActivityIndicator } from 'react-native-paper';
import {Provider as PaperProvider,
   DarkTheme as PaperDarkTheme,
   DefaultTheme as PaperDefaultTheme
} from 'react-native-paper'

import {AuthContext} from './components/context'

const Drawer = createDrawerNavigator();

export default function App() {

  // const[isLoading, setisLoading] = useState(true)
  // const[userToken, setuserToken] = useState(null)

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const initialLoginState = {
    isLoading : true,
    userName : null,
    userToken: null
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors : {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text : '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors : {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text : '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userName: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };

      case 'REGISTER':
          return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false
          };
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      let userToken;
      userToken = null;
      if(userName === 'user' && password === 'pass'){
        userToken = 'dkjdsd';
        try{
          await AsyncStorage.setItem('userToken',userToken)
        }catch(e){
          console.log(e)
        }
      }
      console.log('user token' , userToken)
      dispatch({type : "LOGIN", id : userName, token: userToken})
    },
    signOut: async() => {
      // setuserToken(null);
      // setisLoading(false);
      try{
        await AsyncStorage.removeItem('userToken')
      }catch(e){
        console.log(e)
      }
      dispatch({type : "LOGOUT"})

    },
    signUp: () => {
      setuserToken('fgk');
      setisLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme = !isDarkTheme)
    }
  }),[])

  useEffect(() => {
    setTimeout(async() => {
      // setisLoading(false);
      let userToken;
      userToken = null
      try{
        userToken = await AsyncStorage.getItem('userToken')
      }catch(e){
        console.log(e)
      }
      dispatch({type: "REGISTER", token: userToken})
    }, 2000);
  }, []);

  if(loginState.isLoading){
    return(
      <View style = {{flex : 1, justifyContent : 'center', alignItems: 'center'}}>
        <ActivityIndicator size = "large" />
      </View>
    );
  }

  return (
    <PaperProvider theme = {PaperDarkTheme}>
        <AuthContext.Provider value = {authContext}>
          <NavigationContainer theme = {theme}>
          {loginState.userToken === null ? (
              <RootStackScreen />
          ):
          (
              <Drawer.Navigator initialRouteName="Home"
              drawerContent = {props => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="Support" component={Support} />
              <Drawer.Screen name="Settings" component={Settings} />
              <Drawer.Screen name="BookMarks" component={BookMarks} />
            </Drawer.Navigator>
          )}
        
          
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
    
  );
}

