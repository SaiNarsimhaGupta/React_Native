import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.secondaryColour,
        padding: deviceWidth < 380 ? 12 :24,
        margin:deviceWidth < 380 ? 12 :24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:Colors.secondaryColour,
        fontSize:deviceWidth < 380 ? 28 :24,
        fontWeight:'bold'
    }
})