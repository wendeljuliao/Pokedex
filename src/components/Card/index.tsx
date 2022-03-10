import React from "react";
import { Pressable, View, Text, Image } from "react-native";
import Button from "../Button";

import { styles } from "./styles";
import { ICardProps } from "./interface";

const Card = ({ id, name, types, image, color }: ICardProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: color,
          opacity: pressed ? 0.5 : 1.0,
        },
      ]}
    >
      <View style={styles.leftSide}>
        <Text style={styles.numberPokedex}>
          {"#" + String(id).padStart(3, "0")}
        </Text>
        <Text style={styles.namePokemon}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <View style={styles.containerTypes}>
          {types.map((item, index) => (
            <Button
              key={item.type + index}
              name={
                item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
              }
              color="#CBCBCB"
              type="normal"
            />
          ))}
        </View>
      </View>

      <View style={styles.rightSide}>
        <Image source={{ uri: image }} style={styles.pokemonImage} />
      </View>
    </Pressable>
  );
};

export default Card;
