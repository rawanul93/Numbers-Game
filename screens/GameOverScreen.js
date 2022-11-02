import {StyleSheet, View, Image, Text, ScrollView, useWindowDimensions} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

const GameOverScreen = ({userNumber, roundsNumber, onStartNewGame}) => {


    // styling for landscape mode
    const { width, height } = useWindowDimensions();

    let imageSize = width < 380 ? 200 : 150;
    imageSize = height < 400 ? 120 : imageSize;

    let marginVertical = width < 380 ? 12 : 8;

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2,
        marginVertical: marginVertical
    };

    ////////////////////////////

    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.screen}>
                <Title>Game Over!</Title>
                <View style={styles.imageContainer}>
                    <View style={[styles.imageWrapper, {...imageStyle}]}>
                        <Image style={styles.imageStyle} source={require('../assets/images/success.jpg')} />
                    </View>
                </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text></Text>
                <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
            </View>
        </ScrollView>
        
    )
}

export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    screen: {
        flex: 1,
        paddingHorizontal: 40,
        paddingTop: 20,
    },
    imageContainer: {
        alignItems: 'center'

    },
    imageWrapper: {
        // width: deviceWidth < 380 ? 150 : 200,
        // height: deviceWidth < 380 ? 150 : 200,
        // borderRadius: deviceWidth < 380 ? 75 : 100,
        borderWidth: 3,
        borderColor: Colors.secondary500,
        overflow: 'hidden',
        marginHorizontal: 36,
        // marginVertical: deviceWidth < 380 ? 12 : 8
        
    },

    imageStyle: {
        width: '100%',
        height: '100%'
    },

    summaryText: {
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 20,
        marginVertical: 12
    },

    highlightText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary600
    }

})