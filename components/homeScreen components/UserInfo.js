import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'


const UserInfo = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyles}>Hello</Text>
      <Text style={styles.textStyles}>Erlich Bachman</Text>
    </View>
  )
}

export default UserInfo

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(8),
        width:"95%",
        // backgroundColor:"red",
        alignItems:"flex-end",
        justifyContent:"center"
    },
    textStyles:{
        fontSize:23,
        color:colors.text
    }
})