import { Text, StyleSheet, View } from "react-native";
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

const styles = StyleSheet.create({
  
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    //fontWeight: 'bold',
    color: Colors.secondary500,
    textAlign: 'center',
    paddingBottom: 8
        
  },
    titleContainer: {
      alignItems: 'center',
      
  },
  titleBorder: {
      borderBottomColor: Colors.secondary500,
      borderBottomWidth: 2,
      width: '100%'
  }
})