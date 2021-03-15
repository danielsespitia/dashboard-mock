import auth from '../../auth';

import CustomerReport from './children/CustomerReport';
import Analytics from './children/Analytics';
import Referrals from './children/Referrals';
import Contacts from './children/Contacts';

import {
  MainTitle,
  DashboardInfoContainer,
  MainLeftContainer,
  MainRightContainer,
} from '../../styles/components/DashboardStyles/DashboardStyles';

function Dashboard() {
  const {
    userStats: {
      messagesSent,
      messagesLeft,
      replyRates,
      emailsSent,
      openRate,
      clickedRate,
    },
    userReferrals: { referralUrl, activeCustomers, upcomingPayout },
    userContacts: { contacts, prospects, customers, teamMembers, inactive },
  } = auth;

  return (
    <>
      <MainTitle>Dashboard</MainTitle>
      <DashboardInfoContainer>
        <MainLeftContainer>
          <CustomerReport />
          <Analytics
            messagesSent={messagesSent}
            messagesLeft={messagesLeft}
            replyRates={replyRates}
            emailsSent={emailsSent}
            openRate={openRate}
            clickedRate={clickedRate}
          />
        </MainLeftContainer>
        <MainRightContainer>
          <Referrals
            referralUrl={referralUrl}
            activeCustomers={activeCustomers}
            upcomingPayout={upcomingPayout}
          />
          <Contacts
            contacts={contacts}
            prospects={prospects}
            customers={customers}
            teamMembers={teamMembers}
            inactive={inactive}
          />
        </MainRightContainer>
      </DashboardInfoContainer>
    </>
  );
}

export default Dashboard;
