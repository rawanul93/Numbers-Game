import {Text, StyleSheet} from 'react-native'
import Colors from '../../constants/colors';

const InstructionText = ({children, style}) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
    // the order in which we pass in the custom styles to this component is important. 
    //If it is passed AFTER the default styles set below, then the custom styles will overwrite the default if we choose to overwrite it. If we passed in the custom styles BEFORE, then we will ensure the default styles always get implemented and just additional styles are applied on top of the default.
  )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        fontSize: 18,
        color: Colors.white,
    },  
})