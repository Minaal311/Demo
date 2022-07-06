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

const CardHorizontalHomeList = ({item, index, containerStyle,onpressProfile}) => {
console.log(item,"fwdhfbsdiufs");
    return(
        <ImageBackground style={{...styles.cardImage,marginLeft:index==0?20:12}} source={item.imageData} imageStyle={{borderRadius:12}}>
            <View style={styles.dateView}>
<Text style={styles.dateText}>{item.dateEvent}</Text>
<Text style={styles.monthText}>{item.monthEvent}</Text>
            </View>
<View style={styles.eventNameView}>
    <Text style={styles.envetNameText}>{item.eventName}</Text>
</View>
<View style={styles.timingView}>
    <Text style={styles.eventTypeText}>🎙 {item.type}</Text>
    <Text style={styles.eventTimingText}>{item.timing}</Text>
</View>
        </ImageBackground>

    )
}
export default CardHorizontalHomeList;

const styles = StyleSheet.create({
    cardImage:{
        resizeMode:"cover",
        // marginHorizontal:moderateScale(20),
        height:moderateScaleVertical(150),
        width:moderateScale(240),
        marginBottom:moderateScaleVertical(16),
justifyContent:"flex-end",
padding:moderateScale(15)
    },
    eventNameView:{
        justifyContent:"flex-end",
        marginBottom:moderateScaleVertical(15)
    },
    envetNameText:{
        fontFamily:fontFamily.regular,
        fontSize:textScale(14),
        color:colors.white
    },
    eventTypeText:{
        fontFamily:fontFamily.regular,
        fontSize:textScale(10),
        color:colors.white
    },
    timingView:{
flexDirection:"row",
justifyContent:"space-between"
    },
    eventTimingText:{
        fontFamily:fontFamily.regular,
        fontSize:textScale(10),
        color:colors.white
    },
    dateView:{
        backgroundColor:colors.white,
       position:"absolute",      
       top: 20,
       right:20,
        height:moderateScaleVertical(48),
        width:moderateScale(48),
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