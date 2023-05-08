import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import UniInfo from './UniInfo'
import Category from './Category'


const OverView = () => {
  return (
    <View style={styles.mainContainer}>
      <UniInfo/>
      <Category/>
    </View>
  )
}

export default OverView

const styles = StyleSheet.create({
  mainContainer:{
    height:responsiveHeight(69),
    // backgroundColor:"grey",
    width:"100%"
  }
})