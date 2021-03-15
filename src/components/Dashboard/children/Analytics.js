import auth from '../../../auth';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

import {
  AnalyticsContainer,
  HalfCard,
  CardTitleContainer,
  DropdownContainer,
  StatsContainer,
  StatContainer,
  StatTextContainer,
  StatsText,
  StatsTextBlue,
  ProgressBarOutline,
  ProgressBarLeftBlue,
  StatsTextOrange,
  ProgressBarLeftOrange,
  StatsTextGreen,
  ProgressBarLeftGreen,
  TimeWindowText,
  ProgressBarRightBlue,
  StatContainerAlt,
  StatSecondContainer,
  ProgressBarRightOrange,
  ProgressBarRightGreen,
} from '../../../styles/components/DashboardStyles/AnalyticsStyles';

import {
  CardInfoContainer,
  HalfCardTitle,
  DropdownButton,
} from '../../../styles/GlobalStyles';

function Analytics() {
  const {
    messagesSent,
    messagesLeft,
    replyRates,
    emailsSent,
    openRate,
    clickedRate,
  } = auth.userStats;

  return (
    <AnalyticsContainer>
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
            <StatContainerAlt>
              <StatTextContainer>
                <StatsText>Open Rate</StatsText>
              </StatTextContainer>
              <StatSecondContainer>
                <ProgressBarOutline>
                  <ProgressBarRightOrange />
                </ProgressBarOutline>
                <StatsTextOrange>{openRate}</StatsTextOrange>
              </StatSecondContainer>
            </StatContainerAlt>
            <StatContainerAlt>
              <StatTextContainer>
                <StatsText>Clicked Rate</StatsText>
              </StatTextContainer>
              <StatSecondContainer>
                <ProgressBarOutline>
                  <ProgressBarRightGreen />
                </ProgressBarOutline>
                <StatsTextGreen>{clickedRate}</StatsTextGreen>
              </StatSecondContainer>
            </StatContainerAlt>
          </StatsContainer>
        </CardInfoContainer>
      </HalfCard>
    </AnalyticsContainer>
  );
}

export default Analytics;
