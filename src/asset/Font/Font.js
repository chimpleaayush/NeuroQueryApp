import forEach from 'lodash/forEach';
import { PixelRatio, Platform, Dimensions } from 'react-native';

const pixelRatio = PixelRatio.get();

const Font = {
  fontSize8: 8,
  fontSize10: 10,
  fontSize12: 12,
  fontSize14: 14,
  fontSize16: 16,
  fontSize18: 18,
  fontSize20: 20,
  fontSize28: 28,
  fontSize32: 32,
  REGULAR: 'Satoshi-Regular',
  SEMI_BOLD: 'Satoshi-Medium',
  BOLD: 'Satoshi-Bold',
};

const scaleFonts = (factor) => {
  forEach(Font, (value, fontSize) => {
    if (fontSize.includes('fontSize')) {
      Font[fontSize] = value;
    }
  });
};
if (Platform.OS === 'android') {
  if (pixelRatio <= 1) {
    //mdpi
    scaleFonts(0);
  } else if (pixelRatio > 1 && pixelRatio <= 1.5) {
    //hpdi
    scaleFonts(0);
  } else if (pixelRatio > 1.5 && pixelRatio <= 2) {
    //xhdpi
    scaleFonts(0);
  } else if (pixelRatio > 2 && pixelRatio <= 3) {
    //xxhdpi
    scaleFonts(2);
  } else if (pixelRatio > 3) {
    //xxxhpdi
    scaleFonts(4);
  }
} else {
  if (pixelRatio >= 2 && width > 320) {
    //width check to avoid scaling in iPhone SE & 5S.
    scaleFonts(2);
  }
}

export default Font;
