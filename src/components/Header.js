import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

export default function Header() {
  const myColor = "#212121";
  return (
    <View
      style={{
        height: 45,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 5,
      }}
    >
      <View style={{ flexDirection: "row", margin: 5 }}>
        <AntDesign
          style={{ marginLeft: 10 }}
          name="youtube"
          size={32}
          color="red"
        />
        <Text
          style={{
            color: myColor,
            fontSize: 22,
            marginLeft: 5,
            fontWeight: "bold",
          }}
        >
          Youtube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 5,
        }}
      >
        <Ionicons name="md-videocam" size={32} color={myColor} />
        <Ionicons name="md-search" size={32} color={myColor} />
        <MaterialIcons name="account-circle" size={32} color={myColor} />
      </View>
    </View>
  );
}
