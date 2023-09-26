import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

const Screen2 = ({ navigation, route }) => {
  return (
    <View>
      <Text>
        Thông tin: {route.params.name} - {route.params.msv}
      </Text>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => {
          navigation.navigate("Screen1", { data: "Oke", data1: "Screen2 ♥" });
        }}
      >
        <Text style={styles.btnLoginText}>Về Screen 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => {
          navigation.navigate("PhotoScreen");
        }}
      >
        <Text style={styles.btnLoginText}>Photo Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    marginTop: 20,
    width: Dimensions.get("window").width / 2,
    backgroundColor: "#00CCFF",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  btnLoginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Screen2;
