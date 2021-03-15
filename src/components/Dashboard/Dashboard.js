import CustomerReport from './children/CustomerReport';
import Analytics from './children/Analytics';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { FaRegCopy } from 'react-icons/fa';

import contacts from '../../assets/contacts/contacts.png';
import prospects from '../../assets/contacts/prospects.png';
import customers from '../../assets/contacts/customers.png';
import teamMembers from '../../assets/contacts/team-members.png';
import inactive from '../../assets/contacts/inactive.png';

import {
  MainTitle,
  DashboardInfoContainer,
  MainLeftContainer,
  MainRightContainer,
  HalfCardAltered,
  CardInfoContainerAlt,
  ReferralStatsContainer,
  ReferralStatContainer,
  ReferralStatValueBlue,
  ReferralStatsText,
  ReferralStatValueGreen,
  ReferralSectionContainer,
  ReferralText,
  ReferralLinkContainer,
  ReferralLink,
  CopyToClipboardButton,
  HalfCardStretched,
  ContactsStatsContainer,
  ContactsStatContainer,
  ContactIconContainer,
  ContactsSingleIcon,
  ContactsTextContainer,
  ContactsValue,
  ContactsText,
  ProspectIconContainer,
  CustomerIconContainer,
  MembersIconContainer,
  InactiveIconContainer,
} from '../../styles/components/DashboardStyles/DashboardStyles';

import { CardInfoContainer, HalfCardTitle } from '../../styles/GlobalStyles';

export const referralUrl = 'https://app.teametrix.com?fpr=james52';

function Dashboard() {
  return (
    <>
      <MainTitle>Dashboard</MainTitle>
      <DashboardInfoContainer>
        <MainLeftContainer>
          <CustomerReport />
          <Analytics />
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
                    <ReferralLink type="input" value={referralUrl} readonly />
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
                    <ContactsSingleIcon src={teamMembers} alt="contacts" />
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
      </DashboardInfoContainer>
    </>
  );
}

export default Dashboard;
