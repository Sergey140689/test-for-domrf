import React from 'react'
import FlexWrapper from '../../components/FlexWrapper'
import { DraftButton, SubmitButton } from './components'

export function Footer() {
  return (
<FlexWrapper
        $marginLeft={'50px'}
        $width={'1475px'}
        $height={'100%'}
        $justifyContent={'flex-end'}
>
<DraftButton>Save as Draft</DraftButton>
<SubmitButton>Submit</SubmitButton>
</FlexWrapper>
  )
}
