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
  type,
  onPress
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

  function pressed() {
    if (type === 'filter') {
      if (onPress !== undefined)
        onPress()
        
    } else if (type === 'next') {
      if (onPress !== undefined)
        onPress()
    } else if (type === 'prev') {
      if (onPress !== undefined)
        onPress()
    }
  }

  return (
    <Pressable onPress={!!iconLeft || !!iconRight ? pressed : handlePressed}
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
