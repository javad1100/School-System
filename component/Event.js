import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Event = ({ picture, Name, section, date, time, navigation, onPress }) => {
  return (
    <View
      style={{
        height: wp(20),
        marginTop: wp(1.5),
        backgroundColor: "#fafbfd",
        borderRadius: wp(2),
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row" }} onPress={onPress}>
        <Image
          style={{
            height: wp(18),
            width: wp(18),
            resizeMode: "cover",
            marginTop: 3,
            marginLeft: wp(1.5),
            borderRadius: wp(2),
          }}
          source={picture}
        />
        <View
          style={{
            marginLeft: wp(4),
            marginTop: wp(3),
            flexDirection: "row",
            width: 240,
          }}
        >
          <View>
            <Text style={{ fontSize: wp(5), fontWeight: "500" }}>{Name}</Text>
            <Text>{section}</Text>
          </View>
          <View style={{ position: "absolute", right: 0 }}>
            <Text>{date}</Text>
            <Text>{time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Event;
