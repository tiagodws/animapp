/**
 * Created by dbuarque on 6/20/16.
 */
import React, { StyleSheet, PixelRatio } from 'react-native';

const VARS = Object.freeze({
  paddingSmall: 8,
  paddingMedium: 12,
  paddingLarge: 16,
  paddingExtraLarge: 20,

  fontSizeTiny: 8,
  fontSizeSmall: 12,
  fontSizeMedium: 12,
  fontSizeLarge: 20,
  fontSizeExtraLarge: 20,

  iconSmall: 10,
  iconMedium: 16,
  iconLarge: 20,
  iconExtraLarge: 26,

  marginSmall: 10,
  marginMedium: 10,
  marginLarge: 10,
  marginExtraLarge: 10,

  borderRadius: 2,
  borderSmall: 1
});

const COLORS = Object.freeze({
  textColor: 'black',
  primaryColor: 'white',
  secondaryColor: '#cc0001',
  grayLightColor: '#aaaaaa',
  grayLighterColor: '#ededed',
  grayLightestColor: '#f4f4f4'
});

const styles = StyleSheet.create({
});

export {
  styles as default,
  VARS,
  COLORS
};

