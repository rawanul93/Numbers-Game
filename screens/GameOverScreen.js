import {StyleSheet, View, Image, Text} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

const GameOverScreen = ({userNumber, roundsNumber, onStartNewGame}) => {
  return (
    <View style={styles.screen}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
                <Image style={styles.imageStyle} source={require('../assets/images/success.jpg')} />
            </View>
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text></Text>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 40,
        paddingTop: 20,
    },
    imageContainer: {
        alignItems: 'center'

    },
    imageWrapper: {
        width: 200, 
        height: 200, 
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.secondary500,
        overflow: 'hidden',
        margin: 36,
        
    },

    imageStyle: {
        width: '100%',
        height: '100%'
    },

    summaryText: {
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 20,
        marginVertical: 24
    },

    highlightText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary600
    }

})