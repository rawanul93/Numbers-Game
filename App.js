import { useState, useEffect } from 'react';
import {StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn);

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);


  const [fontsLoaded] = useFonts({ // it also returns a boolean that returns a value based on whether the fonts were loaded or not
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

    // Watch for fonts to be loaded, then hide the splash screen
    useEffect(() => {
      const hideSplashScreen = async () => {
        await SplashScreen.hideAsync()
      }
      if (fontsLoaded) {
        hideSplashScreen()
      }
    }, [fontsLoaded])
    // Initally return null instead of <AppLoading />
    if (!fontsLoaded) {
      return null
    }
  
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null); // just by setting user number to null we will go back to start game screen
    setGuessRounds(0);
  }

  // screen logic
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }

  // render

    return (
        <>
          <StatusBar backgroundColor={Colors.primary600} barStyle='light-content' />
          <LinearGradient 
            colors={[Colors.primary600, Colors.secondary500]}
            style={styles.rootScreen}
          >
            <ImageBackground 
              source={require('./assets/images/backgroundImage.jpg')}
              resizeMode='cover'
              imageStyle={styles.backgroundImage}
              style={styles.rootScreen}
            >
              <SafeAreaView style={styles.screens}>
                {screen}
              </SafeAreaView>
            </ImageBackground>
          </LinearGradient>

        </>
 

    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1, // take as much space as available
    },

    screens: {
      flex: 1, // take as much space as available
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    backgroundImage: {
      opacity: 0.15
    }
});

