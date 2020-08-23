import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class DetailScreen extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
    
        // const test = this.props.route.params.test
        const navigation = this.props.navigation
        return (
            <View style={styles.container}>
              <Text>Detail Screen</Text>
              {/* <Text>{test}</Text> */}
              
              <Button 
                title = "Go to Detail Screen...Again"
                onPress = {() => navigation.push("Details", {test : "Anurag"})}
              />
        
              <Button 
                title = "Go to Home Screen"
                onPress = {() => navigation.navigate("Home")}
              />
        
              <Button 
                title = "Go Back"
                onPress = {() => navigation.goBack()}
              />  
        
                <Button 
                title = "Go to Frrst Screen"
                onPress = {() => navigation.popToTop()}
              />
            </View>
          );
    }
  }

  export default DetailScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  