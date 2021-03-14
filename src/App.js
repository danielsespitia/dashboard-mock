import './App.css';
import styled from 'styled-components';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactsIcon from '@material-ui/icons/Contacts';
import InboxIcon from '@material-ui/icons/Inbox';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

export const logo =
  'https://lh3.googleusercontent.com/proxy/PEqQnSUdEEvMGTjmKTPxIn_xJv4wWt8O1DVlEOCy4AGTM6XD1_F7OqdjLCZGZZURjAGjuwFACDSgXGSCR7jKyidf3HMH2V5FxMnEs1fNAwKdA0DZR2furajhXOHIcs8qN4pGDh6WN0SwKME1yLXccYlQLpKxiS0';

export const AppContainer = styled.div`
  display: flex;
  margin: auto;
  background-color: #f3f2f4;
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
  flex-direction: column;
  background-color: white;
  height: 95%;
  width: 230px;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const SidebarHeader = styled.header`
  display: inherit;
  width: 100%;
  height: 9%;
`;

export const SidebarButtonContainer = styled.div`
  display: inherit;
  flex-direction: column;
  height: 81.4%;
`;

export const SidebarButton = styled.button`
  background-color: white;
  text-align: left;
  display: flex;
  align-items: center;
  height: 43px;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-right: 5px solid white;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  &:active {
    background-color: #def5ff;
    border-right: 5px solid #09aff6;
  }
  &:hover {
    background-color: #def5ff;
    border-right: 5px solid #09aff6;
  }
`;

export const SidebarCheckbox = styled.input`
  &:focus .sidebar-button {
    background-color: #000000;
  }
`;

export const LogoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  width: 85%;
  height: 44px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const SidebarUserContainer = styled.div`
  display: inherit;
  align-self: center;
  flex-direction: row;
  justify-self: flex-end;
`;

export const ThumbnailContainer = styled.div`
  height: 35px;
  width: 35x;
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  border: 2px solid #20b3f3;
  border-radius: 50%;
`;

export const UserInfoContainer = styled.div`
  display: inherit;
  margin-left: 10px;
  align-items: flex-start;
  flex-direction: column;
`;

export const P = styled.p`
  margin: 0;
  padding: 0;
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
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
  outline: none;
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

export const DashboardContainer = styled.div`
  display: inherit;
  margin-top: 4px;
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

export const FullCard = styled.div`
  display: inherit;
  border-radius: 7px;
  background-color: white;
  height: 50.8%;
  width: 100%;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
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
  width: 48.9%;
  background-color: white;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const HalfCardAltered = styled.div`
  display: inherit;
  background-color: white;
  height: 43.8%;
  width: 95.9%;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const HalfCardStretched = styled.div`
  background-color: white;
  margin-top: 20px;
  height: 53.3%;
  width: 95.9%;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const marginButton = { marginRight: '6px' };

export const thumbnail =
  'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg';

function App() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <AppContainer className="App">
        <Aside className="aside">
          <Sidebar className="sidebar">
            <SidebarHeader>
              <LogoContainer>
                <Logo src={logo} />
              </LogoContainer>
            </SidebarHeader>
            <SidebarButtonContainer>
              <SidebarButton className="sidebar-button">
                <DashboardIcon style={marginButton} />
                Dashboard
              </SidebarButton>
              <SidebarButton>
                <ContactsIcon style={marginButton} />
                Contacts
              </SidebarButton>
              <SidebarButton>
                <InboxIcon style={marginButton} />
                Inbox
              </SidebarButton>
              <SidebarButton>
                <InboxIcon style={marginButton} />
                Broadcast
              </SidebarButton>
              <SidebarButton>
                <InboxIcon style={marginButton} />
                Lists
              </SidebarButton>
              <SidebarButton>
                <InboxIcon style={marginButton} />
                Referrals
              </SidebarButton>
            </SidebarButtonContainer>
            <SidebarUserContainer>
              <ThumbnailContainer>
                <Thumbnail src={thumbnail} />
              </ThumbnailContainer>
              <UserInfoContainer>
                <P>
                  <strong>Jacob Jones</strong>
                </P>
                <P>Company Name</P>
              </UserInfoContainer>
              <KeyboardArrowDownOutlinedIcon />
            </SidebarUserContainer>
          </Sidebar>
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
          <DashboardContainer>
            <MainLeftContainer>
              <FullCard></FullCard>
              <HalfCardContainer>
                <HalfCard></HalfCard>
                <HalfCard></HalfCard>
              </HalfCardContainer>
            </MainLeftContainer>
            <MainRightContainer>
              <HalfCardAltered></HalfCardAltered>
              <HalfCardStretched></HalfCardStretched>
            </MainRightContainer>
          </DashboardContainer>
        </Main>
      </AppContainer>
    </div>
  );
}

export default App;
