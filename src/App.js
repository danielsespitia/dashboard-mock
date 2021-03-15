import './App.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import Plot from 'react-plotly.js';

import { BsGrid } from 'react-icons/bs';
import { RiContactsBook2Line } from 'react-icons/ri';
import { FiInbox } from 'react-icons/fi';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { AiOutlineFileAdd } from 'react-icons/ai';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import { FaRegCopy } from 'react-icons/fa';

import mainLogo from './assets/logo.png';

import contacts from './assets/contacts/contacts.png';
import prospects from './assets/contacts/prospects.png';
import customers from './assets/contacts/customers.png';
import teamMembers from './assets/contacts/team-members.png';
import inactive from './assets/contacts/inactive.png';

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
  width: 17.3%;
`;

export const Sidebar = styled.div`
  margin-top: 12px;
  border-radius: 8px;
  display: inherit;
  flex-direction: column;
  background-color: white;
  height: 94.4%;
  width: 229px;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const SidebarHeader = styled.header`
  display: inherit;
  width: 100%;
  height: 9%;
`;

export const SidebarAnchorContainer = styled.nav`
  display: inherit;
  flex-direction: column;
  height: 81.4%;
`;

export const SidebarNavAnchor = styled(Link)`
  text-decoration: none;
  background-color: white;
  text-align: left;
  display: inherit;
  color: black;
  align-items: center;
  height: 43px;
  width: 98%;
  font-size: 1.04em;
  border: none;
  border-right: 5px solid white;
  margin-bottom: 15px;
  cursor: pointer;
  &:focus {
    background-color: #def5ff;
    border-right: 5px solid #09aff6;
    color: #0daff5;
    font-weight: 600;
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
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

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

export const UserNameText = styled(P)`
  font-weight: 500;
  margin-bottom: -6px;
  font-size: 1em;
`;

export const CompanyName = styled(P)`
  font-size: 0.9em;
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

export const SearchContainer = styled.div`
  display: inherit;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #ffffff;
  height: 45px;
  width: 29.3vw;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.02);
`;

export const SearchBar = styled.input`
  height: 100%;
  background: url('https://cdn.iconscout.com/icon/free/png-256/search-1768073-1502246.png');
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: 8px 10px;
  padding-left: 33px;
  font-size: 0.97em;
  border: none;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.02);
  outline: none;
  &::placeholder {
    color: #000000;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: inherit;
`;

export const BlueButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #0fb1f6;
  font-size: 0.9em;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  color: white;
  margin-left: 21px;
  box-shadow: 0px 10px 34px 0px rgba(15, 177, 246, 0.31);
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

export const MainTitle = styled(H1)`
  padding: 0;
  margin: 0;
  margin-top: 13px;
  margin-bottom: 20px;
  font-size: 2.1em;
  font-weight: 600;
`;

export const DashboardContainer = styled.div`
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

export const FullCard = styled.div`
  display: inherit;
  justify-content: center;
  border-radius: 9px;
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
  border-radius: 9px;
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
  margin-top: 2px;
  align-items: center;
  justify-content: space-between;
`;

export const HalfCardTitle = styled(H2)`
  font-size: 1.02em;
  font-weight: 550;
`;

export const StatsText = styled(P)`
  font-weight: 300;
  font-size: 0.85em;
`;

export const TimeWindowText = styled(StatsText)`
  margin-right: 7px;
`;

export const StatsTextBlue = styled(StatsText)`
  color: #0fb1f6;
  font-weight: 600;
`;

export const StatsTextOrange = styled(StatsTextBlue)`
  color: #ffb800;
`;

export const StatsTextGreen = styled(StatsTextBlue)`
  color: #1dd250;
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
  border-radius: 9px;
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
  margin-top: 12px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 2px solid #efefef;
`;

export const ReferralStatsText = styled(P)`
  font-size: 0.94em;
  font-weight: 300;
`;

export const ReferralStatValueBlue = styled(P)`
  font-family: 'Montserrat';
  font-size: 1.6em;
  color: #0fb1f6;
  font-weight: 600;
  margin-bottom: -4px;
