import styled from 'styled-components';
import { CardInfoContainer, P } from '../../GlobalStyles';

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

export const CardInfoContainerAlt = styled(CardInfoContainer)`
  margin-top: 18px;
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
