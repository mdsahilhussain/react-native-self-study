import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Card } from "../components";
import { ColorSet } from "../constants";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.subtitle}>The Game is Over !</Text>
        <View style={styles.imageContainer}>
          <Image
            fadeDuration={1000}
            source={require("../assets/imgeOne.jpg")}
            // source={{
            //   url: "data:image/jpeg;base64,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",
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.subtitle}>
          Number of rounds: {props.roundsNumber}
        </Text>
        <Text style={styles.subtitle}>Number was: {props.userNumber}</Text>
        <View style={styles.button}>
          <Button
            title="Play again"
            color={ColorSet.primary}
            onPress={props.onRestGame}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  subtitle: { fontSize: 16, marginBottom: 8 },

  card: {
    alignItems: "center",
    width: "90%",
  },

  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    //! borderRadious half of that so we divide by two
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
    //! marginVertical value set 30
    borderWidth: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  button: {
    marginTop: 16,
    width: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    //! vertical margin to 5% of the device height(!). height/40 would set it to 2.5% EventCounts={.}
    marginVertical: Dimensions.get("window").height / 40,
    //! marginVertical value set 15
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});
