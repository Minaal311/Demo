import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

const TextInputWithLabel = ({
  label,
  style,
  onChangeText,
  value,
  editable=true,
  defaultValue,
  active = false,
  secureTextEntry = false,
  rightIcon,
  show,
  containerstyle={},
  customTextStyle = {},
  placeholder = '',
  onPress = () => {},
  onPressRightIcon = () => {},
  pass = false,
  inputType = 'default',
  onSubmitEditing,
  selectTextOnFocus,
  multiline=false,
  viewStyle,
  btnstyle,
  btntxt,
  numberOfLines,
  maxLength,
  ...rest
}) => {
  let currentColor = active ? colors.themeColor : colors.textgray;
  return (
    <View style={{ marginTop: moderateScaleVertical(16), ...style}}>
      <View style={{...styles.textView,...viewStyle}}>
        <TextInput
      
          {...rest}
          onSubmitEditing={onSubmitEditing}
          editable={editable}
          multiline={multiline}
          selectTextOnFocus={selectTextOnFocus}
          placeholder={placeholder}
          autoCompleteType="off"
          defaultValue={defaultValue}
          placeholderTextColor={colors.textGray}
          secureTextEntry={secureTextEntry}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
          // onFocus={onFocus}
          style={{
            flex:1,
            ...styles.textInput,
            borderColor: currentColor,
            color: colors.white,
            justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
            ...containerstyle
          }}
          keyboardType={inputType}
          onChangeText={onChangeText}
          value={value}
        />
        {!!show&&
        (
          <TouchableOpacity
          hitSlop={hitSlopProp}
          onPress={onPressRightIcon}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 6,
          }}>
            <Text style={btnstyle}>{btntxt}</Text>
         
        </TouchableOpacity>
          
        )}
        {!!rightIcon && (
          <TouchableOpacity
            hitSlop={hitSlopProp}
            onPress={onPressRightIcon}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 6,
            }}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  textInput: {
    // color:colors.textGray,
    fontSize:textScale(12),
    // height: moderateScaleVertical(48),
    paddingHorizontal: moderateScaleVertical(16),
    textAlignVertical: 'center',
    
  },
  textView: {
    flexDirection: 'row',
    height: moderateScaleVertical(48),
    borderRadius: 12,
    backgroundColor: colors.placeholderColor,
    marginHorizontal:20,
    justifyContent: 'center',
    alignItems:"center",
    marginBottom:moderateScaleVertical(24)
    // paddingHorizontal: moderateScale(8),
   
  },
});
