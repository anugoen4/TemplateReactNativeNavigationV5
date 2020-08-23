import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home'
import DetailScreen from './Details'
import ProfileScreen from './Profile'
import ExploreScreen from './Explore'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
     >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />

        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
            tabBarLabel: 'Explore',
            tabBarColor: '#d02860',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
            ),
            }}
      />    
    </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions = {{
        headerStyle : {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold'
        }
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options = {{
          title: 'OverView',
          headerLeft: () => (
            <Icon.Button name = 'ios-menu' size = {25}
              backgroundColor = '#009387' onPress ={() => {
                  navigation.openDrawer()
              }}
              ></Icon.Button>
          )
      }} 
        />
      {/* <HomeStack.Screen name="Details" component={DetailScreen} /> */}
    </HomeStack.Navigator>
  )
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions = {{
        headerStyle : {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight : 'bold'
        }
    } }>
      <DetailsStack.Screen name="Details" component={DetailScreen} 
        options = {{
          headerLeft: () => (
            <Icon.Button name = 'ios-menu' size = {25}
              backgroundColor = '#009387' onPress ={() => {
                  navigation.openDrawer()
              }}
              ></Icon.Button>
          )
      }}/>
  
    </DetailsStack.Navigator>
  )
  