import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";

import { styles } from "./styles";

import Filters from "./Filters";
import Card from "./../../components/Card";
import Button from "../../components/Button";

import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";

export default function Home() {
  const [dataPokemons, setDataPokemons] = useState<any[]>([]);

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
    let auxData: Array<object> = [];
    for (let i = 1; i <= 20; i++) {
      api.get(`pokemon-form/${i}`).then((res) => {
        auxData.push({
          id: res.data.id,
          name: res.data.pokemon.name,
          types: res.data.types,
          image: res.data.sprites["front_default"],
        });
      });
    }

    setDataPokemons(auxData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataPokemons}
        keyExtractor={(item, index) => item.name + item.id}
        ListHeaderComponent={
          <>
            <Filters />
            <View style={styles.backNext}>
              <Button
                name={"Prev"}
                iconLeft={
                  <AntDesign name="arrowleft" size={24} color="white" />
                }
                color={"#FD3C00"}
              />
              <Button
                name={"Next"}
                iconRight={
                  <AntDesign name="arrowright" size={24} color="white" />
                }
                color={"#FD3C00"}
              />
            </View>
          </>
        }
        ListFooterComponent={
          <View style={styles.backNext}>
            <Button
              name={"Prev"}
              iconLeft={<AntDesign name="arrowleft" size={24} color="white" />}
              color={"#FD3C00"}
            />
            <Button
              name={"Next"}
              iconRight={
                <AntDesign name="arrowright" size={24} color="white" />
              }
              color={"#FD3C00"}
            />
          </View>
        }
        style={styles.containerFlatList}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginVertical: 6 }}>
              <Card {...item} color={colors[item.types[0].type.name]} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
