import styled from 'styled-components';
import auth from '../../../auth';

import { P } from '../../GlobalStyles';

const {
  messagesSent,
  messagesLeft,
  replyRates,
  emailsSent,
  openRate,
  clickedRate,
} = auth.userStats;

export const AnalyticsContainer = styled.div`
  display: inherit;
  justify-content: space-between;
  margin-top: 20px;
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

export const CardTitleContainer = styled.div`
  display: inherit;
  width: 100%;
  margin-top: 2px;
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

export const StatsText = styled(P)`
  font-weight: 300;
  font-size: 0.85em;
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

export const StatsTextBlueAlt = styled(StatsText)`
  color: #0fb1f6;
  font-weight: 600;
`;

export const StatsTextOrangeAlt = styled(StatsTextBlueAlt)`
  color: #ffb800;
`;

export const StatsTextGreenAlt = styled(StatsTextBlueAlt)`
  color: #1dd250;
`;

export const StatContainerAlt = styled(StatContainer)`
  margin-bottom: 6.8px;
`;

export const TimeWindowText = styled(StatsText)`
  margin-right: 7px;
`;

export const StatTextContainer = styled.div`
  display: inherit;
  justify-content: space-between;
`;

export const StatSecondContainer = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: flex-end;
`;

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
