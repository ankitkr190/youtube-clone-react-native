import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
} from "react-native";

const MiniCard = () => {
  return (
    <View style={{ flexDirection: "row", margin: 10, marginBottom: 0 }}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1558980664-4d79c6e77b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        }}
        style={{
          width: "45%",
          height: 100,
        }}
      />
      <View style={{ paddingLeft: 7, marginTop: 10 }}>
        <Text
          style={{ fontSize: 15, width: Dimensions.get("screen").width / 2 }}
          ellipsizeMode="tail"
          numberOfLines={3}
        >
          This is an amazing bike This is an amazing bike This is an amazing
          bike This is an amazing bike This is an amazing bike This is an
          amazing bikeThis is an amazing bikeThis is an amazing bikeThis is an
          amazing bikeThis is an amazing bike
        </Text>
        <Text style={{ fontSize: 12 }}> Road to Harley Davidson</Text>
      </View>
    </View>
  );
};

export default MiniCard;
