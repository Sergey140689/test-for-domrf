import React from 'react';
import FlexWrapper from '../../components/FlexWrapper';
import { StyledInput, TitleWrapper } from '../PerconalDetails/components';
import { Container2, SHortInput,  TextTitle, TextWrapper } from './components';

export function Education() {
  return (
    <FlexWrapper
      $width={'1475px'}
      $height={'338px'}
      $flexDirection={'column'}
      $marginLeft={'50px'}
      $marginTop={'40px'}
      $marginBottom={'40px'}>
                <TitleWrapper>
          <TextTitle>Education</TextTitle>
        </TitleWrapper>
        <Container2>
          <FlexWrapper $width={'697px'} $flexDirection={'column'} $marginLeft={'40px'}>
            {/* University * */}
            <FlexWrapper $flexDirection={'column'}>
              <TextWrapper>University *</TextWrapper>
              <StyledInput />
            </FlexWrapper>
            {/* Start & End Date * */}
            <FlexWrapper $flexDirection={'column'}>
              <TextWrapper>Start & End Date *</TextWrapper>
              <FlexWrapper $width={'100%'} $justifyContent={'flex-start'}>
                <SHortInput $margin={'16px 0 24px 0'}/>
                <SHortInput $margin={'16px 0 24px 24px'}/>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper $width={'778px'} $flexDirection={'column'}>
            <FlexWrapper $flexDirection={'column'}>
              <TextWrapper>Degree *</TextWrapper>
              <StyledInput />
              {/* City * */}
            </FlexWrapper>
            <TextWrapper>City *</TextWrapper>
            <StyledInput />
          </FlexWrapper>
        </Container2>
      </FlexWrapper>
  );
}
