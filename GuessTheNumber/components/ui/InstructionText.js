import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function InstructionText({children, style}) {
  return (
    <View>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    instructionText:{
        fontSize:24,
        color:Colors.secondaryColour,
      },
})