import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";

import { styles } from "./styles";

import Filters from "./Filters";
import Card from "./../../components/Card";
import Button from "../../components/Button";

import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "oi",
    },
    {
      id: 1,
      title: "oi",
    },
    {
      id: 1,
      title: "oi",
    },
    {
      id: 1,
      title: "oi",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.title + index}
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
        renderItem={({ item }) => {
          return (
            <View style={{ marginVertical: 6 }}>
              <Card />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
