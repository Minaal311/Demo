import { StyleSheet } from "react-native";

import {
  textScale,
  moderateScale,
  moderateScaleVertical,
} from "./responsiveSize";
import colors from "./colors";
import fontFamily from "./fontFamily";
export const hitSlopProp = {
  top: 25,
  right: 25,
  left: 40,
  bottom: 40,
};
export default StyleSheet.create({
  mainView: {
    padding: 10,
    marginTop: 15,
    marginHorizontal: 20,
  },
  fontSize11Grey: {
    fontSize: textScale(11),
    color: colors.verificationCodeIn,
    fontFamily: fontFamily.regular,
  },
  fontSize11: {
    fontSize: textScale(11),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },

  fontSize12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize12italic: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.italic,
  },
  fontSize13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize13italic: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.italic,
  },
  fontSize13Grey: {
    fontSize: textScale(13),
    color: colors.verificationCodeIn,
    fontFamily: fontFamily.regular,
  },
  fontSize13ExpertiseText: {
    fontSize: textScale(13),
    color: colors.expertiseTextColor,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },
  fontSize13SemiBold: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: "left",
  },

  fontSize13_NO: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },
  fontSizeWithNo_opacity13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },

  fontSize14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSizeBold14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },

  fontSemiBold14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: "left",
  },

  fontSize15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },

  fontSize15SemiBold: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: "left",
  },
  fontSize15Lato_Regular: {
    fontSize: textScale(15),
    fontFamily: fontFamily.regular_Lato,
    textAlign: "left",
    color: colors.black,
  },
  fontSizeBold15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: "left",
  },
  fontSize15Grey: {
    fontSize: textScale(15),
    color: colors.verificationCodeIn,
    fontFamily: fontFamily.regular,
  },
  fontSize15medium: {
    fontSize: textScale(15),
    color: colors.white,
    fontFamily: fontFamily.medium_Archivo,
  },
  fontSize16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },

  fontSizeSemiBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: "left",
  },
  fontSize28ArchivoBoldBlack: {
    fontSize: textScale(30),
    color: colors.black,
    fontFamily: fontFamily.bold_Archivo,
  },
  fontSizeBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontSize18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },
  fontSize18Latoregular: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.regular_Lato,
    textAlign: "left",
  },
  fontSize18ArchivoBlack: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.black_Archivo,
  },
  fontSize18Bold: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: "left",
  },

  fontSize20: {
    fontSize: textScale(20),
    color: colors.lightDarkBlack,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },
  fontSize24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },

  fontBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },

  fontBold22: {
    fontSize: textScale(22),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: "left",
  },
  fontBold22ArchivoBlack: {
    fontSize: textScale(22),
    color: colors.black,
    fontFamily: fontFamily.black_Archivo,
  },

  fontSize26: {
    fontSize: textScale(26),
    color: colors.numberBlackblack,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },
  fontSize26Bold: {
    fontSize: textScale(26),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold36: {
    fontSize: textScale(36),
    color: colors.white,
    fontFamily: fontFamily.bold,
  },
  fontSize13Purple: {
    fontSize: textScale(13),
    color: colors.purpleColor,
    fontFamily: fontFamily.regular,
    textAlign: "left",
  },

  fontSize16SemiBold: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: "left",
  },
  fontSize15SemiBold: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: "left",
  },

  loader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRect: {
    height: moderateScaleVertical(46),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.themeColor,
    borderWidth: 1,
    borderColor: colors.themeColor,
    borderRadius: 4,
  },
  shadowStyle: {
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: moderateScale(10) },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },
  shadowStyle2: {
    backgroundColor: colors.white,
    borderRadius: 1,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: moderateScale(10) },
    shadowOpacity: 0.19,
    shadowRadius: 8,
    elevation: 4,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },
  shadowStyle3: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 4,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },
  askQusetionShadow: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: moderateScale(10) },
    shadowOpacity: 2,
    shadowRadius: 6,
    elevation: 2,
  },

  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
  },
  buttonTextWhite: {
    fontFamily: fontFamily.futuraBtHeavy,
    textTransform: "uppercase",
    color: colors.white,
    textAlign: "center",
  },
  imgOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  expertHeading18: {
    fontSize: textScale(18),
    color: colors.loginButton,
    fontFamily: fontFamily.bold,
  },
  expertHeadingArchivoBlack18: {
    fontSize: textScale(18),
    color: colors.loginButton,
    fontFamily: fontFamily.black_Archivo,
  },
  fontArchivoBlack18: {
    fontSize: textScale(18),
    fontFamily: fontFamily.black_Archivo,
  },
  favoritesTextBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  viewAllTextsemiBold15: {
    fontSize: textScale(15),
    color: colors.loginButton,
    fontFamily: fontFamily.semiBold,
  },
  ratingNumberBold13: {
    fontSize: textScale(13),
    color: colors.white,
    fontFamily: fontFamily.bold,
  },
  fontSizeBold13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  tutorialScreenHeading32: {
    fontSize: textScale(32),
    color: colors.black,
    fontFamily: fontFamily.black_Archivo,
    textAlign: "left",
  },
  fontArchivoBlack22: {
    fontSize: textScale(22),
    color: colors.black,
    fontFamily: fontFamily.black_Archivo,
    textAlign: "left",
  },
  registerTextRegularBold15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
});
