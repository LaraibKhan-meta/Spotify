// import { Dimensions } from "react-native";


//     const {width, height} = Dimensions.get('window');
//     const BASE_WIDTH = 428;
//     const BASE_HEIGHT = 926;
//     const scaleSize = size => (width / BASE_WIDTH) * size;
//     const verticalScaleSize = size => (height / BASE_HEIGHT) * size;
//     const responsiveFontSize = size => {
//       const scaleFactor = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT);
//       return Math.round(size * scaleFactor);
//     };
    
//     const responsive = {
//       width: size => scaleSize(size),
//       height: size => verticalScaleSize(size),
//       fontSize: size => responsiveFontSize(size),
//       margin: size => scaleSize(size),
//       padding: size => scaleSize(size),
//       borderRadius: size => scaleSize(size),
//     };

// export default responsive;

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//guideline sizes
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor: number = 1): number =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size: number, factor: number = 1) =>
  size + (verticalScale(size) - size) * factor;
