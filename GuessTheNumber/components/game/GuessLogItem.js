import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function GuessLogItem({roundNumber,guess}) {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItems:{
        borderColor: Colors.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:16,
        marginVertical:8,
        backgroundColor: Colors.secondaryColour,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation: 4,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
    },
    itemText:{
        fontSize:14,
    }
})