`;

export const ReferralStatValueGreen = styled(ReferralStatValueBlue)`
  color: #1dd250;
`;

export const ReferralText = styled(P)`
  margin-top: 5px;
  font-size: 0.91em;
  font-weight: 500;
`;

export const ReferralSectionContainer = styled.div`
  display: inherit;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 14px;
  width: 100%;
  height: 93px;
`;

export const ReferralLinkContainer = styled.div`
  display: inherit;
  width: 100%;
  background-color: #f3f1f1;
  border: none;
  border-radius: 8px;
`;

export const CopyToClipboardButton = styled.button`
  border: none;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ReferralLink = styled.input`
  height: 42px;
  width: 87%;
  padding-left: 14px;
  font-size: 0.92em;
  color: grey;
  background-color: #f3f1f1;
  border: none;
  border-radius: 8px;
  outline: none;
`;

export const HalfCardStretched = styled.div`
  display: inherit;
  background-color: white;
  margin-top: 20px;
  height: 53.3%;
  width: 95.9%;
  border-radius: 9px;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const ContactsStatsContainer = styled.div`
  display: inherit;
  flex-direction: column;
  margin-top: 17px;
`;

export const ContactsStatContainer = styled.div`
  display: inherit;
  margin-bottom: 25px;
`;

export const ContactIconContainer = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 20px;
  box-shadow: 0px 10px 14px 3px rgba(15, 177, 246, 0.4);
`;

export const ContactIcon = styled.img`
  height: 100%;
`;

export const ProspectIconContainer = styled(ContactIconContainer)`
  box-shadow: 0px 10px 25px 3px rgba(255, 138, 0, 0.4);
`;

export const CustomerIconContainer = styled(ContactIconContainer)`
  box-shadow: 0px 10px 25px 3px rgba(29, 210, 80, 0.4);
`;

export const MembersIconContainer = styled(ContactIconContainer)`
  box-shadow: 0px 10px 25px 3px rgba(123, 97, 255, 0.4);
`;

export const InactiveIconContainer = styled(ContactIconContainer)`
  box-shadow: 0px 10px 25px 3px rgba(138, 140, 143, 0.4);
`;

export const ContactsTextContainer = styled.div`
  display: inherit;
  margin-left: 28px;
  align-items: flex-start;
  flex-direction: column;
`;

export const ContactsSingleIcon = styled.img`
  border-radius: 10px;
`;

export const ContactsValue = styled(ReferralStatValueBlue)`
  font-size: 1.3em;
  color: black;
`;

export const ContactsText = styled(P)`
  font-size: 0.94em;
  font-weight: 300;
`;

export const marginButton = { marginLeft: '30px', marginRight: '6px' };

export const sidebarIconStyle = { marginLeft: '32px', marginRight: '10px' };

export const thumbnail =
  'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg';

export const referralUrl = 'https://app.teametrix.com?fpr=james52';

