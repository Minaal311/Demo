import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, View, Text, Pressable, Image, TouchableOpacity,ImageBackground} from 'react-native';
import colors from '../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import fontFamily from '../styles/fontFamily';


const PaginationCard = ({item, index, containerStyle,onpressProfile}) => {
console.log(item,"fwdhfbsdiufs");
    return(
        <ImageBackground style={styles.cardImage} source={item.imageData} imageStyle={{borderRadius:12}}>
           
<View style={styles.eventNameView}>
    <Text style={styles.envetNameText}>{item.eventName}</Text>
    <View style={styles.dateView}>
<Text style={styles.dateText}>{item.dateEvent}</Text>
<Text style={styles.monthText}>{item.monthEvent}</Text>
            </View>
</View>
<View style={styles.timingView}>
    <Text style={styles.eventTypeText}>Go to ticket </Text>
</View>
        </ImageBackground>

    )
}
export default PaginationCard;

const styles = StyleSheet.create({
    cardImage:{
        resizeMode:"cover",
        // flex:1,
        width:"75%",
        marginHorizontal:moderateScale(20),
        height:moderateScaleVertical(160),
        marginBottom:moderateScaleVertical(16),
// justifyContent:"flex-end",
padding:moderateScale(15)
    },
    eventNameView:{
        width:"80%",
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom:moderateScaleVertical(15)
    },
    envetNameText:{
        fontFamily:fontFamily.regular,
        fontSize:textScale(20),
        color:colors.white
    },
    eventTypeText:{
        fontFamily:fontFamily.regular,
        fontSize:textScale(12),
        color:colors.white
    },
    timingView:{
        width:"80%",
alignItems:"flex-end",
justifyContent:"flex-end"
    },
    eventTimingText:{
        fontFamily:fontFamily.regular,
        fontSize:textScale(12),
        color:colors.white
    },
    dateView:{
        backgroundColor:colors.white,
        height:moderateScaleVertical(36),
        width:moderateScale(36),
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:2
    },
    dateText:{
        fontFamily:fontFamily.regular,
        fontSize:textScale(14),
        color:colors.black
    },
    monthText:{
        ontFamily:fontFamily.regular,
        fontSize:textScale(10),
        color:colors.textGray,
        lineHeight:16,
        marginBottom:4,
        
    }
})