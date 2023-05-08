import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import data from '../../data';
  import {
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import colors from '../../assets/colors';
  
  
  const BabyCard = ({score, title, newinfo}) => {
  
    return (
      <View style={styles.cardContainer}>
        <View style={styles.topContainer}>
            <View style={styles.leftContainer}>
                <Image source={require('../../assets/icons/book.png')} style={{width:"90%",height:"90%",resizeMode:"contain"}}/>
            </View>
            <View style={styles.rightContainer}></View>
        </View>
        <View style={styles.middleContainer}>
            <Text style={styles.textStyles1}>{newinfo} new</Text>
            <Text style={[styles.textStyles1,{fontSize:18,color:colors.text}]}>{title}</Text>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.loadingContainer}>
                <View style={{width:"60%",backgroundColor:colors.secondary,height:"100%"}}></View>
            </View>
            <View style={styles.scoreContainer}>
                <Text style={[styles.textStyles1,{fontSize:12,color:colors.text}]}>{score}</Text>
            </View>
        </View>
      </View>
    );
  };
  
  const Category = () => {
    return (
        <>
        <Text style={styles.textStyles}>Categories</Text>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {data.map((item) => (
            <BabyCard
              key={item.id}
              newinfo={item.new}
              title={item.title}
              score={item.score}
            />
          ))}
        </ScrollView>
      </View>
        </>
    );
  };
  
  export default Category;
  
  const styles = StyleSheet.create({
      textStyles:{
        color:colors.text,
        fontSize: 22,
      },
      container: {
          flexGrow: 1,
          // backgroundColor: 'red',
          alignItems: 'center',
        },
    scrollContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      paddingBottom: 20,
    },
  
    cardContainer: {
      width: responsiveWidth(42),
      height: responsiveHeight(18),
      backgroundColor:colors.third,
      // backgroundColor: 'red',
      borderRadius: 20,
      marginBottom: 10,
      marginTop: 10,
      marginLeft:10,
      marginRight:5,
      alignItems:"center",
      justifyContent: 'space-evenly',
    //   paddingHorizontal: 20,
    },
    topContainer:{
        height:"25%",
        width:"90%",
        // backgroundColor:"red",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    leftContainer:{
        height:"100%",
        width:"30%",
        backgroundColor:colors.secondary,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center"
    },
    rightContainer:{
        height:20,
        width:20,
        backgroundColor:colors.secondary,
        borderRadius:50
    },
    middleContainer:{
        height:"25%",
        width:"90%",
        // backgroundColor:"red"
    },
    bottomContainer:{
        height:"25%",
        width:"90%",
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    loadingContainer:{
        backgroundColor:"grey",
        height:"20%",
        width:"60%",
        borderRadius:3
    },
    scoreContainer:{
        height:"60%",
        width:"30%",
        backgroundColor:colors.secondary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    textStyles1:{
        fontSize:14,
        color:"grey"
    }
    
  });
  