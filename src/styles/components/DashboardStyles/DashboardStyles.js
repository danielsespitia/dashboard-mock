import styled from 'styled-components';

import { H1 } from '../../GlobalStyles';

export const DashboardContainer = styled.div`
  display: inherit;
`;

export const MainTitle = styled(H1)`
  padding: 0;
  margin: 0;
  margin-top: 13px;
  margin-bottom: 20px;
  font-size: 2.1em;
  font-weight: 600;
`;

export const DashboardInfoContainer = styled.div`
  display: inherit;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const MainLeftContainer = styled.div`
  display: inherit;
  height: 98%;
  width: 64.8%;
  flex-direction: column;
`;

export const MainRightContainer = styled.div`
  display: inherit;
  flex-direction: column;
  margin-left: 20px;
  height: 98%;
  width: 33%;
`;
