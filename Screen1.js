import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";

const Screen1 = ({ navigation, route }) => {
  let receivedData =
    route.params && route.params.data ? route.params.data : "Không có dữ liệu";

  let receivedData1 =
    route.params && route.params.data ? route.params.data1 : "";

  const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Gửi yêu cầu GET đến API
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => response.json()) // Chuyển đổi dữ liệu nhận được thành JSON
  //     .then((data) => {
  //       // Xử lý dữ liệu nhận được từ API
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Lỗi khi gửi yêu cầu GET:", error);
  //     });
  // }, []);

  return (
    <View>
      <Text>
        Đã nhận dữ liệu từ Screen2: {receivedData} - {receivedData1}{" "}
      </Text>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() =>
          navigation.navigate("Screen2", { name: "Đông", msv: "PH30597" })
        }
      >
        <Text style={styles.btnLoginText}>Chuyển Screen 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate("GetMovie")}
      >
        <Text style={styles.btnLoginText}>Movie Screen</Text>
      </TouchableOpacity>

      {/* <View>
        <Text>Dữ liệu từ API:</Text>
        {data ? (
          <Text>{JSON.stringify(data, null, 2)}</Text>
        ) : (
          <Text>Đang tải dữ liệu...</Text>
        )}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    width: Dimensions.get("window").width / 2,
    backgroundColor: "#00CCFF",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 20,
  },

  btnLoginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Screen1;
