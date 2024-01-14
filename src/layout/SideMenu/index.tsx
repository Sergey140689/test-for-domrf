import { HomeOutlined, UserOutlined, ShoppingOutlined, ScheduleOutlined, PercentageOutlined, CoffeeOutlined, SmileOutlined, MessageOutlined, FireOutlined } from '@ant-design/icons';


import {
  Button,
  HeaderContainer,
  List,
  Rectangle,
  SideMenuWrapper,
  TextByPetr,
  TextLogo,
  TextTitle,
} from './components';

export function SideMenu() {
  const menuItems = [{
    icon: <HomeOutlined />,
    title:'Dashboard'
  },
  {
    icon: <UserOutlined />,
    title:'Students'
  },
  {
    icon: <ShoppingOutlined />,
    title:'Teachers'
  },
  {
    icon: <ScheduleOutlined />,
    title:'Event'
  },
  {
    icon: <PercentageOutlined />,
    title:'Finance'
  },
  {
    icon: <CoffeeOutlined />,
    title:'Food'
  },
  {
    icon: <SmileOutlined />,
    title:'User'
  },
  {
    icon: <MessageOutlined />,
    title:'Chat'
  },
  {
    icon: <FireOutlined />,
    title:'Lastest Activity'
  }
  ];
  return (
    <SideMenuWrapper>
      <HeaderContainer>
        <Rectangle />
        <TextLogo>Akademi</TextLogo>
      </HeaderContainer>
      <List>
        {menuItems.map((item, index) => (
          <Button key={index}> {item.icon}&nbsp;&nbsp;{item.title}</Button>
        ))}
      </List>
      <TextTitle>Akademi - School Admission Dashboard</TextTitle>
      <TextByPetr>Made with ♥ by Peterdraw</TextByPetr>
    </SideMenuWrapper>
  );
}
