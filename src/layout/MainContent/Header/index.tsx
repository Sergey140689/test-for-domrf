import React from 'react';
import FlexWrapper from '../../components/FlexWrapper';
import {Bg, Bg2, PlaceHolder, TextAdd, TextName, TextStatus} from './components';

export function Header() {
  return (
    <FlexWrapper $width={'1575px'} $height={'110px'} $justifyContent={'space-between'}>
      <TextAdd>Add New Teacher</TextAdd>
      <FlexWrapper
        $width={'313px'}
        $height={'60px'}
        $alignItems={'flex-end'}
        $marginTop={'50px'}
        $marginRight={'50px'}>
        <Bg />
        <Bg2 />
        <FlexWrapper
          $flexDirection={'column'}
          $justifyContent={'center'}
          $alignItems={'flex-end'}
          $height={'60px'}>
          <TextName>Nabila A.</TextName>
          <TextStatus>Admin</TextStatus>
        </FlexWrapper>
        <PlaceHolder />
      </FlexWrapper>
    </FlexWrapper>
  );
}
