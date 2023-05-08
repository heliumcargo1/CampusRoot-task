import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../assets/colors'
import Header from '../components/homeScreen components/Header'
import HomePageSwitch from '../components/homeScreen components/HomePageSwitch'
import UserInfo from '../components/homeScreen components/UserInfo'
import BottomNav from '../components/homeScreen components/BottomNav'

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
        <Header/>
        {/* <ScrollView> */}

        <UserInfo/>
        <HomePageSwitch/>
        {/* </ScrollView> */}
        <BottomNav/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        height:responsiveHeight(100),
        width:"100%",
        backgroundColor:colors.primary,
        alignItems:"center"
    }
})