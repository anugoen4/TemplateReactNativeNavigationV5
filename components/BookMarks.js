import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';

const BookMarks = (props) => {
    // console.log(props.route.params.TestProps)
    const prop = props.route.params.TestProps
    return (
        <View style = {styles.container} >
            <Text>{prop} Screen</Text>
            <Button 
                title = "Click Here"
                onPress = {() => alert("Clicked Me")}
            />
        </View>
    )
}

export default BookMarks;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center'
    }
})