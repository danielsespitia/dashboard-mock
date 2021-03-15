import styled from 'styled-components';

import { H1, H2, P, CardInfoContainer } from '../../GlobalStyles';

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

export const FullCard = styled.div`
  display: inherit;
  justify-content: center;
  border-radius: 9px;
  background-color: white;
  height: 50.8%;
  width: 100%;
  box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
`;

export const CardInfoContainerAlt = styled(CardInfoContainer)`
  margin-top: 18px;
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
  margin-top: 8px;
  width: 100%;
  height: 92px;
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
