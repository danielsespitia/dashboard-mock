import { CopyToClipboard } from 'react-copy-to-clipboard';

import { FaRegCopy } from 'react-icons/fa';

import {
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
} from '../../../styles/components/DashboardStyles/ReferralsStyles';

import { HalfCardTitle } from '../../../styles/GlobalStyles';

function Referrals({ referralUrl, activeCustomers, upcomingPayout }) {
  return (
    <HalfCardAltered>
      <CardInfoContainerAlt>
        <HalfCardTitle>Referrals</HalfCardTitle>
        <ReferralStatsContainer>
          <ReferralStatContainer>
            <ReferralStatValueBlue>{activeCustomers}</ReferralStatValueBlue>
            <ReferralStatsText>Active customers</ReferralStatsText>
          </ReferralStatContainer>
          <ReferralStatContainer>
            <ReferralStatValueGreen>${upcomingPayout}</ReferralStatValueGreen>
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
  );
}

export default Referrals;
