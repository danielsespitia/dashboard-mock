import './App.css';
import styled from 'styled-components';
import Plot from 'react-plotly.js';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactsIcon from '@material-ui/icons/Contacts';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import ListIcon from '@material-ui/icons/List';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import mainLogo from './assets/logo.png';

export const DropdownButton = styled.button`
  display: inherit;
  justify-content: center;
  background: none;
  height: 30px;
  width: 30px;
  border: none;
  cursor: pointer;
`;

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

export const SidebarButton = styled.a`
  background-color: white;
  text-align: left;
  display: flex;
  align-items: center;
  height: 43px;
  width: 98%;
  font-size: 1rem;
  border: none;
  border-right: 5px solid white;

  margin-bottom: 15px;
  cursor: pointer;
  &:focus {
    background-color: #def5ff;
    border-right: 5px solid #09aff6;
    color: #0daff5;
    font-weight: bold;
  }
  &:hover {
    background-color: #def5ff;
    border-right: 5px solid #09aff6;
    color: #0daff5;
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
  padding-left: 6px;
  align-items: center;
  justify-content: center;
  height: 40px;
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
  font-weight: 300;
  font-size: 14px;
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
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.02);
  outline: none;
`;

export const HeaderButtonContainer = styled.div`
  display: inherit;
`;

export const BlueButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #0fb1f6;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  color: white;
  margin-left: 21px;
  &:hover {
    opacity: 0.7;
  }
`;

export const WhiteButton = styled.button`
  background-color: white;
  border-radius: 10px;
  border: none;
  margin-left: 21px;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 1;
  padding: 3px;
  border-radius: 50%;
  background: #0eb1f6;
`;

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
  margin-top: 19px;
  margin-bottom: 22px;
  font-size: 32px;
  font-weight: 900;
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
  flex-direction: column;
  border-radius: 7px;
  height: 100%;
  width: 48.9%;
  background-color: white;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const CardInfoContainer = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  width: 92%;
  margin-left: 17px;
  margin-top: 15px;
`;

export const CardInfoContainerAlt = styled(CardInfoContainer)`
  margin-top: 18px;
`;

export const CardTitleContainer = styled.div`
  display: inherit;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownContainer = styled.div`
  display: inherit;
  align-items: center;
`;

export const StatsContainer = styled.div`
  display: inherit;
  margin-top: 35px;
  width: 100%;
  flex-direction: column;
`;

export const StatContainer = styled.div`
  display: inherit;
  flex-direction: column;
  margin-bottom: 29px;
`;

export const StatTextContainer = styled.div`
  display: inherit;
  justify-content: space-between;
`;

const messagesSent = '100%';
const messagesLeft = '75%';
const replyRates = '50%';
const emailsSent = '100%';
const openRate = '75%';
const clickedRate = '50%';

export const ProgressBarOutline = styled.div`
  height: 14px;
  width: 100%;
  background-color: #f3f1f1;
  margin-top: 19px;
  border: none;
  border-radius: 20px;
`;

export const ProgressBarLeftBlue = styled.div`
  height: 100%;
  width: ${messagesSent};
  background-color: #0fb1f6;
  border: none;
  border-radius: 20px;
`;

export const ProgressBarLeftOrange = styled(ProgressBarLeftBlue)`
  width: ${messagesLeft};
  background-color: #ffb800;
`;

export const ProgressBarLeftGreen = styled(ProgressBarLeftBlue)`
  width: ${replyRates};
  background-color: #1dd250;
`;

export const ProgressBarRightBlue = styled(ProgressBarLeftBlue)`
  width: ${emailsSent};
`;

export const ProgressBarRightOrange = styled(ProgressBarLeftOrange)`
  width: ${openRate};
`;

export const ProgressBarRightGreen = styled(ProgressBarLeftGreen)`
  width: ${clickedRate};
