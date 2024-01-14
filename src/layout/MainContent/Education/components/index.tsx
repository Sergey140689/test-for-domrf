import { Input } from "antd";
import { CSSProperties } from "react";
import styled from "styled-components";

export const Container2 = styled.div`
  width: 1475px;
  height: 278px;
  background: white;
  border-radius: 0px 0px 20px 20px;
  display: flex;
`;

export const TextTitle = styled.div`
  width: 241.913px;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 40.32px;
  margin-top: 12px;
`;

export const TextWrapper = styled.div`
  width: 192px;
  color: #303972;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 32px;
`;
type ShortInputProps = {
  $margin?: CSSProperties['margin'];
}
export const SHortInput = styled(Input)<ShortInputProps>`
  width: 296.5px;
  height: 48px;
  border-radius: 5px;
  border: 1px solid;
  margin: ${({$margin}) => $margin};
`;
