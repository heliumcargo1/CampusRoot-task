import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'


const BottomNav = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
            <Image source={require('../../assets/icons/home.png')} style={styles.imgStyles}/>
        </View>
        <TouchableOpacity style={styles.middleContainer}>
            <Text style={styles.textStyles}>+</Text>
        </TouchableOpacity>
        <View style={styles.leftContainer}>
        <Image source={require('../../assets/icons/task.png')} style={styles.imgStyles}/>

        </View>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(9),
        width:"100%",
        // backgroundColor:"pink",
        top:"140%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    leftContainer:{
        height:"90%",
        width:"30%",
        // backgroundColor:"green",
         justifyContent:"center",
        alignItems:"center"
    },
    middleContainer:{
        height:70,
        width:70,
        backgroundColor:colors.secondary,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    textStyles:{
        fontSize:40,
        color:colors.text
    },
    imgStyles:{
        height:"50%",
        width:"50%",
        resizeMode:"contain"
    },

})