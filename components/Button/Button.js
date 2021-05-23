import React from 'react'
import { Text, View, Pressable } from "react-native";
import styles from './Styles'
    // we are destructing the props
function Button({type,content, onPress}) {
        // doing this makes it easy to understand
    // const type = props.type
    // const content = props.content
    // const name = props.name
    // const onPress = props.onPress

    const background = type == 'primary' ? '#171a20cc' : '#ffffffa6'
    const textColor = type == 'primary' ? 'white' : '#171a20'
    console.log(type,name);
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button,{backgroundColor:background}]}
                onPress={()=>{onPress()}}>
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>

            </Pressable>
        </View>
    )
}

export default Button

