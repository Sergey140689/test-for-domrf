import FlexWrapper from './components/FlexWrapper';
import {SideMenu} from './SideMenu';
import {MainContent} from './MainContent';

export const LayoutPage = () => {
  return (
    <FlexWrapper>
      <SideMenu />
      <MainContent />
    </FlexWrapper>
  );
};
