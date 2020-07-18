import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";

const SearchScreen = () => {
  const [value, setValue] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: "white",
        }}
      >
        <Ionicons name="md-arrow-back" size={32} />
        <TextInput
          value={value}
          onChangeText={(text) => setValue(text)}
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
        />

        <Ionicons name="md-send" size={32} />
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
