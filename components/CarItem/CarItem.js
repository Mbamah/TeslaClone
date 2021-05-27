import React from 'react'
import {Text, View, ImageBackground, Button, onPress} from 'react-native'
import styles from './Styles'
import Btn from '../Button/Button'

function CarItem(props) {
  const {name, tagLine, image, tagLineCTA } = props.car
  console.log(name, tagLine, image);
    return (
      <View style={styles.carContainer}>
        <ImageBackground
          style={styles.image}
          source={image}
        >
          <View style={styles.titles}>
            <Text style={styles.title}> {name}</Text>
            <Text style={styles.subTitle}>{tagLine} {' '}
              <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
            </Text>
          </View>
          <View style={styles.buttonsContainer}>

          <Btn type="primary" content={'custom order'} onPress={()=>{console.log('primary clicked')}}/>
          <Btn type="secondary" content={'Explore Inventory'} />
          </View>
        </ImageBackground>
      </View>
    );
}

export default CarItem
