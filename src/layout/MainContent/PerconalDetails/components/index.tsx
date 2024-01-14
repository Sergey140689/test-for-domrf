import styled from 'styled-components';
import {Input, Upload} from 'antd';
const {TextArea} = Input;
const {Dragger} = Upload;

export const TitleWrapper = styled.div`
  width: 1475px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 20px 20px 0px 0px;
  background: #4d44b5;
`;
export const Container = styled.div`
  width: 1475px;
  height: 680px;
  background: white;
  border-radius: 0px 0px 20px 20px;
  display: flex;
`;

export const StyledInput = styled(Input)`
  width: 617px;
  height: 48px;
  border-radius: 5px;
  border: 1px solid;
  margin-top: 16px;
  margin-bottom: 24px;
`;
export const AddressInput = styled(TextArea)`
  width: 617px;
  border-radius: 5px;
  border: 1px solid;
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const DragPhoto = styled(Dragger)`
  width: 185px;
  height: 185px;
  border-radius: 5px;
  border: 1px dashed;
  margin-top: 16px;
  margin-bottom: 13px;
  background: #fff;
`;

export const PersonalDetails = styled.div`
  width: 1475px;
  height: 740px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  margin-left: 50px;
  margin-top: 40px;
`;


