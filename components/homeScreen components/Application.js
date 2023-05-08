import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'


const Application = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.textStyles}>Stoney Brook Univ</Text>
          <Text style={styles.textStyles1}>Waiting for the result</Text>
          <View style={{height:"30%",justifyContent:"space-between"}}>
            <Text style={styles.textStyles}>90%</Text>
            <View style={styles.loadingContainer}>
              <View style={{width:"90%",backgroundColor:colors.secondary,height:"100%"}}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.textStyles}>New York University</Text>
          <Text style={styles.textStyles1}>Uploaded SOP, LORs</Text>
          <View style={{height:"30%",justifyContent:"space-between"}}>
            <Text style={styles.textStyles}>90%</Text>
            <View style={styles.loadingContainer}>
              <View style={{width:"90%",backgroundColor:colors.secondary,height:"100%"}}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.textStyles}>Scan jose State Univ.</Text>
          <Text style={styles.textStyles1}></Text>
          <View style={{height:"30%",justifyContent:"space-between"}}>
            <Text style={styles.textStyles}>90%</Text>
            <View style={styles.loadingContainer}>
              <View style={{width:"90%",backgroundColor:colors.secondary,height:"100%"}}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Application

const styles = StyleSheet.create({
  mainContainer:{
    height:responsiveHeight(68),
    width:"100%",
    // backgroundColor:"red",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  cardContainer:{
    height:"30%",
    width:"90%",
    backgroundColor:colors.third,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  innerContainer:{
    height:"90%",
    width:"90%",
    // backgroundColor:"red",
    justifyContent:"space-evenly"
  },
  loadingContainer:{
    height:"15%",
    width:"100%",
    borderRadius:6,
    backgroundColor:"grey"
  },
  textStyles:{
    fontSize:20,
    fontWeight:"600",
    color:colors.text
  },
  textStyles1:{
    fontSize:16,
    // fontWeight:"600",
    color:colors.text
  }
})