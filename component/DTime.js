import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const DTime = ({ text, watch }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: wp(2),
        justifyContent: "space-between",
        alignItems: "center",
        height: wp(10),
        backgroundColor: "#fafbfd",
        paddingHorizontal: wp(2),
      }}
    >
      <Text style={{ fontSize: wp(5), fontWeight: "500" }}>{text}</Text>
      <TouchableOpacity>
        <Text style={{ fontSize: wp(5), fontWeight: "400" }}>{watch}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DTime;
