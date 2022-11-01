import { View, StyleSheet } from "react-native"
import Colors from "../../constants/colors";

const Card = ({children}) => {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //marginHorizontal: 24,
        marginTop: 20,
        marginBottom: 4,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        elevation: 4, // android only property
        shadowColor: 'black', //ios specific
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})