import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
    moderateScaleVertical,
    moderateScale,
    textScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
  
    nameText:{
        fontFamily:fontFamily.regular,
        color:colors.white,
        fontSize:textScale(24)
    },
    entireView:{
        flex:1,
        backgroundColor:colors.black
    },
    nameNotificationView:{
        flexDirection:"row",
        marginHorizontal:moderateScale(20),
        marginTop:moderateScaleVertical(28)
    },
    dateText:{
        fontFamily:fontFamily.regular,
        fontSize:textScale(18),
        color:colors.white
    },
    dateMapView:{
        flexDirection:"row",
        marginTop:moderateScaleVertical(32),
        paddingHorizontal:moderateScale(20),
        justifyContent:"space-between",
        alignItems:"center"
    },
    locationText:{
        color:colors.creamWhite,
        fontFamily:fontFamily.regular,
        fontSize:textScale(14)
    },
    locationDateView:{
        justifyContent:"center"
    },
    imageView:{
        flexDirection:"row",
        // flex:1,
        backgroundColor:colors.emailContainer,
        marginHorizontal:moderateScale(43),
        height:moderateScale(192),
        borderRadius:13,
        paddingLeft:moderateScale(22),
        paddingRight:moderateScale(12),
        paddingVertical:moderateScaleVertical(18),
        resizeMode:"cover",
        marginTop:moderateScaleVertical(20)
    },
    eventsTextPopular: {color:colors.white,fontSize:textScale(14),
    fontFamily:fontFamily.regular},
    headerView:{
        paddingHorizontal:moderateScale(20),
        marginBottom:moderateScaleVertical(12),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    seeAllText:{
        fontSize:textScale(12),
        fontFamily:fontFamily.regular,
        color:colors.white
    }
})