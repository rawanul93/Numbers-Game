import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, Alert, Pressable, Text } from 'react-native'
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';


const StartGameScreen = ({onPickNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('');



    const numberInputHandler = (input) => { //already gets passed input automatically from react native when using onChangeText in TextInput component
        setEnteredNumber(input);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
       const chosenNumber = parseInt(enteredNumber); // converts a string to an integer

       if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) { // isNaN is a built in js function that checks if the value passed to it is a number or not
        //show alert
        Alert.alert('Invalid number!', 'Please enter a valid number between 1-99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
        return; //cancel the execution of this function if the criterea is not met.
       }

       onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType='number-pad' 
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
                
            </Card>

        </View>
        
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({

    screen: {
        paddingHorizontal: 40,
        paddingTop: 20
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        color: Colors.secondary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },


    buttonsContainer: {
        flexDirection: 'row'
    },

    buttonContainer: {
        flex: 1
    }
})