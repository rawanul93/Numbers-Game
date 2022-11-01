import React, { useState, useEffect } from 'react'
import {StyleSheet, View, Alert, Text, FlatList} from 'react-native'
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/colors';
import GuessLogItem from '../components/game/GuessLogItem';

const generateNumberBetween = (min, max, exclude) => {
    const randNum = Math.floor(Math.random()* (max-min) + min); //Math.floor rounds down the number

    if(randNum === exclude) {
        return generateNumberBetween(min, max, exclude); // calling this function recursively if the random number we pass happens to be the number we want this function to not guess i.e. exclude
    } else {
        return randNum;
    }
}

let minBoundary = 1;  // defining extra variables OUTSIDE of the render function so that these values dont change because of a re-render
let maxBoundary = 100; 

const GameScreen = ({userNumber, onGameOver}) => {

    // const initialGuess = generateNumberBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(() => generateNumberBetween(minBoundary, maxBoundary, userNumber));
    const [guessRounds, setGuessRounds] = useState([]);
    
    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);


    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])


    const nextGuessHandler = (direction) => { //'direction 'lower' or 'greater

        if((direction === 'lower' && currentGuess < userNumber)||( direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Dont lie!', 'You know this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
            return;
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandNum = generateNumberBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandNum);
        setGuessRounds(prevGuessRounds => [newRandNum, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length; // this gets recalculated everytime the component is reevaluated which is every time a new round is played.

  return (
    <View style={styles.screen}>
       
        <Title>Opponent's Guess'</Title>
        <NumberContainer>{currentGuess}</NumberContainer>

        <Card>
            <InstructionText style={styles.instructionTextStyle}>Higher or lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name='md-remove' size={28} color={Colors.secondary500} />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name='md-add' size={28} color={Colors.secondary500} />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
      
           <View style={styles.logListContainer} >
                {/* {guessRounds.map(guess => 
                    <Text key={guess}>{guess}</Text>
                )} */}
                <FlatList 
                    data={guessRounds} 
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
                    keyExtractor={(item) => item}
                />
           </View>
      
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 40,
        paddingTop: 20

    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    instructionTextStyle: {
        marginBottom: 20
    },
    logListContainer: {
       flex: 1,
       padding: 16
    }
})