import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import colors from '../assets/colors'
import {useNavigation} from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
            <Image source={require('../assets/icons/loginn.png')} style={styles.imgStyles}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textstyles}>College Root</Text>
            <Text style={[styles.textstyles,{fontSize:18,left:"39%"}]}>The only one stop for........</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginContainer} onPress={()=>{
                navigation.navigate("Home")
            }}>
                <Text  style={[styles.textstyles,{fontSize:18}]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginContainer} onPress={()=>{
                navigation.navigate("Home")
            }}>
            <Text  style={[styles.textstyles,{fontSize:18}]}>Register with email</Text>
            </TouchableOpacity>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.botTextContainer} onPress={()=>{
                navigation.navigate("Home")
            }}>
                <Text  style={[styles.textstyles,{fontSize:18}]}>Google</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.botTextContainer} onPress={()=>{
                navigation.navigate("Home")
            }}>
                <Text  style={[styles.textstyles,{fontSize:18}]}>Apple Id</Text>

                </TouchableOpacity>
            </View>
        </View>
            <Text style={{bottom:"3%"}}>By continuing you agree to the Terms and conditions</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.primary,
        flex:1,
        alignItems:"center"
    },
    imgContainer:{
        width:"80%",
        height:"25%",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"red"
    },
    imgStyles:{
        height:"80%",
        width:"100%",
        resizeMode:"contain"
    },
    textContainer:{
        height:"18%",
        width:"90%",
        // backgroundColor:"red"
    },
    textstyles:{
        color:colors.text,
        fontSize:40,
        fontWeight:"600"
    },
    buttonContainer:{
        height:"40%",
        width:"90%",
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent:"space-around"
    },
    loginContainer:{
        height:"20%",
        width:"100%",
        backgroundColor:colors.secondary,
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center"
    },
    bottomContainer:{
        height:"30%",
        width:"100%",
        // backgroundColor:"green",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    botTextContainer:{
        height:"60%",
        width:"47%",
        // backgroundColor:"red",
        borderRadius:40,
        borderWidth:0.5,
        borderColor:colors.text,
        justifyContent:"center",
        alignItems:"center"
    }



})