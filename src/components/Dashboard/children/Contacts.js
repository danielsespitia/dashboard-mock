import contactsIcon from '../../../assets/contacts/contacts.png';
import prospectsIcon from '../../../assets/contacts/prospects.png';
import customersIcon from '../../../assets/contacts/customers.png';
import teamMembersIcon from '../../../assets/contacts/team-members.png';
import inactiveIcon from '../../../assets/contacts/inactive.png';

import {
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
} from '../../../styles/components/DashboardStyles/ContactsStyles';

import { CardInfoContainer, HalfCardTitle } from '../../../styles/GlobalStyles';

function Contacts({ contacts, prospects, customers, teamMembers, inactive }) {
  return (
    <HalfCardStretched>
      <CardInfoContainer>
        <HalfCardTitle>Contacts</HalfCardTitle>
        <ContactsStatsContainer>
          <ContactsStatContainer>
            <ContactIconContainer>
              <ContactsSingleIcon src={contactsIcon} alt="contacts icon" />
            </ContactIconContainer>
            <ContactsTextContainer>
              <ContactsValue>{contacts}</ContactsValue>
              <ContactsText>Contacts</ContactsText>
            </ContactsTextContainer>
          </ContactsStatContainer>
          <ContactsStatContainer>
            <ProspectIconContainer>
              <ContactsSingleIcon src={prospectsIcon} alt="prospects icon" />
            </ProspectIconContainer>
            <ContactsTextContainer>
              <ContactsValue>{prospects}</ContactsValue>
              <ContactsText>Prospects</ContactsText>
            </ContactsTextContainer>
          </ContactsStatContainer>
          <ContactsStatContainer>
            <CustomerIconContainer>
              <ContactsSingleIcon src={customersIcon} alt="customers icon" />
            </CustomerIconContainer>
            <ContactsTextContainer>
              <ContactsValue>{customers}</ContactsValue>
              <ContactsText>Customers</ContactsText>
            </ContactsTextContainer>
          </ContactsStatContainer>
          <ContactsStatContainer>
            <MembersIconContainer>
              <ContactsSingleIcon
                src={teamMembersIcon}
                alt="team members icon"
              />
            </MembersIconContainer>
            <ContactsTextContainer>
              <ContactsValue>{teamMembers}</ContactsValue>
              <ContactsText>Team Members</ContactsText>
            </ContactsTextContainer>
          </ContactsStatContainer>
          <ContactsStatContainer>
            <InactiveIconContainer>
              <ContactsSingleIcon src={inactiveIcon} alt="inactive icon" />
            </InactiveIconContainer>
            <ContactsTextContainer>
              <ContactsValue>25</ContactsValue>
              <ContactsText>Inactive</ContactsText>
            </ContactsTextContainer>
          </ContactsStatContainer>
        </ContactsStatsContainer>
      </CardInfoContainer>
    </HalfCardStretched>
  );
}

export default Contacts;
