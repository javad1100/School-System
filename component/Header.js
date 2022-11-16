import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
const Header = ({ text, FName, section, symb, style }) => {
  return (
    <View style={[styles.InView, style]}>
      <View style={{ marginTop: wp(20), flexDirection: "row" }}>
        <Text
          style={{
            fontSize: wp(9),
            fontWeight: "500",
            color: "white",
          }}
        >
          {text}
        </Text>

        {/* <TouchableOpacity
          style={{
            height: wp(10),
            width: wp(10),
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: wp(2),
            position: "absolute",
            right: 40,
            marginTop: wp(1),
          }}
        >
        <Ionicons name="notifications-outline" size={wp(8)} color="#1871ef" />
        </TouchableOpacity> */}
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", fontSize: wp(4.5) }}>{FName}</Text>
        <Text style={{ color: "white", fontSize: wp(4.5) }}>{symb}</Text>
        <Text style={{ color: "white", fontSize: wp(4.5) }}> {section}</Text>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  InView: {
    height: wp(45),
    width: wp(100),
    backgroundColor: "#1871ef",
    borderRadius: wp(5),
    paddingLeft: wp(5),
  },
});
