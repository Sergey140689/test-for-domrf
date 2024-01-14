import styled from 'styled-components';


export const SideMenuWrapper = styled.div`
  width: 345px;
  height: 1408px;
  background-color: #4d44b5;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 104px;
`;

export const Rectangle = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fb7d5b;
  margin-top: 53px;
  margin-left: 46px;
`;

export const TextLogo = styled.div`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
  margin-left: 26px;
`;

export const TextTitle = styled.div`
  color: #fff;
  //   font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 80px;
  margin-left: 34px;
`;
export const TextByPetr = styled.div`
  width: 245px;
  color: #fff;
  //   font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
  margin-left: 34px;
`;

export const List = styled.div`
  width: 299px;
  height: 704px;
  display: flex;
  flex-direction: column;
  margin-top: 46px;
  margin-left: 46px;
  color: white;

  & > :first-child {
    margin-top: 0;
    height: 64px;
  }
  & > :not(:nth-child(3)) {
    background-color: #4d44b5;
    color: white;
  }
  & > :nth-child(3) {
    background-color: white;
    color: #4d44b5;
  }
  & > * {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 299px;
  height: 72px;
  padding: 16px 24px;
  align-items: center;
  border-radius: 40px 0px 0px 40px;
  background: #4d44b5;
  margin-top: 8px;
  border: none;
`;



