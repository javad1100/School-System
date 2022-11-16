import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import { useNavigation } from "@react-navigation/native";

const FReport = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#fafbfd",
        height: wp(80),
        marginTop: wp(1),

        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          marginTop: wp(8),
          width: wp(30),
        }}
      >
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            navigation.navigate("Attendance");
          }}
        >
          <AntDesign name="calendar" size={wp(10)} color="#45b245" />
          <Text style={{ marginTop: wp(1) }}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", marginTop: wp(8) }}>
          <FontAwesome name="newspaper-o" size={wp(10)} color="#e7a24f" />
          <Text style={{ marginTop: wp(1) }}>Daily Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", marginTop: wp(8) }}>
          <Entypo name="message" size={wp(10)} color="#aa41cd" />
          <Text style={{ marginTop: wp(1) }}>Messages</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "column",
          marginTop: wp(8),
          width: wp(35),
        }}
      >
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            navigation.navigate("AttendanceTable");
          }}
        >
          <Entypo name="open-book" size={wp(10)} color="#f7a965" />
          <Text style={{ marginTop: wp(1) }}>Home Work</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", marginTop: wp(8) }}>
          <Entypo name="users" color="#4f92f5" size={wp(10)} />
          <Text style={{ marginTop: wp(1) }}>Activity</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "column",
          marginTop: wp(8),
          width: wp(30),
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FontAwesome name="user" size={wp(10)} color="#c25bd8" />
          <Text style={{ marginTop: wp(1) }}>Behaviour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", marginTop: wp(8) }}>
          <MaterialCommunityIcons
            name="timetable"
            size={wp(10)}
            color="#59c45c"
          />
          <Text style={{ marginTop: wp(1) }}>Time Table</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FReport;
const styles = StyleSheet.create({
  img: {
    height: wp(10),
    width: wp(10),
    resizeMode: "container",
  },
});
