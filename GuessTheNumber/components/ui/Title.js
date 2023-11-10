import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    // borderWidth: Platform.OS ==='android' ? 2 : 0, // when working with specific platform styles 
    borderWidth : Platform.select({ios:0,android:2}),
    // different files can be written for each platform and can be injected.
    borderColor: 'white',
    padding: 12,
    maxWidth:'80%'
  },
});
