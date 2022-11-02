import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Alert, useWindowDimensions, KeyboardAvoidingView,  ScrollView } from 'react-native'
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';


const StartGameScreen = ({onPickNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions(); // this hook will watch the device dimensions and we'll get an updated height and width whenever it changes.

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

    const marginTop = height < 400 ? 16 : 20;

    return (
            <ScrollView style={styles.rootContainer}>
                <KeyboardAvoidingView style={styles.rootContainer} behavior='position'>
                    <View style={[styles.screen, {marginTop: marginTop}]}>
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
                </KeyboardAvoidingView>
            </ScrollView>            
    )
}

export default StartGameScreen;

// The code below will onlu run once when the component is rendered. 
// So if the use decides to ROTATE the device which will change the device height, the component will not rerender obviously and so the device height we get when we first run the function is no longer the height now that the device is rotated.
// Therefore, we need to be able to get the dimensions of the device dynamically in side the render function by using useWindowDimensions hook inside the component function. 

//const deviceHeight = Dimensions.get('window').height; 

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1
    },

    screen: {
        paddingHorizontal: 40,
        //marginTop: deviceHeight < 400 ? 10 : 20
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