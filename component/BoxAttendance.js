import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Avatar } from "react-native-paper";

const BoxAttendance = ({ Name, picture }) => {
  const [present, setPresent] = useState(null);
  return (
    <View
      style={{
        // backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        marginTop: wp(4),
      }}
    >
      <Avatar.Image style={styles.img} size={wp(10)} source={picture} />

      <Text style={{ marginLeft: wp(2), width: wp(30) }}>{Name} </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: wp(50),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setPresent(true);
          }}
          style={{
            height: wp(6),
            width: wp(6),
            borderWidth: 2,
            borderRadius: wp(50),
            borderColor: "black",
            backgroundColor:
              present === null
                ? "transparent"
                : present
                ? "blue"
                : "transparent",
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPresent(false);
          }}
          style={{
            height: wp(6),
            width: wp(6),
            borderWidth: 2,
            borderRadius: wp(50),
            // borderColor: "blue",
            backgroundColor:
              present === null
                ? "transparent"
                : !present
                ? "blue"
                : "transparent",
          }}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default BoxAttendance;
const styles = StyleSheet.create({
  Intouch: {
    height: wp(6),
    width: wp(6),
    borderWidth: 2,
    borderRadius: wp(50),
  },
  img: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(50),
    backgroundColor: "#1871ef",
  },
});
