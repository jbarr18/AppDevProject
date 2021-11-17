import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import FetchData from './FetchData'

export default function CheckPicks() {
  const [value, setValue] = useState();
  const [xvalue, setxvalue] =useState();
  useEffect(() => {
    let data = async () => {
      setValue(await FetchData());
      setxvalue(await FetchData());
    };
    data();
  }, []);
  if (!value) {
    return (
      <ActivityIndicator
        size="large"
        animating={true}
        color="rgba(137,232,207,100)"
      />
    );
  }
  return (
    <ScrollView>
      {value.map((files, index) => (
        <Card key={index} style={styles.container}>
          <Card.Title
            // title={!files[0] ? "Not Provided" : files[0]}
            //Every player needs to choose an icon and will be displayed here
            left={() => <Ionicons name="md-person" size={50} color="#fff" />}
          />
          {/* condition ? expr if true : expression if false */}

          <Card.Content style={styles.content}>
            <Text style={styles.title}> Game:</Text>
            <Text style={styles.paragraph}>
              {!files[0] ? "Not Given" : files[0]} Vs. {!files[0] ? "Not Given" : files[0]}
            </Text>
          </Card.Content>
          
          <Card.Content style={styles.content}>
            <Text style={styles.title}>Picked:</Text>
            <Text style={styles.paragraph}>
              {!files[1] ? "Not Provided" : files[1]}
            </Text>
          </Card.Content>
          <Card.Content style={styles.content}>
            <Text style={styles.title}>Winning Team: </Text>
            <Text style={styles.paragraph}>
              {!files[2] ? "Not Provided" : files[2]}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: "rgba(137,232,207,100)",
    borderColor: "rgba(137,232,207,100)",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 15,
  },
  paragraph: {
    fontSize: 18,
  },
});
