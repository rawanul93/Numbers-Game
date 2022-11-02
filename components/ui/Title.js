import { Text, StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";


const Title = ({children}) => {
  return (
      <View style={styles.titleContainer}>
            <Text style={styles.title}>{children}</Text>
            <View style={styles.titleBorder}></View>
        </View>
  )
}

export default Title;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    
},
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    //fontWeight: 'bold',
    color: Colors.secondary500,
    
    textAlign: 'center',
    paddingBottom: 8,
    maxWidth: '80%',
    width: 300
        
  },

  titleBorder: {
      borderBottomColor: Colors.secondary500,
      borderBottomWidth: 2,
      marginBottom: deviceWidth < 380 ? 24 : 32,
      maxWidth: '80%',
      width: 300
  }
})