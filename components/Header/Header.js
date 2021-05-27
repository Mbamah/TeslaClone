import React from 'react'
import { View, Image,Text } from "react-native";
import styles from "./Styles";

function Header() {
    return (
      <View style={styles.container}>
          {/* <Text>heisfhosdf</Text> */}
        <Image style={styles.logo} source={require("../../assets/imgs/logo.png")} />
        <Image style={styles.mennu} source={require("../../assets/imgs/menu.png")} />
      </View>
    );
}

export default Header
