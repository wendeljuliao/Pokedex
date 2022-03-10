import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Alert } from "react-native";

import { styles } from "./styles";

import Filters from "./Filters";
import Card from "./../../components/Card";
import Button from "../../components/Button";

import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import { useFilterContext } from "../../context/FilterContext";

export default function Home() {
  const [dataPokemons, setDataPokemons] = useState<any>([]);
  const [filterDataPokemons, setFilterDataPokemons] = useState<any>([]);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(20);

  const { filterTypes, name } = useFilterContext();

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

  function compareArray(typesPokemon: any, filters: any) {
    const intersection = typesPokemon.filter((element: any) => filters.includes(String(element.type.name).charAt(0).toUpperCase() + String(element.type.name).slice(1)))
    return intersection.length
  }

  useEffect(() => {
    if (filterTypes.length === 0) {
      return setFilterDataPokemons(dataPokemons);
    }
    return setFilterDataPokemons(dataPokemons.filter((pokemon: any) => compareArray(pokemon.types, filterTypes) === filterTypes.length))

  }, [filterTypes])

  useEffect(() => {
    if (name.length <= 0) {
      setFilterDataPokemons(dataPokemons);
    }
  }, [name])

  useEffect(() => {
    let auxData: Array<object> = [];
    for (let i = startIndex; i <= endIndex; i++) {
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
    setFilterDataPokemons(auxData);
  }, [startIndex]);


  function searchPress() {
    api.get(`pokemon-form/${name.toLowerCase()}`)
      .then((res) => {
        setFilterDataPokemons([{
          id: res.data.id,
          name: res.data.pokemon.name,
          types: res.data.types,
          image: res.data.sprites["front_default"],
        }])
      }).catch((err) => {
        Alert.alert("Verifique sua conexão ou o nome do pokémon.");
      })
  }

  function next() {
    setStartIndex(startIndex + 20);
    setEndIndex(endIndex + 20);
  }

  function prev() {
    setStartIndex(startIndex - 20);
    setEndIndex(endIndex - 20);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filterDataPokemons}
        keyExtractor={(item, index) => item.name + item.id}
        initialNumToRender={20}
        ListHeaderComponent={
          <>
            <Filters onPressSearch={searchPress} />
            <View style={styles.backNext}>
              <Button
                name={"Prev"}
                iconLeft={
                  <AntDesign name="arrowleft" size={24} color="white" />
                }
                color={"#FD3C00"}
                type={'prev'}
                onPress={prev}
              />
              <Button
                name={"Next"}
                iconRight={
                  <AntDesign name="arrowright" size={24} color="white" />
                }
                color={"#FD3C00"}
                type={'next'}
                onPress={next}
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
              type={'prev'}
              onPress={prev}
            />
            <Button
              name={"Next"}
              iconRight={
                <AntDesign name="arrowright" size={24} color="white" />
              }
              color={"#FD3C00"}
              type={'next'}
              onPress={next}
            />
          </View>
        }
        style={styles.containerFlatList}
        renderItem={({ item, index }) => {
          return (
            <Card {...item} color={colors[item.types[0].type.name]} />
          );
        }}
      />
    </SafeAreaView>
  );
}
