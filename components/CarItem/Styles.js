import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  carContainer: {
    width: "100%",
    height: Dimensions.get('window').height,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titles: {
    // backgroundColor: "red",
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subTitleCTA:{
    textDecorationLine:'underline'
  },
});

export default styles