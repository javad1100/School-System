import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReportScreen from "./screen/ReportScreen";
import Attendance from "./screen/Attendance";
import ChildScreen from "./screen/ChildScreen";
import AttendanceTable from "./screen/AttendanceTable";
import Login from "./screen/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChildScreen" component={ChildScreen} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} />
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="AttendanceTable" component={AttendanceTable} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Attendance />
    // <Login />
    // <ChildScreen />
    // <AttendanceTable />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
