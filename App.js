import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './components/MainTabScreen'
import {DrawerContent} from './components/DrawContent';
import {AsyncStorage} from 'react-native';
import Support from './components/Support'
import Settings from './components/Settings'
import BookMarks from './components/BookMarks'
import RootStackScreen from './components/RootStack'

const Drawer = createDrawerNavigator();
// AsyncStorage.setItem('name', 'Something')
export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator initialRouteName="Home"
        drawerContent = {props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={Support} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="BookMarks" component={BookMarks} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

