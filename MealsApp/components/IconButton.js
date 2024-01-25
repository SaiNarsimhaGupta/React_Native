import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, colour, onPress }) {
  /* The name size colour can be used dynamically populates as props same as onPress Prop above  - So this can be use Many icons*/
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={colour}></Ionicons>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,

    },
});
