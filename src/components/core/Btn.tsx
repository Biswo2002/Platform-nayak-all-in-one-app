import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';
import {StyleProps} from 'react-native-reanimated';
import {COLORS, FONTS} from '../../styles';

const GradientButton = ({
  action,
  text,
  gradientStyle,
  buttonStyle,
  textStyle,
  children,
  disabled,
  Color1,
  Color2,
}: {
  action: any;
  text: string;
  gradientStyle?: StyleProps;
  buttonStyle?: StyleProps;
  textStyle?: StyleProps;
  children?: any;
  disabled?: boolean;
  Color1?: any;
  Color2?: any;
}) => (
  <>
    <LinearGradient
      style={{
        ...styles.gradient,
        ...gradientStyle,
        overflow: 'hidden',
        opacity: disabled ? 0.5 : 1, // Apply opacity if disabled
      }}
      colors={[
        Color1 ? Color1 : COLORS.secondaryC2,
        Color2 ? Color2 : COLORS.primaryC1,
      ]}>
      <TouchableOpacity
        onPress={action}
        disabled={disabled}
        style={{...styles.button, ...buttonStyle}}>
        {!children ? (
          <Text
            style={{
              ...styles.text,
              ...textStyle,
            }}>
            {text}
          </Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    </LinearGradient>
  </>
);

export default GradientButton;

const styles = StyleSheet.create({
  gradient: {
    minHeight: 50,
    maxHeight: 60,
    overflow: 'hidden',
    borderRadius: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffffff00',
  },
  text: {
    fontFamily: FONTS[400].normal,
    textAlignVertical: 'center',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
  },
});
