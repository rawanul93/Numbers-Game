import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import Colors from '../../constants/colors';

const NumberContainer = ({children}) => {

    const { height } = useWindowDimensions();

    let marginBottom = height < 400 ? 10 : 24;

    return (
        <View style={[styles.container, {marginBottom: marginBottom}]}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        marginHorizontal: 24,
        // marginBottom: deviceWidth < 380 ? 24 : 32,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100
    },

    numberText: {
        fontFamily: 'open-sans-bold',
        fontSize: deviceWidth < 380 ? 32 : 36,
        //fontWeight: 'bold',
        color: Colors.white,
    }
})