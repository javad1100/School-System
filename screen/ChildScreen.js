import { View, Text } from "react-native";
import React from "react";
import Header from "../component/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Event from "../component/Event";
const ChildScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#f6fbfe" }}>
      <Header text="Parents" style={{ height: wp(40) }} />
      <View style={{ marginTop: wp(4), backgroundColor: "#f6fbfe" }}>
        <View
          style={{
            height: wp("200%"),
            paddingHorizontal: wp(5),
            backgroundColor: "#f5f6fa",
          }}
        >
          <Event
            onPress={() => {
              navigation.navigate("ReportScreen");
            }}
            picture={require("../assets/personal.jpg")}
            Name="Cameron"
            section="7th Class B Section"
          />
          <Event
            onPress={() => {
              navigation.navigate("ReportScreen");
            }}
            picture={require("../assets/personal.jpg")}
            Name="Jawad"
            section="10th Class B Section"
          />
          <Event
            onPress={() => {
              navigation.navigate("ReportScreen");
            }}
            picture={require("../assets/personal.jpg")}
            Name="Wadood"
            section="12th Class B Section"
          />
          <Event
            onPress={() => {
              navigation.navigate("ReportScreen");
            }}
            picture={require("../assets/personal.jpg")}
            Name="Wadood"
            section="12th Class B Section"
          />
          <Event
            onPress={() => {
              navigation.navigate("ReportScreen");
            }}
            picture={require("../assets/personal.jpg")}
            Name="Wadood"
            section="12th Class B Section"
          />
        </View>
      </View>
    </View>
  );
};

export default ChildScreen;
