import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'

const UniInfo = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
            <View style={styles.topContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.textStyles}>Stoney Brook Univ.</Text>
                </View>
                <View style={styles.rightContainer}></View>
            </View>
            <View style={styles.middleContainer}>
            <View style={styles.leftContainer}>
            <Text adjustsFontSizeToFit={true} style={[styles.textStyles]}>Here you can see your upcoming tasks and applyication progress</Text>
                </View>
                <View style={styles.rightContainer}></View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={[styles.textStyles,{fontSize:18}]}>76%</Text>
                <View style={styles.loadingView}>
                    <View style={styles.blue}></View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default UniInfo

const styles = StyleSheet.create({
    mainContainer:{
        height:"35%",
        width:"100%",
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
    },
    innerContainer:{
        height:"70%",
        width:"85%",
        backgroundColor:colors.third,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    topContainer:{
        height:"20%",
        width:"95%",
        // backgroundColor:"pink",
        flexDirection:"row"
    },
    leftContainer:{
        width:"70%",
        height:"100%",
        // backgroundColor:"red",
    justifyContent:"center"
    },
    rightContainer:{
        width:"30%",
        height:"100%",
        // backgroundColor:"blue"
    },
    middleContainer:{
        height:"20%",
        width:"95%",
        // backgroundColor:"green",
        flexDirection:"row"
    },
    bottomContainer:{
        height:"40%",
        width:"95%",
        // backgroundColor:"pink",
        justifyContent:"center"
    },
    loadingView:{
        height:"10%",
        width:"100%",
        backgroundColor:"grey"
    },
    blue:{
        height:"100%",
        width:"76%",
        backgroundColor:colors.secondary
    },
    textStyles:{
        fontSize:22,
        color:colors.text
    }
})