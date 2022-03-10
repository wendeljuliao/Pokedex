import { Pressable, Text } from "react-native";

import { styles } from "./styles";
import { IButtonProps } from "./interface";
import { useEffect, useState } from "react";
import { useFilterContext } from "../../context/FilterContext";

export default function Button({
  name,
  iconLeft,
  iconRight,
  color,
  type
}: IButtonProps) {

  const [clicked, setClicked] = useState(false);

  const {filterTypes, setFilterTypes} = useFilterContext();

  const handlePressed = () => {
    if (type === 'normal')
      return
      
    if (clicked === true) {

      setFilterTypes(filterTypes.filter((item: string) => item !== name))
      setClicked(false);

    } else {

      setFilterTypes((oldState: any) => [...oldState, name]);
      setClicked(true);

    }
  }

  return (
    <Pressable onPress={!!iconLeft || !!iconRight ? null : handlePressed}
      style={({ pressed }) => [
        styles.buttonContainer,
        {
          backgroundColor: color,
          opacity: pressed || clicked ? 0.5 : 1,
        },
      ]}
    >
      {iconLeft}
      <Text style={styles.text}>{name}</Text>
      {iconRight}
    </Pressable>
  );
}
