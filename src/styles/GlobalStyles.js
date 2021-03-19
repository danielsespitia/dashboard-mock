import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h2`
  margin: 0;
  padding: 0;
`;

export const P = styled.p`
  margin: 0;
  padding: 0;
`;

export const PageContainer = styled.div`
  display: flex;
  margin: auto;
  background-color: #f3f2f4;
  height: 100vh;
  width: 100vw;
  flex-direction: row;
`;

export const DropdownButton = styled.button`
  display: inherit;
  justify-content: center;
  align-self: flex-start;
  background: none;
  height: 20px;
  width: 20px;
  border: none;
  cursor: pointer;
`;

export const Aside = styled.aside`
  display: inherit;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 17.3%;
`;

export const Main = styled.main`
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 82.7%;
`;

export const CardInfoContainer = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  width: 92%;
  margin-left: 17px;
  margin-top: 15px;
`;

export const HalfCardTitle = styled(H2)`
  font-size: 1.02em;
  font-weight: 550;
`;
