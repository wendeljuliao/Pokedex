import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import Button from "../../../components/Button";

import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";
import api from "../../../services/api";

export default function Filters() {
  const [types, setTypes] = useState<any[]>([]);

  const colors: any = {
    normal: "#A8A77A",
    fighting: "#C22E28",
    flying: "#A98FF3",
    poison: "#A33EA1",
    ground: "#E2BF65",
    rock: "#B6A136",
    bug: "#A6B91A",
    ghost: "#735797",
    steel: "#B7B7CE",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    fairy: "#D685AD",
    unknown: "#505050",
    shadow: "#602774",
  };

  useEffect(() => {
    api.get("type").then((res) => {
      setTypes(res.data.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        Utilize a caixa de pesquisa para pesquisar algum pokémon.
      </Text>

      <View style={styles.primaryFilter}>
        <View style={styles.searchView}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Nome do Pokémon" />
        </View>

        <Button
          name={"Filtro"}
          iconLeft={<AntDesign name="plus" size={24} color="white" />}
          color={"#FD3C00"}
        />
      </View>

      <View style={styles.secundaryFilter}>
        {/* <FlatList
          data={data}
          keyExtractor={(item, index) => item.title + index}
          numColumns={4}
          renderItem={({ item }) => {
            return (
              <View style={{ marginRight: 6, marginBottom: 6 }}>
                <Button title={item.title} />
              </View>
            );
          }}
        /> */}

        {types.map((item, index) => (
          <View key={index} style={{ marginRight: 6, marginBottom: 6 }}>
            <Button
              name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              color={colors[item.name]}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
