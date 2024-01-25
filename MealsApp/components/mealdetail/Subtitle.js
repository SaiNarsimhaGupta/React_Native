import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    subtitleContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 12,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
      },
      subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
});
