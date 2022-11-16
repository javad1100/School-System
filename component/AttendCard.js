import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const AttendCard = ({ days }) => {
  return (
    <View
      style={{
        height: wp(35),
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: wp(5),
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: wp(30),
          height: wp(30),
          borderWidth: wp(2),
          borderRadius: wp(50),
          borderColor: "#1871ef",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: wp(8), fontWeight: "500" }}>{days}</Text>
        <Text>Days</Text>
        <Text>Present</Text>
      </View>
      <View style={{ marginLeft: wp(5) }}>
        <Text
          style={{ fontSize: wp(4.5), fontWeight: "500", color: "#1871ef" }}
        >
          Total Working Days
        </Text>
        <Text style={{ marginTop: wp(1) }}>26 </Text>
        <Text
          style={{
            marginTop: wp(4),
            fontSize: wp(4.5),
            fontWeight: "500",
            color: "#1871ef",
          }}
        >
          Official Leaves
        </Text>
        <Text style={{ marginTop: wp(1) }}>4 Days</Text>
      </View>
    </View>
  );
};

export default AttendCard;
