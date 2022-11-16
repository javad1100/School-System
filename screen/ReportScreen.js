import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import React, { useState } from "react";
import Header from "../component/Header";
import img1 from "../component/FReport";
import FReport from "../component/FReport";
import Event from "../component/Event";
import DTime from "../component/DTime";

const ReportScreen = ({ navigation }) => {
  const [reports, setReports] = useState(true);
  return (
    <View style={{ backgroundColor: "#f6fbfe" }}>
      <Header text="Boby" FName="Jon Jon Jon Jon" symb=" |" section="6th B " />
      <View
        style={{
          height: wp("200%"),
          paddingHorizontal: wp(5),
          marginTop: wp(6),
          backgroundColor: "#f5f6fa",
        }}
      >
        <View style={styles.InView}>
          <TouchableOpacity onPress={() => setReports(true)}>
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: "bold",
                color: reports ? "#1871ef" : "gray",
              }}
            >
              Reports
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setReports(false)}>
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: "bold",
                color: !reports ? "#1871ef" : "gray",
              }}
            >
              Events
            </Text>
          </TouchableOpacity>
        </View>
        {reports ? (
          <>
            <FReport navigation={navigation} />
            <DTime text="Events" watch="see all" />
            <Event
              onPress={() => {}}
              picture={require("../assets/personal.jpg")}
              Name="Personal Training"
              section="5th class B section"
              date="May-2-22"
              time="12:00 AM"
            />
            <Event
              picture={require("../assets/personal.jpg")}
              Name="Yoga"
              section="7th class C section"
              date="May-2-22"
              time="1:00 AM"
            />
            <Event
              onPress={() => {}}
              picture={require("../assets/personal.jpg")}
              Name="Stretch"
              section="5th class A section"
              date="May-2-22"
              time="11:00 AM"
            />
          </>
        ) : (
          <View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                maxHeight: hp("68%"),
                // marginBottom: 30,
              }}
            >
              <DTime text="Events" />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Personal Training"
                section="5th class B section"
                date="May-2-22"
                time="12:00 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Yoga"
                section="7th class C section"
                date="May-2-22"
                time="1:00 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Stretch"
                section="5th class A section"
                date="May-2-22"
                time="11:00 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Cricket"
                section="8th class B section"
                date="May-2-22"
                time="8:30 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Football"
                section="5th class A section"
                date="May-2-22"
                time="9:00 AM"
              />
              <DTime text="Events" />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Yoga"
                section="7th class C section"
                date="May-2-22"
                time="1:00 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Stretch"
                section="5th class A section"
                date="May-2-22"
                time="11:00 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Cricket"
                section="8th class B section"
                date="May-2-22"
                time="8:30 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Football"
                section="5th class A section"
                date="May-2-22"
                time="9:00 AM"
              />
              <DTime text="Events" />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Yoga"
                section="7th class C section"
                date="May-2-22"
                time="1:00 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Stretch"
                section="5th class A section"
                date="May-2-22"
                time="11:00 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Cricket"
                section="8th class B section"
                date="May-2-22"
                time="8:30 AM"
              />
              <Event
                picture={require("../assets/personal.jpg")}
                Name="Football"
                section="5th class A section"
                date="May-2-22"
                time="9:00 AM"
              />
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReportScreen;
const styles = StyleSheet.create({
  img: {
    height: wp(10),
    width: wp(10),
    resizeMode: "container",
  },
  InView: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: wp(15),
    backgroundColor: "#afbfd",
    alignItems: "center",
  },
});
