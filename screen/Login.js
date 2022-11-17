import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import Header from "../component/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Login = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#f6fbfe", height: wp(250) }}>
      <View
        style={{
          height: wp(100),
          width: wp(100),
          backgroundColor: "#1871ef",
          borderRadius: wp(10),
          paddingLeft: wp(5),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: wp(60),
            width: wp(60),
            borderRadius: wp(50),
            borderColor: "rgb(247, 247, 247)",
            borderWidth: 5,
            shadowColor: "white",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            resizeMode="cover"
            style={{ height: wp(55), width: wp(55), borderRadius: wp(100) }}
            source={require("../assets/personal.jpg")}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp(8),
            fontWeight: "bold",
            marginTop: wp(5),
            color: "#1871ef",
          }}
        >
          Welcome
        </Text>
        <Text style={{ fontSize: wp(6), fontWeight: "500", color: "#1871ef" }}>
          Login to your account
        </Text>
      </View>
      <View style={{ marginTop: wp(10), paddingHorizontal: wp(5) }}>
        <TextInput
          style={{
            backgroundColor: "#f6fbfe",
            borderWidth: 0.5,
            height: wp(13),
            width: "100%",
            borderRadius: wp(20),
            paddingLeft: wp(2),
            borderColor: "#1871ef",
          }}
          placeholder="Email"
        />

        <TextInput
          style={{
            backgroundColor: "#f6fbfe",
            borderWidth: 0.5,
            height: wp(13),
            width: "100%",
            borderRadius: wp(20),
            paddingLeft: wp(2),
            borderColor: "#1871ef",
            marginTop: wp(5),
          }}
          placeholder="Password"
        />
      </View>
      <View>
        <TouchableOpacity
          style={{ position: "absolute", right: wp(8), marginTop: wp(1.5) }}
        >
          <Text
            style={{ color: "#1871ef", fontSize: wp(4), fontWeight: "500" }}
          >
            Forget your password?
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChildScreen");
        }}
        style={{
          backgroundColor: "#1871ef",
          width: wp("50%"),
          alignSelf: "center",
          height: wp(13),
          borderRadius: wp(10),
          justifyContent: "center",
          alignItems: "center",
          marginTop: wp(15),
        }}
      >
        <Text style={{ color: "white", fontSize: wp(5), fontWeight: "500" }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
