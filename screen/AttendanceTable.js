import { View, Text, ScrollView } from "react-native";
import React from "react";
import BoxAttendance from "../component/BoxAttendance";
import Header from "../component/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AttendanceTable = () => {
  return (
    <View style={{ backgroundColor: "#f6fbfe", height: wp("250%") }}>
      <Header
        text={"Attendance"}
        FName="jan-14-2022"
        symb=" | "
        section={"Wednessday"}
      />
      <View
        style={{
          flexDirection: "row",
          marginLeft: wp(15),
          marginTop: wp(4),
        }}
      >
        <Text style={{ fontSize: wp(4.5), fontWeight: "500" }}>Name</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: wp(50),
            marginLeft: wp(20),
          }}
        >
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: "500",
              textDecorationLine: "underline",
            }}
          >
            Present
          </Text>
          <Text
            style={{
              fontSize: wp(4.5),
              fontWeight: "500",
              textDecorationLine: "underline",
            }}
          >
            Absent
          </Text>
        </View>
      </View>
      <ScrollView
        style={{ paddingHorizontal: wp(4), maxHeight: hp("74%") }}
        showsVerticalScrollIndicator={false}
      >
        <BoxAttendance
          Name={"Jawad"}
          // picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Hassan Abdullah"}
          picture={require("../assets/man.png")}
        />
        <BoxAttendance
          Name={"Wadood"}
          picture={require("../assets/man1.png")}
        />
        <BoxAttendance
          Name={"Shahram"}
          picture={require("../assets/man2.webp")}
        />
        <BoxAttendance Name={"Zain"} picture={require("../assets/woman.png")} />
        <BoxAttendance
          Name={"Jawad"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Hassan Abdullah"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Jawad"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Wadood"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Hassan Abdullah"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Jawad"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Wadood"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Hassan Abdullah"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Wadood"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Jawad"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Hassan Abdullah"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Wadood"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Jawad"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Hassan Abdullah"}
          picture={require("../assets/personal.jpg")}
        />
        <BoxAttendance
          Name={"Wadood"}
          picture={require("../assets/personal.jpg")}
        />
      </ScrollView>
    </View>
  );
};

export default AttendanceTable;
