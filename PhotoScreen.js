import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";

const PhotoScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPhoto = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          // keyExtractor={({id}) => id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item.url }} />
              <View style={styles.textContainer}>
                <Text style={styles.idText}>ID: {item.id}</Text>
                <Text style={styles.titleText}>Title: {item.title}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#B9D3EE",
    borderRadius: 10,
    flexDirection: "row", // Để các phần tử nằm cạnh nhau
    height: Dimensions.get("window").height / 8,
    marginTop: 5,
  },
  idText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  titleText: {
    marginTop: 5,
    fontSize: 14,
  },
  image: {
    borderRadius: 5,
    margin: 10,
    width: "20%",
    height: "80%",
  },
  textContainer: {
    flex: 1, // Để các phần tử trong textContainer có thể mở rộng theo chiều ngang
    marginLeft: 10, // Khoảng cách giữa hình ảnh và textContainer
    padding: 5,
  },
});
