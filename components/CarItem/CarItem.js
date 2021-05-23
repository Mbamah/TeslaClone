import React from 'react'
import {Text, View, ImageBackground} from 'react-native'
import styles from './Styles'

function CarItem() {
    return (
      <View style={styles.carContainer}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/imgs/ModelS.jpeg")}
        >
          <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subTitle}>Starting price of $65,829</Text>
          </View>
        </ImageBackground>
      </View>
    );
}

export default CarItem
