import React from 'react'
import {StyleSheet, View, Text, Pressable} from 'react-native'
import Colors from '../../constants/colors'

const PrimaryButton = ({children, onPress}) => {

    return (

        <View style={
            styles.buttonOuterContainer
        }>
            <Pressable style={({pressed}) => pressed? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} onPress={onPress}
                android_ripple={
                    {color: Colors.primary500}
            }>
                <Text style={
                    styles.buttonText
                }>
                    {children}</Text>
            </Pressable>
        </View>


    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden' // all styling inside this will be clipped if it goes outside.
    },

    buttonInnerContainer: {
        backgroundColor: Colors.primary600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: 'black', // ios specific
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 0.25
    },
    buttonText: {
        fontFamily: 'open-sans',
        color: 'white',
        textAlign: 'center',
    },

    pressed: { // adding this extra stying for ios
        opacity: 0.75,
    }
})
