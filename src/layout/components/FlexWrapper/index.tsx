import {CSSProperties} from 'react';
import styled from 'styled-components';

type FlexWrapperType = {
  $justifyContent?: CSSProperties['justifyContent'];
  $alignItems?: CSSProperties['alignItems'];
  $margin?: CSSProperties['margin'];
  $marginTop?: CSSProperties['marginTop'];
  $marginLeft?: CSSProperties['marginLeft'];
  $marginRight?: CSSProperties['marginRight'];
  $marginBottom?: CSSProperties['marginBottom'];
  $padding?: CSSProperties['padding'];
  $flexDirection?: CSSProperties['flexDirection'];
  $width?: CSSProperties['width'];
  $maxWidth?: CSSProperties['maxWidth'];
  $height?: CSSProperties['height'];
  $wrap?: CSSProperties['flexWrap'];
  $cursor?: CSSProperties['cursor'];
  $background?: CSSProperties['background'];
};

const FlexWrapper = styled.div<FlexWrapperType>`
  display: flex;
  cursor: ${({$cursor}) => $cursor};
  justify-content: ${({$justifyContent}) => $justifyContent};
  align-items: ${({$alignItems}) => $alignItems};
  margin: ${({$margin}) => $margin};
  margin-top: ${({$marginTop}) => $marginTop};
  margin-left: ${({$marginLeft}) => $marginLeft};
  margin-right: ${({$marginRight}) => $marginRight};
  margin-bottom: ${({$marginBottom}) => $marginBottom};
  padding: ${({$padding}) => $padding};
  flex-direction: ${({$flexDirection}) => $flexDirection};
  width: ${({$width}) => $width};
  height: ${({$height}) => $height};
  flex-wrap: ${({$wrap}) => $wrap};
  max-width: ${({$maxWidth}) => $maxWidth};
  background: ${({$background}) => $background};
`;
export default FlexWrapper;
