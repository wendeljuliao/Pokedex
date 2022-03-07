import { Pressable, Text } from "react-native";

import { styles } from "./styles";
import { IButtonProps } from "./interface";

export default function Button({
  name,
  iconLeft,
  iconRight,
  color,
}: IButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        {
          backgroundColor: color,
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      {iconLeft}
      <Text style={styles.text}>{name}</Text>
      {iconRight}
    </Pressable>
  );
}