function App() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <AppContainer className="App">
        <Router>
          <Aside className="aside">
            <Sidebar className="sidebar">
              <SidebarHeader>
                <LogoContainer>
                  <Logo src={mainLogo} />
                </LogoContainer>
              </SidebarHeader>
              <SidebarAnchorContainer>
                <SidebarNavAnchor exact to="/" className="sidebar-button">
                  <BsGrid size={19} style={sidebarIconStyle} />
                  Dashboard
                </SidebarNavAnchor>
                <SidebarNavAnchor>
                  <RiContactsBook2Line size={19} style={sidebarIconStyle} />
                  Contacts
                </SidebarNavAnchor>
                <SidebarNavAnchor>
                  <FiInbox size={19} style={sidebarIconStyle} />
                  Inbox
                </SidebarNavAnchor>
                <SidebarNavAnchor>
                  <IoMegaphoneOutline size={19} style={sidebarIconStyle} />
                  Broadcast
                </SidebarNavAnchor>
                <SidebarNavAnchor>
                  <AiOutlineUnorderedList size={19} style={sidebarIconStyle} />
                  Lists
                </SidebarNavAnchor>
                <SidebarNavAnchor>
                  <RiMoneyDollarBoxLine size={19} style={sidebarIconStyle} />
                  Referrals
                </SidebarNavAnchor>
              </SidebarAnchorContainer>
              <SidebarUserContainer>
                <ThumbnailContainer>
                  <Thumbnail src={thumbnail} />
                </ThumbnailContainer>
                <UserInfoContainer>
                  <UserNameText>Jacob Jones</UserNameText>
                  <CompanyName>Company Name</CompanyName>
                </UserInfoContainer>
                <DropdownButton>
                  <KeyboardArrowDownOutlinedIcon />
                </DropdownButton>
              </SidebarUserContainer>
            </Sidebar>
          </Aside>
          <Main>
            <Header className="header">
              <SearchContainer>
                <SearchBar type="search" placeholder="Search" />
              </SearchContainer>
              <HeaderButtonContainer>
                <BlueButton
                  style={{ paddingLeft: '10px', paddingRight: '10px' }}
                >
                  <AddCircleOutlineOutlinedIcon />
                </BlueButton>
                <BlueButton
                  style={{ paddingLeft: '15px', paddingRight: '15px' }}
                >
                  <AiOutlineFileAdd size={15} style={{ marginRight: '6px' }} />
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
            <MainTitle>Dashboard</MainTitle>
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
                      autosize: true,
                      width: 900,
                      height: 380,
                      opacity: 0.7,
                      title: {
                        text: '<b>Customer report</b>',
                        font: { family: 'Poppins', size: 15 },
                        x: '0.02',
                        y: '1.1',
                      },
                    }}
                  />
                </FullCard>
                <HalfCardContainer>
                  <HalfCard>
                    <CardInfoContainer>
                      <CardTitleContainer>
                        <HalfCardTitle>SMS Broadcast Analytics</HalfCardTitle>
                        <DropdownContainer>
                          <TimeWindowText>Last week</TimeWindowText>
                          <DropdownButton>
                            <KeyboardArrowDownOutlinedIcon />
                          </DropdownButton>
                        </DropdownContainer>
                      </CardTitleContainer>
                      <StatsContainer>
                        <StatContainer>
                          <StatTextContainer>
                            <StatsText>Total Messages Sent</StatsText>
                            <StatsTextBlue>{messagesSent}</StatsTextBlue>
                          </StatTextContainer>
                          <ProgressBarOutline>
                            <ProgressBarLeftBlue />
                          </ProgressBarOutline>
                        </StatContainer>
                        <StatContainer>
                          <StatTextContainer>
                            <StatsText>Number of messages you left</StatsText>
                            <StatsTextOrange>{messagesLeft}</StatsTextOrange>
                          </StatTextContainer>
                          <ProgressBarOutline>
                            <ProgressBarLeftOrange />
                          </ProgressBarOutline>
                        </StatContainer>
                        <StatContainer>
                          <StatTextContainer>
                            <StatsText>Reply rates</StatsText>
                            <StatsTextGreen>{replyRates}</StatsTextGreen>
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
                        <HalfCardTitle>Email Broadcast Analytics</HalfCardTitle>
                        <DropdownContainer>
                          <TimeWindowText>Last week</TimeWindowText>
                          <DropdownButton>
                            <KeyboardArrowDownOutlinedIcon />
                          </DropdownButton>
                        </DropdownContainer>
                      </CardTitleContainer>
                      <StatsContainer>
                        <StatContainer>
                          <StatTextContainer>
                            <StatsText>Total Emails Sent</StatsText>
                            <StatsTextBlue>{emailsSent}</StatsTextBlue>
                          </StatTextContainer>
                          <ProgressBarOutline>
                            <ProgressBarRightBlue />
                          </ProgressBarOutline>
                        </StatContainer>
                        <StatContainer>
                          <StatTextContainer>
                            <StatsText>Open Rate</StatsText>
                            <StatsTextOrange>{openRate}</StatsTextOrange>
                          </StatTextContainer>
                          <ProgressBarOutline>
                            <ProgressBarRightOrange />
                          </ProgressBarOutline>
                        </StatContainer>
                        <StatContainer>
                          <StatTextContainer>
                            <StatsText>Clicked Rate</StatsText>
                            <StatsTextGreen>{clickedRate}</StatsTextGreen>
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
                    <HalfCardTitle>Referrals</HalfCardTitle>
                    <ReferralStatsContainer>
                      <ReferralStatContainer>
                        <ReferralStatValueBlue>236</ReferralStatValueBlue>
                        <ReferralStatsText>Active customers</ReferralStatsText>
                      </ReferralStatContainer>
                      <ReferralStatContainer>
                        <ReferralStatValueGreen>$5608</ReferralStatValueGreen>
                        <ReferralStatsText>Upcoming Payout $</ReferralStatsText>
                      </ReferralStatContainer>
                      <ReferralSectionContainer>
                        <ReferralText>
                          Share this referral link to your friends & followers
                        </ReferralText>
                        <ReferralLinkContainer>
                          <ReferralLink
                            type="input"
                            value={referralUrl}
                            readonly
                          />
                          <CopyToClipboard text={referralUrl}>
                            <CopyToClipboardButton>
                              <FaRegCopy size={15} />
                            </CopyToClipboardButton>
                          </CopyToClipboard>
                        </ReferralLinkContainer>
                      </ReferralSectionContainer>
                    </ReferralStatsContainer>
                  </CardInfoContainerAlt>
                </HalfCardAltered>
                <HalfCardStretched>
                  <CardInfoContainer>
                    <HalfCardTitle>Contacts</HalfCardTitle>
                    <ContactsStatsContainer>
                      <ContactsStatContainer>
                        <ContactIconContainer>
                          <ContactsSingleIcon src={contacts} alt="contacts" />
                        </ContactIconContainer>
                        <ContactsTextContainer>
                          <ContactsValue>425</ContactsValue>
                          <ContactsText>Contacts</ContactsText>
                        </ContactsTextContainer>
                      </ContactsStatContainer>
                      <ContactsStatContainer>
                        <ProspectIconContainer>
                          <ContactsSingleIcon src={prospects} alt="contacts" />
                        </ProspectIconContainer>
                        <ContactsTextContainer>
                          <ContactsValue>100</ContactsValue>
                          <ContactsText>Prospects</ContactsText>
                        </ContactsTextContainer>
                      </ContactsStatContainer>
                      <ContactsStatContainer>
                        <CustomerIconContainer>
                          <ContactsSingleIcon src={customers} alt="contacts" />
                        </CustomerIconContainer>
                        <ContactsTextContainer>
                          <ContactsValue>250</ContactsValue>
                          <ContactsText>Customers</ContactsText>
                        </ContactsTextContainer>
                      </ContactsStatContainer>
                      <ContactsStatContainer>
                        <MembersIconContainer>
                          <ContactsSingleIcon
                            src={teamMembers}
                            alt="contacts"
                          />
                        </MembersIconContainer>
                        <ContactsTextContainer>
                          <ContactsValue>50</ContactsValue>
                          <ContactsText>Team Members</ContactsText>
                        </ContactsTextContainer>
                      </ContactsStatContainer>
                      <ContactsStatContainer>
                        <InactiveIconContainer>
                          <ContactsSingleIcon src={inactive} alt="contacts" />
                        </InactiveIconContainer>
                        <ContactsTextContainer>
                          <ContactsValue>25</ContactsValue>
                          <ContactsText>Inactive</ContactsText>
                        </ContactsTextContainer>
                      </ContactsStatContainer>
                    </ContactsStatsContainer>
                  </CardInfoContainer>
                </HalfCardStretched>
              </MainRightContainer>
            </DashboardContainer>
          </Main>
        </Router>
      </AppContainer>
    </div>
  );
}

export default App;
