import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={{ marginBottom: 3 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1558980664-4d79c6e77b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        }}
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <View style={{ flexDirection: "row", margin: 5 }}>
        <MaterialIcons name="account-circle" size={40} color="#212121" />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontSize: 18,
              width: Dimensions.get("screen").width - 60,
            }}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            All new 2020 Harley Davidson 1000 CC
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Text>
          <Text>Road to Harley Davidson</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
