import React from 'react';
import {Header} from './Header';
import {MainContentWrapper} from './components';
import {PersonalDetails} from './PerconalDetails';
import {Education} from './Education';
import { Footer } from './Footer';

export function MainContent() {
  return (
    <MainContentWrapper>
      <Header />
      <PersonalDetails />
      <Education />
      <Footer />
    </MainContentWrapper>
  );
}
