import './App.css';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  margin: auto;
  background-color: #f5f4f6;
  height: 956px;
  width: 1700px;
  flex-direction: row;
`;

export const Aside = styled.aside`
  display: inherit;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 16.9%;
`;

export const Sidebar = styled.div`
  margin-top: 12px;
  border-radius: 8px;
  display: inherit;
  background-color: white;
  height: 95%;
  width: 227px;
`;

export const Main = styled.main`
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 83%;
`;

export const Header = styled.header`
  display: inherit;
  margin-top: 44px;
  align-self: flex-start;
  justify-content: space-between;
  width: 97.4%;
`;

export const SearchBar = styled.input`
  height: 45px;
  border: none;
  border-radius: 8px;
  width: 29.3vw;
`;

export const HeaderButtonContainer = styled.div`
  display: inherit;
`;

export const BlueButton = styled.button`
  margin-left: 21px;
`;

export const WhiteButton = styled.button`
  margin-left: 21px;
`;

export const H1 = styled.h1`
  padding: 0;
  margin-top: 19px;
  font-size: 32px;
`;

export const MainLeftContainer = styled.div`
  display: inherit;
  margin-top: 4px;
  height: 80%;
  width: 64.8%;
  flex-direction: column;
`;

export const MainRightContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const FullCard = styled.div`
  display: inherit;
  margin-top: 1px;
  border-radius: 7px;
  background-color: white;
  height: 51.1%;
  width: 100%;
`;

export const HalfCardContainer = styled.div`
  display: inherit;
  justify-content: space-between;
  margin-top: 22px;
  height: 46%;
  width: 100%;
`;

export const HalfCard = styled.div`
  display: inherit;
  border-radius: 7px;
  height: 100%;
  width: 48.8%;
  background-color: white;
`;

function App() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <AppContainer className="App">
        <Aside className="aside">
          <Sidebar className="sidebar"></Sidebar>
        </Aside>
        <Main>
          <Header className="header">
            <SearchBar type="search" placeholder="Search" />
            <HeaderButtonContainer>
              <BlueButton>+</BlueButton>
              <BlueButton>Import</BlueButton>
              <WhiteButton>B</WhiteButton>
            </HeaderButtonContainer>
          </Header>
          <H1>Dashboard</H1>
          <MainLeftContainer>
            <FullCard></FullCard>
            <HalfCardContainer>
              <HalfCard></HalfCard>
              <HalfCard></HalfCard>
            </HalfCardContainer>
          </MainLeftContainer>
          <MainRightContainer></MainRightContainer>
        </Main>
      </AppContainer>
    </div>
  );
}

export default App;
