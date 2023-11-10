import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 :36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //This is Used for provide the shadow effect - works for Android Only for IOS below will be used
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
