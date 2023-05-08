import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../../assets/colors'


const Header = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
            <View style={styles.leftContainer}>
                <Image source={require('../../assets/icons/tune.png')} style={styles.imgStyles}/>
            </View>
            <View style={styles.middleContainer}>
                <Text style={styles.textStyles}>Home</Text>
            </View>
            <View style={styles.rightContainer}>
                
                <Image source={require('../../assets/icons/search.png')} style={styles.imgStyles}/>
                <TouchableOpacity>

                <Image source={require('../../assets/icons/acc.png')} style={[styles.imgStyles,{height:50,width:50}]}/>
                </TouchableOpacity>
                <Image source={require('../../assets/icons/notification.png')} style={styles.imgStyles}/>
            </View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    mainContainer:{
        height: responsiveHeight(8),
        width:"100%",
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center"
    },
    innerContainer:{
        height:"100%",
        width:"95%",
        // backgroundColor:"blue",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    leftContainer:{
        height:"100%",
        width:"30%",
        // backgroundColor:"green",
        justifyContent:"center"
    },
    imgStyles:{
        height:"60%",
        width:"25%",
        resizeMode:"contain"
    },
    middleContainer:{
        height:"100%",
        width:"30%",
        // backgroundColor:"green",
        justifyContent:"center",
        alignItems:"center"
    },
    textStyles:{
        fontSize:18,
        color:colors.text
    },
    rightContainer:{
        height:"100%",
        width:"30%",
        // backgroundColor:"green",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
})