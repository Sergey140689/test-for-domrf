import React from 'react';
import FlexWrapper from '../../components/FlexWrapper';
import {
  AddressInput,
  Container,
  DragPhoto,
  StyledInput,
  TitleWrapper,
} from './components';
import { TextTitle, TextWrapper } from '../Education/components';

export function PersonalDetails() {
  return (
    <FlexWrapper $flexDirection={'column'} $marginLeft={'50px'} $marginTop={'46px'} >
        <TitleWrapper>
          <TextTitle>Personal Details</TextTitle>
        </TitleWrapper>
          <Container>
      <FlexWrapper $width={'697px'} $flexDirection={'column'} $marginLeft={'40px'}>
        {/* firstName */}
        <FlexWrapper $flexDirection={'column'}>
          <TextWrapper>First Name *</TextWrapper>
          <StyledInput />
        </FlexWrapper>
        {/* lastName */}
        <FlexWrapper $flexDirection={'column'}>
          <TextWrapper>Email *</TextWrapper>
          <StyledInput />
        </FlexWrapper>
        {/* Address */}
        <FlexWrapper $flexDirection={'column'}>
          <TextWrapper>Address *</TextWrapper>
          <AddressInput
            showCount
            placeholder="can resize"
            maxLength={2000}
            autoSize={{minRows: 8}}
          />
        </FlexWrapper>
        {/* Date of Birth */}
        <FlexWrapper $flexDirection={'column'}>
          <TextWrapper>Date of Birth *</TextWrapper>
          <StyledInput />
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper $width={'778px'} $flexDirection={'column'}>
        {/* Last Name * */}
        <FlexWrapper $flexDirection={'column'}>
          <TextWrapper>Last Name *</TextWrapper>
          <StyledInput />
        </FlexWrapper>
        {/* Phone * */}
        <FlexWrapper $flexDirection={'column'}>
          <TextWrapper>Phone *</TextWrapper>
          <StyledInput />
        </FlexWrapper>
        {/* Photo * */}
        <FlexWrapper $flexDirection={'column'}>
          <TextWrapper>Photo *</TextWrapper>
          <DragPhoto />
        </FlexWrapper>
        {/* Place of Birth * */}
        <FlexWrapper $flexDirection={'column'}>
          <TextWrapper>Place of Birth *</TextWrapper>
          <StyledInput />
        </FlexWrapper>
      </FlexWrapper>
      </Container>
    </FlexWrapper>
  );
}
