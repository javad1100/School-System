import { View, Text, ScrollView } from "react-native";
import React from "react";
import AttendCard from "../component/AttendCard";
import Header from "../component/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DTime from "../component/DTime";

const Attendance = () => {
  return (
    <View style={{ backgroundColor: "#f6fbfe" }}>
      <Header text="Attendance" style={{ height: wp(40) }} />
      <View
        style={{
          height: wp("200%"),
          paddingHorizontal: wp(5),
          //   marginTop: wp(6),
          backgroundColor: "#f5f6fa",
        }}
      >
        <ScrollView
          style={{ maxHeight: hp("80%") }}
          showsVerticalScrollIndicator={false}
        >
          <DTime text="June 2022" />
          <AttendCard days={26} />
          <DTime text="May 2022" />
          <AttendCard days={20} />
          <DTime text="April 2022" />
          <AttendCard days={13} />
          <DTime text="March 2022" />
          <AttendCard days={25} />
          <DTime text="Feb 2022" />
          <AttendCard days={26} />
          <DTime text="Jan 2022" />
          <AttendCard days={26} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Attendance;
