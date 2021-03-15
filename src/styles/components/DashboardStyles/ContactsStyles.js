import styled from 'styled-components';

import { ReferralStatValueBlue } from './ReferralsStyles';
import { P } from '../../GlobalStyles';

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
  margin-bottom: 20px;
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
