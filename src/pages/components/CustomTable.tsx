import {Table} from 'antd';
import styled from 'styled-components';

export const CustomTable = styled(Table)`
  &.customTable:where(.css-dev-only-do-not-override-dkbvqv).ant-table-wrapper {
    width: 80vw;
    margin: auto;
  }
  &.customTable:where(.css-dev-only-do-not-override-dkbvqv).ant-table-wrapper
    .ant-table-thead
    > tr
    > th,
  :where(.css-dev-only-do-not-override-dkbvqv).ant-table-wrapper .ant-table-thead > tr > td {
    background-color: ${(props) => props.theme.tableHeaderColor};
    color: ${(props) => props.theme.tableHeaderTextColor};
  }
  &.customTable:where(.css-dev-only-do-not-override-dkbvqv).ant-table-wrapper .ant-table {
    color: brown;
    font-size: 11px;
  }
`;
