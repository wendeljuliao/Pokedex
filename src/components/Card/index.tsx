import React from "react";
import { Pressable, View, Text } from "react-native";

import { styles } from "./styles";

const Card = () => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.leftSide}></View>

      <View style={styles.rightSide}>
        <Text>oi</Text>
      </View>
    </Pressable>
  );
};

export default Card;