`;

export const HalfCardAltered = styled.div`
  display: inherit;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
  height: 43.8%;
  width: 95.9%;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const ReferralStatsContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const ReferralStatContainer = styled.div`
  display: inherit;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 6px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 2px solid #efefef;
`;

export const ReferralStatValueBlue = styled.p`
  padding: 0;
  margin: 0;
  font-size: 25px;
  color: #0fb1f6;
  font-weight: 600;
`;

export const ReferralStatValueGreen = styled(ReferralStatValueBlue)`
  color: #1dd250;
`;

export const ReferralLinkContainer = styled.div`
  display: inherit;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 14px;
  width: 100%;
  height: 85px;
`;

export const ReferralLink = styled.input`
  height: 42px;
  width: 100%;
  background-color: #f3f1f1;
  border: none;
  border-radius: 10px;
  outline: none;
`;

export const HalfCardStretched = styled.div`
  background-color: white;
  margin-top: 20px;
  height: 53.3%;
  width: 95.9%;
  border-radius: 7px;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const marginButton = { marginLeft: '30px', marginRight: '6px' };

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
                <Logo src={mainLogo} />
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
                <SettingsInputAntennaIcon style={marginButton} />
                Broadcast
              </SidebarButton>
              <SidebarButton>
                <ListIcon style={marginButton} />
                Lists
              </SidebarButton>
              <SidebarButton>
                <LocalAtmIcon style={marginButton} />
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
              <DropdownButton>
                <KeyboardArrowDownOutlinedIcon />
              </DropdownButton>
            </SidebarUserContainer>
          </Sidebar>
        </Aside>
        <Main>
          <Header className="header">
            <SearchBar type="search" placeholder="Search" />
            <HeaderButtonContainer>
              <BlueButton style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <AddCircleOutlineOutlinedIcon />
              </BlueButton>
              <BlueButton style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <InsertDriveFileOutlinedIcon style={{ marginRight: '6px' }} />
                Import Contacts
              </BlueButton>
              <WhiteButton
                style={{ paddingLeft: '11px', paddingRight: '11px' }}
              >
                <NotificationsNoneIcon />
                <Badge />
              </WhiteButton>
            </HeaderButtonContainer>
          </Header>
          <H1>Dashboard</H1>
          <DashboardContainer>
            <MainLeftContainer>
              <FullCard>
                <Plot
                  data={[
                    {
                      type: 'scatter',
                      x: [
                        '',
                        'Jan',
                        'Feb',
                        'Mar',
                        'Abr',
                        'May',
                        'Jun',
                        'Jul',
                        'Ago',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dic',
                      ],
                      y: [
                        0,
                        199,
                        150,
                        280,
                        230,
                        220,
                        270,
                        150,
                        170,
                        280,
                        220,
                        110,
                        150,
                      ],
                      marker: { color: '#1dd250' },
                      name: 'Customers',
                    },
                    {
                      type: 'scatter',
                      x: [
                        '',
                        'Jan',
                        'Feb',
                        'Mar',
                        'Abr',
                        'May',
                        'Jun',
                        'Jul',
                        'Ago',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dic',
                      ],
                      y: [
                        0,
                        120,
                        220,
                        150,
                        140,
                        290,
                        185,
                        205,
                        105,
                        120,
                        402,
                        80,
                        210,
                      ],
                      marker: { color: '#ff8900' },
                      name: 'Prospects',
                    },
                  ]}
                  layout={{
                    borderRadius: 50,
                    width: 900,
                    height: 380,
                    opacity: 0.7,
                    title: 'Customer report',
                  }}
                />
              </FullCard>
              <HalfCardContainer>
                <HalfCard>
                  <CardInfoContainer>
                    <CardTitleContainer>
                      <P>
                        <strong>SMS Broadcast Analytics</strong>
                      </P>
                      <DropdownContainer>
                        <P>Last week</P>
                        <DropdownButton>
                          <KeyboardArrowDownOutlinedIcon />
                        </DropdownButton>
                      </DropdownContainer>
                    </CardTitleContainer>
                    <StatsContainer>
                      <StatContainer>
                        <StatTextContainer>
                          <P>Total Messages Sent</P>
                          <P>{messagesSent}</P>
                        </StatTextContainer>
                        <ProgressBarOutline>
                          <ProgressBarLeftBlue />
                        </ProgressBarOutline>
                      </StatContainer>
                      <StatContainer>
                        <StatTextContainer>
                          <P>Number of messages you left</P>
                          <P>{messagesLeft}</P>
                        </StatTextContainer>
                        <ProgressBarOutline>
                          <ProgressBarLeftOrange />
                        </ProgressBarOutline>
                      </StatContainer>
                      <StatContainer>
                        <StatTextContainer>
                          <P>Reply rates</P>
                          <P>{replyRates}</P>
                        </StatTextContainer>
                        <ProgressBarOutline>
                          <ProgressBarLeftGreen />
                        </ProgressBarOutline>
                      </StatContainer>
                    </StatsContainer>
                  </CardInfoContainer>
                </HalfCard>
                <HalfCard>
                  <CardInfoContainer>
                    <CardTitleContainer>
                      <P>
                        <strong>Email Broadcast Analytics</strong>
                      </P>
                      <DropdownContainer>
                        <P>Last week</P>
                        <DropdownButton>
                          <KeyboardArrowDownOutlinedIcon />
                        </DropdownButton>
                      </DropdownContainer>
                    </CardTitleContainer>
                    <StatsContainer>
                      <StatContainer>
                        <StatTextContainer>
                          <P>Total Emails Sent</P>
                          <P>{emailsSent}</P>
                        </StatTextContainer>
                        <ProgressBarOutline>
                          <ProgressBarRightBlue />
                        </ProgressBarOutline>
                      </StatContainer>
                      <StatContainer>
                        <StatTextContainer>
                          <P>Open Rate</P>
                          <P>{openRate}</P>
                        </StatTextContainer>
                        <ProgressBarOutline>
                          <ProgressBarRightOrange />
                        </ProgressBarOutline>
                      </StatContainer>
                      <StatContainer>
                        <StatTextContainer>
                          <P>Clicked Rate</P>
                          <P>{clickedRate}</P>
                        </StatTextContainer>
                        <ProgressBarOutline>
                          <ProgressBarRightGreen />
                        </ProgressBarOutline>
                      </StatContainer>
                    </StatsContainer>
                  </CardInfoContainer>
                </HalfCard>
              </HalfCardContainer>
            </MainLeftContainer>
            <MainRightContainer>
              <HalfCardAltered>
                <CardInfoContainerAlt>
                  <P>
                    <strong>Referrals</strong>
                  </P>
                  <ReferralStatsContainer>
                    <ReferralStatContainer>
                      <ReferralStatValueBlue>236</ReferralStatValueBlue>
                      <P>Active customers</P>
                    </ReferralStatContainer>
                    <ReferralStatContainer>
                      <ReferralStatValueGreen>$5608</ReferralStatValueGreen>
                      <P>Upcoming Payout $</P>
                    </ReferralStatContainer>
                    <ReferralLinkContainer>
                      <P>
                        <strong>
                          Share this referral link to your friends & followers
                        </strong>
                      </P>
                      <ReferralLink
                        type="input"
                        placeholder="https://app.teametrix.com?fpr=james52"
                      />
                    </ReferralLinkContainer>
                  </ReferralStatsContainer>
                </CardInfoContainerAlt>
              </HalfCardAltered>
              <HalfCardStretched>
                <CardInfoContainer>
                  <P>
                    <strong>Contacts</strong>
                  </P>
                </CardInfoContainer>
              </HalfCardStretched>
            </MainRightContainer>
          </DashboardContainer>
        </Main>
      </AppContainer>
    </div>
  );
}

export default App;
