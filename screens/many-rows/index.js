import { rest_auth_user_update } from "../../store/lessonplanAPI/userDetails.slice.js";
import { rest_auth_user_retrieve } from "../../store/lessonplanAPI/userDetails.slice.js";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const Row = ({
  item
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return <Pressable onPress={() => {
    navigation.navigate("eventDetails");
  }}><View style={styles.row}>
        <View style={styles.rowContent}>
          <Text style={styles.textHeading1}>{item.name}</Text>
          <Text style={styles.textHeading2}>Heading 2</Text>
          <Text style={styles.textHeading3}>Heading 3</Text>
          <Text style={styles.textHeading4}>Heading 4</Text>
          <Text style={styles.textDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
        </View>
      </View></Pressable>;
};

const ManyRows = () => {
  const [data, setData] = React.useState();
  useEffect(() => {
    setData([{
      id: 1,
      name: "Row 1"
    }, {
      id: 2,
      name: "Row 2"
    }, {
      id: 3,
      name: "Row 3"
    }, {
      id: 4,
      name: "Row 4"
    }, {
      id: 5,
      name: "Row 5"
    }]);
    dispatch(rest_auth_user_retrieve());
    dispatch(rest_auth_user_update());
  }, []);
  return <Pressable><View style={styles.container}>
      <FlatList data={data} renderItem={({
        item
      }) => <Row item={item} />} keyExtractor={item => item.id} />
    </View></Pressable>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  row: {
    flex: 1,
    minHeight: 100,
    backgroundColor: "pink",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15
  },
  rowContent: {
    flex: 1
  },
  textHeading1: {
    fontSize: 24,
    fontWeight: "bold"
  },
  textHeading2: {
    fontSize: 24
  },
  textHeading3: {
    fontSize: 20
  },
  textHeading4: {
    fontSize: 18
  },
  textDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333"
  }
});
export default ManyRows;